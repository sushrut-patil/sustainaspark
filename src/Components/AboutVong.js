import React from 'react';

const AboutVong = ({ registrationRef }) => {
  const handleRegisterClick = () => {
    console.log("hit");
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative flex flex-col items-center p-4 md:p-8 md:pt-4 max-w-7xl mx-auto">
      {/* Top right leaf */}
      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute top-[-50px] right-0 w-48 h-48 z-10 hidden lg:block"
      />

      {/* Bottom left leaf */}
      <img
        src="/images/leaf.svg"
        alt="Decorative leaf"
        className="absolute bottom-[-100px] left-[-70px] w-48 h-48 z-10 hidden lg:block"
      />
      <h1 className='mt-2 mb-6 md:mb-8 font-lato font-extrabold text-2xl md:text-[32px] text-center'>
        Time Left to Register <span className='text-[#FFB400]'>!</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section */}
        <div className="relative order-2 md:order-1">
          <img
            src="/images/aboutvong.png"
            alt="Students holding signs about Climate Crisis, DEI, and Sustainable Development Goals"
            className="rounded-lg w-full h-auto md:w-[550px] md:h-[500px] object-cover"
          />
          {/* <div className="absolute top-0 right-0 w-[160px] md:w-[226px] h-[80px] md:h-[102px] bg-white rounded-bl-lg" /> */}
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-4 md:space-y-6 order-1 md:order-2">
          <h1 className="self-start w-auto text-3xl md:text-[48px] leading-tight md:leading-[58px] font-extrabold text-[#013434] font-lato border-b-4 md:border-b-[6px] border-yellow-400">
            What is VONG?
          </h1>

          <p className="text-lg md:text-[24px] leading-snug md:leading-[29px] font-lato">
            <span className='font-black'>VONG</span> is a global student movement anchoring on sustainable development of the world by
            transforming ideas into action. Our mission is to empower young changemakers with the tools,
            mentorship, and platform to tackle the world's biggest challenges. We don't teach, preach or mold,
            instead we motivate and inspire the young generation to deeply understand global issues and
            resolve it with their inner fire.
          </p>

          <button className="bg-[#FFC12D] text-black font-bold py-4 md:py-5 px-6 md:px-8 rounded-lg w-fit hover:bg-yellow-400 transition-colors"
            onClick={handleRegisterClick} >
            Become a Part
          </button>
          <img
            src="/images/leaf.svg"
            alt="Decorative leaf"
            className="absolute bottom-[-30px] right-[200px] w-48 h-48 z-10 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVong;