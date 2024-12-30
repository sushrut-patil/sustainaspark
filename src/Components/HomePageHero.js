import Header from './Header';
import { useEffect, useState } from 'react';

const HomepageHero = ({ registrationRef }) => {
    return (
        <div 
            className="relative w-screen h-screen overflow-hidden px-4 py-8"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 76, 76, 0.15), 
                        rgba(0, 76, 76, 0.15)
                    ),
                    url('/images/heropage.png')
                `,
                backgroundSize: '100% 100%',  // Changed to ensure full width and height coverage
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#004C4C'
            }}
        >
            <Header registrationRef={registrationRef} />

            <div className="container mx-auto px-4 mt-20 text-center">
                <h1 className="text-white text-[48px] font-extrabold font-lato md:text-5xl mb-6">
                    Shape the Future, One Policy at a Time!
                </h1>

                <p className="text-white mb-8 max-w-[715px] mx-auto font-Roboto font-medium text-[32px]">
                    Got big ideas? Turn them into real-world rules to save the planet — because the world needs YOUR voice!
                </p>

                <div className="flex justify-center gap-8 mb-16">
                    <button className="bg-[#FFC12D] text-black font-bold py-5 px-8 rounded-lg w-[200px] h-[60px] hover:bg-yellow-400 transition-colors">
                        Become a Part
                    </button>
                    <button className="text-white font-bold py-3 px-6 rounded-lg w-[200px] h-[60px] border-[#FFC12D] border-[4px]">
                        Learn More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default HomepageHero;