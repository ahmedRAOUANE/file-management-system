import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setError } from '../store/errorSlice';
import { setIsLoading } from '../store/loaderSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { setUser } from '../store/userSlice';

const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            dispatch(setIsLoading(true));
            await signOut(auth);
            dispatch(setUser(null))
        } catch (err) {
            dispatch(setError(err))
        } finally {
            dispatch(setIsLoading(false))
        }
    }


    return (
        <header>
            <div className="box">
                <h2>file management system</h2>
                <nav className="box">
                    <ul className="box">
                        <li className="link btn">
                            <Link >link</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header