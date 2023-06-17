import { useEffect, useState } from 'react';
import SVGAnimationMobile from './SVGAnimationMobile';

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
    <div className="Home">
      {isAnimationShow ? <SVGAnimationMobile /> : null}
    </div>
  );
};

export default Home;
