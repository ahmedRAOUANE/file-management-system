import { useSelector } from "react-redux";
import { useHandleWindow } from "../../utils/handleActions";

const Properties = () => {
    const currentFile = useSelector(state => state.contentSlice.content);

    const closeWindow = useHandleWindow();

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div className="box column full-width ai-start">
            <h2 className="full-width">{`${currentFile.name} ${currentFile.type ? currentFile.type : ""} Properties`}</h2>
            <div className="propertiesContainer box column full-width ai-start">
                <h3>
                    name: {
                        `${currentFile.name}(${currentFile.type
                            ? currentFile.type
                            : "root"})`
                    }
                </h3>
                <h3>
                    type: {
                        currentFile.properties.type
                            ? currentFile.properties.type
                            : currentFile.type
                                ? currentFile.type
                                : "root"
                    }
                </h3>
                <h3>
                    created at: {currentFile.properties.createdAt ? formatDate(currentFile.properties.createdAt) : 'N/A'}
                </h3>
            </div>
            <button onClick={() => closeWindow(false, "")}>done</button>
        </div>
    )
}

export default Properties