
import * as z from "zod";



export const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(), // формат "YYYY-MM-DD"
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export const MoviesBaseResponseSchema = z.object({
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number()
})

export const MoviesUpcomingSchema = MoviesBaseResponseSchema.extend({
    dates: z.object({
        maximum: z.string(),
        minimum: z.string()
    })
}
)

export const EndPointsNameSchema = z.literal(['popular', 'upcoming', 'top_rated', 'now_playing'])

export const QueryParamsSchema = z.object({
    endPoint: EndPointsNameSchema,
    language: z.string().optional(),
    page: z.string().optional(),
    region: z.string().optional()
})

export const QuerySearchParamsSchema = QueryParamsSchema.omit({ endPoint: true }).extend({
    query: z.string(),// обязательный параметр
    include_adult: z.boolean().optional(), // по умолчанию false
    primary_release_year: z.string().optional(),
    year: z.string().optional()
})

export const BelongsToCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string(),
    backdrop_path: z.string(),
});

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string().nullable(),
    origin_country: z.string().nullable(),
});

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})

export const MovieDetailsResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: BelongsToCollectionSchema.nullable()  ,
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const QueryDetailsParamsSchema = z.object({
    movie_id: z.number(),
});

export const CastMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number().int(),
    id: z.number().int(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number().int(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number().int(),
});

export const CrewMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number().int(),
    id: z.number().int(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    credit_id: z.string(),
    department: z.string(),
    job: z.string(),
});
export const MovieCreditsSchema = z.object({
    id: z.number().int(),
    cast: z.array(CastMemberSchema),
    crew: z.array(CrewMemberSchema),
});

const SortByEnum = z.enum([
    "original_title.asc",
    "original_title_desc",
    "popularity.asc",
    "popularity_desc",
    "revenue.asc",
    "revenue_desc",
    "primary_release_date.asc",
    "primary_release_date.desc",
    "title.asc",
    "title_desc",
    "vote_average.asc",
    "vote_average.desc",
    "vote_count.asc",
    "vote_count.desc",
]);

export const DiscoverQueryParamsSchema = z.object({
    certification: z.string().optional(),
    "certification.gte": z.string().optional(),
    "certification.lte": z.string().optional(),
    certification_country: z.string().optional(),
    include_adult: z.boolean().optional(),
    include_video: z.boolean().optional(),
    language: z.string().optional(),
    page: z.number().int().positive().optional(),
    primary_release_year: z.number().int().optional(),
    "primary_release_date.gte": z.string().optional(),
    "primary_release_date.lte": z.string().optional(),
    region: z.string().optional(),
    "release_date.gte": z.string().optional(),
    "release_date.lte": z.string().optional(),
    sort_by: SortByEnum.optional(),
    "vote_average.gte": z.number().optional(),
    "vote_average.lte": z.number().optional(),
    "vote_count.gte": z.number().int().optional(),
    "vote_count.lte": z.number().int().optional(),
    watch_region: z.string().optional(),
    with_cast: z.string().optional(),
    with_companies: z.string().optional(),
    with_crew: z.string().optional(),
    with_genres: z.string().optional(),
    with_keywords: z.string().optional(),
    with_origin_country: z.string().optional(),
    with_original_language: z.string().optional(),
    with_people: z.string().optional(),
    with_release_type: z.string().optional(), // можно уточнить как z.enum, если известны значения
    with_runtime_gte: z.number().int().optional(),
    with_runtime_lte: z.number().int().optional(),
    with_watch_monetization_types: z.string().optional(),
    with_watch_providers: z.string().optional(),
    without_companies: z.string().optional(),
    without_genres: z.string().optional(),
    without_keywords: z.string().optional(),
    without_watch_providers: z.string().optional(),
    year: z.number().int().optional(),
});