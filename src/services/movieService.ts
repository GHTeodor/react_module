import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: (page: number, genre: number | null) => axiosService.get(urls.movies(page, genre)),
    getInfo: (id: number) => axiosService.get(urls.genres(id))
};