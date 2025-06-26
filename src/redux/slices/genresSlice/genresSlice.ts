import type {IGenre} from "../../../models/IGenre.ts";
import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGenres} from "../../../services/MoviesService.ts";

type GenresSliceType = {
    genres: IGenre[]
}

const initialState: GenresSliceType = {genres: []};

const loadGenres = createAsyncThunk('genresSlice/loadGenres',
    async (_, thunkAPI) =>{
    try {
        const genres = await getGenres()
            .then(value => value)

        return thunkAPI.fulfillWithValue(genres)
    } catch (e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
    });
export const genresSlice = createSlice<GenresSliceType>({
    name: 'genresSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genres = action.payload
            })
            .addCase(loadGenres.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
});

export const genresSliceAction = {
    ...genresSlice.actions, loadGenres
}