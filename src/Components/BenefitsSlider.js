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
    <section className="bg-[#004C4C] relative overflow-hidden">
      {/* Header */}
      <div className="bg-[#FFC12D] py-8 w-full text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          What's in it for YOU?
        </h2>
        {/* Decorative Leaves */}
        <div className="absolute left-4 top-4">
          <div className="w-8 h-8 bg-[#006666] rounded-full transform -rotate-45" />
        </div>
        <div className="absolute right-4 bottom-4">
          <div className="w-6 h-6 bg-[#006666] rounded-full transform rotate-45" />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto relative">
          {/* Title with left border */}
          <div className="mb-6 pl-4 border-l-4 border-[#FFC12D]">
            <h3 
              className="w-[316px] h-[38px] font-lato font-extrabold text-[32px] leading-[38px] text-white"
              style={{ fontFamily: 'Lato' }}
            >
              {slides[currentSlide].title}
            </h3>
          </div>

          {/* Image Container - 50% width */}
          <div className="relative w-1/2 mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-[#FFC12D] rounded-full p-4 hover:bg-[#FFD15D] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </div>

          {/* Description - positioned below image */}
          <p 
            className="mt-6 font-lato font-medium text-[20px] leading-[24px] text-white max-w-[758px]"
            style={{ fontFamily: 'Lato' }}
          >
            {slides[currentSlide].description}
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-[#FFC12D]' 
                    : 'w-2 bg-[#FFC12D]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSlider;