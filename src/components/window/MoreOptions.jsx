import { useHandleWindow } from "../../utils/handleActions";
import HeaderActions from "./HeaderActions";

const MoreOptions = () => {
    const openPropertiesWindow = useHandleWindow();

    return (
        <ul className="box column full-width">
            <li className="link btn full-width">
                open
            </li>
            <HeaderActions className={`box column full-width text-start hide-in-large`} />
            <li className='btn full-width' onClick={() => openPropertiesWindow(true, "properties")}>
                properties
            </li>
        </ul>
    )
}

export default MoreOptions