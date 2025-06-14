import React, {useEffect, useState} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {getMovies} from "../../../services/MoviesService.ts";
import MoviesListCardComponent from "./MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../PaginationComponent.tsx";

const MoviesListComponent = () => {

    const [movies, setMovies] = useState<IMovieListCard[]>([])
    const [query] = useSearchParams({page: '1'});


    useEffect(() => {
        const page = query.get('page')
        getMovies(+page)
            .then(value => setMovies(value))
    }, [query]);

    return (
        <div>
            {movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)}
            <PaginationComponent/>
        </div>
    );
};

export default MoviesListComponent;