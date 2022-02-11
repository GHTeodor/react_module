import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movieService";
import {IGenre} from "../interfaces/genres.interface";


export const getInfoThunk = createAsyncThunk<void, number>(
    'infoSlice/getInfoThunk',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getInfo(id);
            return data.genres;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

interface IInfoSlice {
    genres: IGenre[] | void,
    status: string | null,
    error: any
}

const initialState: IInfoSlice = {
    genres: [],
    status: null,
    error: null
};

const infoSlice = createSlice({
    name: 'infoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInfoThunk.pending, (state, action) => {
            state.status = 'resolved';
            state.genres = action.payload;
        }).addCase(getInfoThunk.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.genres = action.payload;
        }).addCase(getInfoThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
});

const infoReducer = infoSlice.reducer;

export default infoReducer;