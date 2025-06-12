import axios from "axios";
import {baseUrl} from "../consts/urls.ts";
import {token} from "../consts/token.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IMovie} from "../models/IMovie.ts";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {Authorization: 'Bearer ' + token}
});

export const getMovies = async ():Promise<IMovie[]> => {
    const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie')
    return data.results;
}

// export const getPostersById = async (id: number):Promise<IPosterResponse> => {
//     const {data} = await axiosInstance.get<IPosterResponse>('/movie/'+ id + '/images')
//     return data;
// }