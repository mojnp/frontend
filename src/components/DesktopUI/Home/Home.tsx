import { useEffect, useState } from 'react';
import SVGAnimation from './SVGAnimation';

const Home = () => {
  const [isAnimationShow, setIsAnimationShow] = useState(true);

  useEffect(() => {
    const animationShown = localStorage.getItem('animationShown');
    if (animationShown) {
      setIsAnimationShow(false);
    } else {
      localStorage.setItem('animationShown', 'true');
    }
  }, []);

  return (
    <div className="Home">{isAnimationShow ? <SVGAnimation /> : null}</div>
  );
};

export default Home;
