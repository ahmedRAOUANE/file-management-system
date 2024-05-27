import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: "selected",
    initialState: { selectedFiles: [], isSelecting: false },
    reducers: {
        setSelectedFiles: (state, { payload }) => {
            state.selectedFiles = payload;
        },
        setIsSelecting: (state, { payload }) => {
            state.isSelecting = payload;
        }
    }
})

export const { setSelectedFiles, setIsSelecting } = selectedSlice.actions;
export default selectedSlice.reducer;