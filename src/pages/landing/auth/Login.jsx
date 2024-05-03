import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setError } from "../../../store/errorSlice";
import { setIsLoading } from "../../../store/loaderSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        console.log("login credencials: ", credentials);
        try {
            dispatch(setIsLoading(true));
            await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        } catch (err) {
            dispatch(setError(err))
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    return (
        <>
            <h2>Login</h2>

            <form className="box column " onSubmit={handleLogin}>
                <input ref={emailRef} type="email" required placeholder="email" />
                <input ref={passwordRef} type="password" required placeholder="password" />
                <input type="submit" required value={"Login"} className="full-width" />
            </form>

        </>
    )
}

export default Login;