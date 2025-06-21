import React, {useEffect, useState} from 'react';
import {getMoviesByGenreId} from "../../../services/MoviesService.ts";
import {useParams, useSearchParams} from "react-router-dom";
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import MoviesListCardComponent from "../movies-components/MoviesListCardComponent.tsx";
import styles from "../movies-components/MoviesListComponent.module.css";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";


const GenreMoviesComponent = () => {

    const [params] = useSearchParams({page: '1'});
    const {id} = useParams();
    const page = +params.get('page') || 1;
    const [movies, setMovies] = useState<IMovieListCard[]>([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        if (id){
        getMoviesByGenreId(id, page)
            .then(value => {
                setMovies(value.results)
                setTotalPages(value.total_pages)
            });
        }
    }, [id, page]);

    return (
        <div>
            <div className={styles.target}>
                {movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)}
            </div>
            <div className={styles.pagination}>
                {totalPages > 1 && <PaginationComponent maxPage={totalPages}/>}
            </div>
        </div>
    );
};

export default GenreMoviesComponent;