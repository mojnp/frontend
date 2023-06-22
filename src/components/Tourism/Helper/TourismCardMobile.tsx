import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

export interface TourismCards {
  id: string;
  title: string;
  isAnimated: Boolean;
}

interface TourismCardProps {
  cards: TourismCards;
  onClick: (cards: TourismCards) => void;
  cardRefs: React.MutableRefObject<any[]>;
  colorScheme: any;
}

const TourismCardMobile: React.FC<TourismCardProps> = ({
  cards,
  onClick,
  cardRefs,
  colorScheme,
}) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    onClick(cards);
  };

  useEffect(() => {
    cardRefs.current.push(cardRef.current);
  }, []);
  return (
    <Link
      className={`TourismMobile__card-link  ${
        cards.isAnimated ? 'fade-in-from-bottom' : ''
      }`}
      ref={cardRef}
      onClick={handleClick}
      to={cards.id}
    >
      <div
        className={`TourismMobile__card ${
          colorScheme === 'light' ? '' : 'dark'
        }`}
      ></div>
      <h3 className={` ${colorScheme === 'light' ? '' : 'dark'}`}>
        {cards.title}
      </h3>
    </Link>
  );
};

export default TourismCardMobile;
