import { useEffect, useState } from 'react';
import SecondaryNewsMobile from './HelperNewsMobile/SecondaryNewsMobile';
import { NewsItems } from './HelperNewsMobile/NewsItemMobile';

interface NewsMobileProps {
  searchQuery: string;
}

const NewsMobile = ({ searchQuery }: NewsMobileProps) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  useEffect(() => {
    fetch('https://mojnp.onrender.com/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  const filteredNewsItems = newsItems.filter((news: NewsItems) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="News-Secondary-Mobile">
      <SecondaryNewsMobile
        newsItems={filteredNewsItems}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default NewsMobile;
