import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./ErrorAlert";
import MovieDetail from "./MovieDetail";

function MoviesPortal() {
    const [searchInputText, setSearchInputText] = useState('');
    const [enteredSearchText, setEnteredSearchText] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const onSearchTextEnter = (e) => {
        e.preventDefault();
        setLoading(true);
        fetchMovies(searchInputText, setMovies, setError, () => {setEnteredSearchText(searchInputText); setLoading(false)}) 
        setEnteredSearchText(searchInputText)
    };

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={onSearchTextEnter}>
                            <input
                                type="text" placeholder="Search for a Movie" className="form-control"
                                value={searchInputText}
                                onChange={(e) => setSearchInputText(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            {loading && (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                </div>
            )}
            {error && <ErrorAlert error={error} searchTerm={enteredSearchText}/>}
            {movies.length > 0 &&  <p className='text-light'>Showing {movies.length} Movies for '{enteredSearchText}'</p>}
            {movies.map((movie) => (
                <MovieDetail key={movie.imdbID} movie={movie}/>
            ))}
            {error}
      </>
    );
  }
  
export default MoviesPortal;