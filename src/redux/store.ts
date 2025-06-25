import {configureStore} from '@reduxjs/toolkit';
import {moviesSlice} from "./slices/moviesSlice/moviesSlice.ts";
import {searchSlice} from "./slices/searchSlice/searchSlice.ts";
export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        searchSlice: searchSlice.reducer
        // genreSlice
    }
});
