export const fetchMovies = async (searchText, moviesCallback, errorCallback) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f41d68df`)
        const data = await response.json();

        if (data.Response === 'True') {
            moviesCallback(data.Search);
            errorCallback(null);
        } else {
            moviesCallback([]);
            errorCallback(data.Error);
        }
        
    } catch (err) {
        moviesCallback([]);
        errorCallback('Error while fetching data.');
    }
};