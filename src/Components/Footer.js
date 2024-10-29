import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <div style={{ background: '#004C4C' }} className="text-white py-8 px-6 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - About */}
        <div className="max-w-xl">
          <h3 style={{
            color: '#FFC12D',
            fontFamily: 'Lato',
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: '38.4px',
            textAlign: 'left'
          }} className="mb-3">
            About<br/>
            SustainaSpark
          </h3>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '29.05px',
            textAlign: 'left'
          }} className="text-white mb-6">
            The SustainaSpark is an initiative by VONG to empower young minds to take action on crucial environmental issues. Through engaging events and workshops, the project's experience participants will learn how to make sustainability a norm in their communities.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap items-center gap-4">
            <div style={{ background: '#FFC12D' }} className="flex items-center gap-2 text-teal-900 p-2 rounded-md">
              <Clock size={20} />
              <span className="whitespace-nowrap">10 November 2024</span>
            </div>
            <div style={{ background: '#FFC12D' }} className="flex items-center gap-2 text-teal-900 p-2 rounded-md">
              <Clock size={20} />
              <span className="whitespace-nowrap">10:30AM - 4:45 PM</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="md:text-right">
          <h2 style={{
            color: '#FFC12D',
            fontFamily: 'Lato',
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: '38.4px',
            textAlign: 'right'
          }} className="mb-4">
            Contact Us
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '29.05px',
            textAlign: 'right'
          }} className="text-white mb-4">
            Have questions? We're here to help!
          </p>
          
          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center md:justify-end gap-2">
              <span style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '19.36px',
                textAlign: 'right'
              }} className="text-white">
                G-9, Hemkunt Tower, 98 Nehru Place, New Delhi, 110019
              </span>
              <MapPin size={20} className="text-yellow-500" />
            </div>
            <div className="flex flex-wrap items-center md:justify-end gap-2">
              <a 
                href="mailto:events@vong.earth" 
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '19.36px',
                  textAlign: 'right'
                }}
                className="text-white hover:text-yellow-500 transition-colors"
              >
                events@vong.earth
              </a>
              <Mail size={20} className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;