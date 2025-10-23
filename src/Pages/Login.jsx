import React, { useState, useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    setLoading(true);
    login(email, password)
      .then(() => {
        toast.success('Logged in successfully! 👍');
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error('Error! 😣');
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Signed in with Google! 👍');
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error('Error! 😣');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFE8B0] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#4B2E2E] mb-6">
          Login Your Account
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#6B4226] font-semibold mb-1">
              Email
            </label>
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

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-[#6B4226] font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7F3F] outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-xl text-[#6B4226] hover:text-[#FF7F3F]"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            {/* Forget Password */}
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => navigate('/forgot-password', { state: { email } })}
                className="text-sm text-[#FF7F3F] hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-2 rounded-xl font-semibold transition duration-200 ${
              loading ? 'bg-[#C75C2E] opacity-60 text-white cursor-not-allowed' : 'bg-[#C75C2E] text-white hover:bg-[#FF7F3F]'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-[#C75C2E] text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-[#6B4226]">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-[#6B4226] text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#FF7F3F] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
