import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleToy = () => {
  const singleToyData = useLoaderData();
  const {
    toy_picture,
    toy_name,
    seller_name,
    price,
    sub_category,
    rating,
    available_quantity,
    description,
    seller_email
  } = singleToyData;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={toy_picture} className="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">Toy Name: {toy_name}</h1>
          <h3 className="font-semibold my-1">Seller: {seller_name}</h3>
            <p>
              <span className="font-semibold">Email:</span>
              {seller_email}
            </p>
          <p className="my-1">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span>
            {available_quantity}
          </p>
          <p className="my-1">
            <span className="font-semibold">Sub Category:</span> {sub_category}
          </p>
          <p className="my-1">
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold my-2">Ratings: {rating}</span>
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
      </div>
    </div>
  );
};

export default SingleToy;