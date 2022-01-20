import {axiosServices} from "./axiosService";
import {urls} from "../configs/urls";

export const post_Service = {
    getAll: () => axiosServices.get(urls?.posts).then(value => value.data),
    getOneById: (id) => axiosServices.get(`${urls?.posts}/${id}`).then(value => value.data),
    getPostComments: (id) => axiosServices.get(`${urls?.posts}/${id}/comments`).then(value => value.data)
};