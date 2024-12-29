import React from 'react';

const EventSnapshot = () => {
  return (
    <div className="relative bg-[#004C4C] min-h-screen w-full py-1 px-4">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-[48px] font-lato font-bold text-white pb-2 mb-12 border-b-[6px] border-yellow-400">
          Event Snapshot
        </h2>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36 max-w-5xl mx-auto mb-12">
          <div className="flex flex-col items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-lg font-Inter text-[24px] font-extrabold">Online Event (Zoom)</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-lg font-Inter text-[24px] font-extrabold">December 29, 2024</p>
          </div>

          <div className="flex flex-col items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg font-Inter text-[24px] font-extrabold">Absolutely <span className="text-[#FFC12D]">FREE!</span></p>
          </div>
        </div>

        {/* Image Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto mb-12">
          {[1, 2, 3].map((box) => (
            <div 
              key={box} 
              className="bg-gray-200 bg-opacity-20 h-[234px] w-[347px] rounded-lg border-2 border-dashed border-white border-opacity-30"
            >
              {/* Placeholder for images */}
              <img 
                src="/api/placeholder/347/234" 
                alt={`Event snapshot ${box}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <p className="text-2xl font-semibold text-white mb-8">
          Don't miss out on this chance to create real impact!
        </p>

        <button className="bg-[#FFC12D] font-Roboto text-black font-bold py-5 px-8 rounded-lg hover:bg-yellow-400 transition-colors">
          Become a Part
        </button>
      </div>
    </div>
  );
};

export default EventSnapshot;