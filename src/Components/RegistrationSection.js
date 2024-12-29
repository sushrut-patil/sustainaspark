import React, { useState, useEffect } from 'react';
import SustainaSparkForm from './SustainaSparkForm';


const RegistrationSection = () => {
  return (
    <section className="bg-white py-10 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-4 md:space-y-8">
          <div className="space-y-2">
            <h2 className="font-[Lato] text-3xl md:text-[48px] font-bold leading-tight md:leading-[57.6px] mb-6 md:mb-10 text-center border-b-[3px] md:border-b-[5px] border-[#FFC12D]">
              Ready to ignite your changemaker spark?
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-4 md:space-y-8">
          <p className="font-[Roboto] text-xl md:text-[32px] font-extrabold leading-tight md:leading-[37.5px] text-center text-[#004C4C]">
            Fill out the registration form below and secure your
            spot at SustainaSpark .4!
          </p>
        <div>
          <SustainaSparkForm/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
