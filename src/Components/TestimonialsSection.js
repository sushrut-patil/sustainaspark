import React from 'react';
import { useNavigate } from 'react-router-dom';
const TestimonialsSection = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Atharv Sharma",
      text: "The events are fabulous. I will just request to make similar events in the future too.",
      rating: 5
    },
    {
      name: "Advit Goel",
      text: "This was my first ever participation with them and my first ever fabulous experience. The arrangements were well. Looking forward to more such events with the team of SustainaSpark.",
      rating: 4
    },
    {
      name: "S.ritika",
      text: "Very happy to be a part in this event where one can enjoy and have wonderful time in it to remember.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="text-yellow-400">★</span>
    ));
  };

  return (
    <div className="bg-white p-8 relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-0 right-0">
        <div className="w-16 h-16 text-teal-600 transform rotate-45">
          🍃
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="w-16 h-16 text-teal-600 transform -rotate-45">
          🍃
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-800 mb-2">
          Participants Testimonials
        </h2>
        <p className="text-xl text-yellow-600">
          How SustainaSpark Transformed Their Perspectives
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-teal-800 p-6 rounded-lg shadow-lg relative"
          >
            <div className="text-yellow-500 text-2xl mb-2">"</div>
            <h3 className="text-yellow-500 font-bold text-xl mb-3">
              {testimonial.name}
            </h3>
            <p className="text-white mb-4">
              {testimonial.text}
            </p>
            <div className="text-lg">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="text-center">
        <button className="bg-yellow-500 text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300"
        onClick={() => navigate('/register')} >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;