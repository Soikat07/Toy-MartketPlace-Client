import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then()
      .catch(error => {
        console.log(error);
    })
  }

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {
        user && <>
          <li>
            <Link to='/myToys'>My Toys</Link>
        </li>
          <li>
            <Link to='/addToys'>Add a Toy</Link>
        </li>
        </>
      }
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 my-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src={logo} alt="" />
            <h3 className="">ToyWheelers</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <span className="flex space-x-2">
              <img
                title={user.displayName}
                className="w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </span>
          ) : (
            <Link className="me-5" to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;