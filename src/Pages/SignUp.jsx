import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      setPasswordError('Password must include at least one uppercase letter.');
      return;
    }
    if (!hasLowercase) {
      setPasswordError('Password must include at least one lowercase letter.');
      return;
    }
    if (!isLongEnough) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    setPasswordError('');
    setLoading(true);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success('Registration successful!');
          navigate('/');
        }).catch(err => {
          toast.error('Profile update failed: ' + err.message);
        });
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Signed in with Google Successful! 👍');
        navigate('/');
      })
      .catch(() => {
        toast.error('Login Failed! 😣');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input name="name" id="name" type="text" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" required />
          </div>

          {/* Photo URL */}
          <div>
            <label htmlFor="photo" className="block text-gray-700 font-semibold mb-1">Profile Picture</label>
            <input name="photo" id="photo" type="text" placeholder="Paste your photo URL" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input name="email" id="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none" required />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-pink-600"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-xl font-semibold transition duration-200 ${
             loading
            ? 'bg-pink-300 text-white cursor-not-allowed'
            : 'bg-pink-600 text-white hover:bg-pink-700 active:scale-95 active:bg-pink-800'}`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Signup */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
