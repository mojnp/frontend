import { useParams } from 'react-router-dom';
import { TourismCards } from './TourismCard';

interface TourismSectionProps {
  cards: TourismCards[];
  colorScheme: any;
}

const TourismSection: React.FC<TourismSectionProps> = ({
  cards,
  colorScheme,
}) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = cards.find(card => card.id.split('?')[0] === id);

  return (
    <div className={`Tourism-Section ${colorScheme === 'light' ? '' : 'dark'}`}>
      <p>{renderItem?.title}</p>
    </div>
  );
};

export default TourismSection;
