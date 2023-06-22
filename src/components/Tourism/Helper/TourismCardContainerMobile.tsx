import TourismCardMobile, { TourismCards } from './TourismCardMobile';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
  cardRefs: React.MutableRefObject<any[]>;
  colorScheme: any;
}

const TourismCardContainerMobile: React.FC<TourismCardContainerProps> = ({
  cards,
  onCardClick,
  cardRefs,
  colorScheme,
}) => {
  const handleCardClick = (cards: TourismCards) => {
    onCardClick(cards);
  };
  return (
    <div
      className={`TourismMobile__card-container ${
        colorScheme === 'light' ? '' : 'dark'
      }`}
    >
      {cards.map(card => (
        <TourismCardMobile
          cardRefs={cardRefs}
          key={card.id}
          cards={card}
          onClick={handleCardClick}
          colorScheme={colorScheme}
        />
      ))}
    </div>
  );
};

export default TourismCardContainerMobile;
