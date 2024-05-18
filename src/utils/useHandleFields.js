import { v4 } from "uuid";
import { useCallback } from "react";
import { db } from "../../firebase";
import { setContent } from "../store/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// custom hook to generate root
export const useGenerateRoot = () => {
    const dispatch = useDispatch();

    const generateRoot = useCallback(async (user) => {
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
    }, [dispatch]);

    return generateRoot;
}

// custom hook to generate other fields
export const useGenerateFields = () => {

    const generateFields = useCallback(async (user, field) => {
        // --- first case --- //
        // get target folder
        // generate fields from it children 

        // --- second case --- //
        // create the folder in target folder
        // generate field

        // --- first case --- //
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

    }, [])

    return generateFields;
}

// custom hook to get fields or create on if not exist 
export const useGetField = () => {
    const path = useSelector(state => state.pathSlice.path);
    const dispatch = useDispatch();

    const getField = useCallback(async (user, field, action) => {
        if (path.length === 0) return;

        const fieldDocRef = doc(db, field.collName, user.uid);
        const fieldDoc = await getDoc(fieldDocRef);

        if (fieldDoc.exists()) {
            const target = fieldDoc.data()[field.fieldName];

            if (target.fieldID === field.fieldID) {
                dispatch(action(target));
            }
        }
    }, [dispatch, path.length])

    return getField;
}
