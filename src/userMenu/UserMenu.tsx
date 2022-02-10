import { useContext } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../type";
import { UserContext } from "../userContext/UserContextComp";
import headerStyles from '../layout/header/Header.module.scss';
import styles from './UserMenu.module.scss';
import { logoutService } from "../services/GeneralServices";

const UserMenu = () => {
  const userContext = useContext(UserContext);

  return <div className={`dropdown ${styles.dropDownDiv}`}>
    <button className={`${headerStyles.headerLink} btn btn-secondary dropdown-toggle`} type="button" id="headerDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {`Hello, ${userContext.user.username}`}
    </button>
    <div className="dropdown-menu" aria-labelledby="headerDropdownMenuButton">
      <Link className="dropdown-item" to='/postpainting'>New Post</Link>
      {userContext.user.roles.includes("ROLE_ADMIN") ?
        <Link className="dropdown-item" to="/search">
          Admin
        </Link>
        : <></>
      }
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#" onClick={() => {
        logoutService(userContext);
      }}>Logout</a>
    </div>
  </div>
}

export default UserMenu;