import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFileProperties } from "../../store/selectedSlice";
import { useGetField, useHandleWindow } from "../../utils/handleActions";

const Properties = () => {
    const user = useSelector(state => state.userSlice.user);
    const currentFile = useSelector(state => state.contentSlice.content);
    const selectedFiles = useSelector(state => state.selectedSlice.selectedFiles);
    const fileProperties = useSelector(state => state.selectedSlice.fileProperties);

    const dispatch = useDispatch()

    const closeWindow = useHandleWindow();
    const getField = useGetField()

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    useEffect(() => {
        const fetchData = async () => {
            if (selectedFiles.length !== 0) {
                const field = {
                    collName: "folders",
                    fieldID: selectedFiles[0].fieldID
                }

                await getField(user, field, setFileProperties);
            }
        }

        fetchData()

        // return fetchData()
    }, [selectedFiles.length, user.uid]);

    if (selectedFiles.length === 0) {
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

    const handleCloseWindow = () => {
        closeWindow(false, "");
        dispatch(setFileProperties(null))
    }

    return (
        <div className="box column full-width ai-start">
            <h2 className="full-width">{`${currentFile.name} ${currentFile.type ? currentFile.type : ""} Properties`}</h2>
            {fileProperties && (
                <div className="propertiesContainer box column full-width ai-start">
                    <h3>
                        name: {fileProperties.name}
                    </h3>
                    <h3>
                        type: {fileProperties.type}
                    </h3>
                    <h3>
                        created at: {fileProperties.properties.createdAt ? formatDate(currentFile.properties.createdAt) : 'N/A'}
                    </h3>
                </div>
            )}
            <button onClick={handleCloseWindow}>done</button>
        </div>
    )
}

export default Properties