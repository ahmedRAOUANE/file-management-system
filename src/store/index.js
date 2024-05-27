import { configureStore } from "@reduxjs/toolkit";

// reducers
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";
import errorSlice from "./errorSlice";
import windowSlice from "./windowSlice";
import contentSlice from "./contentSlice";
import pathSlice from "./pathSlice";
import selectedSlice from "./selectedSlice";

const store = configureStore({
    reducer: {
        userSlice,
        loaderSlice,
        errorSlice,
        windowSlice,
        contentSlice,
        pathSlice,
        selectedSlice,
    },
})

export default store;