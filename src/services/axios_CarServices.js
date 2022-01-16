import axios from "axios";

import baseURL from "../configs/urls";


const axios_Services = axios.create({
    baseURL
});

export const carServices = {
    getAll: () => axios_Services.get("").then(value => value.data),
    create: (car) => axios_Services.post("",car).then(value => value.data),
    // updateById: (id) => axios_Services.patch(id).then(value => value.data),
    deleteById: (id) => axios_Services.delete("/"+id).then(value => value.data)
};