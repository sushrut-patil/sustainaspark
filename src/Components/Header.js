import React from 'react';

const Header = ({registrationRef}) => {
    const handleRegisterClick = () => {
        console.log("hit");
        registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <header className="w-full h-auto flex justify-center p-2 sm:p-4">
            <div className="w-[95%] sm:w-4/5 md:w-3/4 lg:w-1/2 h-14 sm:h-16 bg-white shadow-md rounded-full flex justify-between items-center px-3 sm:px-6 py-2">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="SustainaSpark Logo"
                        className="h-8 sm:h-12"
                    />
                </div>
                <button 
                    className="bg-[#FFC12D] w-28 sm:w-40 h-8 sm:h-10 text-sm sm:text-base text-black font-bold px-3 sm:px-6 py-1 sm:py-1.5 rounded-full hover:bg-[#003939] hover:text-white transition-colors duration-300"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
            </div>
        </header>
    );
};

export default Header;