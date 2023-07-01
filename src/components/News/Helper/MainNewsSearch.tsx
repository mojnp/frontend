import { useEffect, useState } from 'react';
import '../index.scss';
import { NewsItems } from './NewsItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai';

const MainNewsSearch = ({ currentTheme }: any) => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);
  const { key } = useParams<{ key: string }>();
  const selectedNews = newsItems.find(item => item.key === key);

  useEffect(() => {
    axios
      .get('https://api.mojnovipazar.info/news/')
      .then(response => response.data)
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={`Searched-Container ${currentTheme}`}>
      <div className="Searched-Container__image">
        <img src={selectedNews?.image} alt="" />
      </div>
      <div className="Searched-Container__title">
        <h2>{selectedNews?.title}</h2>
        <p>
          <AiOutlineCalendar />
          {selectedNews?.published}
        </p>
      </div>
      <p className="paragraph">{selectedNews?.content}</p>
      <p style={{ marginBottom: '0', color: 'gray', fontSize: '1.1vw' }}>
        Preuzeto: {selectedNews?.author}
      </p>
    </div>
  );
};

export default MainNewsSearch;
