import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
// import { moviesApi } from "entities/movie/api/moviesApi"
import { baseApi } from "shared/api"

export const store = configureStore({
    reducer: {
        // [moviesApi.reducerPath]: moviesApi.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)