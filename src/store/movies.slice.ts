import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {movieService} from "../services/movieService";
import {IMovie} from "../interfaces/movie.interface";


export const getAllMovies = createAsyncThunk<void, { page: number, genre: number | null }>(
    'moviesSlice/getAllMovies',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, genre);
            return data.results;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const changePageThunk = createAsyncThunk<void, number>(
    'moviesSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changePage(page));
        } catch (e) {
            console.error('=======changePageThunk\n', e);
        }
    }
);

export const firstPageThunk = createAsyncThunk<void, number>(
    'moviesSlice/firstPageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(firstPage(page));
        } catch (e) {
            console.error('=======changePageThunk\n', e);
        }
    }
);

export const buttonPageThunk = createAsyncThunk<void, number>(
    'moviesSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changeButtonPage(page));
        } catch (e) {
            console.error('=======buttonPageThunk\n', e);
        }
    }
);

export const darkThemeThunk = createAsyncThunk<void, boolean>(
    'moviesSlice/darkThemeThunk',
    async (darkMode, {dispatch}) => {
        try {
            dispatch(darkTheme(darkMode));
        } catch (e) {
            console.error('=======darkThemeThunk\n', e);
        }
    }
);

interface movies_Slice {
    movies: IMovie[] | void,
    status: string | null,
    error: any,
    page: number,
    darkMode: boolean
}

const initialState: movies_Slice = {
    movies: [],
    status: null,
    error: null,
    page: 1,
    darkMode: false
};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => {
            if ((action.payload === -1 && state.page !== 1) || (action.payload === 1 && state.page !== 500)) {
                state.page += action.payload;
            }
        },
        changeButtonPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        darkTheme: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
        firstPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllMovies.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.movies = action.payload;
        }).addCase(getAllMovies.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
});

const moviesReducer = moviesSlice.reducer;

export const {changePage, firstPage, changeButtonPage, darkTheme} = moviesSlice.actions;

export default moviesReducer;