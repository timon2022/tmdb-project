

import { useFavorites } from "features/add-favorites"

import { MovieList } from "widgets/movie-list"





const Favorites = () => {
    const { favorites } = useFavorites()


    return (
        <>
            {favorites.length !== 0 ?
                <MovieList title="Favorites" data={favorites} columns={5} limit={5} />
                :
                <h2>Add movies to favorites to see them on this page.</h2>
            }
        </>
    )
}

export default Favorites