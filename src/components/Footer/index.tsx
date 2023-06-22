import './index.scss';
import { useViewportSize } from '@mantine/hooks';

const FooterDesktop = ({ colorScheme }: any) => {
  return (
    <footer
      className={`Footer-Desktop ${colorScheme === 'light' ? '' : 'dark'}`}
    >
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

const FooterMobile = ({ colorScheme }: any) => {
  return (
    <footer
      className={`Footer-Mobile ${colorScheme === 'light' ? '' : 'dark'}`}
    >
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

const Footer = ({ colorScheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <FooterMobile colorScheme={colorScheme} />
      ) : (
        <FooterDesktop colorScheme={colorScheme} />
      )}
    </>
  );
};

export default Footer;
