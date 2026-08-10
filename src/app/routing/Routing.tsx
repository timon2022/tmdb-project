import { Route, Routes } from "react-router";
import { Suspense } from "react";
import { lazy } from "react"

import { MoviePage } from "pages/movie";


const MainPage = lazy(() => import("pages/main"));
const Category = lazy(() => import("pages/сategory"));
const Favorites = lazy(() => import("pages/favorites"));
const Filtered = lazy(() => import("pages/filtered"));
const Search = lazy(() => import("pages/search"));
const PageNotFound = lazy(() => import("pages/not-found"));

export const Path = {
    Main: '/',
    Category: '/category',
    SubCategory: '/category/:subcategory',
    Movie: '/movie/:movieId',
    Filtered: '/filtered',
    Search: '/search',
    Favorites: '/favorites',
    PageNotFound: '*',
} as const


export const routerConfig = [
    { path: Path.Main, element: <MainPage /> },
    { path: Path.Category, element: <Category /> },
    { path: Path.SubCategory, element: <Category /> },
    { path: Path.Favorites, element: <Favorites /> },
    { path: Path.Filtered, element: <Filtered /> },
    { path: Path.Search, element: <Search /> },
    { path: Path.PageNotFound, element: <PageNotFound /> },
    { path: Path.Movie, element: <MoviePage /> }]



export const Routing = () => (
    <Suspense >
        <Routes>
            {routerConfig.map((router) => <Route path={router.path} element={router.element} />)}
        </Routes>
    </Suspense>

)