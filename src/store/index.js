import { configureStore } from "@reduxjs/toolkit";

// reducers
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";
import errorSlice from "./errorSlice";

const store = configureStore({
    reducer: {
        userSlice,
        loaderSlice,
        errorSlice,
    },
})

export default store;