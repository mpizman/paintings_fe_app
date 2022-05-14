import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchBox from "../searchBox/SearchBox";
import { getpaintingByIdService } from "../services/ApiServices";
import { Painting } from "../type";
import HomeBox from "./homeBox/HomeBox";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return <div className={`${styles.homePage} container`}>
    <h1 className={styles.mainTitle}>
      Yoni's virtual art gallery. <br/>
      Beautiful, Simple, Smart.
    </h1>
    <SearchBox />
    <HomeBox id="622e677dca517a2adef29948" />
  </div>
}

export default HomePage;