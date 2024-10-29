import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="SustainaSpark Logo"
                        className="h-14"
                    />
                </div>
                <button 
                    className="text-white px-8 py-2 rounded-full transition-colors"
                    style={{ 
                        backgroundColor: '#004C4C',
                        ':hover': {
                            backgroundColor: '#003939'
                        }
                    }}
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
            </div>
        </header>
    );
};

export default Header;