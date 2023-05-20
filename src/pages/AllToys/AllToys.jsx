import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    fetch(`http://localhost:5000/toys/${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center mt-16">
        <input
          onChange={e => setSearchText(e.target.value)}
          type="text"
          placeholder="search your toy"
          className="input input-bordered w-1/2"
        />
        <button
          className="px-6 py-3 bg-orange-500
         text-white rounded-lg font-semibold hover:bg-orange-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, 20).map((toy, index) => (
              <tr className="hover" key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.seller_name}</td>
                <td>{toy.toy_name}</td>
                <td>{toy.sub_category}</td>
                <td>${toy.price}</td>
                <td>{toy.available_quantity}</td>
                <td>
                  <Link to={`/toys/${toy._id}`}>
                    <button className="hover:px-4 py-3 rounded-lg hover:bg-orange-600 hover:text-white">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
