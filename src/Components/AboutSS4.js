import React from 'react';

const AboutSS4 = () => {
  return (
    <div className="relative flex flex-col items-start p-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-[42px] leading-tight font-bold text-[#004C4C] pb-2 border-b-6 border-[#FFC12D] w-full">
            About SustainaSpark 4
          </h2>
          
          <p className="text-2xl leading-[29px] font-medium text-black font-lato max-w-[550px]">
            Think of it as a bootcamp for change, designed for young leaders aged 12–18 who are passionate 
            about creating a sustainable future. This year's theme—Sustainable Living in the Modern World—focuses 
            on actionable solutions for reducing plastic waste, fostering biodiversity, and embracing minimalism.
          </p>

          <button className="bg-[#FFC12D] text-black font-bold py-5 px-8 rounded-lg w-fit hover:bg-yellow-400 transition-colors">
            Become a Part
          </button>

          {/* 3-Step Magic Formula Section */}
          <div className="mt-8">
            <div className="border-l-6 border-[#FFC12D] pl-4 py-2 mb-6">
              <h3 className="text-[#004C4C] text-2xl font-bold">Our 3-Step<br />Magic Formula</h3>
              <div className="text-lg font-medium">Pathway</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative border-[5px] border-[#004C4C] rounded-lg p-4">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#004C4C] rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <h4 className="text-[#FFC12D] font-bold mb-2">Explore:</h4>
                <p className="text-sm">Gamified workshops and hands-on activities that make learning fun and practical.</p>
              </div>

              <div className="relative border-[5px] border-[#004C4C] rounded-lg p-4">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#004C4C] rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <h4 className="text-[#FFC12D] font-bold mb-2">Create:</h4>
                <p className="text-sm">Work individually and in teams to develop innovative solutions for pressing environmental issues.</p>
              </div>

              <div className="relative border-[5px] border-[#004C4C] rounded-lg p-4">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#004C4C] rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <h4 className="text-[#FFC12D] font-bold mb-2">Inspire:</h4>
                <p className="text-sm">Present your ideas, gain recognition, and drive real change.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img 
            src="/api/placeholder/600/400" 
            alt="Hand holding a globe representing sustainable future"
            className="rounded-lg w-full object-cover"
          />
          {/* Decorative Leaves */}
          <div className="absolute -top-4 -right-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute -bottom-4 -right-4">
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSS4;