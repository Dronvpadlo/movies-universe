import React, {FC} from 'react';
import type {IMovieListCard} from "../../../../models/IMovieListCard.ts";
import {basePosterUrl} from "../../../../consts/urls.ts";
import type {IMovieDetails} from "../../../../models/IMovieDetails.ts";
import styles from './PosterPreview.module.css'

type PosterPropType = {
    movie: IMovieListCard | IMovieDetails
    posterSize: string
}
const PosterPreview:FC<PosterPropType> = ({movie, posterSize}) => {
    const placeholder = '/public/noPoster.jpg'
    const posterWidth = posterSize === '/w500' ? 500 : 300

    let fullPosterPath = basePosterUrl + posterSize + movie.poster_path
    if(movie.poster_path == null){
        fullPosterPath = placeholder
    }
    return (
        <div>
            <img src={fullPosterPath} alt={movie.title} className={styles.image} style={{
                width: `${posterWidth}px`,
            }}/>
        </div>
    );
};

export default PosterPreview;