import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline = "2025-02-15T00:00:00" }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(deadline).getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [deadline]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="w-full flex justify-center">
      <div
        style={{ background: '#004C4C' }}
        className="inline-flex text-white p-3 sm:p-5 md:p-6 rounded-lg font-mono gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-base md:text-2xl border-[16px] sm:border-[14px] md:border-[16px] border-white relative"
      >
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-black bg-opacity-20 z-0 rounded-lg" />
        <div className="text-center relative z-10">
          <div className="text-4xl sm:text-3xl md:text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-sm sm:text-sm mt-1 uppercase">Days</div>
        </div>
        <div className="text-4xl sm:text-3xl md:text-5xl font-bold relative z-10">:</div>
        <div className="text-center relative z-10">
          <div className="text-4xl sm:text-3xl md:text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-sm sm:text-sm mt-1 uppercase">Hours</div>
        </div>
        <div className="text-4xl sm:text-3xl md:text-5xl font-bold relative z-10">:</div>
        <div className="text-center relative z-10">
          <div className="text-4xl sm:text-3xl md:text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-sm sm:text-sm mt-1 uppercase">Minutes</div>
        </div>
        <div className="text-4xl sm:text-3xl md:text-5xl font-bold relative z-10">:</div>
        <div className="text-center relative z-10">
          <div className="text-4xl sm:text-3xl md:text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-sm sm:text-sm mt-1 uppercase">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;