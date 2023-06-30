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
import Login from './components/Header/Helper/Authentication/Login';
import Signup from './components/Header/Helper/Authentication/Signup';
import { useEffect, useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import './index.scss';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const currentTheme = isDarkMode ? 'dark' : 'light';

  useHotkeys([['shift+T', () => toggleTheme()]]);

  return (
    <div className={currentTheme}>
      <ScrollToTop />
      <SearchBar currentTheme={currentTheme} />
      <Header currentTheme={currentTheme} />
      <Routes>
        <Route path="/" element={<Home currentTheme={currentTheme} />} />
        <Route path="/news" element={<News currentTheme={currentTheme} />} />
        <Route
          path="/news/:linkId"
          element={<MainNewsFetchMobile currentTheme={currentTheme} />}
        />
        <Route
          path="/tourism"
          element={<Tourism currentTheme={currentTheme} />}
        />
        <Route
          path="/tourism/:id"
          element={
            <TourismSection currentTheme={currentTheme} cards={dummyData} />
          }
        />
        <Route
          path="/report-a-problem"
          element={<ReportProblem currentTheme={currentTheme} />}
        />
        <Route path="/report-a-problem" element={<ReportProblem />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer currentTheme={currentTheme} />
    </div>
  );
};

export default App;
