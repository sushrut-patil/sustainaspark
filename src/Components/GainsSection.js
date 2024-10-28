import React from 'react';

const GainsSection = () => {
  const benefits = [
    {
      number: "1",
      title: "In-depth knowledge of",
      subtitle: "sustainability practices."
    },
    {
      number: "2",
      title: "A network of peers",
      subtitle: "passionate about making a difference."
    },
    {
      number: "3",
      title: "Leadership and",
      subtitle: "teamwork skills"
    }
  ];

  return (
    <section className="bg-teal-800 py-16 relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute right-0 bottom-0">
        <svg 
          className="w-32 h-32 text-yellow-400 transform rotate-45" 
          viewBox="0 0 24 24"
        >
          <path 
            fill="currentColor" 
            d="M17.75 12.5C17.75 12.5 21 9.25 21 6C21 2.75 17.75 -0.5 17.75 -0.5C14.5 -3.75 11.25 -7 8 -7C4.75 -7 1.5 -3.75 -1.75 -0.5C-1.75 -0.5 -5 2.75 -5 6C-5 9.25 -1.75 12.5 -1.75 12.5C1.5 15.75 4.75 19 8 19C11.25 19 14.5 15.75 17.75 12.5Z"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="bg-yellow-400 py-4 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center">What You'll Gain?</h2>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                text-teal-800 
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
              <div className="text-white space-y-2">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-lg text-yellow-400">{benefit.subtitle}</p>
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
          ">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GainsSection;