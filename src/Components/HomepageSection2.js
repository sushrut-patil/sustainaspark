import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventFlow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/eventImages/welcome.png',
    '/images/eventImages/policy.png',
    '/images/eventImages/results.png',
    '/images/eventImages/research.png',
    '/images/eventImages/policy2.png',
    '/images/eventImages/closing.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-teal-800 text-white hover:bg-teal-700"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4 overflow-hidden">
          {slides.slice(currentSlide, currentSlide + 1).map((slide, index) => (
            <div
              key={index}
              className="flex-1 bg-teal-800 rounded-lg p-6 text-center min-w-[800px] h-[500px]"
            >
              <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-contain" />
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
    <div style={{ backgroundColor: '#004C4C' }} className='p-0'>
      <div className="bg-white py-16 rounded-t-3xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="SustainaSpark Logo"
              className="h-14"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/images/onlylogo.png"
              alt="SustainaSpark Logo"
              className="h-14"
            />
          </div>
        </div>
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[3fr,4fr] items-center mb-12">
            {/* Left side - Event Highlights */}
            <div className="md:basis-[40%]">
              <div className="inline-block border-solid border-[#FFC12D] rounded-md px-6 py-2 mb-6">
                <span className="text-[48px] font-[800] font-['Roboto'] leading-[56.25px] text-center">
                  Event Highlights
                </span>
              </div>

              <div className="relative">
                <img
                  src="/images/eventperson.png"
                  alt="Event highlights illustration"
                  className="rounded-full w-full max-w-md"
                />
              </div>

              <button className="mt-8 bg-yellow-400 text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
                onClick={() => navigate('/register')} >
                Register Now
              </button>
            </div>

            {/* Right side - Theme and Event Flow */}
            <div className="space-y-8 md:basis-[60%]">
            <div className="h-[50px]"></div>
              <div className="border-l-[10px] border-[#FFC12D] bg-white pl-[50px]">
                <h2 className="font-roboto text-[36px] font-medium leading-[42.19px] text-left text-black">Theme</h2>
                <p className="font-roboto text-[36px] font-medium leading-[42.19px] text-left text-[#004C4C]">Discussions and Policy Making</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Event Flow</h2>
                <EventFlow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;