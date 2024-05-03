import { useSelector } from "react-redux";

// style
import "../style/loader.css";

const Loading = () => {
    const isLoading = useSelector(state => state.loaderSlice.isLoading);

    return isLoading && (
        <div className={`loader-container box center-x center-y`}>
            <div className={`loader`}></div>
        </div>
    )
}

export default Loading