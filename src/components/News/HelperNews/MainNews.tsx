import './HelperNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsItem } from './NewsItem';

interface MainNewsProps {
  selectedNews: NewsItem;
}

const MainNews: React.FC<MainNewsProps> = ({ selectedNews }) => {
  const { title, image, date, content } = selectedNews;

  return (
    <div className="News-Main">
      <div
        className="News-Main__Container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2>{title}</h2>
        <p>
          <AiOutlineCalendar />
          {date}
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MainNews;
