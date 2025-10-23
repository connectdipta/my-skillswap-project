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
    <section className="py-12 px-6 md:px-12 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{instructor.skillName}</h2>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Instructor:</span> {instructor.providerName}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {instructor.providerEmail}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Category:</span> {instructor.category}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Rating:</span> ⭐ {instructor.rating}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Price:</span> ${instructor.price} / session</p>
            <p className="text-gray-600 mb-6"><span className="font-semibold">Slots Available:</span> {instructor.slotsAvailable}</p>
            <p className="text-gray-700 mb-8 italic">{instructor.description}</p>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book a Session</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-105 hover:shadow-md transition"
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
