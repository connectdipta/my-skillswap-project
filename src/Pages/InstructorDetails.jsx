import React, { useContext, useEffect } from 'react';
import { useParams, useLoaderData, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthContext';

const InstructorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const instructor = data.find((i) => i.skillId.toString() === id);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [user, navigate, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Session booked successfully!');
    e.target.reset();
  };

  if (!instructor) {
    return <div className="text-center py-20 text-xl text-red-500">Instructor not found.</div>;
  }

  return (
    <section className="py-12 px-6 md:px-12 bg-[#FFF4E6]">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
        <div className="md:flex">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src={instructor.image}
              alt={instructor.skillName}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 p-8 bg-white">
            <h2 className="text-3xl font-bold text-[#4B2E2E] mb-4">{instructor.skillName}</h2>
            <p className="text-[#6B4226] mb-2"><span className="font-semibold">Instructor:</span> {instructor.providerName}</p>
            <p className="text-[#6B4226] mb-2"><span className="font-semibold">Email:</span> {instructor.providerEmail}</p>
            <p className="text-[#6B4226] mb-2"><span className="font-semibold">Category:</span> {instructor.category}</p>
            <p className="text-[#6B4226] mb-2"><span className="font-semibold">Rating:</span> ⭐ {instructor.rating}</p>
            <p className="text-[#6B4226] mb-2"><span className="font-semibold">Price:</span> ${instructor.price} / session</p>
            <p className="text-[#6B4226] mb-6"><span className="font-semibold">Slots Available:</span> {instructor.slotsAvailable}</p>
            <p className="text-[#4B2E2E] mb-8 italic">{instructor.description}</p>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-[#FFE8B0] p-6 rounded-lg shadow-md" data-aos="fade-in">
              <h3 className="text-xl font-bold text-[#4B2E2E] mb-4">Book a Session</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#6B4226]">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#FF7F3F] focus:border-[#FF7F3F] outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#6B4226]">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#FF7F3F] focus:border-[#FF7F3F] outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#C75C2E] text-white rounded-full hover:bg-[#FF7F3F] hover:scale-105 hover:shadow-md transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorDetails;
