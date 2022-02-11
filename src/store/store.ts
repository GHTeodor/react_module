import {combineReducers, configureStore} from "@reduxjs/toolkit";

import carReducer from "./slices/car.slice";

const rootReducer = combineReducers({
    carReducer
});

export const setUp_Store = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUp_Store>;
export type AppDispatch = AppStore['dispatch'];