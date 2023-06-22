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
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useHotkeys([['shift+T', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withCSSVariables
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <>
          <ScrollToTop />
          <SearchBar colorScheme={colorScheme} />
          <Header colorScheme={colorScheme} />
          <Routes>
            <Route path="/" element={<Home colorScheme={colorScheme} />} />
            <Route path="/news" element={<News colorScheme={colorScheme} />} />
            <Route
              path="/news/:linkId"
              element={<MainNewsFetchMobile colorScheme={colorScheme} />}
            />
            <Route
              path="/tourism"
              element={<Tourism colorScheme={colorScheme} />}
            />
            <Route
              path="/tourism/:id"
              element={
                <TourismSection colorScheme={colorScheme} cards={dummyData} />
              }
            />
            <Route
              path="/report-a-problem"
              element={<ReportProblem colorScheme={colorScheme} />}
            />
            <Route path="*" element={<NoPage colorScheme={colorScheme} />} />
          </Routes>
          <Footer colorScheme={colorScheme} />
        </>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
