import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {IMovieListCard} from "../models/IMovieListCard.ts";
import {useSelector} from "react-redux";

type MoviesSliceType = {
    movies: IMovieListCard[]
}

const initialState: MoviesSliceType = {movies: []}

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: initialState,
    reducers: {
        loadMovies: (state, action:PayloadAction<IMovieListCard[]>) => {
            state.movies = action.payload
        }
    }
})

export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer
        // movieDetailsSlice
        // genreSlice
    }
});
export const moviesSliceAction = {
    ...moviesSlice.actions
}

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

