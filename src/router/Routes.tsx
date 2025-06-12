import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import GenresPage from "../pages/GenresPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: '/movies', element: <MoviesPage/>},
        {path: '/genres', element: <GenresPage/>}
    ]
}])