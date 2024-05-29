import { v4 } from "uuid";
import { useCallback } from "react";
import { db, storage } from "../../firebase";
import { setError } from "../store/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, setwindow } from "../store/windowSlice";
import { arrayRemove, arrayUnion, deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { setLastVisited, setPath } from "../store/pathSlice";
import { setIsSelecting, setSelectedFiles } from "../store/selectedSlice";

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
            dispatch(setError(err))
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
            dispatch(setError(err));
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
            dispatch(setError(err))
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
            dispatch(setError(err));
        }
    }, [dispatch, path.length])

    return getField;
}

// custom hook to delete field
export const useHandleDelete = () => {
    const user = useSelector(state => state.userSlice.user);

    // const getField = useGetField();

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

            // await getField(user, )
        }
    };

    return deleteFromFirestore;
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

                // change name in parent
                // await updateDoc(fieldDocRef, {
                //     [`${parentFieldID.content[field.fieldID]}.name`]: newName
                // })

                // change name in the file/folder
                // await updateDoc(fieldDocRef, {
                //     [`${field.fieldID}.name`]: newName
                // })
            }
        } catch (err) {
            console.log('Error updating file name: ', err);
            dispatch(setError(err));
        }
    }

    return changeName;
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
