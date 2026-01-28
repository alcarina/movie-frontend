import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import { useUser } from '../hooks/useUser';
import Loading from '../components/common/Loading';
import { Star, Clock, Calendar } from 'lucide-react';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { selectedMovie, getMovieDetails, loading } = useMovies();
  const { addToFavorites, isFavorite } = useUser();

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  if (loading || !selectedMovie) return <Loading />;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <img 
        src={selectedMovie.poster} 
        alt={selectedMovie.title} 
        className="rounded-2xl shadow-2xl w-full"
      />
      <div className="md:col-cols-2 space-y-6">
        <h1 className="text-4xl font-bold">{selectedMovie.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="flex items-center gap-1"><Star className="text-yellow-500"/> {selectedMovie.imdbRating}</span>
          <span className="flex items-center gap-1"><Clock /> {selectedMovie.runtime}</span>
          <span className="flex items-center gap-1"><Calendar /> {selectedMovie.year}</span>
        </div>
        <p className="text-lg leading-relaxed text-gray-700">{selectedMovie.plot}</p>
        
        <button 
          onClick={() => addToFavorites(selectedMovie._id)}
          className={`btn-primary ${isFavorite(selectedMovie._id) ? 'bg-gray-500' : ''}`}
        >
          {isFavorite(selectedMovie._id) ? 'ფავორიტებშია' : 'ფავორიტებში დამატება'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;