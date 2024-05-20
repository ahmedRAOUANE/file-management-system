import { v4 } from "uuid";
import { useCallback } from "react";
import { db } from "../../firebase";
import { setContent } from "../store/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { setError } from "../store/errorSlice";

// custom hook to generate root
export const useGenerateRoot = () => {
    const dispatch = useDispatch();

    const generateRoot = useCallback(async (user) => {
        try {
            const root = {
                collName: "folders",
                fieldName: "root",
                fieldID: 0,
                content: {
                    fieldID: 0,
                    name: "root",
                    properties: {
                        createdAt: Date.now(),
                    },
                    parent: "",
                    children: [
                        { name: "music", type: "folder", fieldID: `${user.uid}_${v4()}` },
                        { name: "videos", type: "folder", fieldID: `${user.uid}_${v4()}` },
                        { name: "picturs", type: "folder", fieldID: `${user.uid}_${v4()}` },
                        { name: "others", type: "folder", fieldID: `${user.uid}_${v4()}` },
                    ]
                }
            }
            // get doc
            const userDocRef = doc(db, "folders", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    root: root.content
                })
            } else {
                // chec if root field exists and create one if not exist
                if (userDoc.data().root) {
                    dispatch(setContent(userDoc.data().root))
                } else {
                    await updateDoc(userDocRef, {
                        root: root.content
                    })
                }
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
                const targetFolder = fieldDoc.data()[field.fieldName];
                const children = targetFolder.children;

                for (const child of children) {
                    const newData = {
                        ...child,
                        properties: {
                            createdAt: Date.now(),
                            size: 0,
                            itemsIn: 0
                        },
                        children: []
                    };

                    // Create a new field in the target folder
                    await updateDoc(fieldDocRef, {
                        [child.name]: newData
                    });
                }
            }
        } catch (err) {
            console.log('Error generating fields: ', err);
            dispatch(setError(err));
        }

    }, [dispatch])

    return generateFields;
}

// custom hook update field children property
export const useUpdateField = () => {
    const dispatch = useDispatch();
    const updateField = useCallback(async (user, field) => {
        try {
            const fieldDocRef = doc(db, field.collName, user.uid);
            const fieldDocSnap = await getDoc(fieldDocRef);

            if (fieldDocSnap.exists()) {
                const targetField = fieldDocSnap.data()[field.fieldName];

                if (targetField && Array.isArray(targetField.children)) {

                    await updateDoc(fieldDocRef, {
                        [`${field.fieldName}.children`]: arrayUnion(field.content)
                    })
                }
            }
        } catch (err) {
            console.log('Error updating children prop!', (err));
            dispatch(setError(err))
        }
    }, [dispatch]);

    return updateField
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
                const target = fieldDoc.data()[field.fieldName];

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
