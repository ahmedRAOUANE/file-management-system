import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: { isLoading: true },
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    }
})

export const { setIsLoading } = loaderSlice.actions;
export default loaderSlice.reducer;