import './index.scss';
import TourismCardContainer from './Helper/TourismCardContainer';
import TourismCardContainerMobile from './Helper/TourismCardContainerMobile';
import { useEffect, useRef } from 'react';
import { useViewportSize } from '@mantine/hooks';

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

const TourismDesktop = ({ colorScheme }: any) => {
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
    <div className={`Tourism ${colorScheme === 'light' ? '' : 'dark'}`}>
      <div className="Tourism__title">
        <h1>Vas vodic za gradski odmor u Novom Pazaru</h1>
        <span>
          Novi Pazar, živahan grad sa bogatom istorijom i zadivljujućom
          prirodom. Budite spremni da vas mami jedinstveni spoj drevnih kultura
          i pejzaža koji oduzimaju dah.
        </span>
      </div>
      <TourismCardContainer
        cards={dummyData}
        onCardClick={handleCardClick}
        cardRefs={cardsRef}
        colorScheme={colorScheme}
      />
    </div>
  );
};

const TourismMobile = ({ colorScheme }: any) => {
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
    <div className={`TourismMobile ${colorScheme === 'light' ? '' : 'dark'}`}>
      <div
        className={`TourismMobile__title ${
          colorScheme === 'light' ? '' : 'dark'
        }`}
      >
        <h1 className={` ${colorScheme === 'light' ? '' : 'dark'}`}>
          Vas vodic za gradski odmor u Novom Pazaru
        </h1>
        <span className={` ${colorScheme === 'light' ? '' : 'dark'}`}>
          Novi Pazar, živahan grad sa bogatom istorijom i zadivljujućom
          prirodom. Budite spremni da vas mami jedinstveni spoj drevnih kultura
          i pejzaža koji oduzimaju dah.
        </span>
      </div>
      <TourismCardContainerMobile
        cards={dummyData}
        onCardClick={handleCardClick}
        cardRefs={cardsRef}
        colorScheme={colorScheme}
      />
    </div>
  );
};

const Tourism = ({ colorScheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <TourismMobile colorScheme={colorScheme} />
      ) : (
        <TourismDesktop colorScheme={colorScheme} />
      )}
    </>
  );
};

export default Tourism;
