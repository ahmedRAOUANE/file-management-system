import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useChangeName, useGetField, useHandleWindow } from '../../utils/handleActions';
import { setContent } from '../../store/contentSlice';

const Rename = () => {
    const user = useSelector(state => state.userSlice.user);
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);
    const path = useSelector(state => state.pathSlice.path);

    const newNameRef = useRef();

    const target = selectedFiles[0];
    const currentFolderIndex = path.length - 1;
    const currentParentFieldID = path[currentFolderIndex].fieldID;

    const closeWindow = useHandleWindow();
    const changeName = useChangeName();
    const getfield = useGetField();

    const handleSubmit = (e) => {
        e.preventDefault()

        handleRename(target);
    }

    const handleRename = async (file) => {
        const newName = newNameRef.current.value;

        const field = {
            collName: "folders",
            fieldID: currentParentFieldID
        }

        await changeName(file, currentParentFieldID, newName);
        await getfield(user, field, setContent);

        closeWindow(false, "");
    }

    return (
        <>
            <h2 className='full-width'>{`rename ${target.name} ${target.type}`}</h2>

            <form onSubmit={handleSubmit} className='box column full-width ai-start'>
                <input defaultValue={target.name} autoFocus ref={newNameRef} required type="text" name="new name" id="folderName" placeholder='folder name' />
                <button type='submit' className='primary'>create</button>
            </form>
        </>
    )
}

export default Rename