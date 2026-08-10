import styles from './movieTitle.module.css'

type Props = {
    title: string
    tagline: string
}


export const MovieTitle = ({ title, tagline }: Props) => {
    return (<>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.tagline}>
            {tagline}
        </div>
    </>
    )
}