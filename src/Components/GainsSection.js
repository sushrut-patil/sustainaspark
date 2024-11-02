import React from 'react';
import { useNavigate } from 'react-router-dom';

const GainsSection = () => {
  const navigate = useNavigate();
  const benefits = [
    {
      number: "1",
      text: "In-depth knowledge of sustainability practices."
    },
    {
      number: "2",
      text: "A network of peers passionate about making a difference."
    },
    {
      number: "3",
      text: "Leadership and teamwork skills"
    }
  ];

  return (
    <section className="bg-[#004C4C] py-10 md:py-16 relative overflow-hidden">
      
      {/* Header */}
      <div className="bg-yellow-400 p-6 md:p-10">
        <h2 
          style={{
            fontFamily: 'Lato',
            fontWeight: 800,
            lineHeight: '1.2em',
            textAlign: 'center'
          }} 
          className="text-black-800 text-3xl md:text-5xl"
        >
          What You'll Gain?
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto mt-8 md:mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              {/* Number Circle */}
              <div className="
                w-10 h-10 md:w-12 md:h-12 
                rounded-full 
                bg-yellow-400 
                text-white
                text-lg md:text-xl 
                font-bold 
                flex 
                items-center 
                justify-center 
                mx-auto 
                mb-4 md:mb-6
                transform
                group-hover:scale-110
                transition-transform
                duration-300
              ">
                {benefit.number}
              </div>
              
              {/* Benefit Text */}
              <div className="text-white">
                <p 
                  style={{
                    fontFamily: 'Lato',
                    fontWeight: 800,
                    lineHeight: '1.2em',
                    textAlign: 'center'
                  }} 
                  className="text-2xl md:text-3xl"
                >
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Register Button */}
        <div className="text-center mt-8 md:mt-12">
          <button 
            className="
              bg-yellow-400 
              text-teal-800 
              px-6 md:px-8 
              py-2 md:py-3 
              rounded-full 
              font-bold 
              hover:bg-yellow-300 
              transition-colors
              transform
              hover:scale-105
              duration-300
              w-full md:w-auto
            "
            onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GainsSection;
