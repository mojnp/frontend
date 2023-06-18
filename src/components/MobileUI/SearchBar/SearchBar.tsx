import './SearchBar.scss';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const SearchBar = ({ onSearch, placeholder }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  useEffect(() => {
    setSearchQuery('');
    onSearch('');
  }, [location.pathname]);

  return (
    <div className="SearchBar">
      <button onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        name="Search Bar"
      />
    </div>
  );
};

export default SearchBar;
