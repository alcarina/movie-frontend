import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import { UserProvider } from './context/UserContext';
import { ROUTES } from './utils/constants';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import WatchlistPage from './pages/WatchlistPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetailsPage />} />
              <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
              <Route path={ROUTES.WATCHLIST} element={<WatchlistPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </MovieProvider>
    </UserProvider>
  );
}

export default App;