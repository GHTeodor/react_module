import {Axios_service} from "./Axios_service";
import {Urls} from "../configs/Urls";

export const Post_service = {
    postByUserId: (userId) => Axios_service.get(Urls.posts + "?userId=" + userId).then(value => value.data)
};