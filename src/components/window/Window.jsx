import { useSelector } from "react-redux";
import { useHandleWindow } from "../../utils/handleActions";

import style from "../../style/window.module.css";

// components
import Rename from "./Rename";
import Search from "./Search";
import EditFile from "./EditFile";
import Properties from "./Properties";
import CreateFile from "./CreateFile";
import UserNavList from "./UserNavList";
import MoreOptions from "./MoreOptions";
import CreateFolder from "./CreateFolder";
import HeaderActions from "./HeaderActions";

const WindowContent = () => {
    const window = useSelector(state => state.windowSlice.window);

    switch (window) {
        case "userNav":
            return (<UserNavList />)
        case "createFolder":
            return <CreateFolder />
        case "createFile":
            return <CreateFile />
        case "navList":
            return <HeaderActions className={"box column full-width"} />
        case "moreOptions":
            return <MoreOptions />
        case "properties":
            return <Properties />
        case "rename":
            return <Rename />
        case "editFile":
            return <EditFile />
        case "search":
            return <Search />
        default:
            return null
    }
}

const Window = () => {
    const isOpen = useSelector(state => state.windowSlice.isOpen);
    const window = useSelector(state => state.windowSlice.window);

    const closeWindow = useHandleWindow();

    const containerClass = `${window}Container`;

    return isOpen && (
        <div className={`${style.overlay} ${style[containerClass]} full-width box center-x center-y`} onClick={() => closeWindow(false, "")}>
            <div className={`${style.body} ${style[window]} box column paper`} onClick={e => e.stopPropagation()}>
                <WindowContent />
            </div>
        </div>
    )
}

export default Window;