import React, {FC} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import PosterPreview from "../poster-components/PosterPreview.tsx";
import {useNavigate} from "react-router-dom";
import StarsRatingComponent from "../StarsRatingComponent.tsx";
import styles from './MoviesListCardComponent.module.css'
import MovieInfoComponent from "./MovieInfoComponent.tsx";

type MoviePropType = {
    movie: IMovieListCard
}
const MoviesListCardComponent:FC<MoviePropType> = ({movie}) => {

    const navigate = useNavigate();
    const goToMovie = () => {
        navigate(`/movies/details/${movie.id}`)
    }

    const posterSize: string = '/w300';
    return (
        <div onClick={goToMovie} className={styles.block}>
            <div className={styles.img}>{movie && <PosterPreview movie={movie} posterSize={posterSize}/>}</div>
            <h4>{movie?.title}</h4>
            <MovieInfoComponent movie={movie}/>
        </div>
    );
};

export default MoviesListCardComponent;