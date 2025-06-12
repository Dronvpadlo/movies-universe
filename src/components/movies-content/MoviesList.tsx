import React, {useEffect, useState} from 'react';
import type {IMovie} from "../../models/IMovie.ts";
import {getMovies} from "../../services/MoviesService.ts";
import MoviesListCard from "./MoviesListCard.tsx";

const MoviesList = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(() => {
        getMovies()
            .then(value => setMovies(value))

    }, []);

    return (
        <div>
            <h4>Movies List</h4>
            {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;