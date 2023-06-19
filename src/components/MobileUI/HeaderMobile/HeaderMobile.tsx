import './HeaderMobile.scss';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxAvatar } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import HeaderMobileNavLink from './HeaderMobileNavLink';
import Logo from '../../../Images/Kula_motrilja.png';
import { Link, useLocation } from 'react-router-dom';

const HeaderMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
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
    <header className="Header-Mobile">
      <RxAvatar className={`svg-icon ${buttonColor}`} />
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
            <HeaderMobileNavLink link="/news" textContent="Vesti" />
            <HeaderMobileNavLink link="/tourism" textContent="Turizam" />
            <HeaderMobileNavLink
              link="/report-a-problem"
              textContent="Prijavi Problem"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderMobile;
