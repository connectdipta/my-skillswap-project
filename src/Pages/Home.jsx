import React, { useEffect } from 'react';
import HeroSlider from './HeroSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';
import PopularSkills from './PopularSkills';
import TopRatedProvider from './TopRatedProvider';
import HowItWorks from './HowItWorks';
import SuccessStories from './SuccessStories';

const Home = () => {
  const data = useLoaderData();
  console.log(data) 
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
        <HeroSlider></HeroSlider>
      </div>

      <div data-aos="fade-in" className='bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 '>
       <PopularSkills data = {data}></PopularSkills>
      </div>

      <div data-aos="fade-in">
        <TopRatedProvider></TopRatedProvider>
      </div>

      <div data-aos="zoom-in-up">
        <HowItWorks></HowItWorks>
      </div>

      <div data-aos="flip-left">
        <SuccessStories></SuccessStories>
      </div>

    </div>
  );
};

export default Home;
