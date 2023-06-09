import { useEffect, useState } from 'react';
import MainNewsMobile from './MainNewsMobile';
import axios from 'axios';
import { NewsItems } from './NewsItem';

const MainNewsFetchMobile = ({ currentTheme }: any) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  useEffect(() => {
    axios
      .get('https://api.mojnovipazar.info/news/')
      .then(response => response.data)
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MainNewsMobile news={newsItems} currentTheme={currentTheme} />
    </>
  );
};

export default MainNewsFetchMobile;
