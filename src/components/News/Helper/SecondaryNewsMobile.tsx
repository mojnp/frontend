import React from 'react';
import NewsItemMobile from './NewsItemMobile';
import { NewsItems } from './NewsItem';

interface SecondaryNewsMobileProps {
  newsItems: NewsItems[];
}

const SecondaryNewsMobile: React.FC<SecondaryNewsMobileProps> = ({
  newsItems,
}) => {
  return (
    <div className="Secondary-News-Mobile__Container">
      {newsItems.map(news => (
        <NewsItemMobile key={news.linkId} news={news} />
      ))}
    </div>
  );
};

export default SecondaryNewsMobile;
