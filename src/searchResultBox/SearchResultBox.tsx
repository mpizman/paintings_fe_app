import { Link } from "react-router-dom";
import { Painting } from "../type";
import styles from './SearchResultBox.module.scss';
import moment from 'moment';
import { ReactComponent as DotsSvg } from '../css/assets/ico_dots.svg';
import { useContext } from "react";
import { UserContext } from "../userContext/UserContextComp";
import { deleteImageFromBucket } from "../services/S3Service";
import { deletePaintingService } from "../services/ApiServices";
import { toast } from "react-toastify";

interface SearchResultsBoxProps {
  painting: Painting;
}

const SearchResultBox = (props: SearchResultsBoxProps) => {
  const userContext = useContext(UserContext);

  const renderDeleteModal = () => {
    return <div className="modal fade" id={`${props.painting.id}DeleteModal`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Delete "{props.painting.name}"?</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want delete this painting?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => {
              deleteImageFromBucket(props.painting.name).then(result => {
                deletePaintingService(props.painting.id, userContext.user.token).then(result => {
                  toast.success(`Posted ${props.painting.name} successfully!`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  window.location.reload();
                })
              })
            }}>Delete!</button>
          </div>
        </div>
      </div>
    </div>;
  }

  return <li className={styles.searchResultBox} style={{ backgroundImage: `url(${props.painting.url})` }}>
    {renderDeleteModal()}
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
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Edit</a>
          <button type="button" className="dropdown-item" data-toggle="modal" data-target={`#${props.painting.id}DeleteModal`} onClick={e => e.preventDefault()}>
            Delete
          </button>
        </div>
      </div> : <></>}
      <span className="dateSpan">{moment(props.painting.date).format("DD/MM/YYYY")}</span>
      <h5>{props.painting.name}</h5>
      <p>{props.painting.description}</p>
    </Link>
  </li>;
}

export default SearchResultBox;