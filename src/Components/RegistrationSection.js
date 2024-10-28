import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline = "2024-12-31T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 2,
    seconds: 9
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(deadline).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="bg-teal-800 text-white p-6 rounded-lg font-mono text-4xl flex justify-center gap-4">
      <div className="text-center">
        <div className="text-5xl font-bold">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs mt-1 uppercase">Hours</div>
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs mt-1 uppercase">Minutes</div>
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs mt-1 uppercase">Seconds</div>
      </div>
    </div>
  );
};

const RegistrationSection = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute right-0 top-0">
        <svg className="w-24 h-24 text-yellow-400" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.75 12.5C17.75 12.5 21 9.25 21 6C21 2.75 17.75 -0.5 17.75 -0.5C14.5 -3.75 11.25 -7 8 -7C4.75 -7 1.5 -3.75 -1.75 -0.5C-1.75 -0.5 -5 2.75 -5 6C-5 9.25 -1.75 12.5 -1.75 12.5C1.5 15.75 4.75 19 8 19C11.25 19 14.5 15.75 17.75 12.5Z" />
        </svg>
      </div>
      <div className="absolute left-0 bottom-0">
        <svg className="w-24 h-24 text-teal-800" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.75 12.5C17.75 12.5 21 9.25 21 6C21 2.75 17.75 -0.5 17.75 -0.5C14.5 -3.75 11.25 -7 8 -7C4.75 -7 1.5 -3.75 -1.75 -0.5C-1.75 -0.5 -5 2.75 -5 6C-5 9.25 -1.75 12.5 -1.75 12.5C1.5 15.75 4.75 19 8 19C11.25 19 14.5 15.75 17.75 12.5Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Ready to ignite your changemaker spark?
            </h2>
            <div className="w-48 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Subtitle */}
          <p className="text-teal-800 text-xl">
            Fill out the registration form below and secure your 
            spot at SustainaSpark .4!
          </p>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Limited Seats Text */}
          <p className="text-teal-800 text-lg font-medium">
            ( Limited Seats Available! Register Now! )
          </p>

          {/* Register Button */}
          <button className="
            bg-teal-800 
            text-white 
            px-12 
            py-4 
            rounded-full 
            text-xl 
            font-bold 
            hover:bg-teal-700 
            transform 
            hover:scale-105 
            transition-all 
            duration-300
            shadow-lg
            hover:shadow-xl
          ">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;