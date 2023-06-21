import './HelperNews.scss';
import NewsItem, { NewsItems } from './NewsItem';

interface SecondaryNewsProps {
  newsItems: NewsItems[];
  onNewsItemClick: (news: NewsItems) => void;
  selectedNews: NewsItems | null;
}

const SecondaryNews: React.FC<SecondaryNewsProps> = ({
  newsItems,
  onNewsItemClick,
  selectedNews,
}) => {
  const handleNewsItemClick = (news: NewsItems) => {
    onNewsItemClick(news);
  };

  return (
    <div className="Secondary-News__Container">
      {newsItems?.length ? (
        newsItems.map(news => (
          <NewsItem
            key={news.linkId}
            news={news}
            active={selectedNews?.linkId === news.linkId}
            onClick={handleNewsItemClick}
          />
        ))
      ) : (
        <p>Vesti nisu ucitane, sacekajte trenutak.</p>
      )}
    </div>
  );
};

export default SecondaryNews;
