import React, {FC} from 'react';
import type {IGenre} from "../../models/IGenre.ts";
import {useNavigate} from "react-router-dom";
import styles from './GenreComponent.module.css'

type GenrePropType = {
    genre: IGenre
}
const GenreComponent:FC<GenrePropType> = ({genre}) => {

    const navigate = useNavigate();
    const goToMovie = () => {
        navigate(`/genres/movies/${genre.id}`)
    }


    return (
        <div onClick={goToMovie} className={styles.block}>
            {genre.name}
        </div>
    );
};

export default GenreComponent;