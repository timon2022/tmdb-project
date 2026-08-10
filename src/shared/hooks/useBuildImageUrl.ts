import { useGetConfigurationQuery } from "shared/api";

export const useBuildImageUrl = () => {
    const { data: config, isLoading } = useGetConfigurationQuery(undefined);
    
    const buildImageUrl = (
        filePath: string | null,
        preferredSize = 'w500',
        type: 'logo_sizes' | 'backdrop_size' | 'poster_sizes' | 'profile_sizes' | 'still_sizes'
    ): string => {

        if (isLoading || !config || !filePath) {
            return 'https://placehold.co/500x750?text=No+poster';
        }

        const { secure_base_url } = config.images;
        
        let availableSizes: string[];

        switch (type) {
            case 'logo_sizes':
                availableSizes = config.images.logo_sizes;
                break;
            case 'backdrop_size':
                availableSizes = config.images.backdrop_sizes;
                break;
            case 'poster_sizes':
                availableSizes = config.images.logo_sizes;
                break;
            case 'profile_sizes':
                availableSizes = config.images.profile_sizes;
                break;
            case 'still_sizes':
                availableSizes = config.images.logo_sizes;
                break;
            default:
                availableSizes = config.images.poster_sizes;
        }
        const size = availableSizes.includes(preferredSize) ? preferredSize : 'original';
        
        return `${secure_base_url}${size}${filePath}`;
    };

    return buildImageUrl;
};