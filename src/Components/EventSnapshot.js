import React from 'react';

const EventSnapshot = ({ registrationRef }) => {
  const handleRegisterClick = () => {
    console.log("hit");
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const images = [
    {
      src: "/images/sustainaspark.jpeg",
      alt: "Event snapshot 1"
    },
    {
      src: "/images/Participants.jpeg",
      alt: "Event snapshot 2"
    },
    {
      src: "/images/draft.jpeg",
      alt: "Event snapshot 3"
    }
  ];
  return (
    <div className="relative bg-[#004C4C] min-h-screen w-full py-1 px-4">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-[48px] font-lato font-bold text-white pb-2 mb-12 border-b-[6px] border-yellow-400">
          Event Snapshot
        </h2>
        <img
          src="/images/leaf.svg"
          alt="Decorative leaf"
          className="absolute top-[0] left-0 w-60 h-60 z-10 hidden lg:block"
        />
        <img
          src="/images/leaf.svg"
          alt="Decorative leaf"
          className="absolute bottom-[100px] right-[10px] z-10 w-48 h-48 hidden lg:block"
        />
        
        {/* Event Details - Adjusted for Tablet */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-2 lg:gap-36 max-w-5xl mx-auto mb-12">
          <div className="flex items-center md:flex-col md:items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mr-4 md:mr-0 md:mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-lg md:text-[24px] font-Inter font-extrabold">Online Event (Zoom)</p>
          </div>

          <div className="flex items-center md:flex-col md:items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mr-4 md:mr-0 md:mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-lg md:text-[24px] font-Inter font-extrabold">March 02, 2025</p>
          </div>

          <div className="flex items-center md:flex-col md:items-center text-white">
            <div className="bg-[#FFC12D] p-3 rounded-lg mr-4 md:mr-0 md:mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg md:text-[24px] font-Inter font-extrabold">Absolutely <span className="text-[#FFC12D]">FREE!</span></p>
          </div>
        </div>

        {/* Image Boxes - Adjusted for Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 z-0">
          {images.map((image, index) => (
            <div key={index} className="border-4 border-[#FFC12D] rounded-lg overflow-hidden">
              <div className="w-full h-auto">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Adjusted for mobile */}
        <div className="px-4 text-center">
          <p className="text-lg md:text-2xl font-semibold text-white mb-6 max-w-sm md:max-w-none mx-auto">
            Don't miss out on this chance to create real impact!
          </p>

          <button onClick={handleRegisterClick} className="bg-[#FFC12D] font-Roboto text-black text-base md:text-lg font-bold py-3 md:py-5 px-6 md:px-8 rounded-lg hover:bg-yellow-400 transition-colors">
            Become a Part
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSnapshot;
