import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetMovieById} from "../services/MoviesService.ts";
import PosterPreview from "../components/movies-content/PosterPreview.tsx";
import type {IMovieDetails} from "../models/IMovieDetails.ts";

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState<IMovieDetails | null>(null)
    const {id} = useParams();
    useEffect(() => {
        GetMovieById(id)
            .then(value => setMovie(value))
    }, [id]);
    const posterSize: string = '/w500';
    return (
        <div>
            {movie && <div><h4>{movie.title}</h4>
                {movie && <PosterPreview movie={movie} posterSize={posterSize}/>}
                <div>Budget: {movie.budget}$</div>
                <div>Genres: {movie.genres.map((genre) => <div key={genre.id}>{genre.name}</div>)}</div>
                {movie.homepage && <a href={movie.homepage}>Homepage</a>}
                <div>Original Country</div>
                <div>Original Language: {movie.original_language}</div>
                <div>Original Title: {movie.original_title}</div>
                <div>Overview: {movie.overview}</div>
                <div>Popularity: {movie.popularity}</div>
                <div>Release Date: {movie.release_date}</div>
                <div>Rating: {movie.vote_average}</div>
                <div>Votes: {movie.vote_count}</div>
                <div>Adult: {movie?.adult === true && <span>18+ 🔞</span>}
                    {movie?.adult === false && <span>All Ages</span>}
                </div>
            </div>}


        </div>
    );
};

export default MovieDetailsPage;