import Axios from "axios";

import Users_url from "../configs/Users_url";


const axiosService = Axios.create({
    userURL: Users_url
});

export const userService = {
    getUsers: () => axiosService.get(Users_url).then(value => value.data)
};