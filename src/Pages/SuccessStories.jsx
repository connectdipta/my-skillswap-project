import React from 'react';
import Marquee from "react-fast-marquee";

const stories = [
  {
    name: 'Rafiul Islam',
    skill: 'Guitar Lessons',
    feedback: 'SkillSwap helped me finally learn guitar after years of trying alone. Alex was super patient and encouraging!',
    accent: 'text-[#C75C2E]',
  },
  {
    name: 'Meherin Chowdhury',
    skill: 'Spoken English',
    feedback: 'I gained so much confidence in speaking English thanks to Sara’s sessions. Highly recommend!',
    accent: 'text-[#FF7F3F]',
  },
  {
    name: 'Tanvir Hasan',
    skill: 'Yoga for Beginners',
    feedback: 'Nadia’s yoga classes helped me manage stress and improve flexibility. It’s been life-changing!',
    accent: 'text-[#6B4226]',
  },
  {
    name: 'Fahim Rahman',
    skill: 'Web Development',
    feedback: 'John’s web dev course was super beginner-friendly. I built my first website in a week!',
    accent: 'text-[#C75C2E]',
  },
  {
    name: 'Sadia Noor',
    skill: 'Creative Writing',
    feedback: 'David’s writing workshop unlocked my storytelling skills. I now write with confidence!',
    accent: 'text-[#FF7F3F]',
  },
  {
    name: 'Imran Kabir',
    skill: 'Photography',
    feedback: 'Lina’s photography tips helped me take stunning portraits with just my phone!',
    accent: 'text-[#6B4226]',
  },
];

const SuccessStories = () => {
  return (
    <section className="py-12 bg-[#FFF4E6] rounded-xl">
      <div className="text-center mb-10" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-[#4B2E2E]">Success Stories</h2>
        <p className="text-[#6B4226] mt-2">Real voices from our learning community</p>
      </div>

      <Marquee pauseOnHover speed={50} gradient={false}>
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-[#FF7F3F] rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 mx-4 max-w-80 h-44 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <h3 className="text-lg font-bold text-[#4B2E2E] mb-1">{story.name}</h3>
              <p className={`text-sm font-semibold mb-2 ${story.accent}`}>{story.skill}</p>
            </div>
            <p className="text-[#6B4226] text-sm italic">“{story.feedback}”</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SuccessStories;
