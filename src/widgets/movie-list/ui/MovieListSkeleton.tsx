// MovieListSkeleton.tsx
import React from 'react';
import style from './MovieList.module.css';
import skeletonStyle from './MovieListSkeleton.module.css'; // отдельные стили для скелетона (можно объединить)


type SkeletonProps = {
    columns?: number;
    limit?: number;
    flag?: boolean;
};

export const MovieListSkeleton: React.FC<SkeletonProps> = ({
    columns = 5,
    limit = 20,
    flag = true
}) => {

    const skeletonItems = Array.from({ length: limit }, (_, i) => i);

    return (
        <section className={style.section_movies}>
            {
                flag &&
                (<div className={style.section_movies_top}>
                    <h2 className={skeletonStyle.skeletonTitle}></h2>
                    <div className={skeletonStyle.skeletonButton} />
                </div>)
            }

            <div className={style.grid} style={{ '--columns': columns } as React.CSSProperties}>
                {skeletonItems.map((index) => (
                    <div key={index} className={skeletonStyle.skeletonCard}>
                        <div className={skeletonStyle.skeletonImage} />
                        <div className={skeletonStyle.skeletonText} />
                        <div className={skeletonStyle.skeletonRating} />
                    </div>
                ))}
            </div>
        </section>
    );
};