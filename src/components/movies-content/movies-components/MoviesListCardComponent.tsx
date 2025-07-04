import React, {FC} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import PosterPreview from "../poster-components/PosterPreview.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import styles from './MoviesListCardComponent.module.css'
import MovieInfoComponent from "./MovieInfoComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/UseAppSelector.ts";
import GenreBadgeComponent from "./GenreBadgeComponent.tsx";

type MoviePropType = {
    movie: IMovieListCard
}
const MoviesListCardComponent:FC<MoviePropType> = ({movie}) => {

    const {genres} = useAppSelector(state => state.genresSlice);
    const navigate = useNavigate();
    const location = useLocation();
    const genreNames = genres
        .filter(genre => movie.genre_ids.includes(genre.id))
        .map(genre => genre.name);
    const goToMovie = () => {
        navigate(`/movies/details/${movie.id}`, {state: {from: location}})
    }

    const posterSize: string = '/w300';
    return (
        <div onClick={goToMovie} className={styles.block}>
            <div className={styles.img}>{movie && <PosterPreview movie={movie} posterSize={posterSize}/>}</div>
            <h4>{movie.title}</h4>
            <MovieInfoComponent movie={movie}/>
            <div style={{marginTop: '8px'}}>
                Genres: {genreNames.map((name, index) => (
                    <GenreBadgeComponent key={index} name={name}/>
                ))}
            </div>
        </div>
    );
};


export default MoviesListCardComponent;