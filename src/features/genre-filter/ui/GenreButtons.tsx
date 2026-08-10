// features/genre-filter/ui/GenreButtons.tsx
import { useSearchParams } from 'react-router';
import styles from './GenreButtons.module.css'; // опционально
import { useGetMoviesGenresQuery } from 'entities/movie';
// import { Button } from 'shared/ui/button';

export const GenreButtons = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data } = useGetMoviesGenresQuery()
    const genres = data?.genres || []
    const selectedGenres = searchParams.get('with_genres')?.split(',') || []


    const handleBtn = (id: number) => {
        const idStr = id.toString()
        let newSelected: string[];

        if (selectedGenres.includes(id.toString())) {
            newSelected = selectedGenres.filter(g => g !== idStr)
        }
        else {
            newSelected = [...selectedGenres, idStr]
        }

        setSearchParams(prev => {
            if (newSelected.length === 0) {
                prev.delete('with_genres');
            } else {
                prev.set('with_genres', newSelected.join(','));
            }
            return prev;
        });
    };
    const handleBtnReset = () => {
        setSearchParams(() => { return {} })
    }
    return (
        <div className={styles.btnCon}>
            {genres?.map((g) => (
                <button
                    className={`${styles.button} ${selectedGenres.includes(g.id.toString()) ? styles.activeButton : ""}`}
                    key={g.id}
                    onClick={() => handleBtn(g.id)}>
                    {g.name}
                </button>
            ))
            }

            <button onClick={handleBtnReset}>Reset Filter</button>
        </div >
    );
};