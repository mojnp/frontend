import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const HomeDesktop = () => {
  return <div>Home Desktop</div>;
};

const HomeMobile = () => {
  return <div>Home Mobile</div>;
};

const Home = () => {
  const { width } = useViewportSize();
  return <>{width <= 786 ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default Home;
