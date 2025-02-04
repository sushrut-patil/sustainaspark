import React, { useState, useEffect } from 'react';
import SustainaSparkForm from './SustainaSparkForm';
import SustainaSpark from './SustainaSpark';

const RegistrationSection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-4 md:space-y-8">
          <div className="space-y-2">
            <h2 className="font-[Lato] text-3xl md:text-[48px] font-bold leading-tight md:leading-[57.6px] mb-6 md:mb-10 text-center border-b-[3px] md:border-b-[5px] border-[#FFC12D]">
              Ready to ignite your changemaker spark?
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center py-2 sm:py-4">
          <p className="font-[Roboto] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold leading-snug sm:leading-tight md:leading-[37.5px] text-center text-[#004C4C] mx-auto max-w-[95%] sm:max-w-full">
            Fill out the registration form below and secure your spot at SustainaSpark .4!
          </p>
        </div>
      </div>
      <SustainaSpark />
      <div className='bg-[#FFC12D]'>
        <SustainaSparkForm />
      </div>
    </section>
  );
};

export default RegistrationSection;
