import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const BenefitsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Turn Ideas into Action",
      description: "Transform your sustainability ideas into real-world policies for a greener tomorrow.",
      image: "/images/benefit1.png",
    },
    {
      title: "Network with Changemakers",
      description: "Connect with mentors, advocates, and peers who share your passion for sustainability.",
      image: "/images/benefit2.png",
    },
    {
      title: "Earn Recognition",
      description: "Win prestigious titles, certificates, and prizes to showcase your achievements.",
      image: "/images/benefit3.png",
    },
    {
      title: "Learn from the Best",
      description: "Leverage AI tools and engaging methods to elevate your ideas to the next level.",
      image: "/images/benefit4.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-[#004C4C] relative overflow-hidden">
      {/* Header */}
      <div className="bg-[#FFC12D] py-8 w-full text-center relative">
        <h2 className="text-5xl font-extrabold text-[#1E1E1E] mb-2">
          What's in it for YOU?
        </h2>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto relative">
          {/* Image Container - 80% width centered */}
          <div className="relative w-[90%] mx-auto mb-8">
            <div className="rounded-xl overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative w-[90%] mx-auto mb-8">
            {/* Title and Description Container */}
            <div className="pl-4">
              <h3
                className="font-lato font-extrabold text-[32px] text-white mb-4 border-l-[6px] border-[#FFC12D] px-8 py-2"
                style={{ fontFamily: 'Lato' }}
              >
                {slides[currentSlide].title}
              </h3>
              <p
                className="font-lato font-medium text-[20px] text-white"
                style={{ fontFamily: 'Lato' }}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Next Button - Positioned to the right */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#004C4C] rounded-full p-4 hover:bg-[#005C5C] transition-colors border-4 border-[#FFC12D]"
              aria-label="Next slide"
            >
              <ChevronRight size={26} className="text-[#FFFFFF]" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'w-8 bg-[#FFC12D]'
                    : 'w-2 bg-[#FFC12D]/40'
                  }`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSlider;