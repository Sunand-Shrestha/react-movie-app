import '../css/Favourite.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard';

function Favourite(){

    const {favourites} = useMovieContext();

    if(favourites){
        return(
            <div>
                <h2>Your Favourite</h2>
                 <div className="movies-grid">
                {favourites.map((movie) => 
                // movie.title.toLocaleLowerCase().startsWith(searchQuery) &&
                <MovieCard movie={movie} key={movie.id}/>
                )}
                </div> 
            </div>
        )
    }

    return(
        <div className="favorites-empty">
            <h2>No Favorite Movie yet!</h2>
            <p>Start adding moveis to your favorite and they will start appearing</p>
        </div>
    )

}
export default Favourite