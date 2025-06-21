import React, {FC} from 'react';
import type {IGenre} from "../../models/IGenre.ts";
import {useNavigate, useParams} from "react-router-dom";
import styles from './GenreComponent.module.css'

type GenrePropType = {
    genre: IGenre
}


const GenreComponent: FC<GenrePropType> = ({ genre }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isActive = id === genre.id.toString();

    const goToMovie = () => {
        navigate(`/genres/movies/${genre.id}`);
    };

    return (
        <div
            onClick={goToMovie}
            className={`${styles.block} ${isActive ? styles.active : ''}`}
        >
            {genre.name}
        </div>
    );
};

export default GenreComponent;