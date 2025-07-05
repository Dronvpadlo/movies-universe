import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import MoviesListCardComponent from "../movies-list-components/MoviesListCardComponent.tsx";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import styles from './MoviesSearchComponent.module.css'
import {useAppSelector} from "../../../redux/hooks/UseAppSelector.ts";
import {searchSliceAction} from "../../../redux/slices/searchSlice/searchSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/UseAppDispatch.tsx";
import {SpinnerComponent} from "../../others/SpinnerComponent.tsx";

const MoviesSearchComponent = () => {

    const [params] = useSearchParams({page: '1'});
    const {movies, maxPage, status, error} = useAppSelector(({searchSlice}) => searchSlice)
    const query = params.get('query') || '';
    const dispatch = useAppDispatch();


    useEffect(() => {
        const page = +params.get('page') || 1;
        if (query) {
            dispatch(searchSliceAction.loadFoundMovies({query, page}))
        }
    }, [params]);

    if (status === 'loading') {
        return <SpinnerComponent/>;
    }

    if (status === 'failed') {
        return <p>{error || 'Something went wrong'}</p>;
    }
    return (
        <div className={styles.section}>
            <h2>Search results for: "{query}"</h2>

            {movies.length > 0 ? (
                <div>
                    <div  className={styles.target}>
                        {movies.map((movie) => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
                    </div>
                    <div className={styles.pagination}>
                        {maxPage > 1 && <PaginationComponent maxPage={maxPage} />}
                    </div>

                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default MoviesSearchComponent;