import { useState } from 'react';
import { Search } from 'lucide-react';
const SearchBar = ({ onSearch, placeholder = 'Search movies...' }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          placeholder={placeholder}
          className="input-field pr-14 text-lg shadow-lg"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg"
        >
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

