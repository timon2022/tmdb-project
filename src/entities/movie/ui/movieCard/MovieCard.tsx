
import { NavLink } from 'react-router';
import styles from './MovieCard.module.css';


type MovieProps = {
    imageUrl: string
    title: string
    rating: string
    children?: React.ReactNode;
    movieId: number
}




export const MovieCard = ({
    imageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=720&h=1080&fit=crop&crop=center',
    title = 'Интерстеллар',
    rating = '8.7',
    children,
    movieId

}: MovieProps) => {
    const roundedRating = Math.round(Number(rating) * 10) / 10;
    const starColor = roundedRating < 4 ? 'red'
        : roundedRating <= 7 ? 'green'
            : '#f5c518';

    const shadowColor = starColor === 'red' ? 'rgba(255, 255, 255, 0.5)'
        : starColor === 'green' ? 'rgba(3, 250, 3, 0.5)'
            : 'rgba(245, 205, 60, 0.5)';

    return (
        <>

            <article className={styles.movieCard} >
                {/* Фон фильма */}
                <NavLink to={`/movie/${movieId}`}>
                    <div
                        className={styles.background}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />

                    {/* Оверлей-затемнение */}
                    <div className={styles.overlay} />

                    {/* Название фильма */}
                    <h2 className={styles.title}>{title}</h2>

                    {/* Декоративная полоска */}
                    <div className={styles.accent} />

                    {/* Рейтинг */}
                    <div className={styles.rating}>
                        <span className={styles.ratingStar} style={{
                            color: starColor,
                            filter: `drop-shadow(0 1px 3px ${shadowColor})`
                        }}>★</span>
                        <span>{roundedRating}</span>
                    </div>
                </NavLink >
                {children && <div className={styles.addFavorite}>{children}</div>}
            </article >


        </>
    );
};


