import { useRef } from "react"
import { setError } from "../../../store/errorSlice";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase";
import { setIsLoading } from "../../../store/loaderSlice";

const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    const credentials = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }

    console.log("signup credencials: ", credentials);
    try {
      dispatch(setIsLoading(true))
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(userCredentials => {
          updateProfile(userCredentials.user, { displayName: credentials.username })
        })
    } catch (err) {
      dispatch(setError(err))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    <>
      <h2>signup</h2>

      <form className="box column " onSubmit={handleSignup}>
        <input ref={emailRef} type="email" required placeholder="email" />
        <input ref={usernameRef} type="text" required placeholder="username" />
        <input ref={passwordRef} type="password" required placeholder="password" />
        <input type="submit" required value={"Signup"} className="full-width" />
      </form>

    </>
  )
}

export default Signup