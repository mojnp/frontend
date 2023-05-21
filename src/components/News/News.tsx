import './News.css';
import MainNews from './HelperNews/MainNews';
import SecondaryNews from './HelperNews/SecondaryNews';
import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'NOVI PAZAR 1',
    date: `2023-05-19`,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, Ut enim ad minim veniam ',
    image: 'https://picsum.photos/1000',
  },
  {
    id: 2,
    title: 'NOVI PAZAR 2',
    date: `2023-05-28`,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
    image: 'https://picsum.photos/1000/',
  },
  {
    id: 3,
    title: 'NOVI PAZAR 3',
    date: `2023-06-9`,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    image: 'https://picsum.photos/1000',
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem>(newsItems[0]);

  const handleNewsItemClick = (news: NewsItem) => {
    setSelectedNews(news);
  };

  return (
    <div className="News">
      <MainNews selectedNews={selectedNews} />
      <SecondaryNews
        newsItems={newsItems}
        onNewsItemClick={handleNewsItemClick}
        selectedNews={selectedNews}
      />
    </div>
  );
};

export default News;
