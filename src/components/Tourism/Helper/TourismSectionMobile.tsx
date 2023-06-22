import { useParams } from 'react-router-dom';
import { TourismCards } from './TourismCardMobile';

interface TourismSectionProps {
  cards: TourismCards[];
  colorScheme: any;
}

const TourismSectionMobile: React.FC<TourismSectionProps> = ({
  cards,
  colorScheme,
}) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = cards.find(card => card.id.split('?')[0] === id);

  return (
    <div
      className={`TourismMobile-Section ${
        colorScheme === 'light' ? '' : 'dark'
      }`}
    >
      <p className={` ${colorScheme === 'light' ? '' : 'dark'}`}>
        {renderItem?.title}
      </p>
    </div>
  );
};

export default TourismSectionMobile;
