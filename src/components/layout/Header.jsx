import { Link, useLocation } from 'react-router-dom';
import { Film, Heart, Bookmark, User } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
          <div className="bg-primary-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <Film size={24} />
          </div>
          <span className="font-black text-2xl tracking-tighter text-gray-900 uppercase">Movie<span className="text-primary-600">Hub</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to={ROUTES.HOME} active={isActive(ROUTES.HOME)}>მთავარი</NavLink>
          <NavLink to={ROUTES.POPULAR} active={isActive(ROUTES.POPULAR)}>პოპულარული</NavLink>
          <div className="h-6 w-px bg-gray-200 mx-2"></div>
          <Link to={ROUTES.FAVORITES} className="text-gray-600 hover:text-primary-600 transition-colors">
            <Heart size={22} />
          </Link>
          <Link to={ROUTES.WATCHLIST} className="text-gray-600 hover:text-primary-600 transition-colors">
            <Bookmark size={22} />
          </Link>
          <button className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-primary-600 transition-all">
            <User size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
};

// დამხმარე კომპონენტი ნავიგაციისთვის
const NavLink = ({ to, active, children }) => (
  <Link to={to} className={`text-sm font-bold uppercase tracking-wider transition-all ${active ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-900'}`}>
    {children}
  </Link>
);

export default Header;