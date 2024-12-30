import React from 'react';

const AboutSS4 = () => {
  return (
    <div className="relative flex flex-col items-start p-4 md:p-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Left Content Section */}
        <div className="flex flex-col space-y-4 md:space-y-6">
          <h2 className="self-start w-auto text-3xl md:text-[48px] leading-tight md:leading-[58px] font-extrabold text-[#013434] font-lato border-b-[6px] border-yellow-400">
            About SustainaSpark 4
          </h2>

          <p className="text-lg md:text-[24px] leading-snug md:leading-[29px] font-lato">
            Think of it as a bootcamp for change, designed for young leaders aged 12–18 who are passionate
            about creating a sustainable future. This year's theme—Sustainable Living in the Modern World—focuses
            on actionable solutions for reducing plastic waste, fostering biodiversity, and embracing minimalism.
          </p>

          <button className="bg-[#FFC12D] text-black font-bold py-4 md:py-5 px-6 md:px-8 rounded-lg w-fit hover:bg-yellow-400 transition-colors">
            Become a Part
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-6 md:mt-0">
          <img
            src="/images/aboutss4.png"
            alt="Hand holding a globe representing sustainable future"
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-[150px] md:w-[226px] h-[70px] md:h-[102px] bg-white rounded" />
        </div>
      </div>

      {/* 3-Step Magic Formula Section */}
      <div className="mt-12 md:mt-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 lg:gap-6">
          <div className="border-l-6 border-[#FFC12D] pl-4 py-2">
            <h3 className="text-[#004C4C] text-2xl md:text-[32px] font-bold">
              Our 3-Step
              <br className="hidden sm:block" />
              Magic Formula
            </h3>

            <img
              src="/images/pathway.png"
              alt="Pathway"
              className="h-6 md:h-8 mt-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:flex gap-8 lg:gap-6 w-full lg:w-auto">
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
                className="relative border-[5px] border-[#004C4C] rounded-lg p-4 w-full lg:w-64"
              >
                <div className="absolute -top-4 -right-6 w-8 h-8 bg-[#004C4C] rounded-full flex items-center justify-center text-white font-semibold">
                  {item.number}
                </div>
                <div className="flex flex-col h-full">
                  <h4
                    className="font-lato font-extrabold text-xl md:text-2xl leading-tight md:leading-[29px] text-[#F6AE00] mb-2"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-lato text-black font-semibold text-lg md:text-xl lg:text-[24px] leading-snug md:leading-[29px]"
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