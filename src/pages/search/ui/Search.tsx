import { useSearchMoviesQuery } from "entities/movie"
import { MovieList } from "widgets/movie-list"
import { SearchBar, useSearchQuery } from "features/search-bar"
import style from '../ui/search.module.css'
import { Pagination } from "shared/ui/pagination"

const Search = () => {

    const { query, page, setQuery } = useSearchQuery()

    const { data, isFetching } = useSearchMoviesQuery({ query, page: page.toString() }, { skip: !query.trim() })

    const handlePageChange = (newPage: number) => {
        setQuery(query, newPage.toString());
    };

    const handleSearchSubmit = (newQuery: string) => {
        setQuery(newQuery);
    };

    return (
        <>

            <section className={style.serach_section}>
                <h1>Search movie</h1>
                < SearchBar onSubmitSearch={handleSearchSubmit} value={query} />
                {data?.results && data?.results.length > 0
                    ?
                    <>
                        <div className={style.container}>
                            <MovieList data={data?.results ?? []} columns={5} />
                            <Pagination pagesCount={data.total_pages} currentPage={page} setCurrentPage={handlePageChange} />
                        </div>
                    </>
                    : !query ? (<h1>Find a movie...</h1>) : !isFetching &&
                        (<h1>No Result for {`"${query}"`}</h1>)}
            </section>
        </>
    )
}
export default Search