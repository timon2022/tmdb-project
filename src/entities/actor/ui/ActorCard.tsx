import styles from './ActorCard.module.css';


type Props =
    {
        character: string
        original_name: string
        path: string
    }

export const ActorCard = ({ path, original_name, character }: Props) => {

    return (
        <article className={styles.card}>
            <div className={styles.photoWrapper}>
                <img
                    src={path}
                    alt={original_name}
                    className={styles.photo}
                />
            </div>
            {/* {/* <div className={styles.name}>
                {name}
            </div> */}
            <div className={styles.textWrapper}>
                <p className={styles.name}>
                    {original_name}
                </p>
                <p className={styles.character}>
                    {character}
                </p>
            </div>
        </article>
    );
};

export default ActorCard;