import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTItle';
import Swal from 'sweetalert2';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add a Toy')

  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyName = form.toyName.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.toyCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toy = {
      seller_name: sellerName,
      email: sellerEmail,
      toy_name: toyName,
      toy_picture: photoURL,
      price: price,
      rating: rating,
      available_quantity: quantity,
      sub_category: category,
      description: description,
    };
    console.log(toy);
    fetch('https://toy-market-place-server-three.vercel.app/addToy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success',
            text: 'You have Successfully Add A Toy',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddToy} className="p-20 border my-5 bg-zinc-100">
        <h2 className="text-2xl my-5">Add a toy by adding some data</h2>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              name="sellerName"
              type="text"
              placeholder="toy name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              name="sellerEmail"
              type="email"
              placeholder="seller email"
              className="input input-bordered"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="toy name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="$price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="between 0-5"
              name="rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="number"
              name="quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Category</span>
            </label>
            <select
              required
              name="toyCategory"
              className="p-3 border-2 rounded-lg"
            >
              <option value="Sports Car">Sports Car</option>
              <option value="Truck Car">Truck Car</option>
              <option value="Police Car">Police Car</option>
              <option value="Regular Car">Regular Car</option>
            </select>
          </div>
          <div className="form-control row-span-full">
            <label className="label">
              <span className="label-text">Toy Description</span>
            </label>
            <textarea
              name="description"
              cols="20"
              rows="15"
              placeholder="start here_"
              required
              className="border rounded-md p-2"
            ></textarea>
          </div>
        </div>

        <div className="form-control my-6">
          <input
            className="btn btn-block bg-orange-600 border-none"
            type="submit"
            value="Add The Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
