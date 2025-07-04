import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import GenresPage from "../pages/GenresPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import React from "react";
import MoviesSearchPage from "../pages/MoviesSearchPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import GenreMoviesPage from "../pages/GenreMoviesPage.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import ProtectedRouteComponent from "../components/protected-routes/ProtectedRouteComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/auth', element: <AuthLayout/>, children: [{
            index: true, element: <HomePage/>
        }],
    },
    {
    path: '/', element: <ProtectedRouteComponent><MainLayout/></ProtectedRouteComponent>, children: [
        {path: '/movies', element: <MoviesPage/>},
        {path: '/movies/details/:id', element: <MovieDetailsPage/>},
        {path: '/genres', element: <GenresPage/>},
        {path: '/search', element: <MoviesSearchPage/>},
        {path: '/genres/movies/:id', element: <GenreMoviesPage/>}
    ]
}])