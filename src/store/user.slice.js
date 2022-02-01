import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services/userService";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {},

    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;