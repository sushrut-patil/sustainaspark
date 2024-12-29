import React from 'react';

const AboutVong = () => {
  return (
    <div className="relative flex flex-col items-center p-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img 
            src="/api/placeholder/600/400" 
            alt="Students holding signs about Climate Crisis, DEI, and Sustainable Development Goals"
            className="rounded-lg w-full"
          />
          {/* Decorative Leaves */}
          <div className="absolute -bottom-4 -left-4">
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
          </div>
          <div className="absolute -top-4 -right-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-[48px] leading-[58px] font-extrabold text-[#013434] font-lato">
            What is VONG?
          </h1>
          
          <p className="text-2xl leading-[29px] font-black text-black font-lato">
            VONG is a global student movement anchoring on sustainable development of the world by 
            transforming ideas into action. Our mission is to empower young changemakers with the tools, 
            mentorship, and platform to tackle the world's biggest challenges. We don't teach, preach or mold, 
            instead we motivate and inspire the young generation to deeply understand global issues and 
            resolve it with their inner fire.
          </p>

          <button className="bg-[#FFC12D] text-black font-bold py-5 px-8 rounded-lg w-fit hover:bg-yellow-400 transition-colors">
            Become a Part
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutVong;