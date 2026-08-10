import type { Genre, ProductionCountry } from 'entities/movie'
import styles from './MovieInfo.module.css'

type Props = {
    director: string
    genres: Genre[]
    contry: ProductionCountry[]
    // cast:
}



export const MovieInfo = ({ director, genres, contry }: Props) => {


    return (
        <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
                <div className={styles.infoLabel}>DIRECTOR</div>
                <div className={styles.infoValue}>{director}</div>
            </div>
            {/* <div className={styles.infoItem}>
                <div className={styles.infoLabel}>In the Roles</div>
                <div className={styles.infoValue}>
                    Тимоти Шаламе, Флоренс Пью, Мадс Миккельсен
                </div>
            </div> */}
            <div className={styles.infoItem}>
                <div className={styles.infoLabel}>GENRES</div>
                <div className={styles.infoValue}>
                    {genres.map(g => g.name).join(', ')}
                </div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.infoLabel}>COUNTRY</div>
                <div className={styles.infoValue}>
                    {
                        contry.map(c => c.name).join(', ')
                    }
                </div>
            </div>
        </div>)
} 