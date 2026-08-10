
import styles from './MovieBanner.module.css'
import { useBuildImageUrl } from 'shared/hooks/useBuildImageUrl';

type Props = {
    backdropPath: string | null;
}
export const MovieBanner = ({ backdropPath }: Props) => {
    const buildImageUrl = useBuildImageUrl();

    return (
        <div className={styles.banner}>
            <picture>
                <img
                    className={styles.bannerImage}
                    src={buildImageUrl(backdropPath, 'original', 'backdrop_size')}
                    alt="Кинематографичный баннер фильма"
                />
            </picture>
            <div className={styles.bannerOverlay} />
        </div>
    )
}