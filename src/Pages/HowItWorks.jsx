import React from 'react';
import { FaBullseye, FaCalendarCheck, FaRocket } from 'react-icons/fa';

const steps = [
  {
    title: '1. Browse Skills',
    description: 'Explore a wide range of skills offered by trusted local providers — from guitar to coding.',
    icon: <FaBullseye className="text-4xl text-[#C75C2E]" />,
    border: 'border-[#C75C2E]',
    bg: 'bg-[#FFF4E6]',
  },
  {
    title: '2. Connect & Book',
    description: 'Choose your preferred provider, view details, and book a session that fits your schedule.',
    icon: <FaCalendarCheck className="text-4xl text-[#FF7F3F]" />,
    border: 'border-[#FF7F3F]',
    bg: 'bg-[#FFF1E8]',
  },
  {
    title: '3. Learn & Grow',
    description: 'Attend your session, rate your experience, and continue growing your skillset.',
    icon: <FaRocket className="text-4xl text-[#6B4226]" />,
    border: 'border-[#6B4226]',
    bg: 'bg-[#FCEFD9]',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-[#FFF4E6] rounded-xl mb-6">
      <div className="text-center mb-10" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-[#4B2E2E]">How It Works</h2>
        <p className="text-[#6B4226] mt-2">Simple steps to start your learning journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 text-center border-t-4 ${step.border} ${step.bg} hover:scale-[1.03] hover:shadow-xl transition duration-300`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mx-auto">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#4B2E2E] mb-2">{step.title}</h3>
            <p className="text-[#6B4226]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
