import './Header.scss';
import HeaderNavLink from './HeaderNavLink';
import Logo from '../../../Images/np-logo.png';

const Header = () => {
  return (
    <header className="Header-Desktop">
      <div>
        <img src={Logo} alt="" height="80px" width="80px" />
      </div>
      <nav>
        <HeaderNavLink link="/" textContent="News" />
        <HeaderNavLink link="/tourism" textContent="Tourism" />
        <HeaderNavLink link="/report-a-problem" textContent="Alert" />
      </nav>
      <div className="buttons">
        <div className="buttons-container">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
