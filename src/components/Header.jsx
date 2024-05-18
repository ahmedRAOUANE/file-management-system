import { useDispatch } from 'react-redux';
import Avatar from './Avatar';
import { setIsOpen, setwindow } from '../store/windowSlice';

const Header = () => {
    const dispatch = useDispatch();
    const openWindow = () => {
        dispatch(setIsOpen(true))
        dispatch(setwindow("userNav"))
    }
    return (
        <header>
            <div className="box">
                <h2>FMS</h2>
                <button className="box icon" onClick={openWindow}>
                    <Avatar />
                </button>
            </div>
        </header>
    )
}

export default Header