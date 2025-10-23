import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
           <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Please log in to view your profile.
            </p>
      </div>
    );
  }

  return (
     <div className="flex justify-center items-center p-8 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 min-h-screen">
  <div className="relative w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(147,51,234,0.3)]">
    <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse opacity-75"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch bg-white/60 backdrop-blur-xl rounded-3xl p-8">
      <div className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center items-center">
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
        <img
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
          src={user.photoURL || 'https://i.ibb.co.com/qLkS3VS9/upload.jpg'}
          alt="User avatar"
        />
      </div>

      <div className="flex flex-col justify-center text-center md:text-left">
        <h5 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
          {user.displayName || 'Anonymous User'}
        </h5>
        <span className="text-base text-gray-700 mb-6">{user.email}</span>

        <Link
          to="/update-profile"
          className="inline-block w-fit mx-auto md:mx-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold px-10 py-3 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Update Profile
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default MyProfile;
