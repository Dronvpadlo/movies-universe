import React, {useEffect, useState} from 'react';
import {getMoviesByGenreId} from "../../services/MoviesService.ts";
import {useParams} from "react-router-dom";
import type {IMovieListCard} from "../../models/IMovieListCard.ts";
import MoviesListCardComponent from "../movies-content/movies-components/MoviesListCardComponent.tsx";
import styles from "../movies-content/movies-components/MoviesListComponent.module.css";


const GenreMoviesComponent = () => {

    const {id} = useParams();
    const [movies, setMovies] = useState<IMovieListCard[]>([])


    useEffect(() => {
        getMoviesByGenreId(id)
            .then(value => setMovies(value.results)
            )
    }, [id]);

    return (
        <div>
            <div className={styles.target}>
                {movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)}
            </div>
        </div>
    );
};

export default GenreMoviesComponent;