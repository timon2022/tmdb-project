
import { useGetMoviesDiscoverQuery } from 'entities/movie';
import styles from './filtered.module.css'
import { MovieList } from 'widgets/movie-list';
import { useSearchParams } from 'react-router';
import { SortBar } from 'widgets/sort-bar';
import { Pagination } from 'shared/ui/pagination';



const Filtered = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const page = Number(searchParams.get('page')) || 1;

    const allParams = Object.fromEntries(searchParams.entries());
    const { data, isLoading } = useGetMoviesDiscoverQuery(allParams)
    const movie = data?.results ?? []


    const handlePageChange = (newPage: number) => {
        setsearchParams(prev => {
            prev.set('page', newPage.toString())
            return prev
        })
    };



    return (
        <section className={styles.layout}>

            <div className={styles.layout1}>
                <SortBar />
            </div>
            {data?.results && data?.results.length > 0 &&
                <div>
                    <MovieList data={movie} columns={5} isSkeleton={isLoading} />
                    <Pagination pagesCount={data.total_pages} currentPage={page} setCurrentPage={handlePageChange} />
                </div>
            }
        </section >
    )
}

export default Filtered


