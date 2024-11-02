import React, { useState, useEffect } from 'react';
import Header from '../Components/Header2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeadName: '',
    teamLeadAge: '',
    teamLeadEmail: '',
    teamLeadPhone: '',
    member2Name: '',
    member2Age: '',
    member2Email: '',
    member2Phone: '',
    member3Name: '',
    member3Age: '',
    member3Email: '',
    member3Phone: '',
    school: '',
    standard: '',
    transactionId: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    ['teamName', 'teamLeadName', 'teamLeadAge', 'teamLeadEmail', 'teamLeadPhone', 'member2Name', 'member2Age', 'member2Email', 'member2Phone', 'school', 'standard', 'transactionId'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.teamLeadEmail && !/\S+@\S+\.\S+/.test(formData.teamLeadEmail)) {
      newErrors.teamLeadEmail = 'Invalid email format';
    }
    if (formData.member2Email && !/\S+@\S+\.\S+/.test(formData.member2Email)) {
      newErrors.member2Email = 'Invalid email format';
    }
    if (formData.member3Email && formData.member3Email && !/\S+@\S+\.\S+/.test(formData.member3Email)) {
      newErrors.member3Email = 'Invalid email format';
    }

    // Phone validation
    if (formData.teamLeadPhone && !/^\d{10}$/.test(formData.teamLeadPhone)) {
      newErrors.teamLeadPhone = 'Phone number must be 10 digits';
    }
    if (formData.member2Phone && !/^\d{10}$/.test(formData.member2Phone)) {
      newErrors.member2Phone = 'Phone number must be 10 digits';
    }
    if (formData.member3Phone && formData.member3Phone && !/^\d{10}$/.test(formData.member3Phone)) {
      newErrors.member3Phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('https://api.sheetbest.com/sheets/a03eb7b9-5f94-4b6d-a1d3-45789514ee00', formData);
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (submitted) {
      alert("Form submitted successfully! Your registration has been submitted. Thank you!");
      navigate('/');
    }
  }, [submitted, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 order-2 md:order-2">
          <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-gray-700 mb-4">
            Important: Please read carefully before proceeding. By proceeding with your payment, you agree to the terms and conditions outlined below.
          </p>
          {/* Terms content can be mapped or repeated for better organization */}
          {/* Using an array of terms */}
          {[
            {
              title: '1. Registration Fee:',
              description: 'Participation fee is ₹299 per group, payable at registration.'
            },
            {
              title: '2. Payment Method:',
              description: 'Payments via designated online platforms; details provided during registration.'
            },
            {
              title: '3. Payment Terms:',
              description: 'Complete payment by 9 November 2024; registration is confirmed upon successful payment.'
            },
            {
              title: '4. Event Registration:',
              description: 'Participation is confirmed only after payment; ensure you meet eligibility criteria before registering.'
            },
            {
              title: '5. Refund and Cancellation Policy:',
              description: 'No refunds for cancellations after payment; full refund will be issued if the event is canceled by the organizers.'
            },
            {
              title: '6. Transfer of Registration:',
              description: 'While registration fees are non-refundable, you may transfer your registration to another participant if needed. To do this, you must provide a written notice to the organizers at least 48 hours before the event. The new participant must meet the eligibility criteria (aged 12-18) and may need to provide their details for registration confirmation.'
            },
            {
              title: '7. Confirmation of Registration:',
              description: 'A confirmation email will be sent upon successful payment; this email must be presented at the event.'
            },
            {
              title: '8. Age Verification:',
              description: 'Participants must be aged 12-18; parental consent may be required.'
            },
            {
              title: '9. Liability:',
              description: 'Omysha Foundation promotes VONG and is not liable for any damages or incidents during the event. Participants are responsible for their own actions.'
            },
            {
              title: '10. Information Sharing:',
              description: 'By registering, you agree to share your information with Omysha Foundation as required, in compliance with applicable laws.'
            },
          ].map((term, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{term.title}</h3>
              <p className="text-gray-600">{term.description}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Team Name</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.teamName && <span className="text-red-600 text-xs">{errors.teamName}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Team Leader Full Name</label>
              <input
                type="text"
                name="teamLeadName"
                value={formData.teamLeadName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.teamLeadName && <span className="text-red-600 text-xs">{errors.teamLeadName}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Team Leader Age</label>
              <select
                name="teamLeadAge"
                value={formData.teamLeadAge}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="">Select Age</option>
                {Array.from({ length: 7 }, (_, i) => (
                  <option key={i} value={12 + i}>{12 + i}</option>
                ))}
              </select>
              {errors.teamLeadAge && <span className="text-red-600 text-xs">{errors.teamLeadAge}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Team Leader Email</label>
              <input
                type="email"
                name="teamLeadEmail"
                value={formData.teamLeadEmail}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.teamLeadEmail && <span className="text-red-600 text-xs">{errors.teamLeadEmail}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Team Leader Phone</label>
              <input
                type="tel"
                name="teamLeadPhone"
                value={formData.teamLeadPhone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.teamLeadPhone && <span className="text-red-600 text-xs">{errors.teamLeadPhone}</span>}
            </div>

            {/* Repeat for Member 2 */}
            <h2 className="text-xl font-semibold">Member 2</h2>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="member2Name"
                value={formData.member2Name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member2Name && <span className="text-red-600 text-xs">{errors.member2Name}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Age</label>
              <select
                name="member2Age"
                value={formData.member2Age}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="">Select Age</option>
                {Array.from({ length: 7 }, (_, i) => (
                  <option key={i} value={12 + i}>{12 + i}</option>
                ))}
              </select>
              {errors.member2Age && <span className="text-red-600 text-xs">{errors.member2Age}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="member2Email"
                value={formData.member2Email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member2Email && <span className="text-red-600 text-xs">{errors.member2Email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="member2Phone"
                value={formData.member2Phone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member2Phone && <span className="text-red-600 text-xs">{errors.member2Phone}</span>}
            </div>

            {/* Repeat for Member 3 */}
            <h2 className="text-xl font-semibold">Member 3</h2>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="member3Name"
                value={formData.member3Name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member3Name && <span className="text-red-600 text-xs">{errors.member3Name}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Age</label>
              <select
                name="member3Age"
                value={formData.member3Age}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="">Select Age</option>
                {Array.from({ length: 7 }, (_, i) => (
                  <option key={i} value={12 + i}>{12 + i}</option>
                ))}
              </select>
              {errors.member3Age && <span className="text-red-600 text-xs">{errors.member3Age}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="member3Email"
                value={formData.member3Email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member3Email && <span className="text-red-600 text-xs">{errors.member3Email}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="member3Phone"
                value={formData.member3Phone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.member3Phone && <span className="text-red-600 text-xs">{errors.member3Phone}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">School Name</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.school && <span className="text-red-600 text-xs">{errors.school}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Standard</label>
              <input
                type="text"
                name="standard"
                value={formData.standard}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.standard && <span className="text-red-600 text-xs">{errors.standard}</span>}
            </div>
            <div>
            <img
              src="/images/qr.jpeg" // Ensure the QR code image path is correct
              alt="QR Code for Payment"
              style={{ maxWidth: '50%', height: 'auto' }}
            />
            <p style={{ textAlign: 'left',marginLeft : '10px', marginTop: '10px', fontSize: '20px', color: '#000' }}>
              Scan to pay ₹299
            </p>
          </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Transaction ID</label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded"
              />
              {errors.transactionId && <span className="text-red-600 text-xs">{errors.transactionId}</span>}
            </div>

            <button type="submit" className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
