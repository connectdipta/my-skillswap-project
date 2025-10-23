import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFE8B0] text-[#4B2E2E] text-center px-6 py-10 relative overflow-hidden">

      <h1 className="text-8xl sm:text-9xl font-extrabold text-[#C75C2E] drop-shadow-md animate-bounce">
        404
      </h1>

      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#6B4226]">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 text-base sm:text-lg text-[#4B2E2E] max-w-md">
        The page you are looking for doesn’t exist or was moved. Don’t worry,
        you can return to the homepage safely.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-[#C75C2E] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#FF7F3F] hover:scale-105 transition-all duration-200"
      >
        Go Home
      </Link>

      <div className="absolute bottom-10 flex gap-3 sm:gap-4">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#C75C2E] rounded-full animate-bounce [animation-delay:0ms]" />
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FF7F3F] rounded-full animate-bounce [animation-delay:300ms]" />
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#6B4226] rounded-full animate-bounce [animation-delay:600ms]" />
      </div>
    </div>
  );
};

export default ErrorPage;
