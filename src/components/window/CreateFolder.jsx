import { v4 } from "uuid";
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useGenerateFields, useGetField, useUpdateField } from "../../utils/handleActions";
import { setIsOpen, setwindow } from "../../store/windowSlice";
import { setContent } from "../../store/contentSlice";

const CreateFolder = () => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);

    const dispatch = useDispatch();

    const folderNameRef = useRef();

    const generateField = useGenerateFields();
    const updateField = useUpdateField();
    const getfield = useGetField();

    const currentParentIndex = path.length - 1;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const field = {
            collName: "folders",
            fieldName: path[currentParentIndex].name,
            fieldID: path[currentParentIndex].fieldID,
            content: {
                name: folderNameRef.current.value,
                type: "folder",
                fieldID: `${user.uid}_${v4()}`
            }
        }

        // 1 - target the parent to update its children property
        await updateField(user, field);
        // 2 - create the feild
        await generateField(user, field);

        dispatch(setIsOpen(false));
        dispatch(setwindow(""));

        await getfield(user, field, setContent)
    }

    return (
        <>
            <h2 className='full-width'>create folder</h2>

            <form onSubmit={handleSubmit} className='box column full-width ai-start'>
                <input autoFocus ref={folderNameRef} required type="text" name="folder name" id="folderName" placeholder='folder name' />
                <button type='submit' className='primary'>create</button>
            </form>
        </>
    )
}

export default CreateFolder;