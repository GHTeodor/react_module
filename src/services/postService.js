import {axiosService2} from "./axiosService";
import {urls_2} from "../configs/urls_2";

export const postService = {
    getAll: () => axiosService2.get(urls_2.posts).then(value => value.data)
}