
import { useNavigate } from 'react-router';


export const useSearchNavigation = () => {
    const navigate = useNavigate();

    const handleSearch = (query: string) => {
        if (!query.trim()) return;
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };
    return handleSearch;
};