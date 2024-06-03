import { configureStore } from "@reduxjs/toolkit";

// reducers
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";
import errorSlice from "./errorSlice";
import windowSlice from "./windowSlice";
import contentSlice from "./contentSlice";
import pathSlice from "./pathSlice";
import selectedSlice from "./selectedSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        userSlice,
        loaderSlice,
        errorSlice,
        windowSlice,
        contentSlice,
        pathSlice,
        selectedSlice,
        searchSlice,
    },
})

export default store;