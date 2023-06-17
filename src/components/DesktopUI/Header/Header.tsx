import './Header.scss';
import HeaderNavLink from './HeaderNavLink';
import Logo from '../../../Images/Kula_motrilja.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header-Desktop">
      <div>
        <Link to="/">
          <img src={Logo} alt="" height="62vw" width="47vw" />
        </Link>
      </div>
      <nav>
        <HeaderNavLink link="/news" textContent="Vesti" />
        <HeaderNavLink link="/tourism" textContent="Turizam" />
        <HeaderNavLink link="/report-a-problem" textContent="Prijavi Problem" />
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
