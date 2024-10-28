import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BenefitsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Global Awareness",
      description: "Explore critical international sustainability issues.",
      image: "/api/placeholder/300/300",
      icon: "🌍"
    },
    {
      title: "Policy Making Skills",
      description: "Learn to craft and present effective policies.",
      image: "/api/placeholder/300/300",
      icon: "📋"
    },
    {
      title: "Networking",
      description: "Connect with like-minded individuals worldwide.",
      image: "/api/placeholder/300/300",
      icon: "🤝"
    },
    {
      title: "Leadership Development",
      description: "Enhance your leadership and decision-making abilities.",
      image: "/api/placeholder/300/300",
      icon: "⭐"
    },
    {
      title: "Real-World Impact",
      description: "Contribute to actual sustainability solutions.",
      image: "/api/placeholder/300/300",
      icon: "🎯"
    },
    {
      title: "Career Growth",
      description: "Boost your professional profile in sustainability.",
      image: "/api/placeholder/300/300",
      icon: "📈"
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
    <section className="bg-teal-800 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-yellow-400 py-8 px-4 rounded-lg mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Why Join SustainaSpark 4?</h2>
          <p className="text-teal-800 text-xl">Develop Skills for Your Future</p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main content */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto">
              {/* Globe illustration with people */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {slides[currentSlide].icon}
                </div>
              </div>
              
              <h3 className="text-yellow-400 text-3xl font-bold mb-4">
                {slides[currentSlide].title}
              </h3>
              <p className="text-white text-lg">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-yellow-400 rounded-full p-3 hover:bg-yellow-300 transition-colors"
          >
            <ChevronLeft size={24} className="text-teal-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-yellow-400 rounded-full p-3 hover:bg-yellow-300 transition-colors"
          >
            <ChevronRight size={24} className="text-teal-800" />
          </button>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
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