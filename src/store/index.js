import { configureStore } from "@reduxjs/toolkit";

// reducers
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";
import errorSlice from "./errorSlice";
import windowSlice from "./windowSlice";
import contentSlice from "./contentSlice";
import pathSlice from "./pathSlice";

const store = configureStore({
    reducer: {
        userSlice,
        loaderSlice,
        errorSlice,
        windowSlice,
        contentSlice,
        pathSlice
    },
})

export default store;