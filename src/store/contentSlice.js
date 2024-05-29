import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: "content",
    initialState: {content: []},
    reducers: {
        setContent: (state, {payload}) => {
            state.content = payload;
        }
    }
})

export const {setContent} = contentSlice.actions;
export default contentSlice.reducer;