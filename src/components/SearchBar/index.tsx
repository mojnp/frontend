import './index.scss';
import { useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const SearchBarDesktop = ({ onSearch, placeholder }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { pathname } = location;

  let buttonColor = '';

  if (pathname.includes('/news')) {
    buttonColor = 'blue-svg-color';
  } else if (pathname.includes('/tourism')) {
    buttonColor = 'green-svg-color';
  } else if (pathname.includes('/report-a-problem')) {
    buttonColor = 'red-svg-color';
  } else {
    buttonColor = 'normal';
  }

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
        <AiOutlineSearch className={`svg-icon ${buttonColor}`} />
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

const SearchBarMobile = ({ onSearch, placeholder }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { pathname } = location;

  let buttonColor = '';

  if (pathname.includes('/news')) {
    buttonColor = 'blue-svg-color';
  } else if (pathname.includes('/tourism')) {
    buttonColor = 'green-svg-color';
  } else if (pathname.includes('/report-a-problem')) {
    buttonColor = 'red-svg-color';
  } else {
    buttonColor = 'normal';
  }

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
    <div className="SearchBarMobile">
      <button onClick={handleSearch}>
        <AiOutlineSearch className={`svg-icon ${buttonColor}`} />
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

const SearchBar = () => {
  const { width } = useViewportSize();
  const [, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <>
      {width <= 786 ? (
        <SearchBarMobile
          onSearch={handleSearchQueryChange}
          placeholder="Pretrazite sajt..."
        />
      ) : (
        <SearchBarDesktop
          onSearch={handleSearchQueryChange}
          placeholder="Pretrazite sajt..."
        />
      )}
    </>
  );
};

export default SearchBar;
