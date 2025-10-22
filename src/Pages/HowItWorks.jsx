import React from 'react';

const steps = [
  {
    title: '1. Browse Skills',
    description: 'Explore a wide range of skills offered by trusted local providers — from guitar to coding.',
    icon: '🎯',
  },
  {
    title: '2. Connect & Book',
    description: 'Choose your preferred provider, view details, and book a session that fits your schedule.',
    icon: '📅',
  },
  {
    title: '3. Learn & Grow',
    description: 'Attend your session, rate your experience, and continue growing your skillset.',
    icon: '🚀',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50">
      <div className="text-center mb-10" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <p className="text-gray-600 mt-2">Simple steps to start your learning journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;