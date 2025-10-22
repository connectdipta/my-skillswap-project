import React from 'react';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {

  const user = {
    displayName: 'Dipta Saha',
    photoURL: 'https://i.ibb.co/61pQ0p7/user.png',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
  };

  return (
    <div className="flex justify-center items-center p-4 py-10">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 mb-6 text-center">
            Update Your Profile
          </h5>
          
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user.displayName}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              defaultValue={user.photoURL}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mb-3">
            Save Changes
          </button>
          
          <Link to="/my-profile" className="btn btn-ghost w-full">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;