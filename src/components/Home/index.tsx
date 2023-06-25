import HomeHero from './Helper/HomeHero';
import HomeHeroMobile from './Helper/HomeHeroMobile';
import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const HomeDesktop = ({ currentTheme }: any) => {
  return (
    <div className={`Home-Desktop ${currentTheme}`}>
      <HomeHero />
    </div>
  );
};

const HomeMobile = ({ currentTheme }: any) => {
  return (
    <div className={`Home-Mobile ${currentTheme}`}>
      <HomeHeroMobile />
    </div>
  );
};

const Home = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <HomeMobile currentTheme={currentTheme} />
      ) : (
        <HomeDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default Home;
