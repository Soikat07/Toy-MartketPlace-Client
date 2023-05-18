import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ShopCategory from './ShopCategory/ShopCategory';

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <ShopCategory />
    </div>
  );
};

export default Home;