import React, {useEffect, useState} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {getMovies} from "../../../services/MoviesService.ts";
import MoviesListCardComponent from "./MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import styles from './MoviesListComponent.module.css'
import {moviesSlice, moviesSliceAction, useAppSelector} from "../../../redux/store.ts";
import {useDispatch} from "react-redux";


const MoviesListComponent = () => {

    const [maxPage, setMaxPage] = useState<number>(null)
    const [query] = useSearchParams({page: '1'});
    const {movies} = useAppSelector(({moviesSlice}) => moviesSlice);
    const dispatch = useDispatch();
    console.log(movies)


    useEffect(() => {
        const page = query.get('page')
        getMovies(+page)
            .then(value => {
                dispatch(moviesSliceAction.loadMovies(value.results))
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