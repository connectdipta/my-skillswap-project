import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import guitar from '../assets/guiter.jpg';
import learn from '../assets/learn.jpg';
import skills from '../assets/skills.jpg';

const slides = [
  {
    title: 'Learn Guitar Today',
    subtitle: 'Find local tutors to start your musical journey.',
    image: guitar,
    buttonText: 'Browse Tutors',
    buttonStyle: 'bg-white text-primary hover:bg-primary hover:text-white',
  },
  {
    title: 'Share Your Skills',
    subtitle: 'Teach what you love and earn in your community.',
    image: skills,
    buttonText: 'Become a Tutor',
    buttonStyle: 'bg-white text-pink-600 hover:bg-pink-600 hover:text-white',
  },
  {
    title: 'Master a New Language',
    subtitle: 'Connect with native speakers in your area.',
    image: learn,
    buttonText: 'Find a Partner',
    buttonStyle: 'bg-white text-purple-700 hover:bg-purple-700 hover:text-white',
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg mt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[500px] bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-start px-10">
                <div className="text-left max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-md ${slide.buttonStyle}`}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;