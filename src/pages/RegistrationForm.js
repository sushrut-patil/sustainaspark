import React, { useState } from 'react';
import Header from '../Components/Header2';
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
        axios.post('https://api.sheetbest.com/sheets/a03eb7b9-5f94-4b6d-a1d3-45789514ee00',formData).then(response=>{
        setSubmitted(true);
        })
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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '20px auto',
      padding: '20px',
      display: 'flex',
      gap: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    leftColumn: {
      flex: '1',
      paddingRight: '20px'
    },
    rightColumn: {
      flex: '1'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    label: {
      fontSize: '14px',
      color: '#333',
      fontWeight: '500'
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white'
    },
    error: {
      color: '#dc2626',
      fontSize: '12px'
    },
    button: {
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer'
    },
    qrImage: {
      width: '300px',
      height: '300px',
      display: 'block',
      margin: '10px auto'
    },
    title: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
      fontWeight: 'bold', // Make the title bold
    },
    terms: {
      fontSize: '12px', // Set small font size for terms
      color: '#666',
      marginTop: '20px',
      textAlign: 'left',
    },
    condition: {
      fontSize: '12px', // Set small font size for each condition
      color: '#333',
    },
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Form submitted successfully!</h2>
        <p>Your registration has been submitted. Thank you!</p>
      </div>
    );
  }

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <div style={styles.leftColumn}>
      <h1 style={styles.title}>Terms & Conditions</h1>
      <p style={styles.terms}>
        Important: Please read carefully before proceeding. By proceeding with your payment, you agree to the terms and conditions outlined below.
      </p>
      <h3 style={styles.condition}>1. Registration Fee:</h3>
      <p style={styles.condition}>Participation fee is ₹300 per group, payable at registration.</p>
      <br />
      <h3 style={styles.condition}>2. Payment Method:</h3>
      <p style={styles.condition}>Payments via designated online platforms; details provided during registration.</p>
      <br />
      <h3 style={styles.condition}>3. Payment Terms:</h3>
      <p style={styles.condition}>Complete payment by October 2024; registration is confirmed upon successful payment.</p>
      <br />
      <h3 style={styles.condition}>4. Event Registration:</h3>
      <p style={styles.condition}>Participation is confirmed only after payment; ensure you meet eligibility criteria before registering.</p>
      <br />
      <h3 style={styles.condition}>5. Refund and Cancellation Policy:</h3>
      <p style={styles.condition}>No refunds for cancellations after payment; full refund will be issued if the event is canceled by the organizers.</p>
      <br />
      <h3 style={styles.condition}>6. Transfer of Registration:</h3>
      <p style={styles.condition}>While registration fees are non-refundable, you may transfer your registration to another participant if needed. To do this, you must provide a written notice to the organizers at least 48 hours before the event. The new participant must meet the eligibility criteria (aged 12-18) and may need to provide their details for registration confirmation.</p>
      <br />
      <h3 style={styles.condition}>7. Confirmation of Registration:</h3>
      <p style={styles.condition}>A confirmation email will be sent upon successful payment; this email must be presented at the event.</p>
      <br />
      <h3 style={styles.condition}>8. Age Verification:</h3>
      <p style={styles.condition}>Participants must be aged 12-18; parental consent may be required.</p>
      <br />
      <h3 style={styles.condition}>9. Liability:</h3>
      <p style={styles.condition}>Omysha Foundation promotes VONG and is not liable for any damages or incidents during the event. Participants are responsible for their own actions.</p>
      <br />
      <h3 style={styles.condition}>10. Information Sharing:</h3>
      <p style={styles.condition}>By registering, you agree to share your information with Omysha Foundation as required, in compliance with applicable laws.</p>
    </div>

      <div style={styles.rightColumn}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Team Name</label>
            <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} style={styles.input} />
            {errors.teamName && <span style={styles.error}>{errors.teamName}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Team Leader Full Name</label>
            <input type="text" name="teamLeadName" value={formData.teamLeadName} onChange={handleChange} style={styles.input} />
            {errors.teamLeadName && <span style={styles.error}>{errors.teamLeadName}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Team Leader Age</label>
            <select name="teamLeadAge" value={formData.teamLeadAge} onChange={handleChange} style={styles.select}>
              <option value="">Select Age</option>
              {Array.from({ length: 7 }, (_, i) => (
                <option key={i} value={12 + i}>{12 + i}</option>
              ))}
            </select>
            {errors.teamLeadAge && <span style={styles.error}>{errors.teamLeadAge}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Team Leader Email</label>
            <input type="email" name="teamLeadEmail" value={formData.teamLeadEmail} onChange={handleChange} style={styles.input} />
            {errors.teamLeadEmail && <span style={styles.error}>{errors.teamLeadEmail}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Team Leader Phone</label>
            <input type="tel" name="teamLeadPhone" value={formData.teamLeadPhone} onChange={handleChange} style={styles.input} />
            {errors.teamLeadPhone && <span style={styles.error}>{errors.teamLeadPhone}</span>}
          </div>

          {/* Member 2 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>2nd Member Full Name</label>
            <input
              type="text"
              name="member2Name"
              value={formData.member2Name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.member2Name && <span style={styles.error}>{errors.member2Name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>2nd Member Age</label>
            <select
              name="member2Age"
              value={formData.member2Age}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="">Select Age</option>
              {Array.from({ length: 7 }, (_, i) => (
                <option key={i} value={12 + i}>{12 + i}</option>
              ))}
            </select>
            {errors.member2Age && <span style={styles.error}>{errors.member2Age}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>2nd Member Email</label>
            <input
              type="email"
              name="member2Email"
              value={formData.member2Email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.member2Email && <span style={styles.error}>{errors.member2Email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>2nd Member Phone</label>
            <input
              type="tel"
              name="member2Phone"
              value={formData.member2Phone}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.member2Phone && <span style={styles.error}>{errors.member2Phone}</span>}
          </div>

          {/* Member 3 (Optional) */}
          <div style={styles.formGroup}>
            <label style={styles.label}>3rd Member Full Name (Optional)</label>
            <input
              type="text"
              name="member3Name"
              value={formData.member3Name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>3rd Member Age (Optional)</label>
            <select
              name="member3Age"
              value={formData.member3Age}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="">Select Age</option>
              {Array.from({ length: 7 }, (_, i) => (
                <option key={i} value={12 + i}>{12 + i}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>3rd Member Email (Optional)</label>
            <input
              type="email"
              name="member3Email"
              value={formData.member3Email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>3rd Member Phone (Optional)</label>
            <input
              type="tel"
              name="member3Phone"
              value={formData.member3Phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>


          <div style={styles.formGroup}>
            <label style={styles.label}>School</label>
            <input type="text" name="school" value={formData.school} onChange={handleChange} style={styles.input} />
            {errors.school && <span style={styles.error}>{errors.school}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Standard/Class</label>
            <input type="text" name="standard" value={formData.standard} onChange={handleChange} style={styles.input} />
            {errors.standard && <span style={styles.error}>{errors.standard}</span>}
          </div>

          <div style={styles.formGroup}>
            <img
              src="/images/qr.jpeg" // Ensure the QR code image path is correct
              alt="QR Code for Payment"
              style={{ maxWidth: '50%', height: 'auto' }}
            />
            <p style={{ textAlign: 'left', marginTop: '10px', fontSize: '14px', color: '#666' }}>
              Scan to pay ₹300
            </p>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Transaction ID</label>
            <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} style={styles.input} />
            {errors.transactionId && <span style={styles.error}>{errors.transactionId}</span>}
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
