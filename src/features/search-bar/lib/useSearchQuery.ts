
import { useSearchParams } from "react-router";

export const useSearchQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const page = Number(searchParams.get('page')) || 1;
    debugger
    const setQuery = (newQuery: string, newPage: string = '1') => {
        setSearchParams(prev => {

            prev.set('query', newQuery.trim())
            prev.set('page', newPage)

            return prev
        });
    };

    return { query, page, setQuery };
};