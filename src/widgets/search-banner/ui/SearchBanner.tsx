import { useGetMoviesQuery } from 'entities/movie';
import style from './SearchBanner.module.css'
import { SearchBar } from "features/search-bar";
import { useBuildImageUrl } from 'shared/hooks/useBuildImageUrl';
import { useNavigate } from 'react-router';
import { SearchBannerSkeleton } from './SearchBannerSkeleton';

export const SearchBanner = () => {
    const { data, isLoading } = useGetMoviesQuery({ endPoint: 'popular' })

    const buildImageUrl = useBuildImageUrl();
    const navigate = useNavigate();



    const handleSearch = (query: string) => {
        if (!query.trim()) return;
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };
    if (isLoading) {
        return <SearchBannerSkeleton />;
    }
    const url = `url(${buildImageUrl(data?.results[Math.floor(Math.random() * data?.results.length)]?.backdrop_path ?? null, 'original', 'backdrop_size')})`
    return (<>
        <section className={style.section} style={{ backgroundImage: url }}>
            <div className={style.section_content}>
                <h1>Welcome!</h1>
                <h2>Find something for yourself!</h2>
                < SearchBar onSubmitSearch={handleSearch} />
            </div>
        </section >
    </>)
}   