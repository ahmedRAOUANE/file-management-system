import { useRef } from "react"
import { setError } from "../../../store/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase";
import { setIsLoading } from "../../../store/loaderSlice";

const Signup = () => {
  const error = useSelector(state => state.errorSlice.error);

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

    try {
      dispatch(setIsLoading(true))
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(userCredentials => {
          updateProfile(userCredentials.user, { displayName: credentials.username });
          dispatch(setError(null))
        })
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
      <h2>signup</h2>

      {error && (
        <div className="error paper box outline danger">
          <p>something went wrong!, try again..</p>
          <span onClick={hideErrorMessage} className="hideBtn btn icon outline box center-x center-y">X</span>
        </div>
      )}

      <form className="box column" onSubmit={handleSignup}>
        <input ref={emailRef} type="email" required placeholder="email" />
        <input ref={usernameRef} type="text" required placeholder="username" />
        <input ref={passwordRef} type="password" required placeholder="password" />
        <input type="submit" required value={"Signup"} className="full-width" />
      </form>

    </>
  )
}

export default Signup