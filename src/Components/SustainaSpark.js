import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SustainaSpark = () => {

    return (
        <div className="z-100 mt-16 w-[100%] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto mb-[-2px]">
            <div className="rounded-3xl text-white border shadow-2xl drop-shadow-[0px_0px_9.9px_rgba(66,66,66,0.51)]">
                <div className="rounded-tl-3xl rounded-tr-3xl bg-white py-4 flex flex-col items-center px-4 text-center">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#004C4C] font-extrabold mb-2">
                        JOIN THE SUSTAINA<span className="text-[#FFC12D]">SPARK</span>.4
                    </h2>
                    <h4 className="text-[14px] sm:text-[20px] md:text-[24px] text-[#FFC12D] font-lato font-extrabold max-w-[95%] mx-auto">
                        Please fill out the form below to participate in the event
                    </h4>
                </div>
            </div>
            <img
                src="/images/leaf.svg"
                alt="Decorative leaf"
                className="absolute top-[200px] left-[50px] w-60 h-60 z-10 hidden lg:block"
            />
        </div>
    );
};

export default SustainaSpark;
