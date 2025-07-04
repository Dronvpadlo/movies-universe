import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMoviesByGenreId} from "../../../services/MoviesService.ts";
import type {IMovieResponse} from "../../../models/IMovieResponse.ts";
import type {PayloadAction} from '@reduxjs/toolkit';
import type {LoadStatusType} from "../../../models/LoadStatusType.ts";

type GenreMoviesSliceType = {
    movies: IMovieListCard[],
    id: number | null,
    page: number,
    maxPage: number,
    status: LoadStatusType,
    error: string | null
}

const initialState: GenreMoviesSliceType = {
    movies: [],
    id: null,
    maxPage: 1,
    page: 1,
    status: 'idle',
    error: null
}

const loadGenreMovies = createAsyncThunk('genreMoviesSlice/loadGenreMovies',
    async ({id, page}, thunkAPI) => {
        try{
            const movies = await getMoviesByGenreId(id, page)
                .then(value => value)

            return thunkAPI.fulfillWithValue(movies)
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
    );

export const genreMoviesSlice = createSlice<GenreMoviesSliceType>({
    name: 'genreMoviesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadGenreMovies.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loadGenreMovies.fulfilled, (state, action:PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results
                state.maxPage = action.payload.total_pages
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(loadGenreMovies.rejected, (state) => {
                state.status = 'failed'
                state.error = 'Movies not found'
            })
});

export const genreMoviesSliceAction = {
    ...genreMoviesSlice.actions, loadGenreMovies
}