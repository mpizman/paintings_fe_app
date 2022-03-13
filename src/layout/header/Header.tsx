
import React, { useContext } from 'react';
import _ from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as WhiteLogoSvg } from '../../css/assets/Yonis_logo_white.svg';
import { ReactComponent as BlackLogoSvg } from '../../css/assets/Yonis_logo.svg';
import { UserContext } from '../../userContext/UserContextComp';
import UserMenu from '../../userMenu/UserMenu';

const Header = () => {

  const userContext = useContext(UserContext);
  const location = useLocation();

  return <header className={`${styles.header} ${location.pathname == '/' ? styles.homeHeader : ''}`}>
    <Link to='/' className={styles.logoLink}>
      {location?.pathname == '/' ?
        <WhiteLogoSvg /> :
        <BlackLogoSvg />
      }
    </Link>
    <div className={styles.headerLinks}>
      <Link to="/" className={`${styles.headerLink} ${location.pathname == '/' ? styles.active : ''}`}>
        Home
      </Link>
      <Link to="/search?searchQuery=&pageNumber=0&rpp=10" className={`${styles.headerLink} ${location.pathname == '/search' ? styles.active : ''}`}>
        Search Page
      </Link>
      <button className={styles.headerLink}>
        Contact Us
      </button>
      {
        !_.isEmpty(userContext.user) ?
          <UserMenu /> :
          <Link to='/login' className={`${styles.headerLink} ${location.pathname == '/login' ? styles.active : ''}`}>
            Login
          </Link>
      }
    </div>
  </header>;
}

export default Header;