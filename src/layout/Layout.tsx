import React from 'react';
import Header from './header/Header'
import styles from './Layout.module.scss';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import NotFoundPage from "../notFountPage/NotFoundPage";
import SearchPage from "../searchPage/SearchPage";
import PostPaintingPage from '../postPaintingPage/PostPaintingPage';

const Layout = () => {

  const routes = () => <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="search" element={<SearchPage />} />
    <Route path="postPainting" element={<PostPaintingPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>;

  return <div className={styles.layout}>
    <BrowserRouter>
      <Header />
      {routes()}
    </BrowserRouter>
  </div>;
}

export default Layout;