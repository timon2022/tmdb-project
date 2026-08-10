import { useGetMoviesDetailsQuery, useGetMoviesCreditsQuery, useGetMoviesSimilarQuery, MovieBanner, MovieMeta, MovieTitle, MovieDescription, MovieInfo } from "entities/movie"
import { useParams } from "react-router"
import { ActorsList } from "widgets/actors-list"
import { MovieList } from "widgets/movie-list"
import styles from './MoviePage.module.css'

export const MoviePage = () => {
    const { movieId } = useParams()

    // const { data, isError, isLoading } = useGetMoviesDetailsQuery({ movie_id: Number(movieId) }, { skip: !movieId })

    if (!movieId || isNaN(Number(movieId))) {
        return <div>Invalid movie ID</div>;
    }

    const movieIdNumber = Number(movieId);

    const { data, isFetching: isDetailsLoading } = useGetMoviesDetailsQuery({ movie_id: movieIdNumber })
    const { data: cast, isFetching: isCastLoading } = useGetMoviesCreditsQuery({ movie_id: movieIdNumber })
    const { data: similarovies, isFetching: isSimilarLoading } = useGetMoviesSimilarQuery({ movie_id: movieIdNumber })




    if (isDetailsLoading || isCastLoading || isSimilarLoading) {
        return null;
    }

    if (!data || !cast || !similarovies) return <div>Movie not found.</div>;
    const {
        title,
        tagline,
        overview,
        vote_average,
        runtime,
        backdrop_path,
        // homepage,
        genres,
        release_date,
        production_countries
    } = data

    return (
        <section className={styles.card}>
            <MovieBanner backdropPath={backdrop_path} />
            <div className={styles.content}>
                <MovieMeta rating={vote_average} year={release_date} runtime={runtime} />
                <MovieTitle title={title} tagline={tagline} />
                <MovieDescription overview={overview} />
                <MovieInfo genres={genres} director={cast?.crew.find(actor => actor.job === "Director")?.original_name || ''} contry={production_countries} />
                {
                    cast?.cast?.length > 0 &&
                    (<div>
                        <h2> In the Rules</h2>
                        <ActorsList actors={cast?.cast.slice(0, 6) || []} />
                    </div>)
                }
                <MovieList data={similarovies?.results ?? []} limit={6} title="Similar" />
            </div>

        </section>
    )
}