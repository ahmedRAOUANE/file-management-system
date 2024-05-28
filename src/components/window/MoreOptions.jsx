/* eslint-disable react/prop-types */
import HeaderActions from "./HeaderActions";
import { setContent } from "../../store/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsSelecting } from "../../store/selectedSlice";
import { useHandleWindow } from "../../utils/handleActions";
import { useGetField, useHandleDelete } from "../../utils/handleActions";

const OneSelectedFileList = () => {
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);

    const openWindow = useHandleWindow()

    return (
        <>
            <li className="link btn full-width">
                open
            </li>
            {selectedFiles[0].type === "file" && (
                <li className="link btn full-width">
                    Edite
                </li>
            )}
            <li onClick={() => openWindow(true, "rename")} className="link btn full-width">
                rename
            </li>
            <Delete fileList={selectedFiles} />
        </>
    )
}

// const MoreTHanOneSelectedFileList = () => {
//     const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);

//     return (
//         <>
//             <Delete  />
//         </>
//     )
// }

const Select = () => {
    const dispatch = useDispatch();
    const closeWindow = useHandleWindow();

    const changeSelectState = () => {
        dispatch(setIsSelecting(true));
        closeWindow(false, "");
    }

    return (
        <li className="link btn full-width" onClick={changeSelectState}>
            select
        </li>
    )
}

const Delete = ({ fileList }) => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);

    const currentFolderIndex = path.length - 1;
    const currentParentFieldID = path[currentFolderIndex].fieldID;

    const deleteContent = useHandleDelete();
    const getfield = useGetField();
    const closeWindow = useHandleWindow();

    const handleDelete = async (fileList, parentID) => {
        const field = {
            collName: "folders",
            fieldID: currentParentFieldID,
        }

        await deleteContent(fileList, parentID);
        await getfield(user, field, setContent);
        closeWindow(false, "");
    }

    return (
        <li className="link btn full-width" onClick={() => handleDelete(fileList, currentParentFieldID)}>delete</li>
    )
}

const MoreOptions = () => {
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);
    const isSelecting = useSelector(state => state.selectedSlice.isSelecting);

    const openPropertiesWindow = useHandleWindow();

    return (
        <ul className="box column full-width">
            <HeaderActions className={`box column full-width text-start hide-in-large`} />
            {selectedFiles.length === 0 && isSelecting === false ? <Select /> : null}
            {selectedFiles.length === 1 && <OneSelectedFileList />}
            {selectedFiles.length > 1 && <Delete fileList={selectedFiles} />}
            <li className='btn full-width' onClick={() => openPropertiesWindow(true, "properties")}>
                properties
            </li>
        </ul>
    )
}

export default MoreOptions