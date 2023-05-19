import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    seller_name,
    toy_name,
    price,
    sub_category,
    available_quantity,
  } = toy;

  return (
    <>
      <tr className="hover">
        <td>{seller_name}</td>
        <td>{toy_name}</td>
        <td>{sub_category}</td>
        <td>${price}</td>
        <td>{available_quantity}</td>
        <td>
          <Link to={`/toy/${_id}`}>
            <button
              className="hover:px-4 py-3 rounded-lg hover:bg-orange-600 hover:text-white"
            >
              Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
