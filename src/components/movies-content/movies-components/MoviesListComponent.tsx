import React, {useEffect, useState} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {getMovies} from "../../../services/MoviesService.ts";
import MoviesListCardComponent from "./MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import styles from './MoviesListComponent.module.css'

const MoviesListComponent = () => {

    const [movies, setMovies] = useState<IMovieListCard[] | []>([])
    const [maxPage, setMaxPage] = useState<number>(null)
    const [query] = useSearchParams({page: '1'});


    useEffect(() => {
        const page = query.get('page')
        getMovies(+page)
            .then(value => {
                setMovies(value.results)
                setMaxPage(value.total_pages)
            })
    }, [query]);

    return (
        <div>
            <div className={styles.target}>
            {movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)}
            </div>
            <div className={styles.pagination}>

                <PaginationComponent maxPage={maxPage}/>
            </div>
        </div>
    );
};

export default MoviesListComponent;