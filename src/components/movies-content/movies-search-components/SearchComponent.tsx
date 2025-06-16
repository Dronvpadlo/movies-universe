import React, {useState} from 'react';
import type {IMovieListCard} from "../../../models/IMovieListCard.ts";
import {searchMovie} from "../../../services/MoviesService.ts";
import {useNavigate} from "react-router-dom";
import styles from './SearchComponent.module.css'

const SearchComponent = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState<IMovieListCard[]>([])
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('');

        try {
            const results = await searchMovie(query);
            setMovies(results);
        }
        catch (err){
            console.log('Movies not found', err)
        }
    }
    console.log(movies)

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={'search for a film'}
                value={query}
                onChange={handleChange}
                className={styles.searchForm}
            />
            <button className={styles.button} type="submit">Search</button>

            </form>
        </div>
    );
};

export default SearchComponent;