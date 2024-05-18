import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name: "path",
    initialState: {
        path: [
            {
                name: "root",
                fieldID: "0"
            }
        ]
    },// array of obj
    reducers: {
        setPath: (state, { payload }) => {
            state.path = payload;
        }
    }
})

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;