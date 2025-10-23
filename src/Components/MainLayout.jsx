import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto  bg-[#FFE8B0] text-[#4B2E2E] min-h-screen">
      <Navbar />
      <main className="py-6 px-4 max-sm:px-1">
        <Outlet />
      </main>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
