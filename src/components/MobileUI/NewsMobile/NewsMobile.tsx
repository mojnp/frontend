import './NewsMobile.css';
import { useEffect, useState } from 'react';
import SecondaryNewsMobile from './HelperNewsMobile/SecondaryNewsMobile';
import { NewsItems } from './HelperNewsMobile/NewsItemMobile';

const NewsMobile = () => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItems | null>(null);

  const handleNewsItemClick = (news: NewsItems) => {
    setSelectedNews(news);
  };

  useEffect(() => {
    fetch('https://api.mojnovipazar.info/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (newsItems.length > 0) {
      setSelectedNews(newsItems[0]);
    }
  }, [newsItems]);
  return (
    <div className='News-Secondary-Mobile'>
      <SecondaryNewsMobile
        newsItems={newsItems}
        onNewsItemClick={handleNewsItemClick}
        selectedNews={selectedNews}
      />
    </div>
  );
};

export default NewsMobile;
