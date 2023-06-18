import { useEffect, useState } from 'react';
import SVGAnimationMobile from './SVGAnimationMobile';
import SVGNoAnimationMobile from './SVGNoAnimationMobile';

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
      {isAnimationShow ? <SVGAnimationMobile /> : <SVGNoAnimationMobile />}
    </div>
  );
};

export default Home;
