import React, {FC} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import PosterPreview from "../PosterPreview.tsx";
import {useNavigate} from "react-router-dom";

type MoviePropType = {
    movie: IMovieListCard
}
const MoviesListCardComponent:FC<MoviePropType> = ({movie}) => {

    const navigate = useNavigate();
    const goToMovie = () => {
        navigate(`/movies/details/${movie.id}`)
    }

    const posterSize: string = '/w200';
    return (
        <div onClick={goToMovie}>
            <h4>{movie?.title}</h4>
            {movie && <PosterPreview movie={movie} posterSize={posterSize}/>}
            <div>Original Language: {movie?.original_language}</div>
            <div>Original Title: {movie?.original_title}</div>
            <div>Overview: {movie?.overview}</div>
            <div>Popularity: {movie?.popularity}</div>
            <div>Release Date: {movie?.release_date}</div>
            <div>Rating: {movie?.vote_average}</div>
            <div>Votes: {movie?.vote_count}</div>
            <div>Adult: {movie?.adult === true && <span>18+ 🔞</span>}
                {movie?.adult === false && <span>All Ages</span>}
            </div>
            <hr/>
        </div>
    );
};

export default MoviesListCardComponent;