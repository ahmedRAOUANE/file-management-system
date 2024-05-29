import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name: "path",
    initialState: {
        path: [
            {
                name: "root",
                fieldID: "0"
            }
        ],
        lastVisited: null
    },
    reducers: {
        setPath: (state, { payload }) => {
            state.path = payload;
        },
        setLastVisited: (state, { payload }) => {
            state.lastVisited = payload;
        }
    }
})

export const { setPath, setLastVisited } = pathSlice.actions;
export default pathSlice.reducer;