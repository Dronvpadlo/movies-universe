import React, {useEffect, useState} from 'react';
import {searchMovie} from "../../../services/MoviesService.ts";
import {useSearchParams} from "react-router-dom";
import MoviesListCardComponent from "../movies-components/MoviesListCardComponent.tsx";

const MoviesSearchComponent = () => {

    const [params] = useSearchParams();
    const query = params.get('query') || '';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            searchMovie(query).then(setMovies);
        }
    }, [query]);
    return (
        <div>
            <div>
                <h2>Search results for: "{query}"</h2>
                {movies.length > 0 ? (
                    movies.map((movie) => <div><MoviesListCardComponent key={movie.id} movie={movie}/>
                    </div>)
                ) : (
                    <p>No results</p>
                )}
            </div>

        </div>
    );
};

export default MoviesSearchComponent;