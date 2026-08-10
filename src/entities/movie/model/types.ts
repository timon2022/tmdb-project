
import * as z from "zod";
import * as Schema from './schemas'




export type Movie = z.infer<typeof Schema.MovieSchema>
export type MoviesBaseResponse = z.infer<typeof Schema.MoviesBaseResponseSchema>
export type MoviesUpcomingResponse = z.infer<typeof Schema.MoviesUpcomingSchema>
export type EndPointsName = z.infer<typeof Schema.EndPointsNameSchema>
export type QueryParams = z.infer<typeof Schema.QueryParamsSchema>
export type QuerySearchParams = z.infer<typeof Schema.QuerySearchParamsSchema>
export type BelongsToCollection = z.infer<typeof Schema.BelongsToCollectionSchema>
export type Genre = z.infer<typeof Schema.GenreSchema>
export type ProductionCompany = z.infer<typeof Schema.ProductionCompanySchema>
export type ProductionCountry = z.infer<typeof Schema.ProductionCountrySchema>
export type SpokenLanguage = z.infer<typeof Schema.SpokenLanguageSchema>
export type MovieDatailsResponse = z.infer<typeof Schema.MovieDetailsResponseSchema>
export type QueryDatailsParams = z.infer<typeof Schema.QueryDetailsParamsSchema>
export type CastMember = z.infer<typeof Schema.CastMemberSchema>
export type CrewMember = z.infer<typeof Schema.CrewMemberSchema>
export type MovieCredits = z.infer<typeof Schema.MovieCreditsSchema>
export type DiscoverQueryParams = z.infer<typeof Schema.DiscoverQueryParamsSchema>


