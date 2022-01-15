import Axios from "axios";

import baseUrl from "../configs/Urls";

export const Axios_service = Axios.create({
    baseURL: baseUrl
});