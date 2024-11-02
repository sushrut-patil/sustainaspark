import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src="/images/logo.png"
                        alt="SustainaSpark Logo"
                        className="h-14"
                    />
                </div>
                <div className="flex items-center">
                    <span className="text-3xl font-bold text-black ml-4 text-center md:text-left">
                        Registration Form
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
