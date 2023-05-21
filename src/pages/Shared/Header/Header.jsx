import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink >
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/allToys">All Toys</NavLink >
      </li>
      {user && (
        <>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/myToys">My Toys</NavLink >
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/addToy">Add a Toy</NavLink >
          </li>
        </>
      )}
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/blog">Blog</NavLink >
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 my-3">
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
              className="menu menu-compact dropdown-content mt-4 py-2 shadow bg-base-100 rounded-box w-52 text-slate-600 font-bold"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src={logo} alt="" />
            <h3 className="font-bold text-2xl">
              <span className="text-orange-600">Toy</span>
              <span className="text-slate-700">Wheelers</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-600 text-lg font-bold">
            {navItems}
          </ul>
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
              <button
                onClick={handleLogout}
                className="font-bold text-lg text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-lg"
              >
                Logout
              </button>
            </span>
          ) : (
            <Link className="me-5" to="/login">
              <button className="font-bold text-lg text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;