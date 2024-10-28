import React from 'react';

const Header = () => {
    return (
        <header className="bg-teal-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo placeholder */}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
                        <img
                            src="/api/placeholder/40/40"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                    </div>
                    <span className="text-white text-xl font-bold">SustainaSpark</span>
                </div>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                    Register
                </button>
            </div>
        </header>
    );
};

export default Header;