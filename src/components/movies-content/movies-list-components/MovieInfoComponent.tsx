import React, {FC} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import styles from "./MoviesListCardComponent.module.css";
import StarsRatingComponent from "./StarsRatingComponent.tsx";

type MoviePropType = {
    movie: IMovieListCard
}
const MovieInfoComponent:FC<MoviePropType> = ({movie}) => {
    return (
        <div className={styles.flex}>
            <div>Original Language: {movie?.original_language}</div>
            <div>Original Title: {movie?.original_title}</div>

            <div>Popularity: {movie?.popularity}</div>
            <div>Release Date: {movie?.release_date}</div>
            <div>Rating: <StarsRatingComponent rating={movie.vote_average}/></div>
            <div>Votes: {movie?.vote_count}</div>
            <div>Adult: {movie.adult ? '18+ 🔞' : 'All Ages'}</div>
        </div>
    );
};

export default MovieInfoComponent;