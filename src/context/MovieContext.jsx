import { createContext, useState } from 'react';
import { movieAPI } from '../api/movieAPI';
export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState(null);
const [popularMovies, setPopularMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


// Search movies



const searchMovies = async (query) => {
setLoading(true);
setError(null);
try {
const response = await movieAPI.searchMovies(query, 1, true);
setMovies(response.data || []);
return response.data;
} catch (err) {
setError(err.message);
setMovies([]);
throw err;
} finally {
setLoading(false);
}
};


// Get all movies


const getAllMovies = async (filters = {}) => {
setLoading(true);
setError(null);
try {
const response = await movieAPI.getAllMovies(filters);
setMovies(response.data || []);
return response;
} catch (err) {
setError(err.message);
throw err;
} finally {
}
setLoading(false);
};


// Get movie details


const getMovieDetails = async (id) => {
setLoading(true);
setError(null);
try {
const response = await movieAPI.getMovieById(id);
setSelectedMovie(response.data);
return response.data;
} catch (err) {
setError(err.message);
throw err;
} finally {
setLoading(false);
}
};


// Get popular movies


const getPopularMovies = async () => {
setLoading(true);
setError(null);
try {
const response = await movieAPI.getPopularMovies();
setPopularMovies(response.data || []);
return response.data;
} catch (err) {
setError(err.message);
throw err;
} finally {
setLoading(false);
}
};


// Clear movies


const clearMovies = () => {
setMovies([]);
setError(null);
};

  const value = {
    movies,
    selectedMovie,
    popularMovies,
    loading,
    error,
    searchMovies,
    getAllMovies,
    getMovieDetails,
    getPopularMovies,
    clearMovies,
    setSelectedMovie
  };
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
  };