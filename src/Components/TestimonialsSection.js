import React from 'react';

const TestimonialsSection = () => {
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
      <div className="flex justify-center md:justify-start">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`text-lg md:text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-10 md:py-16">
      {/* Header */}
      <div className="mb-8 md:mb-16 text-center">
        <h2 className="bg-[#004C4C] text-white font-lato text-3xl md:text-5xl font-bold py-6 md:py-12 leading-tight md:leading-[57.6px]">
          Participants Testimonials
        </h2>
        <p className="bg-[#004C4C] text-[#FFC12D] font-lato text-xl md:text-3xl font-bold pb-6 md:pb-12 leading-tight md:leading-[38.4px] px-4">
          How SustainaSpark Transformed Their Perspectives
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#004C4C] p-4 md:p-6 rounded-lg shadow-lg flex flex-col justify-between max-w-md mx-auto"
            >
              {/* Quote SVG */}
              <div className="mb-4">
                <img
                  src="/images/quote.png"
                  alt="Quote icon"
                  width={24}
                  height={24}
                  className="mb-2 md:mb-4 mx-auto md:mx-0"
                />

                <div className="text-[#FFC12D] mb-2 md:mb-4 text-center md:text-left">
                  <h3 className="font-lato text-2xl md:text-[36px] font-extrabold leading-tight">
                    {testimonial.name}
                  </h3>
                </div>

                <p className="text-white mb-4 font-lato text-sm md:text-base font-bold leading-tight md:leading-[20px] text-center md:text-left">
                  {testimonial.text}
                </p>
              </div>

              <div className="text-center md:text-left">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Register Button */}
      <div className="text-center">
        <button
          className="bg-yellow-500 text-teal-900 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
