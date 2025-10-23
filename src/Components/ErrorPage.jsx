import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-pink-200 to-red-300 text-gray-800 text-center px-6 py-10 relative overflow-hidden">
 
       <h1 className="text-8xl sm:text-9xl font-extrabold text-red-600 drop-shadow-md animate-bounce">
          404
       </h1>

       <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-red-800">
         Oops! Page Not Found
       </h2>

       <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-md">
          The page you are looking for doesn’t exist or was moved. Don’t worry,
          you can return to the homepage safely.
       </p>
       <Link
         to='/'
         className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-200"
        >Go Home</Link>


      <div className="absolute bottom-10 flex gap-3 sm:gap-4">
         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-bounce [animation-delay:0ms]" />
         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]" />
         <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-700 rounded-full animate-bounce [animation-delay:600ms]" />
      </div>
</div>
  );
};

export default ErrorPage;