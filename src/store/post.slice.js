import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/postService";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},

    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer;