import React from 'react';

const MyProfile = () => {
  // Placeholder user data. We will replace this with real data from Firebase Auth.
  const user = {
    displayName: 'Dipta Saha',
    email: 'dipta.saha.dev@example.com',
    photoURL: 'https://i.ibb.co/61pQ0p7/user.png', // A default user image
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center py-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.photoURL}
            alt="User avatar"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {user.displayName}
          </h5>
          <span className="text-sm text-gray-500">{user.email}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;