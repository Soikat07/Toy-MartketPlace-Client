import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeaturedToys = () => {
  const [featureToy, setFeatureToy] = useState([]);
  console.log(featureToy);
  useEffect(() => {
    fetch('https://toy-market-place-server-three.vercel.app/featuredToy')
      .then(res => res.json())
      .then(data => setFeatureToy(data))
  }, []);
  
  return (
    <div>
      <div className="mt-24 text-center bg-red-100 p-6 uppercase text-red-700 font-bold tracking-widest">
        <h2>Save an extra 5-10 % on every autoship order</h2>
      </div>
      <div
        className="text-center mb-12 mt-8"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h3 className="text-3xl">Featured Toys</h3>
        <p className="text-gray-600">
          Do not miss the current offers until the end of the month
        </p>
      </div>
      <div className="grid grid-cols-5">
        {featureToy.map(toy => (
          <FeatureCard toy={toy} key={toy._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedToys;