import axios from "axios";

import baseURL from "../configs/urls";


const axios_Services = axios.create({
    baseURL
});

export const carServices = {
    getAll: () => axios_Services.get("cars").then(value => value.data),
    create: (car) => axios_Services.post("cars", car).then(value => value.data),
    // updateById: (id) => axios_Services.patch(id).then(value => value.data),
    deleteById: (id) => axios_Services.delete("cars/"+id).then(value => value.data)
};
