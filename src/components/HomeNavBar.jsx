import { setPath } from '../store/pathSlice';
import { setError } from '../store/errorSlice';
import { setContent } from '../store/contentSlice';
import HeaderActions from './window/HeaderActions';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetField, useHandleWindow } from '../utils/handleActions';

// components
import Icon from './Icon';

// style
import style from "../style/homeNav.module.css";

const HomeNavBar = () => {
    const user = useSelector(state => state.userSlice.user);
    const path = useSelector(state => state.pathSlice.path);
    const lastVisited = useSelector(state => state.pathSlice.lastVisited);

    const currentFolderIndex = path.length - 1;

    const dispatch = useDispatch();

    const getfield = useGetField();
    const openWindow = useHandleWindow();

    const field = useMemo(() => {
        if (path[currentFolderIndex]) {
            return {
                collName: "folders",
                fieldName: path[currentFolderIndex].name,
                fieldID: path[currentFolderIndex].fieldID,
                path: path.map(ele => ele.name)
            }
        }
        return null;
    }, [path, currentFolderIndex]);

    // listen to the path array changes
    useEffect(() => {
        if (field && user) {
            try {
                const fetchData = async () => {
                    await getfield(user, field, setContent);
                }

                fetchData();
            } catch (err) {
                dispatch(setError(err))
            }
        }
    }, [user, getfield, field, dispatch])

    const handleNavigate = (fileIndex) => {
        if (path.length === 0) return;
        dispatch(setPath(path.slice(0, fileIndex + 1)));
    }

    const backward = async () => {
        path.length > 1 && dispatch(setPath(path.slice(0, path.length - 1)));

        getfield(user, field, setContent);
    }

    const forward = () => {
        getfield(user, field, setContent);

        if (lastVisited !== "" && !path.some(item => item.name === lastVisited.name)) {
            dispatch(setPath([...path, lastVisited]));
        }
    }

    // ----- for search feature ----- //
    // const changePlaceholder = (e) => {
    //     const parent = e.target.parentNode;
    //     e.target.placeholder = "type path or file name";
    //     parent.classList.remove("shrink");
    //     parent.classList.add("grow");
    //     parent.classList.remove("no-shadow");
    // }

    // const restorePlaceholder = (e) => {
    //     const parent = e.target.parentNode;
    //     e.target.placeholder = "";
    //     parent.classList.add("shrink");
    //     parent.classList.remove("grow");
    //     parent.classList.add("no-shadow");
    // }

    // const handleSearchChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // const filteredContent = content.filter(item =>
    //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // const openSearchWindow = () => {
    //   openWindow(true, "search");
    // }

    return (
        <div className={`${style.header} box full-width nowrap`}>
            <div className="box hide-in-small nowrap">
                <button className="icon" onClick={backward}><Icon name={"backward"} /></button>
                <button className="icon" onClick={forward}><Icon name="forward" /></button>
            </div>

            <div className={`${style.navURL} box jc-start paper no-shadow nowrap`}>
                <div className={`box ${style.pathContainer}`}>
                    {path.length > 0 && path.map((path, idx) => (
                        <span onClick={() => handleNavigate(idx)} className="btn icon" key={idx}>{path.name}/</span>
                    ))}
                </div>
                {/* ----- for search feature ----- */}
                <input type="text" onFocus={() => openWindow(true, "search")} placeholder="type path or file name" />
            </div>

            <div className="box nowrap">
                <div className="box nowrap">
                    <HeaderActions className={`${style.actions} box hide-in-small`} />
                    <button className="icon" style={{ width: "40px" }} onClick={() => openWindow(true, "moreOptions")}><Icon name={"more"} /></button>
                </div>
            </div>
        </div>
    )
}

export default HomeNavBar