import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTItle';
import Lottie from 'lottie-react';
import loginLottie from '../../../assets/121421-login.json'

const Login = () => {
  const { logIn,googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useTitle('Login');


  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
      });
  };
  // google login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
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
                <p className="text-red-500">
                  <small>{error}</small>
                </p>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-orange-600 border-none">Login</button>
              </div>
            </form>
            <p className="text-center mt-2">
              New to ToyWheelers?
              <span className="text-orange-600">
                <Link to="/registration">Sign Up</Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn bg-orange-600 border-none">
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;