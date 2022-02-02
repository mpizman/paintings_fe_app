
import React, { useContext } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../css/assets/Yonis_logo.svg';
import { UserContext } from '../../userContext/UserContextComp';

const Header = () => {

  const userContext = useContext(UserContext);

  return <header className={styles.header}>
    <Link to='/' className={styles.logoLink}>
      <LogoSvg />
    </Link>
    <div className={styles.headerLinks}>
      <Link to="/" className={styles.headerLink}>
        Home
      </Link>
      <Link to="/search" className={`${styles.headerLink} ${styles.active}`}>
        Search Page
      </Link>
      <button className={styles.headerLink}>
        Contact Us
      </button>
      {_.isEmpty(userContext?.user) ?
        <></>
        : <button>
          Post!
        </button>}
    </div>
  </header>;
}

export default Header;