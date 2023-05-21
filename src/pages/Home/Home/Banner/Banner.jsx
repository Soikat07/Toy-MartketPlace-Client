import React from 'react';
import banner from '../../../../assets/banner.png';
const Banner = () => {
  return (
    <div className="relative">
      <img className="lg:h-[90vh] lg:w-full" src={banner} alt="" />
      <div
        className="absolute top-0 lg:top-8 text-white h-full lg:h-fit lg:w-96 space-y-2
       border-4 border-slate-700 p-6"
        data-aos="fade-up-left"
        data-aos-duration="3000"
      >
        <h2 className="lg:text-5xl font-bold">A PLACE FOR DREAMING CAR</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          placeat quibusdam voluptatum eum eligendi, ex in perferendis quod
          doloribus nostrum!
        </p>
        <div className="space-x-2 text-center">
          <button className="text-black bg-white font-semibold lg:py-2 px-4 rounded-3xl">
            Wanna buy
          </button>
          <button className="bg-orange-600 font-semibold lg:py-2 px-4 rounded-3xl">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;