import {Axios_service} from "./Axios_service";
import {Urls} from "../configs/Urls";

export const Comments_service = {
    commentByPostId: (postId) => Axios_service.get(Urls?.comments + "?postId=" + postId).then(value => value.data)
};