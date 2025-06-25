import type {IMovieListCard} from "../../../models/IMovieListCard.ts";

import {searchMovie} from "../../../services/MoviesService.ts";
import type {IMovieResponse} from "../../../models/IMovieResponse.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';

type SearchSliceType = {
    movies: IMovieListCard[]
    query: string,
    page: number,
    maxPage: number
}


const initialState: SearchSliceType = {movies: [], query: '', maxPage: 1, page: 1}

const loadFoundMovies = createAsyncThunk('searchMovieSlice/loadFoundMovies',
    async ({query, page}, thunkAPI) => {
        try {
            const movies = await searchMovie(query, page)
                .then(value => value)

            return thunkAPI.fulfillWithValue(movies)
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('error')

        }
    })



export const searchSlice = createSlice<SearchSliceType>({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {},
    extraReducers:builder =>
    builder
        .addCase(loadFoundMovies.fulfilled, (state, action: PayloadAction<IMovieResponse>) =>{
            state.movies = action.payload.results
            state.maxPage = action.payload.total_pages
        })
        .addCase(loadFoundMovies.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
});

export const searchSliceAction = {
    ...searchSlice.actions, loadFoundMovies
}