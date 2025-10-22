import React from 'react';

const PopularSkills = ({ data }) => {
  return (
    <section className="py-12">
      <div className="text-center mb-8" data-aos="fade-in">
        <h2 className="text-3xl font-bold text-gray-800">Popular Skills</h2>
        <p className="text-gray-500 mt-2">Explore trending skills shared by local experts</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((skill) => (
          <div
              key={skill.skillId}
              className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={skill.skillId * 100}>
               <div className="relative">
                   <img
                      src={skill.image}
                      alt={skill.skillName}
                      className="w-full max-h-85 object-cover rounded-t-xl"/>
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                          {skill.category}
                        </span>
                </div>

                <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {skill.skillName}
                    </h3>
                    <p className="text-sm  mb-1 text-orange-500">
                      <span className="font-bold text-gray-700">Rating:</span> {skill.rating}⭐
                    </p>
                    <p className="text-sm mb-4 text-green-600 font-semibold">
                      <span className="font-bold text-gray-700">Price:</span> ${skill.price} / session
                    </p>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 transform transition">
                      View Details
                    </button>
                </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default PopularSkills;
