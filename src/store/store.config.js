import {configureStore} from "@reduxjs/toolkit";

import taskReducer from "./task.slice";


const store = configureStore({
    reducer: {
        taskReducer
    }
});

export default store;