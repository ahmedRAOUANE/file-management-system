/* eslint-disable react/prop-types */
import { useHandleWindow } from "../../utils/handleActions";

const HeaderActions = ({ className }) => {
    const openWindow = useHandleWindow();

    return (
        <ul className={className}>
            <li className="btn full-width" onClick={() => openWindow(true, "createFolder")}>create folder</li>
            <li className="btn full-width" onClick={() => openWindow(true, "createFile")}>create file</li>
        </ul>
    )
}

export default HeaderActions