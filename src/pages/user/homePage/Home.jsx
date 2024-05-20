import Icon from "../../../components/Icon";
import { setPath } from "../../../store/pathSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../../store/contentSlice";
import { useGetField } from "../../../utils/useHandleFields";
import { setIsOpen, setwindow } from "../../../store/windowSlice";

// style
import style from "../../../style/home.module.css";
import HeaderActions from "../../../components/window/HeaderActions";

const Home = () => {
    const user = useSelector(state => state.userSlice.user);
    const content = useSelector(state => state.contentSlice.content);
    const path = useSelector(state => state.pathSlice.path);

    const [lastVisited, setLastVisited] = useState("");
    const currentFolderIndex = path.length - 1;

    const dispatch = useDispatch();

    const getfield = useGetField();

    const folders = content.children ? content.children : [];

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
            }
        }
        return null;
    }, [path, currentFolderIndex]);

    const openWindow = (window) => {
        dispatch(setIsOpen(true));
        dispatch(setwindow(window));
    }

    const changePlaceholder = (e) => {
        const parent = e.target.parentNode;
        e.target.placeholder = "type path or file name";
        parent.classList.remove(style.shrink);
        parent.classList.add(style.grow);
        parent.classList.remove("no-shadow");
    }

    const restorePlaceholder = (e) => {
        const parent = e.target.parentNode;
        e.target.placeholder = "";
        parent.classList.add(style.shrink);
        parent.classList.remove(style.grow);
        parent.classList.add("no-shadow");
    }

    // listen to the path array changes
    useEffect(() => {
        if (field && user) {
            const fetchData = async () => {
                await getfield(user, field, setContent);
            }

            fetchData();
        }
    }, [user, getfield, field])

    const openFolder = (file) => {
        dispatch(setPath([...path, file]));
        setLastVisited(file);
    }

    const handleNavigate = (fileIndex) => {
        if (path.length === 0) return;
        dispatch(setPath(path.slice(0, fileIndex + 1)));

        // second case
        // search folders && update path
    }

    const backward = async () => {
        path.length > 1 && dispatch(setPath(path.slice(0, path.length - 1)));

        getfield(user, field, setContent);
    }

    const forward = () => {
        getfield(user, field, setContent);

        if (lastVisited !== "" && !path.some(item => item.name === lastVisited.name)) {
            dispatch(setPath([...path, lastVisited]));
        }
    }

    // ---- for the sidebar feature --- //
    // const openFolderFromSidebar = (file) => {
    //     dispatch(setPath([{ name: "root", id: "0" }, file]));
    // }

    return (
        <div className={`${style.container} full-p column box`}>
            <div className={`${style.header} box full-width nowrap`}>
                <div className="box hide-in-small">
                    <button className="icon" onClick={backward}><Icon name={"backward"} /></button>
                    <button className="icon" onClick={forward}><Icon name="forward" /></button>
                </div>
                <div className={`${style.navURL} grow box jc-start paper no-shadow nowrap`}>
                    <div className={`box ${style.pathContainer}`}>
                        {path && path.map((path, idx) => (
                            <span onClick={() => handleNavigate(idx)} className="btn icon" key={idx}>{path.name}/</span>
                        ))}
                    </div>
                    <input type="text" onFocus={changePlaceholder} onBlur={restorePlaceholder} />
                </div>

                <HeaderActions className={`${style.actions} box hide-in-small`} />

                <button className="hide-in-large icon" onClick={() => openWindow("navList")}>
                    <Icon name={"plus"} />
                </button>
            </div>

            <div className={`${style.flderContainer} box full-width ai-start`}>
                {/* <div className="navbar hide-in-small" style={{ width: "20%" }}>
                    <ul className="box column full-width">
                        {sidebarListRef.current.map((ele, idx) => (
                            <li onClick={() => openFolderFromSidebar(ele)} className="btn full-width" key={idx}>
                                {ele.name}
                            </li>
                        ))}
                    </ul>
                </div> */}
                <main className="box jc-start full-width">
                    {folders.length > 0 ? folders.map((file, idx) => (
                        <div onClick={() => openFolder(file)} key={idx} style={{ width: "80px", height: "130px" }} className="icon btn column box">
                            {file.type === "folder" ? <Icon name={"folder"} /> : <Icon name={"file"} />}
                            <span style={{ width: "100%", overflow: "hidden", flex: "1", padding: "0 10px" }}>{file.name}</span>
                        </div>
                    )) : (
                        <p>this folder is empty</p>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Home