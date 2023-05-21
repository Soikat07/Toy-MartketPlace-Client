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
      <div className='text-center my-20'>
        <h3 className='text-3xl'>Featured Toys</h3>
        <p className='text-gray-600'>Do not miss the current offers until the end of the month</p>
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