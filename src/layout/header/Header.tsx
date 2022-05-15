
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

  const renderContactUsModal = () => {
    return <div className="modal fade" id="contactUsModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Contact us</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            For any issues: YonisSupport@gmail.com
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>;
  }

  return <header className={`${styles.header} ${location.pathname == '/' ? styles.homeHeader : ''}`}>
    {renderContactUsModal()}
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
      <Link to="/search?searchQuery=&pageNumber=0&rpp=9" className={`${styles.headerLink} ${location.pathname == '/search' ? styles.active : ''}`}>
        Search Page
      </Link>
      <button data-toggle="modal" data-target="#contactUsModal" className={styles.headerLink}>
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