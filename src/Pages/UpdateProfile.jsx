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
    <div className="flex justify-center items-center p-4 py-10 bg-[#FFF4E6] min-h-screen">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border-2 border-[#C75C2E] rounded-3xl shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <form onSubmit={handleSubmit}>
          <h5 className="text-2xl font-semibold text-[#C75C2E] mb-6 text-center">
            Update Your Profile
          </h5>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#6B4226]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.displayName || ''}
              className="input input-bordered w-full focus:ring-2 focus:ring-[#FF7F3F] outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-[#6B4226]">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              defaultValue={user?.photoURL || ''}
              className="input input-bordered w-full focus:ring-2 focus:ring-[#FF7F3F] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl font-semibold bg-[#C75C2E] text-white hover:bg-[#FF7F3F] transition duration-300 mb-3"
          >
            Save Changes
          </button>

          <Link to="/my-profile" className="btn btn-ghost w-full text-[#6B4226] font-medium">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
