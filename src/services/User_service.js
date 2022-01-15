import {Axios_service} from "./Axios_service";
import {Urls} from "../configs/Urls";

export const User_service = {
    getAll: () => Axios_service.get(Urls?.users).then(value => value.data)
};