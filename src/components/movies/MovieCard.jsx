import { Link } from 'react-router-dom';
import { Star, Calendar, Heart } from 'lucide-react';
import { getPosterUrl, getRatingColor } from '../../utils/helpers';
import { useUser } from '../../hooks/useUser';
const MovieCard = ({ movie }) => {
const { user, isFavorite, addToFavorites, removeFromFavorites } = useUser();
const favorite = isFavorite(movie._id);
const handleFavoriteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
        if (!user) {
        alert('Please login to add favorites');
        return;
         }
        try {
        if (favorite) {
        await removeFromFavorites(movie._id);
        } else {
        await addToFavorites(movie._id);
        }
        } catch (error) {
        console.error('Failed to toggle favorite:', error);
        }
        };

return (
<Link to={`/movie/${movie._id}`} className="card overflow-hidden group">
{/* Poster */}
<div className="relative h-72 overflow-hidden bg-gray-200">
<img
          src={getPosterUrl(movie.poster)}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
}}
/>
{/* Favorite button */}
{user && (
    <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition ${
              favorite
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                  }`}>

           <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
              </button>
              )}

          
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
              <Star size={16} className="text-yellow-400" fill="currentColor" />
                    <span className={`font-bold ${getRatingColor(movie.imdbRating)}`}>
                          {movie.imdbRating}
                          </span>
              </div>
              )}
              </div>


              <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-primary-600 transition">
                    {movie.title}
                  </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                   <Calendar size={16} />
                    <span>{movie.year}</span>
                    </div>
              {movie.type && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium uppercase">
                      {movie.type}
                    </span>
              )}
              </div>

              {movie.genre && movie.genre.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((g, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
export default MovieCard;