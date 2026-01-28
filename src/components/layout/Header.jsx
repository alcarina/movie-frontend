import { Link } from 'react-router-dom';
import { Film, Heart, Bookmark } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center gap-2 text-primary-600 font-bold text-xl">
          <Film /> MovieHub
        </Link>
        <nav className="flex gap-6">
          <Link to={ROUTES.FAVORITES} className="flex items-center gap-1 hover:text-primary-600"><Heart size={20}/> ფავორიტები</Link>
          <Link to={ROUTES.WATCHLIST} className="flex items-center gap-1 hover:text-primary-600"><Bookmark size={20}/> ჩემი სია</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;