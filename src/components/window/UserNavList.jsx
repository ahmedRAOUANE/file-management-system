import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { setUser } from '../../store/userSlice';
import { setPath } from '../../store/pathSlice';
import { setError } from '../../store/errorSlice';
import { setContent } from '../../store/contentSlice';
import { setIsLoading } from '../../store/loaderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setwindow } from '../../store/windowSlice';

const UserNavList = () => {
    const user = useSelector(state => state.userSlice.user)

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            dispatch(setIsLoading(true));
            await signOut(auth);
            dispatch(setUser(null));
            dispatch(setContent([]));
            dispatch(setIsOpen(false));
            dispatch(setwindow(""));
            dispatch(setPath({
                name: "root",
                fieldID: "0"
            }));
        } catch (err) {
            dispatch(setError(err))
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    return (
        <ul className="box column full-width">
            <li className="link btn full-width">
                <Link >
                    {user && user.username}
                </Link>
            </li>
            <li className='btn full-width' onClick={handleLogout}>
                logout
            </li>
        </ul>
    )
}

export default UserNavList