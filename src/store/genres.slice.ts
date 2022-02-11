import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services/genresService";
import {IGenre} from "../interfaces/genres.interface";


export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data.genres;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const addGenreThunk = createAsyncThunk<void, number>(
    'genresSlice/addGenreThunk',
    async (genre, {dispatch}) => {
        try {
            dispatch(addGenre(genre));
        } catch (e) {
            console.error('=======addGenreThunk\n', e);
        }
    }
);

interface IGenresSlice {
    genres: IGenre[],
    status: string | null,
    error: any,
    genre: number | null;
}

const initialState: IGenresSlice = {
    genres: [],
    status: null,
    error: null,
    genre: null
};

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        addGenre: (state, action) => {
            state.genre = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllGenres.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllGenres.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.genres = action.payload;
        }).addCase(getAllGenres.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
});

const genresReducer = genresSlice.reducer;

export const {addGenre} = genresSlice.actions;

export default genresReducer;