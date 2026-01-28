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
    <div className="space-y-16 pb-20">
      {/* Hero სექცია - ბანერი */}
      <section className="relative --h-[500px] flex items-center justify-center rounded-[2.5rem] overflow-hidden bg-gray-950 px-6 text-center shadow-2xl">
        {/* Background ეფექტი */}
        <div className="absolute inset-0 --bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-gray-950 to-gray-950"></div>
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            აღმოაჩინე შენი შემდეგი <br />
            <span className="text-transparent bg-clip-text --bg-gradient-to-r from-primary-500 to-red-500 uppercase">
              საყვარელი ფილმი
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            ათასობით ფილმი, რეიტინგები და პერსონალური კოლექციები ერთ სივრცეში.
          </p>
          <div className="max-w-2xl mx-auto w-full">
            <SearchBar onSearch={searchMovies} placeholder="მოძებნე ფილმი, ჟანრი ან მსახიობი..." />
          </div>
        </div>
      </section>

      {/* კონტენტის სექცია */}
      <section className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {movies.length > 0 ? 'ძებნის შედეგები' : '🔥 პოპულარული ფილმები'}
          </h2>
          <div className="h-1 --flex-grow mx-6 --bg-gradient-to-r from-gray-200 to-transparent rounded-full opacity-50"></div>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <MovieList movies={movies.length > 0 ? movies : popularMovies} />
        )}
      </section>
    </div>
  );
};

export default HomePage;