import React from 'react';
import NewsItemMobile, { NewsItems } from './NewsItemMobile';

interface SecondaryNewsMobileProps {
  newsItems: NewsItems[];
  searchQuery: string;
}

const SecondaryNewsMobile: React.FC<SecondaryNewsMobileProps> = ({
  newsItems,
  searchQuery,
}) => {
  const filteredNewsItems =
    newsItems &&
    newsItems.filter((news: NewsItems) =>
      news.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
    );

  return (
    <div className="Secondary-News-Mobile__Container">
      {filteredNewsItems?.length ? (
        filteredNewsItems.map((news: NewsItems) => (
          <NewsItemMobile key={news.linkId} news={news} />
        ))
      ) : (
        <p>Vesti nisu ucitane, sacekajte trenutak.</p>
      )}
    </div>
  );
};

export default SecondaryNewsMobile;
