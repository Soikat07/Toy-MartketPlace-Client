import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../../hooks/useTItle';

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  useTitle('Registration');

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    setError('');
    console.log(name, email, password, photoUrl);
    
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        profile(result.user);
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
      })
    
    const profile = currentUser => {
      updateProfile(currentUser, {
        displayName:name, photoURL:photoUrl
      })
      .then(()=>{})
        .catch(error => {
        console.log(error.message);
      })
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <div className="mr-12">
          <img src={} alt="" />
        </div> */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <h3 className="text-center text-3xl">Sign Up</h3>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoUrl"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] border-none">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-2">
              Already Have An Account?
              <span className="text-[#FF3811]">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;