import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Tourism, { dummyData } from './components/Tourism';
import ReportProblem from './components/ReportProblem';
import NoPage from './components/NoPage/NoPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import MainNewsFetchMobile from './components/News/Helper/MainNewsFetchMobile';
import TourismSection from './components/Tourism/Helper/TourismSection';

function App() {
  return (
    <>
      <ScrollToTop />
      <SearchBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:linkId" element={<MainNewsFetchMobile />} />
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
}

export default App;
