import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I joined SustainaSpark unsure of what I could do. I left feeling like a changemaker, ready to lead.",
      author: "Anuj sen",
      degi: "Past Participant",
      imgUrl: "/images/anuj.png"
    },
    {
      text: "The teamwork, the learning, the energy—it was incredible! SustainaSpark is a must for anyone passionate about sustainability.",
      author: "Shreya Singh",
      degi: "VONGster",
      imgUrl: "/images/shreya.png"
    }
  ];

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="w-full bg-[#FFC12D] py-6 md:py-7 lg:py-8 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[54px] lg:leading-[58px] font-extrabold font-lato text-[#1E1E1E] mb-2">
          What Others Say
        </h2>
        <p className="text-xl md:text-2xl lg:text-[24px] font-extrabold font-lato text-[#004C4C]">
          Real stories. Real impact.
        </p>
      </div>

      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute top-[80px] left-0 w-40 h-40 lg:w-60 lg:h-60 z-10 hidden lg:block"
      />
      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute bottom-[-50px] right-[10px] z-10 w-32 h-32 lg:w-48 lg:h-48 hidden lg:block"
      />

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 bg-[#FFFFFF]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative w-full md:w-auto lg:w-[460px] h-auto md:h-[350px] lg:h-[400px] bg-[#004C4C] p-6 md:p-8 lg:p-10 rounded-lg mx-auto">
            {/* White box with quote SVG */}
            <div className="absolute -right-2 md:-right-3 lg:-right-4 -top-2 md:-top-3 lg:-top-4 w-[100px] md:w-[120px] lg:w-[148px] h-[120px] md:h-[140px] lg:h-[160px] bg-[#FFFFFF] p-4 rounded-lg flex justify-center items-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform scale-75 md:scale-90 lg:scale-100"
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

            <div className="flex flex-col h-full">
              {/* Testimonial content with proper spacing */}
              <div className="flex-1">
                <p className="text-white text-[20px] md:text-xl lg:text-[28px] leading-snug md:leading-8 lg:leading-9 font-extrabold font-lato pr-16 md:pr-20 lg:pr-24">
                  {testimonial.text}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-[#FFC12D] text-xl md:text-2xl lg:text-3xl font-extrabold font-lato mt-4">
                    {testimonial.author}<br></br>
                    {testimonial.degi}
                  </p>
                  {/* Profile image */}
                  <div className="flex-shrink-0 ml-2">
                    <img
                      src={testimonial.imgUrl}
                      alt={testimonial.author}
                      className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-2 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;