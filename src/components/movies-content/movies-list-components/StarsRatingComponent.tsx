import React from 'react';
import StarRatings from 'react-star-ratings';

type StarsRatingProp = {
    rating: number
}



const StarsRatingComponent: React.FC<StarsRatingProp> = ({ rating }) => {
    return (
        <StarRatings
            rating={rating / 2}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            name="movie-rating"
        />
    );
};

export default StarsRatingComponent;