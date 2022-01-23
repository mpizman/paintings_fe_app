
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return <header className={styles.header}>
    <h2>Yoni's Paintings</h2>
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
    </div>
  </header>;
}

export default Header;