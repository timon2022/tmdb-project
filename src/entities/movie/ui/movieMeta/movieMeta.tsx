import styles from './movieMeta.module.css'

type Props = {
    rating: number;
    year: string;
    runtime: number;
}


export const MovieMeta = ({ rating, year, runtime }: Props) => {

    return (
        <div className={styles.meta}>
            <div className={styles.rating}>
                <span className={styles.ratingIcon}>⭐</span>{rating} / 10
            </div>
            <div className={styles.year}>{"Release year: " + year.slice(0, 4)}</div>
            <div className={styles.duration}>{"Runtime: " + runtime + ' min'}</div>
        </div>)
}