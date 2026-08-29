import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { favoriteReducer } from "features/add-favorites/model/favoriteSlice"
// import { moviesApi } from "entities/movie/api/moviesApi"
import { baseApi } from "shared/api"

export const store = configureStore({
    reducer: {
        // [moviesApi.reducerPath]: moviesApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
        favorite: favoriteReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


