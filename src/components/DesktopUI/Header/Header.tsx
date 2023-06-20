import './Header.scss';
import HeaderNavLink from './HeaderNavLink';
import Logo from '../../../Images/Kula_motrilja.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
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
    <header className="Header-Desktop">
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
          <button className={logInButtonClass}>Log in</button>
          <button className={signInButtonClass}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
