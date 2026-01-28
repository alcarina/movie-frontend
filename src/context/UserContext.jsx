import { createContext, useState, useEffect } from 'react';
import { userAPI } from '../api/movieAPI';
import { STORAGE_KEYS } from '../utils/constants';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
// Load user from localStorage on mount
useEffect(() => {
const loadUser = async () => {
try {
const userId = localStorage.getItem(STORAGE_KEYS.USER_ID);
if (userId) {
const response = await userAPI.getUserById(userId);
setUser(response.data);
}
} catch (error) {
console.error('Failed to load user:', error);
localStorage.removeItem(STORAGE_KEYS.USER_ID);
} finally {
setLoading(false);
}
};
loadUser();
}, []);
// Create or login user
const loginUser = async (username, email) => {
try {
const response = await userAPI.createUser({ username, email });
const userData = response.data;
setUser(userData);
localStorage.setItem(STORAGE_KEYS.USER_ID, userData._id);
return userData;
} catch (error) {
throw error;
}
};
// Logout user
const logoutUser = () => {
setUser(null);
localStorage.removeItem(STORAGE_KEYS.USER_ID);
};
// Refresh user data
const refreshUser = async () => {
if (!user) return;
try {
const response = await userAPI.getUserById(user._id);
setUser(response.data);
} catch (error) {
console.error('Failed to refresh user:', error);
}
};
// Add to favorites
const addToFavorites = async (movieId) => {
if (!user) throw new Error('Please login first');
try {
await userAPI.addToFavorites(user._id, movieId);
await refreshUser();
} catch (error) {
throw error;
}
};
// Remove from favorites
const removeFromFavorites = async (movieId) => {
if (!user) throw new Error('Please login first');
try {
await userAPI.removeFromFavorites(user._id, movieId);
await refreshUser();
} catch (error) {
throw error;
}
};
// Add to watchlist
const addToWatchlist = async (movieId) => {
if (!user) throw new Error('Please login first');
try {
await userAPI.addToWatchlist(user._id, movieId);
await refreshUser();
} catch (error) {
throw error;
}
};
// Check if movie is in favorites
const isFavorite = (movieId) => {
if (!user || !user.favorites) return false;
return user.favorites.some(fav => 
(fav._id || fav) === movieId
);
};
// Check if movie is in watchlist
const isInWatchlist = (movieId) => {
if (!user || !user.watchlist) return false;
return user.watchlist.some(item => 
(item.movieId._id || item.movieId) === movieId
);
};
const value = {
    user,
    loading,
    loginUser,
    logoutUser,
    refreshUser,
    addToFavorites,
    removeFromFavorites,
    addToWatchlist,
    isFavorite,
    isInWatchlist
};
return (
<UserContext.Provider value={value}>
{children}
</UserContext.Provider>
  );
};