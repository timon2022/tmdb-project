export type ImagesConfig = {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

export type ConfigurationResponse = {
    images: ImagesConfig;
    change_keys: string[];
}



export type AllowedImageSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780';