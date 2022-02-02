import {createSlice} from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        tasks: [],
        checkbox: 0
    },
    reducers: {
        getTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        checker: (state, action) => {
            state.checkbox = state.checkbox + action.payload;
        },
        changeStatus: (state, action) => {
            const toDo = state.tasks.find(todo => todo.id === action.payload.id);
            toDo.status = !toDo.status;
        },
    }
});

const taskReducer = taskSlice.reducer;

export const {getTask, removeTask, checker, changeStatus} = taskSlice.actions;

export default taskReducer;