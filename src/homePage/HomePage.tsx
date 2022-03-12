import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchBox from "../searchBox/SearchBox";
import { getpaintingByIdService } from "../services/ApiServices";
import { Painting } from "../type";
import styles from "./HomePage.module.scss";

const HomePage = () => {

  // const [painting, setPainting] = useState<Painting>({} as Painting);

  // useEffect(() => {
  //   getpaintingByIdService("620bec2fca517a2adef29944").then(painting => {
  //     setPainting(painting);
  //   });
  //   return () => {
  //     setPainting({} as Painting);
  //   }
  // }, [])

  return <div className={`${styles.homePage} container`}>
    <h1 className={styles.mainTitle}>
      Yoni's virtual art gallery. <br/>
      Beautiful, Simple, Smart.
    </h1>
    <SearchBox />
  </div>
}

export default HomePage;