import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const activeLinkStyle = "text-primary font-bold border-b-2 border-primary";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyle : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-profile" className={({ isActive }) => isActive ? activeLinkStyle : ""}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => toast.success('Logged out successfully!👍'))
      .catch(() => toast.error('Error Detected!😣'));
  };

  return (
    <div className="navbar shadow-md px-4 sm:px-8 bg-sky-500">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost px-0 hover:bg-transparent">
          <img src={logo} alt="SkillSwap Logo" className="h-25" />
        </Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navLinks}
        </ul>
      </div>

   
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <div
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
              data-tip={user.displayName || 'User'}
            >
              <div className="w-10 rounded-full ring-2 ring-offset-2 ring-primary">
                <img alt="User Avatar" src={user.photoURL || 'https://i.ibb.co.com/qLkS3VS9/upload.jpg'} />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mr-2 btn btn-primary btn-outline px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out bg-primary text-white max-sm:text-xs"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-2 btn btn-primary btn-outline px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out bg-primary text-white max-sm:text-xs">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-outline px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out bg-primary text-white max-sm:text-xs">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
