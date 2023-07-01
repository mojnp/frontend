import './index.scss';
import { useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
  currentTheme: any;
}

const SearchBarDesktop = ({
  onSearch,
  placeholder,
  currentTheme,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleSearch = async (query: string) => {
    if (searchQuery.length === 0) {
      return;
    }
    const response = await axios.post(
      `https://api.mojnovipazar.info/search/${query}`
    );

    if (response.data) {
      setSearchedData(response.data);
    }
  };

  const handleNewsItemClick = (item: any) => {
    navigate(`/news/search/${item.key}`);
  };

  useEffect(() => {
    setSearchQuery('');
    onSearch('');
  }, [location.pathname]);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className={`SearchBar ${currentTheme}`}>
      <div className="inputs">
        <button>
          <AiOutlineSearch className={`svg-icon ${buttonColor}`} />
        </button>
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          name="Search Bar"
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="dropdowns">
          <p>Rezultat pretrage:</p>
          {searchedData.length > 0 ? (
            searchedData.map((item: any, index: number) => (
              <span key={index} onClick={() => handleNewsItemClick(item)}>
                {item.title.slice(0, 30)}... - <em>vesti</em>
              </span>
            ))
          ) : (
            <p>Nema podudarnih pretraga.</p>
          )}
        </div>
      )}
    </div>
  );
};

const SearchBarMobile = ({
  onSearch,
  placeholder,
  currentTheme,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();
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

  const handleSearch = async (query: string) => {
    if (searchQuery.length === 0) {
      return;
    }
    const response = await axios.post(
      `https://api.mojnovipazar.info/search/${query}`
    );

    if (response.data) {
      setSearchedData(response.data);
    }
  };

  const handleNewsItemClick = (item: any) => {
    navigate(`/news/${item.linkId}`);
  };

  useEffect(() => {
    setSearchQuery('');
    onSearch('');
  }, [location.pathname]);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className={`SearchBarMobile ${currentTheme}`}>
      <div className="inputs">
        <button>
          <AiOutlineSearch className={`svg-icon ${buttonColor}`} />
        </button>
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          name="Search Bar"
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="dropdowns">
          <p>Rezultat pretrage:</p>
          {searchedData.length > 0 ? (
            searchedData.map((item: any, index: number) => (
              <span key={index} onClick={() => handleNewsItemClick(item)}>
                {item.title.slice(0, 30)}... - <em>vesti</em>
              </span>
            ))
          ) : (
            <p>Nema podudarnih pretraga</p>
          )}
        </div>
      )}
    </div>
  );
};

const SearchBar = ({ currentTheme }: any) => {
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
          currentTheme={currentTheme}
        />
      ) : (
        <SearchBarDesktop
          onSearch={handleSearchQueryChange}
          placeholder="Pretrazite sajt..."
          currentTheme={currentTheme}
        />
      )}
    </>
  );
};

export default SearchBar;
