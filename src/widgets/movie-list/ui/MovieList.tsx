import { MovieCard } from "entities/movie";
import { useBuildImageUrl } from "shared/hooks/useBuildImageUrl";
import style from './MovieList.module.css'
import type { EndPointsName, Movie, } from "entities/movie/model";
import { ViewMoreButton } from "features/view-more";
import { ToggleFavorite, useFavorites } from "features/add-favorites";
import { MovieListSkeleton } from "./MovieListSkeleton";


type Props = {
    data: Movie[]
    title?: string
    size?: string
    limit?: number
    columns?: number
    targetUrl?: `/category/${EndPointsName}`;
    isSkeleton?: boolean
};

export const MovieList = ({ isSkeleton, targetUrl, title, size = 'w342', columns = 6, data = [], limit = data.length }: Props) => {

    const { isFavorite, toggleFavorite } = useFavorites()
    const buildImageUrl = useBuildImageUrl();

    if (isSkeleton) {
        return <MovieListSkeleton columns={columns} limit={limit !== 0 ? limit : 20} flag={!!targetUrl} />;
    }
    if (data.length === 0) {
        return null;
    }
    return <>
        <section className={style.section_movies}>
            <div className={style.section_movies_top}>
                <h2>{title}</h2>
                < ViewMoreButton targetUrl={targetUrl} />
            </div>
            <div className={style.grid} style={{ '--columns': columns } as React.CSSProperties}>
                {data.slice(0, limit).map((movie) => (
                    < MovieCard
                        movieId={movie.id}
                        key={movie.id}
                        imageUrl={buildImageUrl(movie.poster_path, size, 'poster_sizes')}
                        title={movie.title}
                        rating={movie.vote_average.toString()}
                        children={<ToggleFavorite isFavorite1={isFavorite(movie.id)} onToggle={() => toggleFavorite(movie)} />}
                    />
                ))}
            </div>
        </section >
    </>
}
