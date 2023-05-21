import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const FeatureCard = ({toy}) => {
  const { name, image, price, rating, stock } = toy;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <div>
          <h2 className="card-title">{name.slice(0, 16)}</h2>
          <p className="mt-2 text-green-600">{stock}</p>
          <p>
            <Rating
              className="text-yellow-400"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            {rating}
          </p>
          <p className="text-lg text-red-700">${price}</p>
        </div>
        <div className="card-actions my-auto">
          <button className="bg-yellow-400 px-6 py-2 rounded-full text-sm">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;