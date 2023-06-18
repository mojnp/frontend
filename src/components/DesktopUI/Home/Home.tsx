import { useEffect, useState } from 'react';
import SVGAnimation from './SVGAnimation';
import SVGNoAnimation from './SVGNoAnimation';

const Home = () => {
  const [isAnimationShow, setIsAnimationShow] = useState(true);

  useEffect(() => {
    const animationShown = sessionStorage.getItem('animationShown');
    if (animationShown) {
      setIsAnimationShow(false);
    } else {
      sessionStorage.setItem('animationShown', 'true');
    }
  }, []);

  return (
    <div className="Home">
      {isAnimationShow ? <SVGAnimation /> : <SVGNoAnimation />}
    </div>
  );
};

export default Home;
