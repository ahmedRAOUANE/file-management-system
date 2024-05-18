import { useDispatch, useSelector } from "react-redux";

import style from "../style/window.module.css"
import { setIsOpen, setwindow } from "../store/windowSlice";
import UserNavList from "./UserNavList";
import CreateFolder from "./CreateFolder";
import CreateFile from "./CreateFile";

const Window = () => {
    const isOpen = useSelector(state => state.windowSlice.isOpen);
    const window = useSelector(state => state.windowSlice.window);

    const dispatch = useDispatch();

    const containerClass = `${window}Container`

    const closeWindow = () => {
        dispatch(setIsOpen(false))
        dispatch(setwindow(null))
    }

    return isOpen && (
        <div className={`${style.overlay} ${style[containerClass]} full-width box center-x center-y`} onClick={closeWindow}>
            <div className={`${style.body} ${style[window]} box column paper`} onClick={e => e.stopPropagation()}>
                {window === "userNav" && (
                    <UserNavList />
                )}
                {window === "createFolder" && (
                    <CreateFolder />
                )}
                {window === "createFile" && (
                    <CreateFile />
                )}
            </div>
        </div>
    )
}

export default Window;