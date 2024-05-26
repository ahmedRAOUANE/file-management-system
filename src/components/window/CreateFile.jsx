import { v4 } from "uuid";
import { useRef } from "react";
import { setError } from "../../store/errorSlice";
import { setContent } from "../../store/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { useGenerateFields, useGetField, useHandleWindow, useUpdateField } from "../../utils/handleActions";

const CreateFile = () => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);

    const dispatch = useDispatch();

    const createdFileRef = useRef();
    const createdFielContentRef = useRef();

    const uploadedFileRef = useRef();

    const generateField = useGenerateFields();
    const closeWindow = useHandleWindow();
    const updateField = useUpdateField();
    const getfield = useGetField();

    const currentParentIndex = path.length - 1;

    const createFile = async (e) => {
        e.preventDefault();

        const fileName = createdFileRef.current.value;
        const fileContent = createdFielContentRef.current.value;

        const extension = `text/${fileName.split('.').pop()}`;

        const fileBlob = new Blob([fileContent], { type: extension });
        const fileSize = fileBlob.size;

        const metaData = {
            name: fileName,
            contentType: extension,
            type: extension,
            size: fileSize
        }

        const storage = getStorage();
        const storageRef = ref(storage, `files/${user.uid}/${v4()}_${fileName}`);

        try {
            const snapshot = await uploadString(storageRef, fileContent, "raw", metaData);
            const downloadURL = await getDownloadURL(snapshot.ref);

            await createFileDoc(metaData, downloadURL);

            closeWindow();
        } catch (err) {
            console.log("Error creating file: ", err);
            dispatch(setError(err))
        }
    }

    const uploadFile = async () => {
        const files = uploadedFileRef.current.files;
        for (const file of files) {
            const storage = getStorage();
            const storageRef = ref(storage, `files/${user.uid}/${v4()}_${file.name}`);

            try {
                const snapshot = await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);

                createFileDoc(file, downloadURL);
                closeWindow(false, "");
            } catch (err) {
                console.log('Error uploading file: ', err);
                dispatch(setError(err));
            }
        }
    }

    const createFileDoc = async (file, downloadURL) => {
        const target = {
            collName: "folders",
            fieldName: path[currentParentIndex].name,
            fieldID: path[currentParentIndex].fieldID
        }

        const childData = {
            ...target,
            content: {
                fieldID: `${user.uid}_${v4()}`,
                name: file.name,
                url: downloadURL,
                type: "file"
            }
        }

        const field = {
            ...target,
            content: {
                ...childData,
                extension: file.name.split('.').pop(),
                type: "file",
                properties: {
                    size: file.size,
                    createdAt: Date.now(),
                    type: file.type,
                }
            }
        }

        // update files field
        await updateField(user, childData);

        await generateField(user, field);

        await getfield(user, field, setContent);
    }

    return (
        <>
            <h2 className='full-width'>create file</h2>

            <form onSubmit={createFile} className='box column full-width ai-start'>
                <input ref={createdFileRef} required type="text" name="folder name" id="folderName" placeholder='folder name' />
                <textarea ref={createdFielContentRef} name="content" id="content" placeholder="content here" className="full-width"></textarea>
                <div className="box full-width">
                    <button type='button' className='secodary box'>
                        <label htmlFor="file">upload file</label>
                        <input onChange={uploadFile} ref={uploadedFileRef} type="file" name="file" id="file" multiple className="hidden" />
                    </button>
                    <button type='submit' className='primary'>create</button>
                </div>
            </form>
        </>
    )
}

export default CreateFile