import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const FooterDesktop = () => {
  return (
    <footer className="Footer-Desktop">
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

const FooterMobile = () => {
  return (
    <footer className="Footer-Mobile">
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

const Footer = () => {
  const { width } = useViewportSize();
  return <>{width <= 786 ? <FooterMobile /> : <FooterDesktop />}</>;
};

export default Footer;
