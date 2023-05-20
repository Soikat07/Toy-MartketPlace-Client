import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
  const loadedData = useLoaderData();
  const { _id,seller_name, email, toy_name, toy_picture, price, rating, available_quantity, sub_category, description } = loadedData;
  
  const handleUpdate = event => {
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

    const updateToy = {
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
    console.log(updateToy);
    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(updateToy)
    })
    .then(res => res.json())
      .then(data => {
      console.log(data);

    })
  }
  return (
    <div>
      <form onSubmit={handleUpdate} className="p-20 border my-5 bg-zinc-100">
        <h2 className="text-2xl my-5">Update a toy by modify data</h2>
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
              defaultValue={seller_name}
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
              defaultValue={email}
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
              defaultValue={toy_name}
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
              defaultValue={toy_picture}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={available_quantity}
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
              defaultValue={sub_category}
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
              defaultValue={description}
              required
              className="border rounded-md p-2"
            ></textarea>
          </div>
        </div>

        <div className="form-control my-6">
          <input
            className="btn btn-block bg-orange-600 border-none"
            type="submit"
            value="Update The Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;