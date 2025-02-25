import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuccessPopup from './SuccessPopup';

const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#004C4C] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#004C4C] font-bold">Processing Please Wait...</p>
      </div>
    </div>
);

const SustainaSparkForm = () => {

    const [formData, setFormData] = useState({
        participantName: '',
        participantAge: '',
        participantEmail: '',
        participantPhone: '',
        participantSchool: '',
        reasonToJoin: '',
        source: '',
        referral: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const sourceOptions = [
        'Social media',
        'Referral',
        'School/university',
        'WhatsApp/Telegram groups',
        'Unstop'
    ];

    const validateForm = () => {
        const newErrors = {};

        ['participantName', 'participantAge', 'participantEmail', 'participantPhone', 'participantSchool', 'reasonToJoin'].forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
            }
        });

        if (formData.participantAge && (isNaN(formData.participantAge) || formData.participantAge <= 0)) {
            newErrors.participantAge = 'Age must be a positive number';
        }

        if (formData.participantEmail && !/\S+@\S+\.\S+/.test(formData.participantEmail)) {
            newErrors.participantEmail = 'Invalid email format';
        }

        if (formData.participantPhone && !/^\d{10}$/.test(formData.participantPhone)) {
            newErrors.participantPhone = 'Phone number must be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
            ...(name === 'source' && value !== 'Referral' ? { referral: '' } : {})
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                await axios.post("https://ss-backend.vong.earth/ss-api/submit-data", formData);
                setSubmitted(true);
                setFormData({
                    participantName: '',
                    participantAge: '',
                    participantEmail: '',
                    participantPhone: '',
                    participantSchool: '',
                    reasonToJoin: '',
                    source: '',
                    referral: ''
                });
            } catch (error) {
                console.error("Error submitting data:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (submitted) {
            setShowPopup(true);
            window.scrollTo(0, 0);
        }
    }, [submitted]);
    const handleClosePopup = () => {
        setShowPopup(false);
        setSubmitted(false);
    };
    return (
        <div className="z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {isLoading && <LoadingSpinner />}
            <div className="rounded-3xl text-white border shadow-2xl drop-shadow-[0px_0px_9.9px_rgba(66,66,66,0.51)]">
                <div className="rounded-bl-3xl rounded-br-3xl bg-[#004C4C] py-2 pb-6 px-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <label
                                    htmlFor="participantName"
                                    className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                >
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="participantName"
                                    name="participantName"
                                    className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                    value={formData.participantName}
                                    onChange={handleChange}
                                />
                                {errors.participantName && <p className="text-red-500 text-xs mt-1">{errors.participantName}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantAge"
                                    className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                >
                                    Age<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="participantAge"
                                    name="participantAge"
                                    className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                    value={formData.participantAge}
                                    onChange={handleChange}
                                />
                                {errors.participantAge && <p className="text-red-500 text-xs mt-1">{errors.participantAge}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantEmail"
                                    className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                >
                                    E-Mail<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="participantEmail"
                                    name="participantEmail"
                                    className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                    value={formData.participantEmail}
                                    onChange={handleChange}
                                />
                                {errors.participantEmail && <p className="text-red-500 text-xs mt-1">{errors.participantEmail}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantPhone"
                                    className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                >
                                    Mobile Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="participantPhone"
                                    name="participantPhone"
                                    className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                    value={formData.participantPhone}
                                    onChange={handleChange}
                                />
                                {errors.participantPhone && <p className="text-red-500 text-xs mt-1">{errors.participantPhone}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="source"
                                    className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                >
                                    Where did you hear about us?
                                </label>
                                <select
                                    id="source"
                                    name="source"
                                    className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                    value={formData.source}
                                    onChange={handleChange}
                                >
                                    <option value="">Select an option</option>
                                    {sourceOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {formData.source === 'Referral' && (
                                <div>
                                    <label
                                        htmlFor="referral"
                                        className="block text-sm text-left font-lato font-extrabold text-white p-2"
                                    >
                                        Who referred you?
                                    </label>
                                    <input
                                        type="text"
                                        id="referral"
                                        name="referral"
                                        className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                        value={formData.referral}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="participantSchool"
                                className="block text-sm text-left font-lato font-extrabold text-white p-2"
                            >
                                School/Organization Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="participantSchool"
                                name="participantSchool"
                                className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                value={formData.participantSchool}
                                onChange={handleChange}
                            />
                            {errors.participantSchool && <p className="text-red-500 text-xs mt-1">{errors.participantSchool}</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="reasonToJoin"
                                className="block text-sm text-left font-lato font-extrabold text-white p-2"
                            >
                                Why do you want to join the SustainaSpark 4?<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="reasonToJoin"
                                name="reasonToJoin"
                                rows={4}
                                className="w-full px-5 py-3 rounded-[20px] text-black bg-white"
                                value={formData.reasonToJoin}
                                onChange={handleChange}
                            />
                            {errors.reasonToJoin && <p className="text-red-500 text-xs mt-1">{errors.reasonToJoin}</p>}
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full p-3 bg-[#1E1E1E] border border-black rounded-lg font-roboto font-extrabold text-white text-lg sm:text-xl md:text-2xl"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <SuccessPopup
                isOpen={showPopup}
                onClose={handleClosePopup}
                participantName={formData.participantName}
            />
        </div>
    );
};

export default SustainaSparkForm;