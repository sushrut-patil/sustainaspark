import React from 'react';

const AboutSS4 = ({ registrationRef }) => {
  const handleRegisterClick = () => {
    console.log("hit");
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative flex flex-col items-start p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        {/* Left Content Section */}
        <div className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-6">
          <h2 className="self-start w-auto text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] font-extrabold text-[#013434] font-lato border-b-4 sm:border-b-5 lg:border-b-[6px] border-yellow-400">
            About SustainaSpark 4
          </h2>

          <p className="text-lg sm:text-xl lg:text-[24px] leading-snug lg:leading-[29px] font-lato">
            Think of it as a bootcamp for change, designed for young leaders aged 12–18 who are passionate
            about creating a sustainable future. This year's theme—Sustainable Living in the Modern World—focuses
            on actionable solutions for reducing plastic waste, fostering biodiversity, and embracing minimalism.
          </p>

          <button className="bg-[#FFC12D] text-black font-bold py-4 lg:py-5 px-6 lg:px-8 rounded-lg w-fit hover:bg-yellow-400 transition-colors"
            onClick={handleRegisterClick}>
            Become a Part
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-6 lg:mt-0">
          <div className="relative h-64 sm:h-96 lg:h-auto w-full">
            <img
              src="/images/aboutss4.png"
              alt="Hand holding a globe representing sustainable future"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src="/images/leaf.svg"
              alt="Decorative leaf"
              className="absolute bottom-[-100px] right-[-10px] w-48 h-48 z-10 hidden lg:block"
            />
          </div>
        </div>
      </div>

      {/* 3-Step Magic Formula Section */}
      <div className="mt-10 sm:mt-12 lg:mt-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 sm:gap-8 lg:gap-6">
          <div className="pl-4 py-2">
            <h3 className="text-[#004C4C] text-2xl sm:text-[28px] lg:text-[32px] font-bold border-l-4 sm:border-l-5 lg:border-l-[6px] border-[#FFC12D] -400 pl-4 mb-6 sm:mb-8">
              Our 3-Step
              <br className="hidden sm:block" />
              Magic Formula
            </h3>

            <img
              src="/images/pathway.png"
              alt="Pathway"
              className="h-full w-full lg:h-8 mt-2"
            />
          </div>

          <div className="grid grid-cols-1 lg:flex gap-6 sm:gap-8 lg:gap-6 flex-grow lg:w-64">
            {[
              {
                number: 1,
                title: 'Explore:',
                text: 'Gamified workshops and hands-on activities that make learning fun and practical.'
              },
              {
                number: 2,
                title: 'Create:',
                text: 'Work individually and in teams to develop innovative solutions for pressing environmental issues.'
              },
              {
                number: 3,
                title: 'Inspire:',
                text: 'Present your ideas, gain recognition, and drive real change.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative border-4 sm:border-[5px] border-[#004C4C] rounded-lg p-4 w-full"
              >
                <div className="absolute -top-4 -right-[-20px] w-8 h-8 bg-[#004C4C] rounded-full flex items-center justify-center text-white font-semibold">
                  {item.number}
                </div>
                <div className="flex flex-col h-full">
                  <h4
                    className="font-lato font-extrabold text-xl sm:text-2xl leading-tight lg:leading-[29px] text-[#F6AE00] mb-2"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-lato text-black text-lg sm:text-xl lg:text-[24px] leading-snug lg:leading-[29px]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSS4;