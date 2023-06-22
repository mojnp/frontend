import TourismCard, { TourismCards } from './TourismCard';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
  cardRefs: React.MutableRefObject<any[]>;
  colorScheme: any;
}

const TourismCardContainer: React.FC<TourismCardContainerProps> = ({
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
      className={`Tourism__card-container ${
        colorScheme === 'light' ? '' : 'dark'
      }`}
    >
      {cards.map(card => (
        <TourismCard
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

export default TourismCardContainer;
