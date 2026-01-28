import { Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie._id}`} className="group relative block overflow-hidden rounded-2xl bg-gray-900 transition-all hover:-translate-y-2 --hover:shadow-[0_20px_50px_rgba(239,_68,_68,_0.3)]">
      {/* ფილმის პოსტერი */}
      <div className="--aspect-[2/3] w-full">
        <img 
          src={movie.poster || 'https://via.placeholder.com/300x450?text=No+Image'} 
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* ინფორმაცია Hover-ზე */}
      <div className="absolute inset-0 --bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
        
        <div className="flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-primary-500" />
            <span>{movie.year}</span>
          </div>
          {movie.imdbRating && (
            <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded text-yellow-500 border border-yellow-500/30">
              <Star size={14} fill="currentColor" />
              <span className="font-bold">{movie.imdbRating}</span>
            </div>
          )}
        </div>
        
        <button className="mt-4 w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-bold transition-colors">
          ნახვა
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;