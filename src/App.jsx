import { useEffect } from 'react';
import { auth, db } from '../firebase';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

// style
import './style/index.css';
import './style/layout.css';
import './style/button.css';

// components
import NotFound from './pages/NotFound';
import Home from './pages/user/homePage/Home';
import UserLayout from './pages/user/UserLayout';
import LandingPage from './pages/landing/LandingPage';

// states
import { setIsLoading } from "./store/loaderSlice";
import { setError } from "./store/errorSlice";
import { setUser } from "./store/userSlice";
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import Loading from './pages/Loading';

function App() {
  const user = useSelector(state => state.userSlice.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      try {
        dispatch(setIsLoading(true))

        if (user) {
          dispatch(setUser({
            uid: user.uid,
            username: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }))
        }
      } catch (err) {
        dispatch(setError(err))
      } finally {
        dispatch(setIsLoading(false))
      }
    })

    const generateCollection = async (user, coll, action) => {
      /*
      coll = {
        name: str,
        content: {} || []
      }
      */

      if (user) {
        const userDocRef = doc(db, coll.name, user.uid);
        const userDoc = await getDoc(userDocRef)

        if (userDoc.exists()) {
          onSnapshot(userDocRef, (doc) => {
            dispatch(action(doc.data()[coll.name]))
          })
        } else {
          await setDoc(userDocRef, {
            [coll.name]: coll.content,
          });
        }
      }
    }

    return () => unsub();
  }, [dispatch])

  return (
    <>
      <Loading />
      <Routes>
        {user
          ? (
            <Route path='/' element={<UserLayout />}>
              <Route index element={<Home />} />
            </Route>
          )
          : (
            <Route path='/' element={<LandingPage />} />
          )
        }
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
