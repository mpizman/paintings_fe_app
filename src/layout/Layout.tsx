import React from 'react';
import Header from './header/Header'
import styles from './Layout.module.scss';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import NotFoundPage from "../notFountPage/NotFoundPage";
import SearchPage from "../searchPage/SearchPage";
import PostPaintingPage from '../postPaintingPage/PostPaintingPage';
import { UserContextComp } from '../userContext/UserContextComp';
import LoginPage from '../loginPage/LoginPage';
import Footer from './footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {

  const routes = () => <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="search" element={<SearchPage />} />
    <Route path="postPainting" element={<PostPaintingPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>;

  return <UserContextComp>
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        {routes()}
        <ToastContainer />
        <Footer />
      </div>
    </BrowserRouter>
  </UserContextComp>;
}

export default Layout;