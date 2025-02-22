import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const SuccessPopup = ({ isOpen, onClose, participantName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-600">
              Your spot for SustainaSpark 4 has been confirmed.
            </p>
          </div>

          <div className="space-y-4 text-left w-full">
            <h3 className="font-bold text-gray-800">
              Dear {participantName || "Participant"},
            </h3>
            <p className="text-gray-600">
              Welcome to SustainaSpark 4! To Stay connected for updates and announcements.
            </p>
            
            <a 
              href="https://chat.whatsapp.com/FAgyPLIPXK7IsrJ532HiP5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
            >
              Join WhatsApp Group
            </a>

            <p className="text-sm text-gray-500 text-center mt-4">
              Best regards,<br />
              Team VONG - Voice of the New Generation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;