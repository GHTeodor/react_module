import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";
import {IGenres} from "../interfaces/genres.interface";

export const genresService = {
    getAll: () => axiosService.get<IGenres>(urls.allGenres)
};