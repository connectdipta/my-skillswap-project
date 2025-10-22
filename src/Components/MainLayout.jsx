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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <div data-aos="fade-up">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;