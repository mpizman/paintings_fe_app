import { Link } from "react-router-dom";
import { Painting } from "../type";
import styles from './SearchResultBox.module.scss';
import moment from 'moment';
import { ReactComponent as DotsSvg } from '../css/assets/ico_dots.svg';
import { useContext } from "react";
import { UserContext } from "../userContext/UserContextComp";

interface SearchResultsBoxProps {
  painting: Painting;
}

const SearchResultBox = (props: SearchResultsBoxProps) => {
  const userContext = useContext(UserContext);

  return <li className={styles.searchResultBox} style={{ backgroundImage: `url(${props.painting.url})` }}>
    <Link to={`/painting/${props.painting.id}`} className="searchResult">
      {userContext.user.username === props.painting.uploaderUsername ? <div className="dropdown">
        <button className="btn"
          onClick={e => e.preventDefault()}
          type="button" id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <DotsSvg />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Edit</a>
          <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Delete</a>
        </div>
      </div> : <></>}
      <span className="dateSpan">{moment(props.painting.date).format("DD/MM/YYYY")}</span>
      <h5>{props.painting.name}</h5>
      <p>{props.painting.description}</p>
    </Link>
  </li>;
}

export default SearchResultBox;