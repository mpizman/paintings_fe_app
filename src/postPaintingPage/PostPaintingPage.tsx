import { useState } from "react";
import { genereteUploadURL } from "../services/S3Service";

const PostPaintingPage = () => {
  const [file, setFile] = useState<File>();
  const [imageName, setImageName] = useState<String>("");

  const postPainting = async () => {
    const url = await genereteUploadURL(imageName);
    console.log(url);
  };

  return <form onSubmit={e => {postPainting()}}>
    <label htmlFor='paintingName'>
      Name
    </label>
    <input id='paintingName' name='paintingName' onChange={e => {
      setImageName(e.target.value);
    }} />
    <label htmlFor='paintingDescription'>
      Description
    </label>
    <input id='paintingDescription' name='paintingInput' />
    <label htmlFor='paintingInput'>
      Input
    </label>
    <input id='paintingInput'
      name='paintingInput'
      type='file'
      accept='image/*'
      onChange={(e) => {
        setFile(e.target.files?.[0]);
        console.log(e.target.files?.[0]);
      }} />
    <button type='submit'>
      Submit!
      </button>
  </form>;
}

export default PostPaintingPage;