import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const HomeDesktop = ({ colorScheme }: any) => {
  return (
    <div className={`Home ${colorScheme === 'light' ? '' : 'dark'}`}>
      Home Desktop
    </div>
  );
};

const HomeMobile = ({ colorScheme }: any) => {
  return (
    <div className={`HomeMobile ${colorScheme === 'light' ? '' : 'dark'}`}>
      Home Mobile
    </div>
  );
};

const Home = ({ colorScheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <HomeMobile colorScheme={colorScheme} />
      ) : (
        <HomeDesktop colorScheme={colorScheme} />
      )}
    </>
  );
};

export default Home;
