import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <div className="mr-12">
          <img src={} alt="" />
        </div> */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <h3 className="text-center text-3xl">Login</h3>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-[#FF3811] border-none">Login</button>
              </div>
            </form>
            <p className="text-center mt-2">
              New to ToyWheelers?
              <span className="text-[#FF3811]">
                <Link to="/registration">Sign Up</Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <div className="form-control">
              <button className="btn">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;