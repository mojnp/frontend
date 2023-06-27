import './index.scss';
import TourismCardContainer from './Helper/TourismCardContainer';
import TourismCardContainerMobile from './Helper/TourismCardContainerMobile';
import { useEffect, useRef } from 'react';
import { useViewportSize } from '@mantine/hooks';
import {
  IconBuildingChurch,
  IconBuildingMosque,
  IconBuildingSkyscraper,
  IconMapPin,
  IconToolsKitchen2,
  IconWreckingBall,
} from '@tabler/icons-react';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    title: 'Islamski Spomenici',
    logo: <IconBuildingMosque />,
    isAnimated: false,
  },
  {
    id: 'hriscanski-spomenici2',
    title: 'Hriscanski Spomenici',
    logo: <IconBuildingChurch />,
    isAnimated: false,
  },
  {
    id: 'sruseni-spomenici3',
    title: 'Sruseni Spomenici',
    logo: <IconWreckingBall />,
    isAnimated: false,
  },
  {
    id: 'restorani4',
    title: 'Restorani',
    logo: <IconToolsKitchen2 />,
    isAnimated: false,
  },
  {
    id: 'hoteli5',
    title: 'Hoteli',
    logo: <IconBuildingSkyscraper />,
    isAnimated: false,
  },
  {
    id: 'mapa6',
    title: 'Mape',
    logo: <IconMapPin />,
    isAnimated: false,
  },
];

const TourismDesktop = ({ currentTheme }: any) => {
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
    <div className={`Tourism ${currentTheme}`}>
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
      />
    </div>
  );
};

const TourismMobile = ({ currentTheme }: any) => {
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
    <div className={`TourismMobile ${currentTheme}`}>
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

const Tourism = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <TourismMobile currentTheme={currentTheme} />
      ) : (
        <TourismDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default Tourism;
