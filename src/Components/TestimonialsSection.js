import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I joined SustainaSpark unsure of what I could do. I left feeling like a changemaker, ready to lead.",
      author: "Anuj sen, Past Participant",
      imgUrl: "/api/placeholder/60/60"
    },
    {
      text: "The teamwork, the learning, the energy—it was incredible! SustainaSpark is a must for anyone passionate about sustainability.",
      author: "Shreya Singh, VONGster",
      imgUrl: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="w-full bg-[#FFC12D] py-8 px-4 flex flex-col items-center">
        <h2 className="text-[48px] leading-[58px] font-extrabold font-lato text-[#1E1E1E] mb-2">
          What Others Say
        </h2>
        <p className="text-2xl font-extrabold font-lato text-[#004C4C]">
          Real stories. Real impact.
        </p>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute top-0 left-4">
        <div className="w-12 h-12 bg-yellow-600 rotate-45 transform -translate-y-1/2"></div>
      </div>
      <div className="absolute top-0 right-4">
        <div className="w-8 h-8 bg-green-600 rotate-45 transform -translate-y-1/2"></div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative bg-[#004C4C] p-8 rounded-lg">
            {/* Quote Mark */}
            <div className="absolute -right-4 top-8 text-[#FFC12D] text-[80px] font-serif">
              "
            </div>
            
            <div className="mb-8">
              <p className="text-white text-[32px] leading-[38px] font-extrabold font-lato mb-8">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.imgUrl} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-[#FFC12D] text-xl font-extrabold font-lato">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Leaves */}
      <div className="absolute bottom-4 left-8">
        <div className="w-10 h-10 bg-yellow-600 rotate-45"></div>
      </div>
      <div className="absolute bottom-4 right-8">
        <div className="w-10 h-10 bg-green-600 rotate-45"></div>
      </div>
    </div>
  );
};

export default TestimonialsSection;