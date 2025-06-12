import React, {FC} from 'react';
import type {IMovie} from "../../models/IMovie.ts";
import PosterPreview from "./PosterPreview.tsx";

type MoviePropType = {
    movie: IMovie
}
const MoviesListCard:FC<MoviePropType> = ({movie}) => {
    return (
        <div>
            ID: {movie.id}. Title: {movie.title}
            <PosterPreview movie={movie}/>
            <hr/>
        </div>
    );
};

export default MoviesListCard;