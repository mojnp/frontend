import React from 'react';
import NewsItemMobile, { NewsItems } from './NewsItemMobile';

interface SecondaryNewsMobileProps {
  newsItems: NewsItems[];
  searchQuery: string;
}

const SecondaryNewsMobile: React.FC<SecondaryNewsMobileProps> = ({
  newsItems,
  searchQuery
}) => {
  const filteredNewsItems = newsItems.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Secondary-News-Mobile__Container">
      {filteredNewsItems.map((news) => (
        <NewsItemMobile key={news.linkId} news={news} />
      ))}
    </div>
  );
};

export default SecondaryNewsMobile;
