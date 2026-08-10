
import styles from './MovieDescription.module.css' 

type Props = {
    overview: string
}
export const MovieDescription = ({ overview }: Props) => {
    return (
        <div className={styles.description}>
            <p className={styles.descriptionText}>
                {overview}
            </p>
        </div>)
} 