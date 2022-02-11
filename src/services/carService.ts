import {axiosService} from "./axiosService";
import {urls} from "../configs";
import {ICar} from "../interfaces";

export const carService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars),
    create: (car: ICar) => axiosService.post<ICar>(urls.cars, car),
    deleteByID: (id?: number) => axiosService.delete(`${urls.cars}/${id}`)
};