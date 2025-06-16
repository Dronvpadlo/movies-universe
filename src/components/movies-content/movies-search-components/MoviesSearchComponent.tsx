import React, {useEffect, useState} from 'react';
import {searchMovie} from "../../../services/MoviesService.ts";
import {useSearchParams} from "react-router-dom";
import MoviesListCardComponent from "../movies-components/MoviesListCardComponent.tsx";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import styles from './MoviesSearchComponent.module.css'

const MoviesSearchComponent = () => {

    const [params] = useSearchParams({page: '1'});
    const query = params.get('query') || '';
    const page = +params.get('page') || 1;

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        if (query) {
            searchMovie(query, page)
                .then(value => {
                    setMovies(value.results)
                    setTotalPages(value.total_pages)
                });
        }
    }, [query, page]);
    return (
        <div>
            <h2>Search results for: "{query}"</h2>

            {movies.length > 0 ? (
                <div>
                    <div  className={styles.target}>
                        {movies.map((movie) => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
                    </div>
                    <div className={styles.pagination}>
                        {totalPages > 1 && <PaginationComponent maxPage={totalPages} />}
                    </div>

                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default MoviesSearchComponent;