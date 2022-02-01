import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services/commentService";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {},

    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;