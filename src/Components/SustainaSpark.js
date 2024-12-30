import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SustainaSparkForm = () => {

    return (
        <div className="z-100 mt-16 w-[50%] min-w-[30%] mx-auto mb-[-2px]">
            <div className="rounded-3xl text-white border shadow-2xl drop-shadow-[0px_0px_9.9px_rgba(66,66,66,0.51)]">
                <div className="rounded-tl-3xl rounded-tr-3xl bg-white py-4 flex flex-col items-center">
                    <h2 className="text-[48px] text-[#004C4C] font-extrabold mb-2">Join the Sustaina Spark. 4</h2>
                    <h4 className="text-[24px] text-[#FFC12D] font-lato font-extrabold">
                        Please fill out the form below to participate in the event
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default SustainaSparkForm;
