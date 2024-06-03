import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: { searchResults: [] },
    reducers: {
        setSearchResults: (state, { payload }) => {
            state.searchResults = payload;
        }
    }
})

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;