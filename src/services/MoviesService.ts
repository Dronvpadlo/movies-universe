import axios from "axios";
import {baseUrl} from "../consts/urls.ts";
import {token} from "../consts/token.ts";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";
import type {IGenre} from "../models/IGenre.ts";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {Authorization: 'Bearer ' + token}
});

export const getMovies = async (page: number):Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie?page=' + page)
    return data;
}
export const getMovieById = async (id: number):Promise<IMovieDetails> => {
    const response = await axiosInstance.get('/movie/' + id);
    return response.data

}

export const getGenres = async ():Promise<IGenre[]> => {
    const {data} = await axiosInstance.get<IGenreResponse>('/genre/movie/list')
    return data.genres;
}

export const getMoviesByGenreId = async (id: number, page: number):Promise<IMovieResponse> => {
    const {data} = await axiosInstance.get('/discover/movie', {
        params: {
            with_genres: id,
            page
        }
    });
    return data;
}

export const searchMovie = async (movie: string, page: number):Promise<IMovieResponse> => {
    const { data } = await axiosInstance.get('/search/movie', {
        params: {
            query: movie,
            page
        }
    });
    return data
}