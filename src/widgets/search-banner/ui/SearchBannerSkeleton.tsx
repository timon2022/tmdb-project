// SearchBannerSkeleton.tsx
import React from 'react';
// используем те же стили для структуры
import skeletonStyle from './SearchBannerSkeleton.module.css'; // отдельные стили для скелетона

export const SearchBannerSkeleton: React.FC = () => {
    return (
        <section className={skeletonStyle.skeletonSection}>
            <div className={skeletonStyle.skeletonContent}>
                <div className={skeletonStyle.skeletonTitle} />
                <div className={skeletonStyle.skeletonSubtitle} />
                <div className={skeletonStyle.skeletonSearchBarCon}>
                    <div className={skeletonStyle.skeletonSearchBar} />
                    <div className={skeletonStyle.skeletonSearchBarBtn} />
                </div>
            </div>

        </section>
    );
};