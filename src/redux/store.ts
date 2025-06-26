import {configureStore} from '@reduxjs/toolkit';
import {moviesSlice} from "./slices/moviesSlice/moviesSlice.ts";
import {searchSlice} from "./slices/searchSlice/searchSlice.ts";
import {genresSlice} from "./slices/genresSlice/genresSlice.ts";
import {movieDetailsSlice} from "./slices/movieDetailsSlice/movieDetailsSlice.ts";
export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        searchSlice: searchSlice.reducer,
        genresSlice: genresSlice.reducer,
        movieDetailsSlice: movieDetailsSlice.reducer
    }
});
