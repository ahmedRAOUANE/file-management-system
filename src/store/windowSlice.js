import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
    name: "window",
    initialState: {
        window: null,
        isOpen: false
    },
    reducers: {
        setIsOpen: (state, { payload }) => {
            state.isOpen = payload;
        },
        setwindow: (state, { payload }) => {
            state.window = payload;
        },
    }
});

export const { setIsOpen, setwindow } = windowSlice.actions;
export default windowSlice.reducer;