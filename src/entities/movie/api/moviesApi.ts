import { baseApi } from "shared/api/baseApi";
import type { MoviesUpcomingResponse, MoviesBaseResponse, QuerySearchParams, QueryParams, MovieDatailsResponse, MovieCredits, DiscoverQueryParams, Genre } from "../model";
import * as Schema from '../model/schemas'
import { withZodCatch } from "shared/lib/errorHandle";

import * as z from "zod";



export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<MoviesUpcomingResponse | MoviesBaseResponse, QueryParams>({
            // rest 
            query: ({ endPoint, ...params }) => {
                return { url: `movie/${endPoint}`, params }
            },
            ...withZodCatch(Schema.MoviesBaseResponseSchema)
            ,
        }),
        searchMovies: build.query<MoviesBaseResponse, QuerySearchParams>({
            query: (params) => ({ url: 'search/movie', params }),
            ...withZodCatch(Schema.MoviesBaseResponseSchema)
        }),
        getMoviesDetails: build.query<MovieDatailsResponse, { movie_id: number }>({
            query: (params) => ({ url: `/movie/${params.movie_id}` }),
            ...withZodCatch(Schema.MovieDetailsResponseSchema)
        }),
        getInfiniteMovies: build.infiniteQuery<MoviesBaseResponse, QueryParams, number>({
            infiniteQueryOptions: {
                initialPageParam: 1,
                maxPages: 5,
                getNextPageParam: (lastPage, _allPages, lastPageParam, _allPageParams, _queryArg,) => {
                    if (lastPageParam >= lastPage.total_pages) return undefined;
                    return lastPageParam + 1;
                },
                ...withZodCatch(Schema.MovieDetailsResponseSchema)
            },
            query: ({ queryArg, ...params }) => { return { url: `/movie/${queryArg.endPoint}`, params: { page: params.pageParam } } },
        }),
        getMoviesCredits: build.query<MovieCredits, { movie_id: number }>({
            query: (params) => ({ url: `/movie/${params.movie_id}/credits` }),
            ...withZodCatch(Schema.MovieCreditsSchema)
        }),
        getMoviesSimilar: build.query<MoviesBaseResponse, { movie_id: number }>({
            query: (params) => ({ url: `/movie/${params.movie_id}/similar` }),
            ...withZodCatch(Schema.MoviesBaseResponseSchema)
        }),
        getMoviesDiscover: build.query<MoviesBaseResponse, DiscoverQueryParams>({
            query: (params) => ({ url: `/discover/movie`, params }),
            ...withZodCatch(Schema.MoviesBaseResponseSchema)
        }),
        getMoviesGenres: build.query<{ genres: Genre[] }, void>({
            query: () => ({ url: `/genre/movie/list` }),
            ...withZodCatch(z.object({
                genres: z.array(Schema.GenreSchema)
            }))
        }),
    })
})


export const { useGetMoviesGenresQuery, useGetMoviesDiscoverQuery, useGetMoviesSimilarQuery, useGetMoviesCreditsQuery, useGetMoviesQuery, useSearchMoviesQuery, useLazySearchMoviesQuery, useGetMoviesDetailsQuery, useGetInfiniteMoviesInfiniteQuery } = moviesApi
