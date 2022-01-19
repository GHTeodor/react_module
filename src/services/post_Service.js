import {axiosServices} from "./axiosService";
import {urls} from "../configs/urls";

export const post_Service = {
    getAll: () => axiosServices.get(urls?.posts).then(value => value.data),
    getOneById: (id) => axiosServices.get(`${urls?.posts}/${id}`).then(value => value.data),
    getByUserId: (userId) => axiosServices.get(`${urls?.posts}?=userId=${userId}`).then(value => value.data)
};