import { ActorCard } from "entities/actor"
import type { CastMember } from "entities/movie"
import styles from './ActorsList.module.css'
import { useBuildImageUrl } from "shared/hooks/useBuildImageUrl"

type Props = {
    actors: CastMember[]
}

export const ActorsList = ({ actors }: Props) => {

    const buildImageUrl = useBuildImageUrl();
    return (
        <>
            <div className={styles.actorsGrid}>
                {actors.map(actor => (
                    <ActorCard key={actor.id}
                        character={actor.character}
                        original_name={actor.original_name}
                        path={buildImageUrl(actor.profile_path, "w185", "profile_sizes")} />
                ))}
            </div>
        </>
    )
}