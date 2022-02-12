import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { putImageOnBucket } from "../services/S3Service";
import { UserContext } from "../userContext/UserContextComp";
import _ from "lodash";
import styles from "./PostPaintingPage.module.scss"
import { getPaintingsService } from "../services/ApiServices";
import { DebounceInput } from 'react-debounce-input';
import { ReactComponent as XSvg } from '../css/assets/x_close.svg';

const PostPaintingPage = () => {
  const [file, setFile] = useState<File>();
  const [imageName, setImageName] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [artist, setArtist] = useState<String>("");
  const [price, setPrice] = useState<number>(0);
  const [isValidImageName, setIsValidImageName] = useState<Boolean>(false);
  const [isValidPost, setIsValidPost] = useState<Boolean>(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (_.isEmpty(userContext.user)) {
      navigate("/");
    }
  });

  useEffect(() => {
    getPaintingsService(undefined, undefined, undefined, imageName, undefined, undefined, 0, 10).then(searchResult => {
      setIsValidImageName(searchResult.empty && !!imageName.length);
    });
  }, [imageName])

  useEffect(() => {
    setIsValidPost(!!file?.size &&
      isValidImageName &&
      !!description.length &&
      !!artist.length &&
      price >= 0);
  }, [file, isValidImageName, description, artist, price])

  return <form className={styles.postPaintingForm} onSubmit={e => {
    e.preventDefault();
    if (file) {
      putImageOnBucket(imageName, file);
    }
  }}>
    <label htmlFor='paintingInput'>
      Browse Painting:
    </label>
    <input id='paintingInput'
      name='paintingInput'
      type='file'
      accept='image/*'
      onChange={(e) => {
        setFile(e.target.files?.[0]);
        console.log(e.target.files?.[0]);
      }} />
    <label htmlFor='paintingName'>
      Name:
    </label>
    <DebounceInput debounceTimeout={300}
      id='paintingName'
      name='paintingName'
      onChange={e => setImageName(e.target.value)} />
    {
      !isValidImageName && !!imageName.length ?
        <div className="notValidImage">
          <XSvg />
          Name is already taken
        </div> :
        <></>
    }
    <label htmlFor='paintingDescription'>
      Description:
    </label>
    <textarea id='paintingDescription' name='paintingInput' onChange={e => setDescription(e.target.value)} />
    <label htmlFor='paintingArtist'>
      Artist:
    </label>
    <input id='paintingArtist' name='paintingArtist' onChange={e => setArtist(e.target.value)} />
    <label htmlFor='paintingPrice'>
      Price:
    </label>
    <input id='paintingPrice' type="number" min={0} name='paintingPrice' onChange={e => setPrice(Number(e.target.value))} />
    <button type='submit' className="btnSubmit" disabled={!isValidPost}>
      Post!
    </button>
  </form>;
}

export default PostPaintingPage;