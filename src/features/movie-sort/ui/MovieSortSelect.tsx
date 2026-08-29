import type { ChangeEvent } from "react";
import { useSearchParams } from "react-router";
import styles from './MovieSortSelect.module.css';

const sortOptions = [
    { value: 'original_title.asc', label: 'Title (A → Z)' },
    { value: 'original_title.desc', label: 'Title (Z → A)' },
    { value: 'popularity.asc', label: 'Popularity (▲)' },
    { value: 'popularity.desc', label: 'Popularity (▼)' },
    { value: 'revenue.asc', label: 'Revenue (▲)' },
    { value: 'revenue.desc', label: 'Revenue (▼)' },
    { value: 'primary_release_date.asc', label: 'Release Date (▲)' },
    { value: 'primary_release_date.desc', label: 'Release Date (▼)' },
    { value: 'vote_average.asc', label: 'Rating (▲)' },
    { value: 'vote_average.desc', label: 'Rating (▼)' },
];


export const MovieSortSelect = () => {
    const [_searchParams, setSearchParams] = useSearchParams();

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(prev => {
            prev.set('sort_by', e.currentTarget.value);
            return prev
        })
    }
    return (
        <div  className={styles.lable}>

            <span> Sort by
            </span>
            <select  onChange={handleSelect} className={styles.select}>
                {sortOptions.map(option =>
                    <option key={option.value} value={option.value} >
                        {option.label}
                    </option>
                )}
            </select>

        </div>
    )

}