import './HeaderMobile.scss';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxAvatar } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import HeaderMobileNavLink from './HeaderMobileNavLink';
import Logo from '../../../Images/Kula_motrilja.png';
import { Link } from 'react-router-dom';

const HeaderMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="Header-Mobile">
      <RxAvatar />
      <Link style={{width: '36px', height: '44px'}} to="/">
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
