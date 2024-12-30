import Header from './Header';
import { useEffect, useState } from 'react';
import CountdownTimer from './Timer';

const HomepageHero = ({ registrationRef }) => {
    return (
        <div className="mb-16">
            <div 
                className="z-0 relative w-screen min-h-screen overflow-hidden px-2 sm:px-4 py-4 sm:py-8 flex flex-col"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0, 76, 76, 0.15), 
                            rgba(0, 76, 76, 0.15)
                        ),
                        url('./images/heropage.png')
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#004C4C'
                }}
            >
                <Header registrationRef={registrationRef} />

                <div className="container mx-auto px-2 sm:px-4 flex-grow flex flex-col justify-center -mt-8">
                    <div className="text-center mb-24">
                        <h1 className="text-white text-5xl sm:text-[36px] md:text-[48px] font-extrabold font-lato leading-tight sm:leading-normal mb-6">
                            Shape the Future, One Policy at a Time!
                        </h1>

                        <p className="text-white mb-8 max-w-[95%] sm:max-w-[90%] md:max-w-[715px] mx-auto font-Roboto font-medium text-3xl sm:text-[20px] md:text-[32px] leading-snug sm:leading-normal">
                            Got big ideas? Turn them into real-world rules to save the planet — because the world needs YOUR voice!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                            <button className="bg-[#FFC12D] text-black font-bold py-4 px-6 md:py-5 md:px-8 rounded-lg w-[250px] sm:w-[200px] h-[60px] md:h-[60px] hover:bg-yellow-400 transition-colors text-xl sm:text-base">
                                Become a Part
                            </button>
                            <button className="text-white font-bold py-4 px-6 md:py-3 md:px-6 rounded-lg w-[250px] sm:w-[200px] h-[60px] md:h-[60px] border-[#FFC12D] border-[3px] md:border-[4px] text-xl sm:text-base">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-[-50%] w-[calc(100%-2rem)] sm:w-auto">
                <CountdownTimer />
            </div>
        </div>
    );
};

export default HomepageHero;