import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success('Profile updated successfully! 👍');
        navigate('/my-profile');
      })
      .catch(() => {
        toast.error('Update failed! 😣');
      });
  };

  return (
    <div className="flex justify-center items-center p-4 py-10 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border-2 border-purple-300 rounded-3xl shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <form onSubmit={handleSubmit}>
          <h5 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
            Update Your Profile
          </h5>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.displayName || ''}
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
              defaultValue={user?.photoURL || ''}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold w-full mb-3 hover:scale-105 transition duration-300">
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
