import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: { error: null },
    reducers: {
        setError: (state, { payload }) => {
            state.error = payload;
        }
    }
})

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;