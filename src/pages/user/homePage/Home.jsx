import { useEffect, useMemo } from "react";
import Icon from "../../../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../store/contentSlice";
import { useGetField, useOpenFileOrFolder } from "../../../utils/handleActions";
import { setIsSelecting, setSelectedFiles } from "../../../store/selectedSlice";

// style
import style from "../../../style/home.module.css";

const Home = () => {
    const user = useSelector(state => state.userSlice.user);
    const content = useSelector(state => state.contentSlice.content);
    const path = useSelector(state => state.pathSlice.path);
    const error = useSelector(state => state.errorSlice.error);
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles)
    const isSelecting = useSelector(state => state.selectedSlice.isSelecting)

    const currentFolderIndex = path.length - 1;

    const dispatch = useDispatch();

    const getfield = useGetField();
    const openFolder = useOpenFileOrFolder();

    const folders = content.content ? content.content : [];

    // ---- for the sidebar feature ---- //
    // const foldersList = folders.length !== 0 ? [{ name: "root", id: "0" }, ...folders] : [];
    // const sidebarListRef = useRef([]);
    // if (foldersList.length !== 0) {
    //     sidebarListRef.current = foldersList;
    // }

    const field = useMemo(() => {
        if (path[currentFolderIndex]) {
            return {
                collName: "folders",
                fieldName: path[currentFolderIndex].name,
                fieldID: path[currentFolderIndex].fieldID,
                path: path.map(ele => ele.name)
            }
        }
        return null;
    }, [path, currentFolderIndex]);

    // listen to the path array changes
    useEffect(() => {
        if (field && user) {
            const fetchData = async () => {
                await getfield(user, field, setContent);
            }

            fetchData();
        }
    }, [user, getfield, field])

    // ---- for the sidebar feature --- //
    // const openFolderFromSidebar = (file) => {
    //     dispatch(setPath([{ name: "root", id: "0" }, file]));
    // }

    const selectFile = (file) => {
        const isSelected = selectedFiles.some(selected => selected.fieldID === file.fieldID);

        const updatedSelectedFiles = isSelected
            ? selectedFiles.filter(selected => selected.fieldID !== file.fieldID)
            : [...selectedFiles, file];

        dispatch(setSelectedFiles(updatedSelectedFiles));
        dispatch(setIsSelecting(true));

        if (updatedSelectedFiles.length > 0) {
            dispatch(setIsSelecting(true));
        } else {
            dispatch(setIsSelecting(false));
        }
    }

    return (
        <div className={`${style.container} full-p column box`}>
            {error
                ? (
                    <>
                        <p>something went wrong!, try again..</p>
                    </>
                )
                : (
                    <div className={`${style.folderContainer} box full-width ai-start`}>

                        {/*
                            <div className="navbar hide-in-small" style={{ width: "20%" }}>
                                <ul className="box column full-width">
                                    {sidebarListRef.current.map((ele, idx) => (
                                        <li onClick={() => openFolderFromSidebar(ele)} className="btn full-width" key={idx}>
                                            {ele.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         */}

                        <main className="box jc-start full-width">
                            {folders.length > 0 ? folders.map((file, idx) => (
                                <div onClick={() => openFolder(file)} key={idx} style={{ width: "80px", height: "130px", position: "relative" }} className="icon btn column box">
                                    {file.type === "folder" ? <Icon name={"folder"} /> : <Icon name={"file"} />}
                                    <span style={{ width: "100%", overflow: "hidden", flex: "1", padding: "0 10px" }}>
                                        {file.name}
                                    </span>
                                    <input
                                        checked={selectedFiles.some(selected => selected.fieldID === file.fieldID)}
                                        onChange={() => selectFile(file)}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`btn icon ${isSelecting ? "" : "hidden"}`}
                                        type="checkbox" name="checbox"
                                    />
                                </div>
                            )) : (
                                <p>this folder is empty</p>
                            )}
                        </main>
                    </div>
                )}
        </div>
    )
}

export default Home