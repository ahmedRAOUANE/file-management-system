import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHandleSearch, useOpenFileOrFolder } from "../../utils/handleActions";

// icons
import Icon from "../Icon";

const Search = () => {
    const searchResults = useSelector(state => state.searchSlice.searchResults);

    const [searchQuery, setSearchQuery] = useState("");

    const openFolder = useOpenFileOrFolder();
    const search = useHandleSearch();

    useEffect(() => {
        if (searchQuery) {
            search(searchQuery);
        }
    }, [searchQuery, search]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="box column full-width">
            <div className="searchInput box nowrap full-width">
                <input
                    placeholder="type file name"
                    type="search" name="search"
                    id="search"
                    onChange={handleInputChange}
                />
                <button onClick={() => search(searchQuery)}>Search</button>
            </div>

            <div className="showResults full-width">
                <h2 style={{ marginBottom: "10px" }}>search resuls</h2>

                <div className="scroller">
                    <ul className="box column full-width">
                        {searchResults.map((result, idx) => (
                            <li key={idx} className="box btn full-width">
                                <button onClick={() => openFolder(result)} className="icon box nowrap jc-start" style={{ width: "100%", height: "40px" }}>
                                    {result.type === "folder" ? <Icon name={"folder"} /> : <Icon name={"file"} />}
                                    <span>
                                        {result.name}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search