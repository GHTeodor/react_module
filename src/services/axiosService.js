import axios from "axios";

import baseURL from "../configs/urls";
import baseURL_2 from "../configs/urls_2";


export const axiosService = axios.create({baseURL});

export const axiosService2 = axios.create({baseURL: baseURL_2});