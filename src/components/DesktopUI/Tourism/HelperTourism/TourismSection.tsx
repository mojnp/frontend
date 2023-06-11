import '../Tourism.scss';
import { useParams } from 'react-router-dom';
import { TourismCards } from './TourismCard';

interface TourismSectionProps {
  cards: TourismCards[];
}

const TourismSection: React.FC<TourismSectionProps> = ({ cards }) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = cards.find(card => card.id.split('?')[0] === id);

  return (
    <div className="Tourism-Section">
      <img src={renderItem?.image} alt="" />
      <p>{renderItem?.content}</p>
    </div>
  );
};

export default TourismSection;