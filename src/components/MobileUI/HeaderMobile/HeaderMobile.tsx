import './HeaderMobile.css';
import { useState } from 'react';
import { HiMenuAlt3, HiSearch } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import HeaderMobileNavLink from './HeaderMobileNavLink';

const HeaderMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="Header-Mobile">
      <nav
        className={`${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? <VscChromeClose /> : <HiMenuAlt3 />}
        {isDropdownOpen && (
          <div>
            <HeaderMobileNavLink link="/" textContent="Vesti" />
            <HeaderMobileNavLink link="/tourism" textContent="Turizam" />
            <HeaderMobileNavLink
              link="/report-a-problem"
              textContent="Prijavi Problem"
            />
          </div>
        )}
      </nav>
      <span>Vesti</span>
      <button>Sign In</button>
      <HiSearch />
    </header>
  );
};

export default HeaderMobile;
