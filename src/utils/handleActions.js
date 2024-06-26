import { v4 } from "uuid";
import { useCallback } from "react";
import { db, storage } from "../../firebase";
import { setError } from "../store/errorSlice";
import { setContent } from "../store/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../store/searchSlice";
import { setIsOpen, setwindow } from "../store/windowSlice";
import { setLastVisited, setPath } from "../store/pathSlice";
import { deleteObject, ref, uploadBytes } from "firebase/storage";
import { setIsSelecting, setSelectedFiles } from "../store/selectedSlice";
import { arrayRemove, arrayUnion, deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// custom hook to generate root
export const useGenerateRoot = () => {
    const dispatch = useDispatch();

    const generateRoot = useCallback(async (user) => {
        try {
            const root = {
                fieldID: "0",
                name: "root",
                properties: {
                    createdAt: Date.now(),
                },
                content: [
                    { name: "music", type: "folder", fieldID: `${user.uid}_${v4()}` },
                    { name: "videos", type: "folder", fieldID: `${user.uid}_${v4()}` },
                    { name: "picturs", type: "folder", fieldID: `${user.uid}_${v4()}` },
                    { name: "others", type: "folder", fieldID: `${user.uid}_${v4()}` },
                ]
            }
            // get doc
            const userDocRef = doc(db, "folders", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    [root.fieldID]: root
                })
            }
        } catch (err) {
            console.log('Error generating root!, ', err);
            dispatch(setError(err.message));
        }
    }, [dispatch]);

    return generateRoot;
}

// custom hook to generate other fields
export const useGenerateFields = () => {
    const dispatch = useDispatch();

    const generateFields = useCallback(async (user, field) => {
        try {
            const fieldDocRef = doc(db, field.collName, user.uid);
            const fieldDoc = await getDoc(fieldDocRef);

            if (fieldDoc.exists()) {
                const targetFolder = fieldDoc.data()[field.fieldID];

                if (targetFolder) {
                    const content = targetFolder.content;

                    for (const child of content) {
                        if (!fieldDoc.data()[child.fieldID]) {
                            const newData = {
                                ...child,
                                properties: {
                                    createdAt: Date.now(),
                                    size: 0,
                                    itemsIn: 0
                                },
                                content: [],
                            };

                            // Create a new field in the target folder
                            await updateDoc(fieldDocRef, {
                                [child.fieldID]: newData
                            });
                        }
                    }
                }
            }
        } catch (err) {
            console.log('Error generating fields: ', err);
            dispatch(setError(err.message));
        }

    }, [dispatch])

    return generateFields;
}

// custom hook update field content property
export const useUpdateField = () => {
    const dispatch = useDispatch();
    const updateField = useCallback(async (user, field) => {
        try {
            const fieldDocRef = doc(db, field.collName, user.uid);
            const fieldDocSnap = await getDoc(fieldDocRef);

            if (fieldDocSnap.exists()) {
                const targetField = fieldDocSnap.data()[field.fieldID];

                if (targetField && Array.isArray(targetField.content)) {
                    await updateDoc(fieldDocRef, {
                        [`${field.fieldID}.content`]: arrayUnion(field.content)
                    })
                }
            }
        } catch (err) {
            console.log('Error updating content prop!', (err));
            dispatch(setError(err.message))
        }
    }, [dispatch]);

    return updateField;
}

// custom hook to open file/folder
export const useOpenFileOrFolder = () => {
    const path = useSelector(state => state.pathSlice.path);

    const dispatch = useDispatch();

    const closeWindow = useHandleWindow();

    const openFileOrFolder = async (file) => {
        if (file.type === "folder") {
            dispatch(setPath([...path, file]));
            dispatch(setLastVisited(file));
            dispatch(setSelectedFiles([]));
            dispatch(setIsSelecting(false));
            closeWindow(false, "");
        }
        else if (file.type === "file") {
            window.open(file.url, "_blank");
        }
    }

    return openFileOrFolder
}

// custom hook to get fields or create on if not exist 
export const useGetField = () => {
    const path = useSelector(state => state.pathSlice.path);
    const dispatch = useDispatch();

    const getField = useCallback(async (user, field, action) => {
        if (path.length === 0) return;

        try {
            const fieldDocRef = doc(db, field.collName, user.uid);
            const fieldDoc = await getDoc(fieldDocRef);

            if (fieldDoc.exists()) {
                const target = fieldDoc.data()[field.fieldID];

                if (target.fieldID === field.fieldID) {
                    dispatch(action(target));
                }
            }
        } catch (err) {
            console.log('Error getting field: ', err);
            dispatch(setError(err.message));
        }
    }, [dispatch, path.length])

    return getField;
}

// custom hook to delete field
export const useHandleDelete = () => {
    const user = useSelector(state => state.userSlice.user);

    const deleteFromFirestore = async (fileList, parentFieldID) => {
        const fieldDocRef = doc(db, "folders", user.uid);
        const fieldDocSnap = await getDoc(fieldDocRef);

        if (fieldDocSnap.exists()) {
            const parent = fieldDocSnap.data()[parentFieldID];

            for (const file of fileList) {

                // Remove file from parent's content array
                await updateDoc(fieldDocRef, {
                    [`${parent.fieldID}.content`]: arrayRemove(file)
                });

                // Delete the file's document
                await updateDoc(fieldDocRef, {
                    [file.fieldID]: deleteField()
                });

                if (file.type === "file") {
                    const fileRef = ref(storage, file.url)
                    deleteObject(fileRef);
                }
            }
        }
    };

    return deleteFromFirestore;
}

// custom hook to update file content 
export const useUpdateFileContent = () => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);

    const dispatch = useDispatch();

    const getField = useGetField();
    const closeWindow = useHandleWindow();

    const currentParentIndex = path.length - 1;

    const getFileContent = async (file) => {

        try {
            const response = await fetch(file.url);
            return await response.text();
        } catch (err) {
            console.log('Error getting file content! ', err);
            dispatch(setError(err));
        }
    }

    const updateFileContent = async (file, newContent) => {
        const field = {
            collName: "folders",
            fieldName: path[currentParentIndex].name,
            fieldID: path[currentParentIndex].fieldID
        }

        try {
            const fileRef = ref(storage, file.url);
            const fileBlob = new Blob([newContent], { type: file.type });

            await uploadBytes(fileRef, fileBlob);

            await getField(user, field, setContent);

            closeWindow(false, "");
            // console.log('file blob: ', fileBlob);
        } catch (err) {
            console.log('Error updating file content: ', err);
            dispatch(setError(err));
        }
    }

    return { getFileContent, updateFileContent }
}

// custom hook to change name property
export const useChangeName = () => {
    const user = useSelector(state => state.userSlice.user);
    const dispatch = useDispatch();

    const changeName = async (field, parentFieldID, newName) => {
        if (!field) {
            console.log('invalid vield: ', field);
            return;
        }

        try {
            const fieldDocRef = doc(db, "folders", user.uid);
            const fieldDocSnap = await getDoc(fieldDocRef);

            if (fieldDocSnap.exists()) {
                const parent = fieldDocSnap.data()[parentFieldID];

                const updatedContent = parent.content.map((item) =>
                    item.fieldID === field.fieldID ? { ...item, name: newName } : item
                );

                await updateDoc(fieldDocRef, {
                    [`${parentFieldID}.content`]: updatedContent,
                    [`${field.fieldID}.name`]: newName,
                });
            }
        } catch (err) {
            console.log('Error updating file name: ', err);
            dispatch(setError(err.message));
        }
    }

    return changeName;
} 

// custom hook to search files/folders
export const useHandleSearch = () => {
    const user = useSelector(state => state.userSlice.user);

    const dispatch = useDispatch();

    const searchFealds = useCallback(async (searchQuery) => {
        if (!searchQuery) {
            dispatch(setSearchResults([]));
            return;
        }

        try {
            const userDocRef = doc(db, "folders", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const allDocs = userDocSnap.data();
                const allFiles = allDocs ? Object.values(allDocs) : [];
                const filteredFiles = allFiles.filter(res => res.name.toLowerCase().includes(searchQuery.toLowerCase()))

                dispatch(setSearchResults(filteredFiles));
            }

        } catch (err) {
            console.log('error searching folders: ', err);
            dispatch(setError(err.message));
        }
    }, [dispatch, user.uid]);

    return searchFealds;
}

// custome hook to handle window
export const useHandleWindow = () => {
    const dispatch = useDispatch();

    const handleWindow = (isOpen, window) => {
        dispatch(setIsOpen(isOpen))
        dispatch(setwindow(window))
    }

    return handleWindow;
}
