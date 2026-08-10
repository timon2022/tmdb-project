
import styles from './MovieCard.module.css';
import { useGetMoviesDetailsQuery } from 'entities/movie';
import { useBuildImageUrl } from 'shared/hooks/useBuildImageUrl';
import { useParams } from 'react-router';



const MovieCard = () => {

    const buildImageUrl = useBuildImageUrl();
    const { movieId } = useParams()
    const { data, isError ,isLoading} = useGetMoviesDetailsQuery({ movie_id: Number(movieId) }, { skip: !movieId })

    if (isLoading) return <div>Loading...</div>
    if (isError || !data) return <div>Movie not found.</div>;

    const {
        title, tagline, overview, vote_average, runtime, backdrop_path, homepage
    } = data

    // Обработчики кнопок
    // const handleTrailerClick = useCallback(() => {
    //     alert('🎬 Трейлер фильма "За гранью тишины" скоро в кино! (демо-режим)');
    // }, []);

    // const handleFavoriteClick = useCallback(() => {
    //     alert('✨ Фильм добавлен в ваш список ожидания');
    // }, []);



    return (
        <section className={styles.card}>
            {/* БАННЕР */}
            <div className={styles.banner}>
                <picture>
                    <img
                        className={styles.bannerImage}
                        src={buildImageUrl(backdrop_path, 'original', 'backdrop_size')}
                        alt="Кинематографичный баннер фильма"
                        loading="eager"
                    />
                </picture>
                <div className={styles.bannerOverlay} />
            </div>

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <div className={styles.content}>
                {/* Мета-информация */}
                <div className={styles.meta}>
                    <div className={styles.rating}>
                        <span className={styles.ratingIcon}>⭐</span>{vote_average} / 10
                    </div>
                    <div className={styles.year}>2024</div>
                    <div className={styles.duration}>{runtime + ' min'}</div>
                    {/* <div className={styles.ageRating}>18+</div> */}
                </div>

                {/* Название и слоган */}
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.tagline}>
                    {tagline}
                </div>

                {/* ОПИСАНИЕ ФИЛЬМА */}
                <div className={styles.description}>
                    <p className={styles.descriptionText}>
                        {overview}
                    </p>
                </div>
                {/* Дополнительная информация */}
                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <div className={styles.infoLabel}>РЕЖИССЁР</div>
                        <div className={styles.infoValue}>Мия Харуки</div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoLabel}>В РОЛЯХ</div>
                        <div className={styles.infoValue}>
                            Тимоти Шаламе, Флоренс Пью, Мадс Миккельсен
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoLabel}>ЖАНРЫ</div>
                        <div className={styles.infoValue}>Драма, Мистика, Артхаус</div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoLabel}>СТРАНА</div>
                        <div className={styles.infoValue}>Великобритания, Франция, Япония</div>
                    </div>
                </div>

                {/* Кнопки действий */}
                <div className={styles.actions}>
                    <button
                        className={`${styles.btn} ${styles.btnPrimary}`}
                        aria-label="Смотреть трейлер"
                    >
                        ▶ Watch the trailer
                    </button>
                    <button
                        className={`${styles.btn} ${styles.btnOutline}`}
                        aria-label="Добавить в список"
                    >
                        + To Favorites
                    </button>
                    <a
                        className={`${styles.btn} ${styles.btnOutline}`}
                        aria-label="Подробнее о фильме"
                        href={homepage}
                        target='_blank'
                    >
                        More Detailed
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MovieCard;