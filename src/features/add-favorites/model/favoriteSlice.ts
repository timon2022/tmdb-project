// import { Movie } from 'entities/movie/model';

import { createSlice } from "@reduxjs/toolkit"
import type { Movie } from "entities/movie/model/types"
import { getFromStorage } from "shared/lib/storage/helpers"





export const favoriteSlice = createSlice({
    
    name: "favorite",
    initialState: {
        movies: getFromStorage<Movie[]>('favorites') || [],
    },
    selectors: {
        selectMovies: (state) => state.movies,
    },
    reducers: (create) => ({
        toggleFavorite: create.reducer<{ movie: Movie }>((state, action) => {
            debugger
            const id = action.payload.movie.id
            const index = state.movies.findIndex(m => m.id === id)
            if (index === -1) {
                state.movies.push(action.payload.movie)
                
            }
            else { state.movies.splice(index, 1) }
        }),
        setFavorite: create.reducer<{ movies: Movie[] }>((state, action) => {
            state.movies = action.payload.movies
        }),

    }),
})

export const { selectMovies } = favoriteSlice.selectors
export const { toggleFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer

