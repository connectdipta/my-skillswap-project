import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const topProviders = [
  {
    name: 'Alex Martin',
    skill: 'Beginner Guitar Lessons',
    rating: 4.8,
    image: 'https://i.ibb.co.com/zWZR6NWW/images0.jpg',
    description: 'Alex brings warmth and patience to every session, helping beginners feel confident with chords and rhythm. His lessons combine fun exercises with real songs, ensuring students build solid fundamentals while enjoying the music they love.',
  },
  {
    name: 'Sara Hossain',
    skill: 'Spoken English Practice',
    rating: 4.6,
    image: 'https://i.ibb.co.com/bMBXcNPG/images5.jpg',
    description: 'Sara’s sessions focus on real-world conversation, pronunciation, and building fluency through friendly dialogue. Her interactive approach helps learners speak naturally, improve vocabulary, and gain confidence in both personal and professional communication.',
  },
  {
    name: 'Nadia Rahman',
    skill: 'Yoga for Beginners',
    rating: 4.9,
    image: 'https://i.ibb.co.com/zpDWfZc/images3.jpg',
    description: 'Nadia creates a calming space for newcomers to explore flexibility, breathing, and stress relief through gentle yoga. Each class is designed to nurture the body and mind, encouraging mindfulness, balance, and a deeper connection with oneself.',
  },
];

const TopRatedProvider = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 ">
      <div className="text-center mb-8" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-gray-800">Top Rated Providers</h2>
        <p className="text-gray-600 mt-2">Meet our most trusted and loved instructors</p>
      </div>

      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="px-4"
      >
        {topProviders.map((provider, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 lg:max-w-250 mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full md:w-1/2 max-h-150 object-cover"
              />
              <div className="p-6 md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{provider.name}</h3>
                <p className="text-md text-gray-600 mb-1">{provider.skill}</p>
                <p className="text-sm text-gray-500 mb-2">⭐ {provider.rating}</p>
                <p className="text-sm text-gray-700 mb-4">{provider.description}</p>
                <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 hover:shadow-md transition">
                  View Profile
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopRatedProvider;