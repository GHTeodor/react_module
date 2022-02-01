import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}));
        } catch (e) {
            console.error('=======CREATE CAR\n', e);
        }
    }
);

export const removeCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteByID(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            console.error('=======DELETE CAR\n', e);
        }
    }
);

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, data}, {dispatch}) => {
        try {
            const updatedCAR = await carService.updateById(id, data);
            dispatch(patchCar({id, data: updatedCAR}));
        } catch (e) {
            console.error('=======UPDATE CAR\n', e);
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carForUpdate: {}
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        patchCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = action.payload.data;
        },
        getCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },

    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, patchCar, getCarForUpdate} = carSlice.actions;
export default carReducer;