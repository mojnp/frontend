import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';
import { Routes, Route } from 'react-router-dom';
import Tourism, { dummyData } from './Tourism/Tourism';
import ReportProblem from './ReportProblem/ReportProblem';
import NoPage from '../NoPage/NoPage';
import TourismSection from './Tourism/HelperTourism/TourismSection';
import Home from './Home/Home';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import SearchBar from './SearchBar/SearchBar';
import { useState } from 'react';

const DesktopUI = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <>
      <ScrollToTop />
      <SearchBar
        onSearch={handleSearchQueryChange}
        placeholder="Pretrazite..."
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News searchQuery={searchQuery} />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route
          path="/tourism/:id"
          element={<TourismSection cards={dummyData} />}
        />
        <Route path="/report-a-problem" element={<ReportProblem />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DesktopUI;
