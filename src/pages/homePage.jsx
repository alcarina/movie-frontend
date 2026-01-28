import { useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';
import SearchBar from '../components/movies/SearchBar';
import MovieList from '../components/movies/MovieList';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const HomePage = () => {
  const { movies, popularMovies, loading, error, searchMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">აღმოაჩინე საუკეთესო ფილმები</h1>
        <SearchBar onSearch={searchMovies} />
      </section>

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          {movies.length > 0 ? 'ძებნის შედეგები' : 'პოპულარული ფილმები'}
        </h2>
        <MovieList movies={movies.length > 0 ? movies : popularMovies} />
      </section>
    </div>
  );
};

export default HomePage;