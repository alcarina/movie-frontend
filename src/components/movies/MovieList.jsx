import MovieCard from './MovieCard';

const MovieList = ({ movies, emptyMessage = 'ფილმები ვერ მოიძებნა' }) => {
  // თუ ფილმების სია ცარიელია
  if (!movies || movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <p className="text-xl text-gray-500 font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard 
          key={movie._id || movie.imdbID} 
          movie={movie} 
        />
      ))}
    </div>
  );
};

export default MovieList;