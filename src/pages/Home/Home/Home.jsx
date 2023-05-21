import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ShopCategory from './ShopCategory/ShopCategory';
import useTitle from '../../../hooks/useTItle';

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner />
      <Gallery />
      <ShopCategory />
    </div>
  );
};

export default Home;