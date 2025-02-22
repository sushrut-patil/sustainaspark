import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline = "2025-03-01T23:59:59" }) => {
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

  const TimeUnit = ({ value, label }) => (
    <div className="text-center relative z-10">
      <div className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-bold tabular-nums bg-black bg-opacity-30 px-2 xs:px-3 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-1.5 md:py-2 rounded min-w-[2.5rem] xs:min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4rem]">
        {formatNumber(value)}
      </div>
      <div className="text-xs xs:text-sm sm:text-sm mt-1 uppercase font-medium">
        {label}
      </div>
    </div>
  );

  const Separator = () => (
    <div className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-bold relative z-10 flex items-center">
      :
    </div>
  );

  return (
    <div className="w-full flex justify-center px-2 xs:px-4 sm:px-6">
      <div
        style={{ background: '#004C4C' }}
        className="inline-flex text-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-lg font-mono gap-1 xs:gap-2 sm:gap-3 md:gap-4 border-[12px] xs:border-[14px] sm:border-[14px] md:border-[16px] border-white relative"
      >
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-black bg-opacity-20 z-0 rounded-lg" />
        
        <TimeUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;