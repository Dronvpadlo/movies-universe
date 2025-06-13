import React, {FC} from 'react';

type StarsRatingPropType = {
    starsRating: number
}
const StarsRating:FC<StarsRatingPropType> = ({starsRating}) => {
    return (
        <div>
            Rating: {starsRating}
        </div>
    );
};

export default StarsRating;