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
      description: "VIP Access: Get priority registration for future VONG events and workshops.Mentorship Opportunities: Learn from experienced sustainability leaders and gain invaluable guidance",
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
      {/* Header */}
      <div style={{ backgroundColor: '#FFC12D' }} className="py-8 mb-12 w-full text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-black-800 lg:text-[48px] lg:leading-[57.6px]">
          Why Join SustainaSpark 4?
        </h2>
        <p className="text-teal-800 text-xl font-semibold lg:text-[32px] lg:leading-[38.4px]">
          Develop Skills for Your Future
        </p>
      </div>
      <div className="container mx-auto px-4">
        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main content */}
          <div className="relative h-[700px] flex items-center justify-center">
            <div className="text-center w-full max-w-3xl mx-auto">
              {/* Globe illustration with people */}
              <div className="relative w-96 h-96 mx-auto">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Text content container with fixed height */}
              <div className="h-[200px] flex flex-col justify-start">
                <h3 className="text-yellow-400"
                    style={{
                      fontFamily: 'Lato',
                      fontSize: '36px',
                      fontWeight: 800,
                      lineHeight: '43.2px',
                      textAlign: 'center'
                    }}>
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white mt-4 overflow-y-auto"
                   style={{
                     fontFamily: 'Lato',
                     fontSize: '24px',
                     fontWeight: 800,
                     lineHeight: '28.8px',
                     textAlign: 'center'
                   }}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons - positioned relative to the fixed height container */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full p-3 hover:bg-yellow-300 transition-colors"
            >
              <ChevronLeft size={24} className="text-black" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full p-3 hover:bg-yellow-300 transition-colors"
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 pb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-yellow-400 w-6' 
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