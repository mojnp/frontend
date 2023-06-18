import { Link } from 'react-router-dom';
import './HelperNewsMobile.scss';
import { AiOutlineCalendar } from 'react-icons/ai';

export interface NewsItems {
  linkId: string;
  title: string;
  published: string;
  content: string;
  summary: string;
  image: string;
  author: string;
}

interface NewsItemProps {
  news: NewsItems;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <Link to={`/news/${news.linkId}`} className="News-Item-Mobile__content">
      <div className="News-Item-Mobile">
        <img src={news.image} alt="" />
        <h4>{news.title}</h4>
        <p className="summary">{news.summary.slice(0, 150)}...</p>
        <div className="News-Item-Mobile__date">
          <p>
            <AiOutlineCalendar />
            <span>{news.published}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
