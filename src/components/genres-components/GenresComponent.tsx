import React, {useEffect} from 'react';
import GenreComponent from "./GenreComponent.tsx";
import styles from './GenresComponent.module.css'
import {useAppSelector} from "../../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {genresSliceAction} from "../../redux/slices/genresSlice/genresSlice.ts";

const GenresComponent = () => {

    const {genres} = useAppSelector(({genresSlice}) => genresSlice)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genresSliceAction.loadGenres())
    }, []);

    return (
        <div className={styles.target}>
            {
                genres.map((genre) => <GenreComponent key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenresComponent;