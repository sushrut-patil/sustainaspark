import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-4 py-2 rounded">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs mt-1 uppercase">Hours</div>
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-4 py-2 rounded">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs mt-1 uppercase">Minutes</div>
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="text-center">
        <div className="text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-4 py-2 rounded">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs mt-1 uppercase">Seconds</div>
      </div>
    </div>
  );
};

const RegistrationSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h2 className="font-[Lato] text-[48px] font-bold leading-[57.6px] text-center">
              Ready to ignite your changemaker spark?
            </h2>
          </div>
        </div>
        </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-8">
          {/* Subtitle */}
          <p className="font-[Roboto] text-[32px] font-extrabold leading-[37.5px] text-center text-[#004C4C]">
            Fill out the registration form below and secure your 
            spot at SustainaSpark .4!
          </p>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Limited Seats Text */}
          <p className="font-[Roboto] text-[32px] font-extrabold leading-[37.5px] text-center text-[#004C4C]">
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
          "
          onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;