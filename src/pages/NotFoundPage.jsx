import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const NotFoundPage = () => (
  <div className="text-center py-20 space-y-6">
    <h1 className="text-9xl font-bold text-primary-500">404</h1>
    <h2 className="text-3xl font-semibold">გვერდი ვერ მოიძებნა</h2>
    <p className="text-gray-500">თქვენს მიერ მოთხოვნილი გვერდი არ არსებობს.</p>
    <Link to={ROUTES.HOME} className="btn-primary inline-block">
      მთავარ გვერდზე დაბრუნება
    </Link>
  </div>
);

export default NotFoundPage;