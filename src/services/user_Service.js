import {axiosServices} from "./axiosService";
import {urls} from "../configs/urls";

export const user_Service = {
    getAll: () => axiosServices.get(urls?.users).then(value => value.data),
    getOneById: (id) => axiosServices.get(`${urls?.users}/${id}`).then(value => value.data),
    getUserPosts: (id) => axiosServices.get(`${urls?.users}/${id}/posts`).then(value => value.data)
};
