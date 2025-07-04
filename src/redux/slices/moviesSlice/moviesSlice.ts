import type {IMovieListCard} from "../../../models/IMovieListCard.ts";

import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getMovies} from "../../../services/MoviesService.ts";
import type {IMovieResponse} from "../../../models/IMovieResponse.ts";
import type {LoadStatusType} from "../../../models/LoadStatusType.ts";

type MoviesSliceType = {
    movies: IMovieListCard[],
    maxPage: number,
    status: LoadStatusType
    error: string | null
}

const initialState: MoviesSliceType = {movies: [], maxPage: 1, status: 'idle', error: null};

const loadMovies = createAsyncThunk('moviesSlice/loadMovies',
    async (page: number, thunkAPI) => {
        try {
            const movies = await getMovies(page)
                .then(value => value)

            return thunkAPI.fulfillWithValue(movies)
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('error')

        }
    })

export const moviesSlice = createSlice<MoviesSliceType>({
    name: 'moviesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(loadMovies.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovieResponse>) =>{
                state.movies = action.payload.results
                state.maxPage = action.payload.total_pages
                state.status = 'succeeded'
        })
            .addCase(loadMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || 'Failed to load movies'
        })
})

export const moviesSliceAction = {
    ...moviesSlice.actions, loadMovies
}
