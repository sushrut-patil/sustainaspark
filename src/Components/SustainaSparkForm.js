import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SustainaSparkForm = () => {
    const [formData, setFormData] = useState({
        participantName: '',
        participantAge: '',
        participantEmail: '',
        participantPhone: '',
        participantSchool: '',
        reasonToJoin: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Required fields validation
        ['participantName', 'participantAge', 'participantEmail', 'participantPhone', 'participantSchool', 'reasonToJoin'].forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
            }
        });

        // Age validation
        if (formData.participantAge && (isNaN(formData.participantAge) || formData.participantAge <= 0)) {
            newErrors.participantAge = 'Age must be a positive number';
        }

        // Email validation
        if (formData.participantEmail && !/\S+@\S+\.\S+/.test(formData.participantEmail)) {
            newErrors.participantEmail = 'Invalid email format';
        }

        // Phone validation
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
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.post(process.env.REACT_APP_GOOGLE_SHEET_API, formData);
                setSubmitted(true);
                setFormData({
                    participantName: '',
                    participantAge: '',
                    participantEmail: '',
                    participantPhone: '',
                    participantSchool: '',
                    reasonToJoin: '',
                });
            } catch (error) {
                console.error("Error submitting data:", error);
            }
        }
    };

    useEffect(() => {
        if (submitted) {
            alert("Form submitted successfully! Your registration has been submitted. Thank you!");
            window.scrollTo(0,0);
        }
    }, [submitted]);

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="bg-teal-800 text-white p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Join the Sustaina Spark 4</h2>
                    <p className="text-sm text-gray-200">
                        Please fill out the form below to participate in the event
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="participantName" className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                id="participantName"
                                name="participantName"
                                className="w-full px-3 py-2 rounded bg-white text-black"
                                value={formData.participantName}
                                onChange={handleChange}
                            />
                            {errors.participantName && <p className="text-red-500 text-xs">{errors.participantName}</p>}
                        </div>
                        <div>
                            <label htmlFor="participantAge" className="block text-sm mb-1">Age</label>
                            <input
                                type="number"
                                id="participantAge"
                                name="participantAge"
                                className="w-full px-3 py-2 rounded bg-white text-black"
                                value={formData.participantAge}
                                onChange={handleChange}
                            />
                            {errors.participantAge && <p className="text-red-500 text-xs">{errors.participantAge}</p>}
                        </div>
                        <div>
                            <label htmlFor="participantEmail" className="block text-sm mb-1">E-Mail</label>
                            <input
                                type="email"
                                id="participantEmail"
                                name="participantEmail"
                                className="w-full px-3 py-2 rounded bg-white text-black"
                                value={formData.participantEmail}
                                onChange={handleChange}
                            />
                            {errors.participantEmail && <p className="text-red-500 text-xs">{errors.participantEmail}</p>}
                        </div>
                        <div>
                            <label htmlFor="participantPhone" className="block text-sm mb-1">Mobile number</label>
                            <input
                                type="tel"
                                id="participantPhone"
                                name="participantPhone"
                                className="w-full px-3 py-2 rounded bg-white text-black"
                                value={formData.participantPhone}
                                onChange={handleChange}
                            />
                            {errors.participantPhone && <p className="text-red-500 text-xs">{errors.participantPhone}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="participantSchool" className="block text-sm mb-1">School/Organization Name</label>
                        <input
                            type="text"
                            id="participantSchool"
                            name="participantSchool"
                            className="w-full px-3 py-2 rounded bg-white text-black"
                            value={formData.participantSchool}
                            onChange={handleChange}
                        />
                        {errors.participantSchool && <p className="text-red-500 text-xs">{errors.participantSchool}</p>}
                    </div>

                    <div>
                        <label htmlFor="reasonToJoin" className="block text-sm mb-1">Why do you want to join the Sustaina Spark 4?</label>
                        <textarea
                            id="reasonToJoin"
                            name="reasonToJoin"
                            rows={4}
                            className="w-full px-3 py-2 rounded bg-white text-black"
                            value={formData.reasonToJoin}
                            onChange={handleChange}
                        />
                        {errors.reasonToJoin && <p className="text-red-500 text-xs">{errors.reasonToJoin}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-white text-teal-800 py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SustainaSparkForm;
