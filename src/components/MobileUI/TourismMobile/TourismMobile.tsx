import { useEffect, useRef } from 'react';
import './TourismMobile.scss';
import TourismCardContainerMobile from './HelperTourismMobile/TourismCardContainerMobile';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    title: 'Islamski Spomenici',
    isAnimated: false,
  },
  {
    id: 'hriscanski-spomenici2',
    title: 'Hriscanski Spomenici',
    isAnimated: false,
  },
  {
    id: 'sruseni-spomenici3',
    title: 'Sruseni Spomenici',
    isAnimated: false,
  },
  {
    id: 'restorani4',
    title: 'Restorani',
    isAnimated: false,
  },
  {
    id: 'hoteli5',
    title: 'Hoteli',
    isAnimated: false,
  },
  {
    id: 'mapa6',
    title: 'Mape',
    isAnimated: false,
  },
];

const TourismMobile = () => {
  const cardsRef = useRef<any[]>([]);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-from-bottom');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      threshold: 0.2,
    });

    const cardElements = cardsRef.current;
    cardElements.forEach((cardElement: any) => {
      if (cardElement) {
        observer.observe(cardElement);
      }
    });

    return () => {
      cardElements.forEach((cardElement: any) => {
        if (cardElement) {
          observer.unobserve(cardElement);
        }
      });
    };
  }, []);

  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="TourismMobile">
      <div className="TourismMobile__title">
        <h1>Vas vodic za gradski odmor u Novom Pazaru</h1>
        <span>
          Novi Pazar, živahan grad sa bogatom istorijom i zadivljujućom
          prirodom. Budite spremni da vas mami jedinstveni spoj drevnih kultura
          i pejzaža koji oduzimaju dah.
        </span>
      </div>
      <TourismCardContainerMobile
        cards={dummyData}
        onCardClick={handleCardClick}
        cardRefs={cardsRef}
      />
    </div>
  );
};

export default TourismMobile;
