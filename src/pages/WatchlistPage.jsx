import { useUser } from '../hooks/useUser';
import MovieCard from '../components/movies/MovieCard';

const WatchlistPage = () => {
  const { user } = useUser();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">საყურებელი სია</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {user?.watchlist?.map((item) => (
          <MovieCard key={item.movieId._id} movie={item.movieId} />
        ))}
        {(!user?.watchlist || user.watchlist.length === 0) && (
          <p className="col-span-full text-center text-gray-500 py-10">
            სიაში არაფერია დამატებული.
          </p>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
