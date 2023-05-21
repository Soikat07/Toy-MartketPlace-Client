import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTItle';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle('My Toys')

  useEffect(() => {
    fetch(
      `https://toy-market-place-server-three.vercel.app/myToys/${user.email}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = id => {
    console.log(id);
    const proceed = confirm('Are you sure want to delete?');
    if (proceed) {
      fetch(`https://toy-market-place-server-three.vercel.app/myToys/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Toy Deleted Successfully');
            const remaining = myToys.filter(toy => toy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto min-h-[80vh]">
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
              <th>Wanna Update</th>
              <th>Wanna Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy, index) => (
              <tr className="hover" key={myToy._id}>
                <td>{index + 1}</td>
                <td>{myToy.seller_name}</td>
                <td>{myToy.toy_name}</td>
                <td>{myToy.sub_category}</td>
                <td>${myToy.price}</td>
                <td>{myToy.available_quantity}</td>
                <td>
                  <Link to={`/updateToy/${myToy._id}`}>
                    <button className="hover:px-4 py-3 rounded-lg hover:bg-orange-600 hover:text-white">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myToy._id)}
                    className="hover:px-4 py-3 rounded-lg hover:bg-red-600 hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
