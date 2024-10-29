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
    <section className="bg-[#004C4C] py-16 relative overflow-hidden">
      
      {/* Header */}
      <div className="bg-yellow-400 p-10">
        <h2 style={{
          fontFamily: 'Lato',
          fontSize: '48px',
          fontWeight: 800,
          lineHeight: '57.6px',
          textAlign: 'center'
        }} className="text-black-800">
          What You'll Gain?
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-10 max-w-10xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              {/* Number Circle */}
              <div className="
                w-12 h-12 
                rounded-full 
                bg-yellow-400 
                text-white
                text-xl 
                font-bold 
                flex 
                items-center 
                justify-center 
                mx-auto 
                mb-6
                transform
                group-hover:scale-110
                transition-transform
                duration-300
              ">
                {benefit.number}
              </div>
              
              {/* Benefit Text */}
              <div className="text-white">
                <p style={{
                  fontFamily: 'Lato',
                  fontSize: '32px',
                  fontWeight: 800,
                  lineHeight: '38.4px',
                  textAlign: 'center'
                }} className="text-white">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Register Button */}
        <div className="text-center mt-12">
          <button className="
            bg-yellow-400 
            text-teal-800 
            px-8 
            py-3 
            rounded-full 
            font-bold 
            hover:bg-yellow-300 
            transition-colors
            transform
            hover:scale-105
            duration-300
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