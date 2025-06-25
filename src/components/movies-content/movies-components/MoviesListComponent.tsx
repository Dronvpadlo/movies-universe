import {useEffect} from 'react';
import MoviesListCardComponent from "./MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import styles from './MoviesListComponent.module.css'
import {moviesSliceAction} from "../../../redux/slices/moviesSlice/moviesSlice.ts";
import {useAppSelector} from "../../../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/UseAppDispatch.tsx";


const MoviesListComponent = () => {

    const [query] = useSearchParams({page: '1'});
    const {movies, maxPage} = useAppSelector(({moviesSlice}) => moviesSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const page = +query.get('page');
        if (query) {
            dispatch(moviesSliceAction.loadMovies(page));
        }
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