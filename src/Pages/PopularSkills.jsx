import React from 'react';
import { Link } from 'react-router-dom';

const PopularSkills = ({ data }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#FFE8B0] rounded via-[#ff8855e0] to-[#e9c152ec] p-2">
      <div className="text-center mb-8" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-[#e45e25]">Popular Skills</h2>
        <p className="text-[#2b2a29] mt-2">Explore trending skills shared by local experts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={skill.skillId * 100}
          >
            <div className="relative">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full max-h-150   rounded-t-xl"
              />
              <span className="absolute top-2 left-2 bg-[#C75C2E] text-white text-xs px-3 py-1 rounded-full shadow-md">
                {skill.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4B2E2E] mb-2">
                {skill.skillName}
              </h3>
              <p className="text-sm mb-1 text-[#C75C2E] font-medium">
                <span className="font-bold text-[#6B4226]">Rating:</span> {skill.rating}⭐
              </p>
              <p className="text-sm mb-4 text-[#4B2E2E] font-semibold">
                <span className="font-bold text-[#6B4226]">Price:</span> ${skill.price} / session
              </p>
              <Link to={`/instructor/${skill.skillId}`}>
                <button className="px-4 py-2 bg-[#C75C2E] text-white rounded-full hover:bg-[#FF7F3F] transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;
