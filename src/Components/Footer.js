import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-teal-900 text-white py-8 px-6 relative">
      {/* Decorative leaf */}
      <div className="absolute top-0 left-0">
        <div className="w-16 h-16 text-yellow-500 transform -rotate-45">
          🍃
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - About */}
        <div className="max-w-xl">
          <h2 className="text-yellow-500 text-2xl font-bold mb-2">
            About
          </h2>
          <h3 className="text-yellow-500 text-xl font-semibold mb-3">
            SustainaSpark
          </h3>
          <p className="text-gray-200 mb-6">
            The SustainaSpark is an initiative by VONG to empower young minds to take action on crucial environmental issues. Through engaging events and workshops, the project's experience participants will learn how to make sustainability a norm in their communities.
          </p>
          
          {/* Event Details */}
          <div className="flex items-center gap-2 text-yellow-500">
            <Clock size={20} />
            <span>27/10/2024</span>
            <span className="mx-2">•</span>
            <span>9:00 AM - 5:30 PM</span>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="md:text-right">
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-200 mb-2">
            Have questions? We're here to help!
          </p>
          
          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center md:justify-end gap-2 text-gray-200">
              <MapPin size={20} className="text-yellow-500" />
              <span>7-A, Shastri Nagar, New Delhi 110031</span>
            </div>
            <div className="flex items-center md:justify-end gap-2 text-gray-200">
              <Mail size={20} className="text-yellow-500" />
              <a 
                href="mailto:events@vong.earth" 
                className="hover:text-yellow-500 transition-colors"
              >
                events@vong.earth
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;