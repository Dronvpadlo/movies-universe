import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import GenresPage from "../pages/GenresPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import React from "react";
import MoviesSearchPage from "../pages/MoviesSearchPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import GenreMoviesPage from "../pages/GenreMoviesPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: '/', element: <HomePage/>},
        {path: '/movies', element: <MoviesPage/>},
        {path: '/movies/details/:id', element: <MovieDetailsPage/>},
        {path: '/genres', element: <GenresPage/>},
        {path: '/search', element: <MoviesSearchPage/>},
        {path: '/genres/movies/:id', element: <GenreMoviesPage/>}
    ]
}])