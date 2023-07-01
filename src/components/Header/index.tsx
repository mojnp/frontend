import './index.scss';
import { useViewportSize } from '@mantine/hooks';
import Logo from '../../Images/Kula_motrilja.png';
import { Link, useLocation } from 'react-router-dom';
import HeaderNavLink from './Helper/HeaderNavLink';
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import { useEffect, useState } from 'react';

const HeaderDesktop = ({ currentTheme }: any) => {
  const location = useLocation();
  const { pathname } = location;

  let logInButtonClass = '';
  let signInButtonClass = '';

  if (pathname.includes('/news')) {
    logInButtonClass = 'blue-first';
    signInButtonClass = 'blue-second';
  } else if (pathname.includes('/tourism')) {
    logInButtonClass = 'green-first';
    signInButtonClass = 'green-second';
  } else if (pathname.includes('/report-a-problem')) {
    logInButtonClass = 'red-first';
    signInButtonClass = 'red-second';
  } else {
    logInButtonClass = 'normal-first';
    signInButtonClass = 'normal-second';
  }

  return (
    <header className={`Header-Desktop ${currentTheme}`}>
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav>
        <HeaderNavLink link="/news" textContent="Vesti" />
        <HeaderNavLink link="/tourism" textContent="Turizam" />
        <HeaderNavLink link="/report-a-problem" textContent="Prijavi Problem" />
      </nav>
      <div className="buttons">
        <div className="buttons-container">
          <button className={logInButtonClass}>
            <HeaderNavLink link="/login" textContent="Login" />
          </button>
          <button className={signInButtonClass}>
            <HeaderNavLink link="/signup" textContent="Sign up" />
          </button>
        </div>
      </div>
    </header>
  );
};

const HeaderMobile = ({ currentTheme }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenAuth, setIsDropdownOpenAuth] = useState(false);
  const [isDropdownOpenDisabled] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100vw';
    } else {
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpenAuth) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100vw';
    } else {
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }, [isDropdownOpenAuth]);

  const toggleDropdown = () => {
    setIsDropdownOpenAuth(isDropdownOpenDisabled);
    setIsDropdownOpen((prevState: any) => !prevState);
  };

  const toggleDropdownAuth = () => {
    setIsDropdownOpen(isDropdownOpenDisabled);
    setIsDropdownOpenAuth((prevState: any) => !prevState);
  };

  let buttonColor = '';

  if (pathname.includes('/news')) {
    buttonColor = 'blue-svg-color';
  } else if (pathname.includes('/tourism')) {
    buttonColor = 'green-svg-color';
  } else if (pathname.includes('/report-a-problem')) {
    buttonColor = 'red-svg-color';
  } else {
    buttonColor = 'normal';
  }

  return (
    <header className={`Header-Mobile ${currentTheme}`}>
      <nav
        className={`${isDropdownOpenAuth ? 'open' : ''}`}
        onClick={toggleDropdownAuth}
      >
        {isDropdownOpenAuth ? (
          <VscChromeClose />
        ) : (
          <RxAvatar className={`svg-icon ${buttonColor}`} />
        )}
        {isDropdownOpenAuth && (
          <div>
            <HeaderNavLink link="/login" textContent="Login" />
            <HeaderNavLink link="/signup" textContent="Sign up" />
          </div>
        )}
      </nav>
      <Link style={{ width: '36px', height: '44px' }} to="/">
        <img src={Logo} alt="" width="36px" height="44px" />
      </Link>
      <nav
        className={`${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        {isDropdownOpen && (
          <div>
            <HeaderNavLink link="/news" textContent="Vesti" />
            <HeaderNavLink link="/tourism" textContent="Turizam" />
            <HeaderNavLink
              link="/report-a-problem"
              textContent="Prijavi Problem"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

const Header = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <HeaderMobile currentTheme={currentTheme} />
      ) : (
        <HeaderDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default Header;
