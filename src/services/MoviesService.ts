import axios from "axios";
import {baseUrl} from "../consts/urls.ts";
import {token} from "../consts/token.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IMovieListCard} from "../models/IMovieListCard.ts";
import type {IGenre} from "../models/IGenre.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {Authorization: 'Bearer ' + token}
});

export const getMovies = async (pg):Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie?page=' + pg)
    return data;
}
export const GetMovieById = async (id):Promise<IMovieDetails> => {
    const response = await axiosInstance.get('/movie/' + id);
    return response.data

}

export const getGenres = async ():Promise<IGenre[]> => {
    const {data} = await axiosInstance.get<IGenreResponse>('/genre/movie/list')
    return data.genres;
}

export const searchMovie = async (movie: string):Promise<IMovieListCard[]> => {
    const {data} = await axiosInstance.get<IMovieResponse>('/search/movie?query=' + movie)
    return data.results
}