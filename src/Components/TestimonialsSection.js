import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestimonialsSection = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Atharv Sharma",
      text: "The events are fabulous. I will just request to make similar events in the future too.",
      rating: 4
    },
    {
      name: "Advit Goel",
      text: "This was my first ever participation with them and my first ever fabulous experience. The arrangements were well. Looking forward to more such events with the team of SustainaSpark.",
      rating: 3
    },
    {
      name: "S.ritika",
      text: "Very happy to be a part in this event where one can enjoy and have wonderful time in it to remember.",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-16">
      {/* Header */}
      <div className="mb-16">
        <h2 className="bg-[#004C4C] pt-12 text-white font-lato text-4xl md:text-5xl font-bold leading-[57.6px] text-center">
          Participants Testimonials
        </h2>
        <p className="bg-[#004C4C] pb-12 text-[#FFC12D] px-4 font-lato text-2xl md:text-3xl font-bold leading-[38.4px] text-center">
          How SustainaSpark Transformed Their Perspectives
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#004C4C] p-6 rounded-lg shadow-lg flex flex-col justify-between max-w-sm mx-auto"
              style={{ height: 'auto' }}
            >
              {/* Quote SVG */}
              <div>
                <img
                  src="/images/quote.png"
                  alt="Quote icon"
                  width={30}
                  height={30}
                  className="mb-4"
                />

                <div className="text-[#FFC12D] mb-4">
                  <h3 className="font-lato text-[36px] font-extrabold leading-[32px]">
                    {testimonial.name}
                  </h3>
                </div>

                <p className="text-white mb-4 font-lato text-sm md:text-base font-bold leading-[20px]">
                  {testimonial.text}
                </p>
              </div>

              <div className="text-base">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Register Button */}
      <div className="text-center">
        <button
          className="bg-yellow-500 text-teal-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
          onClick={() => navigate('/register')}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
