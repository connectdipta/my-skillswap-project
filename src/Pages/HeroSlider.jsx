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
    buttonStyle: 'bg-white text-[#6B4226] hover:bg-[#6B4226] hover:text-white',
    titleColor: 'text-white',
    subtitleColor: 'text-[#FFE8B0]',
  },
  {
    title: 'Share Your Skills',
    subtitle: 'Teach what you love and earn in your community.',
    image: skills,
    buttonText: 'Become a Tutor',
    buttonStyle: 'bg-white text-[#C75C2E] hover:bg-[#C75C2E] hover:text-white',
    titleColor: 'text-white',
    subtitleColor: 'text-[#FFE8B0]',
  },
  {
    title: 'Master a New Language',
    subtitle: 'Connect with native speakers in your area.',
    image: learn,
    buttonText: 'Find a Partner',
    buttonStyle: 'bg-white text-[#FF7F3F] hover:bg-[#FF7F3F] hover:text-white',
    titleColor: 'text-white',
    subtitleColor: 'text-[#FFE8B0]',
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
              className="w-full sm:h-[700px] max-sm:h-120 bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4 sm:px-10 text-center">
                <div className="max-w-3xl">
                  <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow mb-6 ${slide.titleColor}`}>
                     {slide.title}
                  </h2>
                  <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow ${slide.subtitleColor}`}>
                    {slide.subtitle}
                  </p>
                  <button
                     className={`px-8 py-4 text-lg sm:text-xl lg:text-2xl rounded-full font-semibold transition duration-300 ease-in-out shadow-md hover:scale-105 ${slide.buttonStyle}`}
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
