import React, {FC} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {basePosterUrl} from "../../../consts/urls.ts";
import type {IMovieDetails} from "../../../models/IMovieDetails.ts";
import styles from './PosterPreview.module.css'

type PosterPropType = {
    movie: IMovieListCard | IMovieDetails
    posterSize: string
}
const PosterPreview:FC<PosterPropType> = ({movie, posterSize}) => {

    const fullPosterPath = basePosterUrl+ posterSize + movie.poster_path
    return (
        <div>
            <img src={fullPosterPath} alt={movie.title} className={styles.image}/>
        </div>
    );
};

export default PosterPreview;