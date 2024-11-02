import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BenefitsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Global Awareness",
      description: "Explore critical international sustainability issues.",
      image: "images/whyImages/global.png",
    },
    {
      title: "Debate Skills",
      description: "Sharpen public speaking and argumentation abilities.",
      image: "images/whyImages/debate.png",
    },
    {
      title: "Critical Thinking",
      description: "Hone your problem-solving and analytical skills..",
      image: "images/whyImages/critical.png",
    },
    {
      title: "Be Recognized",
      description: "Showcase your talent and dedication! Earn certificates and recognition for your contributions to a sustainable future.",
      image: "images/whyImages/recognized.png",
    },
    {
      title: "Real-World Impact",
      description: "Apply your knowledge to address global challenges.",
      image: "images/whyImages/impact.png",
    },
    {
      title: "Become a Vongster",
      description: "VIP Access: Get priority registration for future VONG events and workshops. Mentorship Opportunities: Learn from experienced sustainability leaders and gain invaluable guidance",
      image: "/images/whyImages/vong.png",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-[#004C4C]">
      {/* Header - Made responsive */}
      <div className="bg-[#FFC12D] py-4 md:py-8 w-full text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-black-800 lg:text-[48px] lg:leading-[57.6px] px-4">
          Why Join SustainaSpark 4?
        </h2>
        <p className="text-lg md:text-xl text-teal-800 font-semibold lg:text-[32px] lg:leading-[38.4px] px-4">
          Develop Skills for Your Future
        </p>
      </div>
      
      <div className="container mx-auto px-2 md:px-4">
        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main content - Adjusted height for mobile */}
          <div className="relative h-[400px] md:h-[550px] flex items-center justify-center">
            <div className="text-center w-full max-w-3xl mx-auto px-8 md:px-0">
              {/* Image container - Responsive height */}
              <div className="relative w-full h-48 md:h-96 mx-auto">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Text content - Responsive text sizes */}
              <div className="flex flex-col justify-start mt-4 md:mt-0">
                <h3 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold md:font-extrabold"
                    style={{
                      fontFamily: 'Lato',
                      lineHeight: '1.2',
                      textAlign: 'center'
                    }}>
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white mt-2 md:mt-4 text-base md:text-xl lg:text-2xl font-semibold md:font-bold"
                   style={{
                     fontFamily: 'Lato',
                     lineHeight: '1.3',
                     textAlign: 'center'
                   }}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons - Adjusted positioning and size for mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full mt-[-50px] p-2 md:p-3 hover:bg-yellow-300 transition-colors"
            >
              <ChevronLeft size={20} className="text-black md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full mt-[-50px] p-2 md:p-3 hover:bg-yellow-300 transition-colors"
            >
              <ChevronRight size={20} className="text-black md:w-6 md:h-6" />
            </button>
          </div>

          {/* Navigation dots - Adjusted spacing for mobile */}
          <div className="flex justify-center gap-1 md:gap-2 pb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-yellow-400 w-4 md:w-6' 
                    : 'bg-yellow-400/50 hover:bg-yellow-400/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSlider;