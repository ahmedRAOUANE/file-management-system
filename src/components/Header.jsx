import { useHandleWindow } from '../utils/handleActions';

import Avatar from './Avatar';

const Header = () => {
    const openWindow = useHandleWindow();

    return (
        <header>
            <div className="box">
                <h2>FMS</h2>
                <button className="box icon" onClick={() => openWindow(true, "userNav")}>
                    <Avatar />
                </button>
            </div>
        </header>
    )
}

export default Header