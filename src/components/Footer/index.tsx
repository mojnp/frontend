import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const FooterDesktop = ({ currentTheme }: any) => {
  return (
    <footer className={`Footer-Desktop ${currentTheme}`}>
      <p>
        Designed and built by{' '}
        <a href="https://www.centarnit.com" target="_blank" rel="noreferrer">
          Centar NIT
        </a>
      </p>
      <p>All rights reserved &copy;2023</p>
    </footer>
  );
};

const FooterMobile = ({ currentTheme }: any) => {
  return (
    <footer className={`Footer-Mobile ${currentTheme}`}>
      <p>
        Designed and built by{' '}
        <a href="https://www.centarnit.com" target="_blank" rel="noreferrer">
          Centar NIT
        </a>
      </p>
      <p>All rights reserved &copy;2023</p>
    </footer>
  );
};

const Footer = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <FooterMobile currentTheme={currentTheme} />
      ) : (
        <FooterDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default Footer;
