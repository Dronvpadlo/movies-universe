import React, {FC} from 'react';
import type {IGenre} from "../../models/IGenre.ts";

type GenrePropType = {
    genre: IGenre
}
const GenreComponent:FC<GenrePropType> = ({genre}) => {
    return (
        <div>
            {genre.id}. {genre.name}
        </div>
    );
};

export default GenreComponent;