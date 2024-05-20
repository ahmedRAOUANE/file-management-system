import { v4 } from "uuid";
import { useRef } from "react"
import { useSelector } from "react-redux";
// import { useGenerateFields } from "../../utils/useHandleFields"

const CreateFolder = () => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);

    const folderNameRef = useRef();
    // const generateField = useGenerateFields();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const field = {
            collName: "folders",
            fieldName: path[path.length - 1].name,
            fieldID: path[path.length - 1].id,
            content: {
                namme: folderNameRef.current.value,
                type: "folder",
                folderID: `${user.uid}_${v4()}`
            }
        }

        console.log("fieldL: ", field);
    }

    return (
        <>
            <h2 className='full-width'>create folder</h2>

            <form onSubmit={handleSubmit} className='box column full-width ai-start'>
                <input ref={folderNameRef} required type="text" name="folder name" id="folderName" placeholder='folder name' />
                <button type='submit' className='primary'>create</button>
            </form>
        </>
    )
}

export default CreateFolder;