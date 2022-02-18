import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getpaintingByIdService } from "../services/ApiServices";
import { Painting } from "../type";

const HomePage = () => {

  const [painting, setPainting] = useState<Painting>({} as Painting);

  useEffect(() => {
    getpaintingByIdService("620bec2fca517a2adef29944").then(painting => {
      setPainting(painting);
    });
    return () => {
      setPainting({} as Painting);
    }
  }, [])

  return <img src={painting?.url} onClick={() => toast.success('🦄 Wow so easy!', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })}></img>
}

export default HomePage;