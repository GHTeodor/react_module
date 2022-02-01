import {axiosService2} from "./axiosService";
import {urls_2} from "../configs/urls_2";

export const userService = {
    getAll: () => axiosService2.get(urls_2.users).then(value => value.data)
}