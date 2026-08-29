
import { useDispatch, useSelector } from 'react-redux';
import styles from './ToggleFavorite.module.css';
import { selectMovies, toggleFavorite } from '../model/favoriteSlice';
import type { Movie } from "entities/movie/model/types"
import { setToStorage } from 'shared/lib/storage/helpers';


type Props = {
    movie: Movie
}

export const ToggleFavorite = ({ movie }: Props) => {

    const dispatch = useDispatch();
    const favorites = useSelector(selectMovies);

    const isFavorite = favorites.some(m => m.id === movie.id);

    const handleToggle = () => {
        dispatch(toggleFavorite({ movie }));
        setToStorage('favorites', favorites)
    };
    return (
        <button
            className={styles.container}
            onClick={handleToggle}
        >
            <svg
                className={styles.svg}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={isFavorite ? "#fb24cc" : "#9CA3AF"}
                    stroke="none"
                />
            </svg>
        </button>
    );
};