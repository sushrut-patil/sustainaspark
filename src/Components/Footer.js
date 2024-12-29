import React from 'react';
import { Mail, Clock, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div style={{ background: '#004C4C' }} className="text-white py-8 px-4 md:px-6 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Section - About */}
        <div className="max-w-xl">
          <h3 style={{
            color: '#FFC12D',
            fontFamily: 'Lato',
            fontSize: '28px',
            fontWeight: 800,
            lineHeight: '34px',
            textAlign: 'left'
          }} className="mb-3">
            About<br />
            SustainaSpark
          </h3>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '26px',
            textAlign: 'left'
          }} className="text-white mb-6">
            Step into the role of a policymaker in this exciting one-day online event! Tackle the challenge of reducing single-use plastics in local contexts by debating, collaborating, and crafting impactful solutions.
          </p>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '29px',
              fontStyle: 'normal',
              textAlign: 'left',
            }}
            className="text-white mb-6"
          >
            Your ideas can shape the future —{' '}
            <span style={{ color: '#FFC12D' }}>let’s spark</span> change together!
          </p>

        </div>

        {/* Right Section - Contact */}
        <div className="md:text-right">
          <h2 style={{
            color: '#FFC12D',
            fontFamily: 'Lato',
            fontSize: '28px',
            fontWeight: 800,
            lineHeight: '34px',
            textAlign: 'right'
          }} className="mb-4">
            Contact Us
          </h2>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '26px',
            textAlign: 'right'
          }} className="text-white mb-4">
            Have questions? We're here to help!
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-start md:justify-end gap-2">
              <span style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '19.36px',
              }} className="text-white">
                G-9, Hemkunt Tower, 98 Nehru Place, New Delhi, 110019
              </span>
              <MapPin size={20} className="text-yellow-500" />
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2">
              <a
                href="mailto:events@vong.earth"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '19.36px',
                }}
                className="text-white hover:text-yellow-500 transition-colors"
              >
                events@vong.earth
              </a>
              <Mail size={20} className="text-yellow-500" />
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2">
              +91-xxxxx-xxxxx
              <Phone size={20} className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
