import { SearchBanner } from "widgets/search-banner";

import { useGetMoviesQuery } from "entities/movie";
import { MovieList } from "widgets/movie-list";
import s from '../ui/HomeMovies.module.css'


const MainPage = () => {


    const { data: puopularMovies, isLoading: isLoading1 } = useGetMoviesQuery({ endPoint: 'popular' })
    const { data: top_ratedMovies, isLoading: isLoading2 } = useGetMoviesQuery({ endPoint: 'top_rated' })
    const { data: upcomingMovies, isLoading: isLoading3 } = useGetMoviesQuery({ endPoint: 'upcoming' })
    const { data: now_playingMovies, isLoading: isLoading4 } = useGetMoviesQuery({ endPoint: 'now_playing' })

    const isloading = isLoading1 || isLoading2 || isLoading3 || isLoading4
    return (
        <>
            <SearchBanner />
            <div className={s.container}>
                <MovieList data={puopularMovies?.results ?? []} targetUrl='/category/popular' limit={6} title="Popular" isSkeleton={isloading} />
                <MovieList data={top_ratedMovies?.results ?? []} targetUrl="/category/top_rated" limit={6}  title="Top Rated" isSkeleton={isloading}/>
                <MovieList data={upcomingMovies?.results ?? []} targetUrl="/category/upcoming" limit={6} title="Upcoming" isSkeleton={isloading}/>
                <MovieList data={now_playingMovies?.results ?? []} targetUrl="/category/now_playing" limit={6} title="Now Playing" isSkeleton={isloading} />
            </div>
        </>
    )
}

export default MainPage