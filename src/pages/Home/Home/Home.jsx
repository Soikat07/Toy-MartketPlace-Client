import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ShopCategory from './ShopCategory/ShopCategory';
import useTitle from '../../../hooks/useTItle';
import FeaturedToys from './Featured/FeaturedToys';
import Contact from './Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useTitle('Home');

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopCategory />
      <FeaturedToys />
      <Contact/>
    </div>
  );
};

export default Home;