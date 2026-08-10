import { useCallback } from "react"


type Props = {
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    isFetching: boolean;
    isFetchingNextPage: boolean;
}

export const LoadMorePagination = ({
    fetchNextPage,
    hasNextPage,
    // isLoading,
    isFetching,
    isFetchingNextPage
}: Props) => {

    const loadMoreHandler = useCallback(() => {
        if (hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetching, fetchNextPage]);

    // if (isLoading) {
    //     return "Loading..."; 
    // }

    return (
        <>
            {hasNextPage ? (
                <button onClick={loadMoreHandler} disabled={isFetching}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </button>
            ) : (
                <p>Nothing more to load</p>
            )}
        </>
    );
};
