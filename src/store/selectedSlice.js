import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: "selected",
    initialState: { selectedFiles: [], isSelecting: false, fileProperties: null },
    reducers: {
        setSelectedFiles: (state, { payload }) => {
            state.selectedFiles = payload;
        },
        setIsSelecting: (state, { payload }) => {
            state.isSelecting = payload;
        },
        setFileProperties: (state, { payload }) => {
            state.fileProperties = payload;
        }
    }
})

export const { setSelectedFiles, setIsSelecting, setFileProperties } = selectedSlice.actions;
export default selectedSlice.reducer;