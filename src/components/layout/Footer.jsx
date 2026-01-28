import { APP_NAME } from '../../utils/constants';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 mt-20">
    <div className="container mx-auto px-4 text-center">
      <p className="text-lg font-semibold">{APP_NAME}</p>
      <p className="text-gray-400 mt-2">© {new Date().getFullYear()} ყველა უფლება დაცულია.</p>
    </div>
  </footer>
);

export default Footer;