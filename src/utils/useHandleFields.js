import { v4 } from "uuid";
import { useCallback } from "react";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { setError } from "../store/errorSlice";

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
