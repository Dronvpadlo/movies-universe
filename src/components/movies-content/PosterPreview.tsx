import React, {FC} from 'react';
import type {IMovie} from "../../models/IMovie.ts";
import {basePosterUrl} from "../../consts/urls.ts";

type PosterPropType = {
    movie: IMovie
}
const PosterPreview:FC<PosterPropType> = ({movie}) => {

    const fullPosterPath = basePosterUrl + movie.poster_path
    return (
        <div>
            <img src={fullPosterPath} alt={movie.title}/>
        </div>
    );
};

export default PosterPreview;