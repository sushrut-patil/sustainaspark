import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventFlow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome and Introduction',
      icon: '📝',
      round: 'Round 1'
    },
    {
      title: 'Policy Presentations',
      icon: '👥',
      round: 'Round 1'
    },
    {
      title: 'Results & Crisis Introduction',
      icon: '🎯',
      round: 'Round 1'
    },
    {
      title: 'Crisis Resolution',
      icon: '⚡',
      round: 'Round 2'
    },
    {
      title: 'Final Presentations',
      icon: '🎤',
      round: 'Round 2'
    },
    {
      title: 'Awards Ceremony',
      icon: '🏆',
      round: 'Final'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= slides.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 < 0 ? slides.length - 3 : prev - 3));
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-700"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-4 overflow-hidden">
          {slides.slice(currentSlide, currentSlide + 3).map((slide, index) => (
            <div 
              key={index}
              className="flex-1 bg-teal-800 rounded-lg p-6 text-center min-w-[200px]"
            >
              <div className="bg-yellow-400 rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center text-2xl">
                {slide.icon}
              </div>
              <div className="text-yellow-400 text-sm mb-2">{slide.round}</div>
              <div className="text-white font-medium">{slide.title}</div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const HomepageSection2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Event Highlights */}
          <div>
            <div className="inline-block border-2 border-yellow-400 rounded-full px-6 py-2 mb-6">
              <span className="text-xl font-bold">Event Highlights</span>
            </div>
            
            <div className="relative">
              <img 
                src="/images/eventperson.png"
                alt="Event highlights illustration"
                className="rounded-full w-full max-w-md"
              />
              {/* Decorative leaves */}
              <div className="absolute -top-8 -right-8 text-yellow-400">
                <svg className="w-16 h-16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.11 15.89C6.11 15.89 4 13.78 4 12C4 10.22 6.11 8.11 6.11 8.11C8.22 6 10 4 12 4C14 4 15.78 6 17.89 8.11C17.89 8.11 20 10.22 20 12C20 13.78 17.89 15.89 17.89 15.89C15.78 18 14 20 12 20C10 20 8.22 18 6.11 15.89Z" />
                </svg>
              </div>
            </div>
            
            <button className="mt-8 bg-yellow-400 text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            onClick={() => navigate('/register')} >
              Register Now
            </button>
          </div>

          {/* Right side - Theme and Event Flow */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Theme</h2>
              <p className="text-xl text-teal-800">Discussions and Policy Making</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Event Flow</h2>
              <EventFlow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;