import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import MoviesListCardComponent from "../movies-components/MoviesListCardComponent.tsx";
import styles from "../movies-components/MoviesListComponent.module.css";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/UseAppDispatch.tsx";
import {genreMoviesSliceAction} from "../../../redux/slices/moviesGenreSlice/genreMoviesSlice.ts";
import {SpinnerComponent} from "../../others/SpinnerComponent.tsx";


const GenreMoviesComponent = () => {

    const [params] = useSearchParams({page: '1'});
    const {id} = useParams();
    const page = +params.get('page') || 1;
    const {movies, maxPage, status, error} = useAppSelector(({genreMoviesSlice}) => genreMoviesSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const genreId: number = +id;
        if (id){
            dispatch(genreMoviesSliceAction.loadGenreMovies({page, id: genreId}))
        }
    }, [id, page]);

    if (status === 'loading') {
        return <SpinnerComponent/>;
    }

    if (status === 'failed') {
        return <p>{error || 'Something went wrong'}</p>;
    }
    return (
        <div>
            <div className={styles.target}>
                {movies.map((movie, index) => <MoviesListCardComponent key={index} movie={movie}/>)}
            </div>
            <div className={styles.pagination}>
                {maxPage > 1 && <PaginationComponent maxPage={maxPage}/>}
            </div>
        </div>
    );
};

export default GenreMoviesComponent;