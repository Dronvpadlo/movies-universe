import React, {useEffect, useState} from 'react';
import type {IGenre} from "../../models/IGenre.ts";
import {getGenres} from "../../services/MoviesService.ts";
import GenreComponent from "./GenreComponent.tsx";
import styles from './GenresComponent.module.css'

const GenresComponent = () => {



    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        getGenres()
            .then(value => setGenres(value))
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