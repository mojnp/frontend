import FooterMobile from './FooterMobile/FooterMobile';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import { Route, Routes } from 'react-router-dom';
import NewsMobile from './NewsMobile/NewsMobile';
import TourismMobile, { dummyData } from './TourismMobile/TourismMobile';
import ReportProblemMobile from './ReportProblemMobile/ReportProblemMobile';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import MainNewsFetchMobile from './NewsMobile/HelperNewsMobile/MainNewsFetchMobile';
import NoPage from '../NoPage/NoPage';
import TourismSectionMobile from './TourismMobile/HelperTourismMobile/TourismSectionMobile';
import HomeMobile from './HomeMobile/HomeMobile';
import SearchBar from './SearchBarMobile/SearchBarMobile';
import { useState } from 'react';

const MobileUI = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <ScrollToTop />
      <SearchBar onSearch={handleSearchQueryChange} placeholder="Pretrazi..." />
      <HeaderMobile />
      <Routes>
        <Route path="/" element={<HomeMobile />} />
        <Route
          path="/news"
          element={<NewsMobile searchQuery={searchQuery} />}
        />
        <Route path="/news/:linkId" element={<MainNewsFetchMobile />} />
        <Route path="/tourism" element={<TourismMobile />} />
        <Route
          path="/tourism/:id"
          element={<TourismSectionMobile cards={dummyData} />}
        />
        <Route path="/report-a-problem" element={<ReportProblemMobile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <FooterMobile />
    </>
  );
};

export default MobileUI;
