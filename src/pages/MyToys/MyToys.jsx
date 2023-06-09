import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTItle';
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [value, setValue] = useState('');
  useTitle('My Toys');

  useEffect(() => {
    fetch(
      `https://toy-market-place-server-three.vercel.app/myToys?email=${user.email}&sort=${value}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setMyToys(data);
      });
  }, [user,value]);

  const handleDelete = id => {

    console.log(id);
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://toy-market-place-server-three.vercel.app/myToys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Toy has been deleted.', 'success');
              const remaining = myToys.filter(toy => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSort = value => {
    setValue(value);
  }

  return (
    <div className="w-screen lg:max-w-screen-xl mx-auto min-h-[80vh] mt-24">
      <div className="lg:text-end mb-5">
        <div className="dropdown dropdown-left dropdown-end">
          <label
            tabIndex={0}
            className="bg-orange-600 rounded-lg p-2 text-white hover:bg-orange-500"
          >
            Sort by Price
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 shadow rounded-box w-28"
          >
            <li>
              <a onClick={() => handleSort('Ascending')}>Ascending</a>
            </li>
            <li>
              <a onClick={() => handleSort('Descending')}>Descending</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:overflow-x-auto">
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
