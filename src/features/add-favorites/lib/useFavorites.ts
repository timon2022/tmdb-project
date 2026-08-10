import type { Movie } from 'entities/movie';
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { getFromStorage, setToStorage } from 'shared/lib/storage/helpers';


export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        return getFromStorage<Movie[]>('favorites') || [];
    });

    // Реф для отслеживания источника изменений
    const isInternalUpdate = React.useRef(false);

    // Сохраняем в localStorage при изменении favorites
    useEffect(() => {
        // Если это внутреннее обновление - диспатчим событие
        if (isInternalUpdate.current) {
            setToStorage('favorites', favorites);
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'favorites',
                newValue: JSON.stringify(favorites),
            }));
            isInternalUpdate.current = false;
        } else {
            // Если обновление из storage - просто сохраняем без события
            setToStorage('favorites', favorites);
        }
    }, [favorites]);

    // Слушаем изменения из других вкладок
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'favorites' && e.newValue) {
                try {
                    const newFavorites = JSON.parse(e.newValue);
                    // Проверяем, что данные действительно изменились
                    if (JSON.stringify(newFavorites) !== JSON.stringify(favorites)) {
                        isInternalUpdate.current = false;
                        setFavorites(newFavorites);
                    }
                } catch (error) {
                    console.error('Ошибка синхронизации избранного:', error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [favorites]);

    const toggleFavorite = useCallback((movie: Movie) => {
        setFavorites(prev => {
            const isExist = prev.some(m => movie.id === m.id);
            const newFavorites = isExist
                ? prev.filter((m) => movie.id !== m.id)
                : [...prev, movie];
            
            // Помечаем как внутреннее обновление
            isInternalUpdate.current = true;
            return newFavorites;
        });
    }, []);

    const isFavorite = useCallback((id: number) => favorites.some(m => id === m.id), [favorites]);

    return { favorites, toggleFavorite, isFavorite };
};