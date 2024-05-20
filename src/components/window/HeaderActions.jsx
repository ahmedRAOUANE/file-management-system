/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setIsOpen, setwindow } from "../../store/windowSlice";

const HeaderActions = ({ className }) => {
    const dispatch = useDispatch();

    const openWindow = (window) => {
        dispatch(setIsOpen(true));
        dispatch(setwindow(window));
    }

    return (
        <div className={className}>
            <button className="full-width" onClick={() => openWindow("createFolder")}>create folder</button>
            <button className="full-width" onClick={() => openWindow("createFile")}>create file</button>
        </div>
    )
}

export default HeaderActions