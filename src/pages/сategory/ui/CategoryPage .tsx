import { useGetInfiniteMoviesInfiniteQuery, type EndPointsName } from "entities/movie"
import PageNotFound from "pages/not-found"
import { useParams } from "react-router"

import { CategoryNavigation } from "widgets/category-navigation"
import style from './CategoryPage.module.css'
import { MovieList } from "widgets/movie-list"

import { LoadMorePagination } from "shared/ui/loadMorePagination"


const TITLES_MAP: Record<EndPointsName, string> = {
  now_playing: 'Now Playing',
  popular: 'Popular',
  top_rated: 'Top Rated',
  upcoming: 'Upcoming',
}

const VALID_ENDPOINTS: readonly EndPointsName[] = ['popular', 'upcoming', 'top_rated', 'now_playing']


const CategoryPage = () => {

  const { subcategory } = useParams() as { subcategory: EndPointsName }

  const isValid = VALID_ENDPOINTS.includes(subcategory)

  const { data, isLoading, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetInfiniteMoviesInfiniteQuery({ endPoint: subcategory }, { skip: !isValid })

  if (!isValid) {
    return <PageNotFound />
  }

  const movies = data?.pages?.flatMap(page => page.results)



  const title = TITLES_MAP[subcategory]

  return (
    <>
      <div className={style.container}>
        < CategoryNavigation />
        <MovieList data={movies ?? []} columns={5} title={title} isSkeleton={isLoading} />
        {/* {data && <Pagination pagesCount={data?.total_pages >= 500 ? 500 : data?.total_pages} currentPage={data.page} setCurrentPage={setCurrentPageHandler} />} */}

        {
          data && <LoadMorePagination isLoading={isLoading} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} isFetching={isFetching} />
        }
      </div>


    </>
  )
}

export default CategoryPage 