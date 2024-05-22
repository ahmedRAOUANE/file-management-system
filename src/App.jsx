import { useEffect } from 'react';
import { auth } from '../firebase';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useGenerateFields, useGenerateRoot, useGetField } from './utils/useHandleFields';

// style
import './style/index.css';
import './style/layout.css';
import './style/button.css';

// components
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';
import Home from './pages/user/homePage/Home';
import Window from './components/window/Window';
import UserLayout from './pages/user/UserLayout';
import LandingPage from './pages/landing/LandingPage';

// states
import { setUser } from "./store/userSlice";
import { setError } from "./store/errorSlice";
import { setIsLoading } from "./store/loaderSlice";
import { setContent } from './store/contentSlice';

function App() {
  const user = useSelector(state => state.userSlice.user);

  const dispatch = useDispatch();

  const generateField = useGenerateFields();
  const generateRoot = useGenerateRoot();
  const getFields = useGetField();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      dispatch(setIsLoading(true));
      if (user) {
        try {
          dispatch(setUser({
            uid: user.uid,
            username: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }));

          await generateRoot(user);

          const folders = {
            collName: "folders",
            fieldName: "root",
            fieldID: "0"
          };

          await generateField(user, folders);

          await getFields(user, folders, setContent)
        } catch (err) {
          dispatch(setError(err.message));
        } finally {
          dispatch(setIsLoading(false));
        }
      } else {
        dispatch(setIsLoading(false));
      }
    });

    return () => unsub();
  }, [dispatch, generateRoot, generateField]);

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

      <Window />
    </>
  );
}

export default App;
