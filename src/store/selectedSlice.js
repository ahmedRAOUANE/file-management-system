import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: "selected",
    initialState: { selectedFiles: [] },
    reducers: {
        setSelectedFiles: (state, { payload }) => {
            state.selectedFiles = payload;
        }
    }
})

export const { setSelectedFiles } = selectedSlice.actions;
export default selectedSlice.reducer