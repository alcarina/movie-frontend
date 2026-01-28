export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'MovieHub';
export const MOVIE_TYPES = {
  MOVIE: 'movie',
  SERIES: 'series',
  EPISODE: 'episode'
};
export const STORAGE_KEYS = {
  USER_ID: 'moviehub_user_id',
  USER_DATA: 'moviehub_user_data'
};
export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  MOVIE_DETAILS: '/movie/:id',
  FAVORITES: '/favorites',
  WATCHLIST: '/watchlist',
  POPULAR: '/popular'
};