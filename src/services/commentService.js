import {axiosService2} from "./axiosService";
import {urls_2} from "../configs/urls_2";

export const commentService = {
    getAll: () => axiosService2.get(urls_2.comments).then(value => value.data)
}