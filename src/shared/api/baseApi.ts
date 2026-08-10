import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { handleErrors } from "shared/lib/errorHandle"


import type { ConfigurationResponse } from "shared/model"


export const baseApi = createApi({
    reducerPath: "moviesApi",
    tagTypes: ["Movie"],
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_API_BASE_URL,
            headers: {
                "accept": 'application/json'
            },
            prepareHeaders: (headers) => {
                const token = import.meta.env.VITE_APP_BEARER
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`)
                }
                return headers
            }
        })(args, api, extraOptions)

        if (result.error) {
            handleErrors(result.error)
        }

        return result
    },
    endpoints: (builder) => ({
        getConfiguration: builder.query<ConfigurationResponse, void>({
            query: () => `configuration`,
        }),
    }),
})


export const { useGetConfigurationQuery } = baseApi

