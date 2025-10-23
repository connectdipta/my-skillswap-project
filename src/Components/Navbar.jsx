import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const activeLinkStyle = "text-[#FF7F3F] font-bold border-b-2 border-[#FF7F3F] text-lg";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyle : "text-lg text-[#FFE8B0]"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-profile" className={({ isActive }) => isActive ? activeLinkStyle : "text-lg text-[#FFE8B0]"}>
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
    <div className="navbar shadow-md px-4 sm:px-8 bg-[#6B4226]">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#FFE8B0]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#FFE8B0] rounded-box w-52 text-[#4B2E2E]">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost px-0 hover:bg-transparent">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <img
               src={logo}
               alt="SkillSwap Logo"
               className="h-[72px] sm:h-[60px] max-sm:h-[52px] object-contain"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C75C2E]">SkillSwap</span>
         </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
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
              <div className="w-10 rounded-full ring-2 ring-offset-2 ring-[#FF7F3F]">
                <img alt="User Avatar" src={user.photoURL || 'https://i.ibb.co.com/qLkS3VS9/upload.jpg'} />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mr-2 btn px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-[#C75C2E] text-white hover:bg-[#FF7F3F] active:scale-95 max-sm:text-xs"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-2 btn px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-[#C75C2E] text-white hover:bg-[#FF7F3F] active:scale-95 max-sm:text-xs">
              Login
            </Link>
            <Link to="/signup" className="btn px-6 max-sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-[#C75C2E] text-white hover:bg-[#FF7F3F] active:scale-95 max-sm:text-xs">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
