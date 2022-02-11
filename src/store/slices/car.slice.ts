import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface ICarState {
    cars: ICar[],
    update: ICar | null;
}

const initialState: ICarState = {
    cars: [],
    update: null
};

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        const {data} = await carService.getAll();
        dispatch(setCars({cars: data}));
    }
);

export const addCarThunk = createAsyncThunk<void, { car: ICar; }>(
    'carSlice/addCarThunk',
    async ({car}, {dispatch}) => {
        const {data} = await carService.create(car);
        dispatch(addCar({car: data}));
    }
);

export const deleteCarThunk = createAsyncThunk<void, { id?: number; }>(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        const {data} = await carService.deleteByID(id);
        dispatch(deleteCar({id: data}));
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action: PayloadAction<{ cars: ICar[] }>) => {
            state.cars = action.payload.cars;
        },
        addCar: (state, action: PayloadAction<{ car: ICar }>) => {
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action: PayloadAction<{ id: number }>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        }
    }
});

const carReducer = carSlice.reducer;

export default carReducer;

export const {setCars, addCar, deleteCar} = carSlice.actions;