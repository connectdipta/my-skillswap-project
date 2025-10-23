import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase.config';
import toast from 'react-hot-toast';

const auth = getAuth(app);

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = () => {
    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent!');
        window.location.href = 'https://mail.google.com';
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFE8B0] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#4B2E2E] mb-6">Reset Your Password</h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-[#6B4226] font-semibold mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7F3F] outline-none"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-[#C75C2E] text-white py-2 rounded-xl font-semibold hover:bg-[#FF7F3F] transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
