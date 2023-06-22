import './index.scss';
import { useViewportSize } from '@mantine/hooks';
import MainNews from './Helper/MainNews';
import SecondaryNews from './Helper/SecondaryNews';
import SecondaryNewsMobile from './Helper/SecondaryNewsMobile';
import { NewsItems } from './Helper/NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsDesktop = ({ colorScheme }: any) => {
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
    <div className={`News ${colorScheme === 'light' ? '' : 'dark'}`}>
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

const NewsMobile = ({ colorScheme }: any) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  useEffect(() => {
    axios
      .get('https://api.mojnovipazar.info/news/')
      .then(response => response.data)
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div
      className={`News-Secondary-Mobile ${
        colorScheme === 'light' ? '' : 'dark'
      }`}
    >
      <SecondaryNewsMobile newsItems={newsItems} />
    </div>
  );
};

const News = ({ colorScheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <NewsMobile colorScheme={colorScheme} />
      ) : (
        <NewsDesktop colorScheme={colorScheme} />
      )}
    </>
  );
};

export default News;
