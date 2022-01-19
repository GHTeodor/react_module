import {axiosServices} from "./axiosService";
import {urls} from "../configs/urls";

export const comment_Service = {
    getAll: () => axiosServices.get(urls?.comments).then(value => value.data)
};