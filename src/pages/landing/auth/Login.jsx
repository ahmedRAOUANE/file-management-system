import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../../store/errorSlice";
import { setIsLoading } from "../../../store/loaderSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

const Login = () => {
    const error = useSelector(state => state.errorSlice.error);

    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            dispatch(setIsLoading(true));
            await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then(
                    () => {
                        dispatch(setError(null));
                    }
                )
        } catch (err) {
            dispatch(setError(err))
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    const hideErrorMessage = () => {
        dispatch(setError(null))
    }

    return (
        <>
            <h2>Login</h2>

            {error && (
                <div className="error paper box outline danger">
                    <p>email or password is incorrect, try again..</p>
                    <span onClick={hideErrorMessage} className="hideBtn btn icon outline box center-x center-y">X</span>
                </div>
            )}

            <form className="box column full-width" onSubmit={handleLogin}>
                <input ref={emailRef} type="email" required placeholder="email" />
                <input ref={passwordRef} type="password" required placeholder="password" />
                <input type="submit" required value={"Login"} className="full-width" />
            </form>

        </>
    )
}

export default Login;