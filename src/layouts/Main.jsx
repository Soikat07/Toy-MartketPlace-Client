import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;