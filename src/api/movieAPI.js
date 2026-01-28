import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
// Create axios instance
const api = axios.create({
baseURL: API_BASE_URL,
timeout: 10000,
headers: {
'Content-Type': 'application/json'
}
});
// Request interceptor
api.interceptors.request.use(
(config) => {
console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
return config;
},
(error) => {
return Promise.reject(error);
}
);
// Response interceptor
api.interceptors.response.use(
(response) => {
return response.data;
},
(error) => {
const message = error.response?.data?.message || error.message || 'An error occurred';
console.error('API Error:', message);
return Promise.reject(new Error(message));
}
);
// Movie API calls
export const movieAPI = {
// Search movies from OMDB
searchMovies: async (query, page = 1, save = true) => {
return await api.get('/movies/search', {
params: { query, page, save }
});
},
// Get all movies from database
getAllMovies: async (filters = {}) => {
return await api.get('/movies', { params: filters });
},
// Get single movie by database ID
getMovieById: async (id) => {
return await api.get(`/movies/${id}`);
},
// Get movie by IMDb ID
getMovieByImdbId: async (imdbId) => {
return await api.get(`/movies/imdb/${imdbId}`);
},
// Get popular movies
getPopularMovies: async () => {
return await api.get('/movies/popular');
},
// Text search in database
textSearch: async (query) => {
return await api.get('/movies/text-search', {
params: { q: query }
});
},
// Get movie statistics
getStats: async () => {
return await api.get('/movies/stats/overview');
}
};
// User API calls
export const userAPI = {
// Create new user
createUser: async (userData) => {
return await api.post('/users', userData);
},
// Get user by ID
getUserById: async (userId) => {
return await api.get(`/users/${userId}`);

  },
  // Add to favorites
  addToFavorites: async (userId, movieId) => {
    return await api.post(`/users/${userId}/favorites/${movieId}`);
  },
  // Remove from favorites
  removeFromFavorites: async (userId, movieId) => {
    return await api.delete(`/users/${userId}/favorites/${movieId}`);
  },
  // Add to watchlist
  addToWatchlist: async (userId, movieId) => {
    return await api.post(`/users/${userId}/watchlist`, { movieId });
  },
  // Mark as watched
  markAsWatched: async (userId, movieId) => {
    return await api.patch(`/users/${userId}/watchlist/${movieId}`);
  }
};
export default api;