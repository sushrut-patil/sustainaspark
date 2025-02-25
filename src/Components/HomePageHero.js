import Header from './Header';
import { useEffect, useState } from 'react';
import CountdownTimer from './Timer';

const HomepageHero = ({ registrationRef }) => {
    const handleRegisterClick = () => {
        registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLearnMoreClick = () => {
        window.open("https://drive.google.com/file/d/1je1fZr75eWeN-OGDp46hdqrNQD8tK1ch/view?usp=sharing", "_blank");
    };

    return (
        <div className="mb-16">
            <div 
                className="z-0 relative w-screen min-h-screen overflow-hidden px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 flex flex-col"
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

                <div className="container mx-auto px-4 md:px-6 flex-grow flex flex-col justify-center -mt-4 md:-mt-8">
                    <div className="text-center mb-16 md:mb-24">
                        <h1 className="text-white text-4xl sm:text-3xl md:text-7xl lg:text-6xl font-extrabold font-lato leading-tight mb-4 md:mb-6">
                            Shape the Future, One Policy at a Time!
                        </h1>

                        <p className="text-white mb-6 md:mb-8 max-w-[95%] md:max-w-[715px] mx-auto font-Roboto font-medium text-2xl sm:text-1xl md:text-5xl lg:text-3xl leading-snug">
                            Got big ideas? Turn them into real-world rules to save the planet — because the world needs YOUR voice!
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
                            <button 
                                onClick={handleRegisterClick} 
                                className="bg-[#FFC12D] text-black font-bold py-3 px-6 rounded-lg w-full md:w-[200px] text-base md:text-lg hover:bg-yellow-400 transition-colors"
                            >
                                Become a Part
                            </button>
                            <button 
                                onClick={handleLearnMoreClick} 
                                className="text-white font-bold py-3 px-6 rounded-lg w-full md:w-[200px] border-[#FFC12D] border-2 md:border-3 text-base md:text-lg mt-4 md:mt-0"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-auto">
                <CountdownTimer />
            </div>
        </div>
    );
};

export default HomepageHero;