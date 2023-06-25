import './index.scss';
import { useViewportSize } from '@mantine/hooks';
import MainNews from './Helper/MainNews';
import SecondaryNews from './Helper/SecondaryNews';
import SecondaryNewsMobile from './Helper/SecondaryNewsMobile';
import { NewsItems } from './Helper/NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsDesktop = ({ currentTheme }: any) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItems | null>(null);

  const handleNewsItemClick = (news: NewsItems) => {
    setSelectedNews(news);
  };

  useEffect(() => {
    axios
      .get('https://api.mojnovipazar.info/news/')
      .then(response => response.data)
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (newsItems.length > 0) {
      setSelectedNews(newsItems[0]);
    }
  }, [newsItems]);

  return (
    <div className={`News ${currentTheme}`}>
      <div className="News-Main-News">
        {selectedNews && <MainNews selectedNews={selectedNews} />}
      </div>
      <div className="News-Secondary-News">
        <SecondaryNews
          onNewsItemClick={handleNewsItemClick}
          selectedNews={selectedNews}
          newsItems={newsItems}
        />
      </div>
    </div>
  );
};

const NewsMobile = ({ currentTheme }: any) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  useEffect(() => {
    axios
      .get('https://api.mojnovipazar.info/news/')
      .then(response => response.data)
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={`News-Secondary-Mobile ${currentTheme}`}>
      <SecondaryNewsMobile newsItems={newsItems} />
    </div>
  );
};

const News = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <NewsMobile currentTheme={currentTheme} />
      ) : (
        <NewsDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default News;
