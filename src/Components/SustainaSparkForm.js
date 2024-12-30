import React, { useState, useEffect } from 'react';
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
    const [submitted, setSubmitted] = useState(false);

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
            window.scrollTo(0, 0);
        }
    }, [submitted]);

    return (
        <div className="z-10 w-[50%] min-w-[30%] mx-auto pb-24 ">
            <div className="rounded-3xl text-white border shadow-2xl drop-shadow-[0px_0px_9.9px_rgba(66,66,66,0.51)]">
                <div className=' rounded-bl-3xl rounded-br-3xl bg-[#004C4C] py-2 pb-6 px-4'>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-x-20 gap-y-8">
                            <div>
                                <label
                                    htmlFor="participantName"
                                    className="block text-sm text-left"
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontStyle: "normal",
                                        fontWeight: 800,
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        padding: "8px",
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="participantName"
                                    name="participantName"
                                    className="w-full px-5 py-3 rounded text-black"
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                    }}
                                    value={formData.participantName}
                                    onChange={handleChange}
                                />
                                {errors.participantName && <p className="text-red-500 text-xs">{errors.participantName}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantAge"
                                    className="block text-sm text-left"
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontStyle: "normal",
                                        fontWeight: 800,
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        padding: "8px",
                                    }}
                                >
                                    Age
                                </label>
                                <input
                                    type="number"
                                    id="participantAge"
                                    name="participantAge"
                                    className="w-full px-5 py-3 rounded text-black"
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                    }}
                                    value={formData.participantAge}
                                    onChange={handleChange}
                                />
                                {errors.participantAge && <p className="text-red-500 text-xs">{errors.participantAge}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantEmail"
                                    className="block text-sm text-left"
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontStyle: "normal",
                                        fontWeight: 800,
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        padding: "8px",
                                    }}
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="participantEmail"
                                    name="participantEmail"
                                    className="w-full px-5 py-3 rounded text-black"
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                    }}
                                    value={formData.participantEmail}
                                    onChange={handleChange}
                                />
                                {errors.participantEmail && <p className="text-red-500 text-xs">{errors.participantEmail}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="participantPhone"
                                    className="block text-sm text-left"
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontStyle: "normal",
                                        fontWeight: 800,
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        padding: "8px",
                                    }}
                                >
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="participantPhone"
                                    name="participantPhone"
                                    className="w-full px-5 py-3 rounded text-black"
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                    }}
                                    value={formData.participantPhone}
                                    onChange={handleChange}
                                />
                                {errors.participantPhone && <p className="text-red-500 text-xs">{errors.participantPhone}</p>}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="participantSchool"
                                className="block text-sm text-left"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontStyle: "normal",
                                    fontWeight: 800,
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    padding: "8px",
                                }}
                            >
                                School/Organization Name
                            </label>
                            <input
                                type="text"
                                id="participantSchool"
                                name="participantSchool"
                                className="w-full px-5 py-3 rounded text-black"
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: "20px",
                                }}
                                value={formData.participantSchool}
                                onChange={handleChange}
                            />
                            {errors.participantSchool && <p className="text-red-500 text-xs">{errors.participantSchool}</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="reasonToJoin"
                                className="block text-sm text-left"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontStyle: "normal",
                                    fontWeight: 800,
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    padding: "8px",
                                }}
                            >
                                Why do you want to join the Sustaina Spark 4?
                            </label>
                            <textarea
                                id="reasonToJoin"
                                name="reasonToJoin"
                                rows={4}
                                className="w-full px-5 py-3 rounded text-black"
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: "20px",
                                }}
                                value={formData.reasonToJoin}
                                onChange={handleChange}
                            />
                            {errors.reasonToJoin && <p className="text-red-500 text-xs">{errors.reasonToJoin}</p>}
                        </div>

                        <button
                            type="submit"
                            className="mt-4 flex w-full flex-row justify-center items-center p-3 gap-2.5 bg-[#1E1E1E] border border-black rounded-lg text-[24px] font-Roboto font-extrabold text-white text-base"
                        >
                            Register
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SustainaSparkForm;
