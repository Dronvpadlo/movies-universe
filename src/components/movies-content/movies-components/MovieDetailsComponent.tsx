import React, {useEffect, useState} from 'react';
import type {IMovieDetails} from "../../../models/IMovieDetails.ts";
import {useParams} from "react-router-dom";
import {GetMovieById} from "../../../services/MoviesService.ts";
import PosterPreview from "../PosterPreview.tsx";
import ProductionCompanyComponent from "../movie-details-components/ProductionCompanyComponent.tsx";
import ProductionCountriesComponent from "../movie-details-components/ProductionCountriesComponent.tsx";

const MovieDetailsComponent = () => {
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
                <ul>Original Countries: {movie.origin_country.map((country, index) => <li key={index}>{country}</li>)}</ul>
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
                <div>Companies: {movie.production_companies.map((product_company) => <ProductionCompanyComponent key={product_company.id} productCompany={product_company}/>)}</div>
                <div>Production Countries: {movie.production_countries.map((product_country, index) => <ProductionCountriesComponent key={index} productCountry={product_country}/>)}</div>
            </div>}


        </div>
    );
};

export default MovieDetailsComponent;