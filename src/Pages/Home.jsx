import React, { useEffect } from 'react';
import HeroSlider from './HeroSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in">
        <HeroSlider />
      </div>

      <div className="text-center mt-10 text-xl font-medium" data-aos="fade-in" data-aos-delay="300">
        This is Home
      </div>
    </div>
  );
};

export default Home;
