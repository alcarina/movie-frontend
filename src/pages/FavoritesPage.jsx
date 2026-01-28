import { useUser } from '../hooks/useUser';
import MovieList from '../components/movies/MovieList';
import { HeartOff } from 'lucide-react';

const FavoritesPage = () => {
  const { user, loading } = useUser();

  if (loading) return <div className="text-center">იტვირთება...</div>;

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <HeartOff className="text-primary-500" /> ჩემი ფავორიტები
        </h1>
        <p className="text-gray-500">შენი რჩეული ფილმების კოლექცია</p>
      </div>

      {user?.favorites?.length > 0 ? (
        <MovieList movies={user.favorites} />
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <p className="text-xl text-gray-500">ფავორიტების სია ცარიელია.</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;