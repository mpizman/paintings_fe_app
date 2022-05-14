import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getpaintingByIdService } from "../services/ApiServices";
import { Painting } from "../type";
import styles from './PaintingPage.module.scss'

const PaintingPage = () => {
  const location = useLocation();
  const [painting, setPainting] = useState<Painting>({} as Painting);
  useEffect(() => {
    getpaintingByIdService(location.pathname.split("/painting/")[1]).then(painting => {
      setPainting(painting);
    });
  }, []);

  return <div className={styles.paintingPageWrapper}>
    <div className={`${styles.paintingPage} container`}>
      <div className="paintingData">
        <div className="paintingTitleAndDate">
          <h3>{painting.name}</h3>
          <span>Upladed on {moment(painting.date).format("DD/MM/YYYY")} <br />by {painting.uploaderUsername}</span>
        </div>
        <span className="artistSpan">Work of {painting.artist}</span>
        <p className="description">{painting.description}</p>
        <span className="price">Price: {painting.price}$</span>
      </div>
      <img src={painting.url} className="painting" />
    </div>
  </div>;
}

export default PaintingPage;