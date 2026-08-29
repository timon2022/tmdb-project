


import { selectMovies } from "features/add-favorites/model/favoriteSlice";
import { useSelector } from "react-redux";
import { MovieList } from "widgets/movie-list"


const Favorites = () => {

    const favorites = useSelector(selectMovies);

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