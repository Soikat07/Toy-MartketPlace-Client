import React from 'react';
import gallery1 from '../../../../assets/gallery/gallery1.jpg'
import gallery2 from '../../../../assets/gallery/gallery2.jpg'
import gallery3 from '../../../../assets/gallery/gallery3.jpg'
import gallery4 from '../../../../assets/gallery/gallery4.jpg'
import gallery5 from '../../../../assets/gallery/gallery5.jpg'
import gallery6 from '../../../../assets/gallery/gallery6.jpg'
import gallery7 from '../../../../assets/gallery/gallery7.jpg'
import gallery8 from '../../../../assets/gallery/gallery8.jpg'
import gallery9 from '../../../../assets/gallery/gallery9.jpg'
import gallery10 from '../../../../assets/gallery/gallery10.jpg'
import gallery11 from '../../../../assets/gallery/gallery11.jpg'
import gallery12 from '../../../../assets/gallery/gallery12.jpg'

const Gallery = () => {
  return (
    <div className="my-20">
      <div className="text-center" data-aos="fade-left" data-aos-duration="1000">
        <h3 className="text-4xl font-bold text-orange-500">Our Gallery</h3>
        <p className="text-gray-600 font-semibold text-xl">
          Here are some beautiful collections
        </p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 mt-10 border-4 border-slate-600 p-3 gap-1">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
        <img src={gallery7} alt="" />
        <img src={gallery8} alt="" />
        <img src={gallery9} alt="" />
        <img src={gallery10} alt="" />
        <img src={gallery11} alt="" />
        <img src={gallery12} alt="" />
      </div>
    </div>
  );
};

export default Gallery;