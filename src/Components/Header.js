import React from 'react';

const Header = ({registrationRef}) => {
    const handleRegisterClick = () => {
        console.log("hit");
        registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <header className="w-full flex justify-center p-4">
            <div className="w-1/2 h-16 bg-white shadow-md rounded-full flex justify-between items-center px-6 py-2">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="SustainaSpark Logo"
                        className="h-12"
                    />
                </div>
                <button 
                    className="bg-[#FFC12D] w-40 h-10 text-black font-bold px-6 py-1.5 rounded-full hover:bg-[#003939] transition-colors"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
            </div>
        </header>
    );
};

export default Header;