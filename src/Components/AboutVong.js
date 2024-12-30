import React from 'react';

const AboutVong = () => {
  return (
    <div className="relative flex flex-col items-center p-8 pt-4 max-w-7xl mx-auto">
      <h1 className='mb-8 font-lato font-extrabold text-[32px]'>
        Time Left to Register <span className='text-[#FFB400]'>!</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/images/aboutvong.png"
            alt="Students holding signs about Climate Crisis, DEI, and Sustainable Development Goals"
            className="rounded-lg w-[550px] h-[500px]"
          />
          <div className="absolute top-0 right-0 w-[226px] h-[102px] bg-white rounded-bl-lg" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="self-start w-auto text-[48px] leading-[58px] font-extrabold text-[#013434] font-lato border-b-[6px] border-yellow-400">
            What is VONG?
          </h1>
          
          <p className="text-[24px] leading-[29px] font-lato">
            <span className='font-black'>VONG</span> is a global student movement anchoring on sustainable development of the world by
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