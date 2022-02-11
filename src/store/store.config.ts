import {configureStore, combineReducers} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";
import genresReducer from "./genres.slice";
import infoReducer from "./info.slice";


const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    infoReducer
});

export const setUpStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setUpStore>;
export type AppDispatch = AppState["dispatch"];