import type {IMovieDetails} from "../../../models/IMovieDetails.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {getMovieById} from "../../../services/MoviesService.ts";
import type {LoadStatusType} from "../../../models/LoadStatusType.ts";

export type MovieDetailsSliceType = {
    movie: IMovieDetails,
    id: number,
    status: LoadStatusType
    error: string | null
}
const initialState = {
    movie: null,
    id: 1,
    status: 'idle',
    error: null
}

const loadMovieDetails = createAsyncThunk('movieDetailsSlice/loadMovieDetails',
    async ({id}, thunkAPI) => {
        try {
            const movie = await getMovieById(id)
                .then(value => value)

            return thunkAPI.fulfillWithValue(movie)
        } catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    });

export const movieDetailsSlice = createSlice<MovieDetailsSliceType>({
    name: 'movieDetailsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadMovieDetails.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loadMovieDetails.fulfilled, (state, action:PayloadAction<IMovieDetails>) => {
                state.movie = action.payload
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(loadMovieDetails.rejected, (state) => {
                state.status = 'failed'
                state.error = 'error, please try it again later'
            })
});

export const movieDetailsSliceAction = {
    ...movieDetailsSlice.actions, loadMovieDetails
}