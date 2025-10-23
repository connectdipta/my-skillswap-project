import React from 'react';
import Marquee from "react-fast-marquee";

const stories = [
  {
    name: 'Rafiul Islam',
    skill: 'Guitar Lessons',
    feedback: 'SkillSwap helped me finally learn guitar after years of trying alone. Alex was super patient and encouraging!',
  },
  {
    name: 'Meherin Chowdhury',
    skill: 'Spoken English',
    feedback: 'I gained so much confidence in speaking English thanks to Sara’s sessions. Highly recommend!',
  },
  {
    name: 'Tanvir Hasan',
    skill: 'Yoga for Beginners',
    feedback: 'Nadia’s yoga classes helped me manage stress and improve flexibility. It’s been life-changing!',
  },
  {
    name: 'Fahim Rahman',
    skill: 'Web Development',
    feedback: 'John’s web dev course was super beginner-friendly. I built my first website in a week!',
  },
  {
    name: 'Sadia Noor',
    skill: 'Creative Writing',
    feedback: 'David’s writing workshop unlocked my storytelling skills. I now write with confidence!',
  },
  {
    name: 'Imran Kabir',
    skill: 'Photography',
    feedback: 'Lina’s photography tips helped me take stunning portraits with just my phone!',
  },
];

const SuccessStories = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
      <div className="text-center mb-10" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-gray-800">Success Stories</h2>
        <p className="text-gray-600 mt-2">Real voices from our learning community</p>
      </div>

      <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100}>
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 mx-4 max-w-80 h-40"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1">{story.name}</h3>
            <p className="text-sm text-blue-600 mb-2">{story.skill}</p>
            <p className="text-gray-700 text-sm italic">“{story.feedback}”</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SuccessStories;
