import { GenreButtons } from "features/genre-filter"
import { MovieSortSelect } from "features/movie-sort"
import styles from './SortBar.module.css'
import { BasicSlider } from "features/slider"

export const SortBar = () => {
    return (
        <>
            <aside className={styles.bar}>
                <h1>Filters / Sort</h1>
                <MovieSortSelect />
                <BasicSlider />
                <GenreButtons />
            </aside>
        </>
    )
}