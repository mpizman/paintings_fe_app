import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getpaintingByIdService } from "../services/ApiServices";
import { Painting } from "../type";

const PaintingPage = () => {
  const location = useLocation();
  const [painting, setPainting] = useState<Painting>({} as Painting);
  useEffect(() => {
    getpaintingByIdService(location.pathname.split("/painting/")[1]).then(painting => {
      setPainting(painting);
    })
  },[])

  return <>
  <h3>{painting.name}</h3>
  <p>{painting.description}</p>
  <img src={painting.url} />
  </>
}

export default PaintingPage;