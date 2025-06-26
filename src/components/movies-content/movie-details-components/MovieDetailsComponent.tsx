import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import PosterPreview from "../poster-components/PosterPreview.tsx";
import ProductionCompanyComponent from "./ProductionCompanyComponent.tsx";
import ProductionCountriesComponent from "./ProductionCountriesComponent.tsx";
import StarsRatingComponent from "../StarsRatingComponent.tsx";
import {Badge} from "reactstrap";
import {basePosterUrl} from "../../../consts/urls.ts";
import styles from './MovieDetailsComponent.module.css'
import {useAppSelector} from "../../../redux/hooks/UseAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/UseAppDispatch.tsx";
import {movieDetailsSliceAction} from "../../../redux/slices/movieDetailsSlice/movieDetailsSlice.ts";

const MovieDetailsComponent = () => {
    // const [movie, setMovie] = useState<IMovieDetails | null>(null);
    const {movie} = useAppSelector(({movieDetailsSlice}) => movieDetailsSlice);
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const movieId: number = +id
        dispatch(movieDetailsSliceAction.loadMovieDetails({id: movieId}))
    }, [id]);

    const posterSize: string = '/w500';
    const backDropSize: string = '/w1280';

    const fullBackdropPath = movie?.backdrop_path
        ? basePosterUrl + backDropSize + movie.backdrop_path
        : null;

    return (
        <div className={styles.section}>
            {movie && (
                <div>
                    <div>{fullBackdropPath && (
                        <div
                            className={styles.backdrop}
                            style={{backgroundImage: `url(${fullBackdropPath})`}}
                        />
                    )}
                        <div className={styles.flex}>
                            <div className={styles.content}>
                                <h2>
                                    {movie.title} ({new Date(movie.release_date).getFullYear()})
                                </h2>

                                <PosterPreview movie={movie} posterSize={posterSize}/>
                                <div >
                                    Rating: <StarsRatingComponent rating={movie.vote_average}/>
                                </div>

                            </div>
                            <div className={styles.info}>
                                <div>Budget: {movie.budget}$</div>

                                <div>
                                    Genres:{' '}
                                    {movie.genres.map((genre, index) => (
                                        <Badge key={index} name={genre} />
                                    ))}
                                </div>
                                    {movie.homepage && <a href={movie.homepage}>Homepage</a>}

                                <ul>
                                    Original Countries:{' '}
                                    {movie.origin_country.map((country, index) => (
                                        <li key={index}>{country}</li>
                                    ))}
                                </ul>

                                <div>Original Language: {movie.original_language}</div>
                                <div>Original Title: {movie.original_title}</div>

                                <div>
                                    Languages:
                                    <ul>
                                        {movie.spoken_languages.map((language, index) => (
                                            <li key={index}>
                                                {language.name}, {language.english_name}, {language.iso_639_1}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>Overview: {movie.overview}</div>
                                <div>Popularity: {movie.popularity}</div>
                                <div>Release Date: {movie.release_date}</div>
                                <div>Revenue: {movie.revenue}</div>
                                <div>Runtime: {movie.runtime} min</div>
                                <div>Status: {movie.status}</div>
                                <div>Tagline: {movie.tagline}</div>

                                <div>Votes: {movie.vote_count}</div>

                                <div>
                                    Adult:{' '}
                                    {movie.adult ? <span>18+ 🔞</span> : <span>All Ages</span>}
                                </div>

                                <div>
                                    Companies:{' '}
                                    {movie.production_companies.map((product_company) => (
                                        <ProductionCompanyComponent
                                            key={product_company.id}
                                            productCompany={product_company}
                                        />
                                    ))}
                                </div>

                                <div>
                                    Production Countries:{' '}
                                    {movie.production_countries.map((product_country, index) => (
                                        <ProductionCountriesComponent
                                            key={index}
                                            productCountry={product_country}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetailsComponent;