import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const TabData = ({ toy }) => {
  const { toy_picture, toy_name,price, rating } = toy;
  return (
    <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={toy_picture} alt="car" />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title">Toy Name: {toy_name}</h2>
        <div className='flex space-x-5 justify-center items-center'>
          <p className="text-xl">Price: ${price}</p>
          <p>
            <span className="text-xl">Ratings: {rating}</span>
            <Rating
              className="text-yellow-400"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </p>
        </div>
        <div className="card-actions">
          <Link to={`/toys/${toy._id}`}><button className="bg-orange-600 text-white rounded-xl py-2
          px-6
          ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabData;