import {axiosServices} from "./axiosService";
import {urls} from "../configs/urls";

export const photos_Service = {
    photosByAlbumId: (albumId) => axiosServices.get(`${urls?.photos}?albumId=${albumId}`).then(value => value.data)
};