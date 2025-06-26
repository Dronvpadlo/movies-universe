import type {IMovieDetails} from "../../../models/IMovieDetails.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {getMovieById} from "../../../services/MoviesService.ts";

export type MovieDetailsSliceType = {
    movie: IMovieDetails,
    id: number,
}
const initialState = {
    movie: null,
    id: 1
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
            .addCase(loadMovieDetails.fulfilled, (state, action:PayloadAction<IMovieDetails>) => {
                state.movie = action.payload
            })
            .addCase(loadMovieDetails.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
});

export const movieDetailsSliceAction = {
    ...movieDetailsSlice.actions, loadMovieDetails
}