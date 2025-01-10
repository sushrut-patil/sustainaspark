import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I joined SustainaSpark unsure of what I could do. I left feeling like a changemaker, ready to lead.",
      author: "Anuj sen, Past Participant",
      imgUrl: "/images/anuj.png"
    },
    {
      text: "The teamwork, the learning, the energy—it was incredible! SustainaSpark is a must for anyone passionate about sustainability.",
      author: "Shreya Singh, VONGster",
      imgUrl: "/images/shreya.png"
    }
  ];

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="w-full bg-[#FFC12D] py-6 md:py-8 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-[48px] leading-tight md:leading-[58px] font-extrabold font-lato text-[#1E1E1E] mb-2">
          What Others Say
        </h2>
        <p className="text-xl md:text-[24px] font-extrabold font-lato text-[#004C4C]">
          Real stories. Real impact.
        </p>
      </div>
      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute top-[80px] left-0 w-60 h-60 z-10 hidden md:block"
      />
      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute bottom-[-50px] right-[10px] z-10 w-48 h-48 hidden md:block"
      />
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative w-full md:w-[460px] h-auto md:h-[400px] bg-[#004C4C] p-6 md:p-10 rounded-lg mx-auto">
            {/* White box with quote SVG */}
            <div className="absolute -right-2 md:-right-4 -top-2 md:-top-4 w-[100px] md:w-[148px] h-[120px] md:h-[160px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform scale-75 md:scale-100 -translate-x-[10px] -translate-y-[-5px]"
              >
                <path
                  d="M12 15H6.8C6.8 8.2 12 7 12 7V3C12 3 4 4.2 4 15V25C4 27.2 5.8 29 8 29H12C14.2 29 16 27.2 16 25V19C16 16.8 14.2 15 12 15Z"
                  fill="#FFC12D"
                />
                <path
                  d="M28 15H22.8C22.8 8.2 28 7 28 7V3C28 3 20 4.2 20 15V25C20 27.2 21.8 29 24 29H28C30.2 29 32 27.2 32 25V19C32 16.8 30.2 15 28 15Z"
                  fill="#FFC12D"
                />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
              {/* Testimonial content - Added right padding for quote space */}
              <div className="flex-1 pr-24 md:pr-0">
                <p className="text-white text-xl md:text-[32px] leading-snug md:leading-9 font-extrabold font-lato mb-4 md:mb-6">
                  {testimonial.text}
                </p>
                <p className="text-[#FFC12D] text-base md:text-[20px] font-extrabold font-lato">
                  {testimonial.author}
                </p>
              </div>

              {/* Profile image - Hidden on mobile */}
              <div className="hidden md:block mt-4 md:mt-0">
                <img
                  src={testimonial.imgUrl}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;