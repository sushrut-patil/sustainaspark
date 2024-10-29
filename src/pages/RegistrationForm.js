import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    teamName: '',
    category: '',
    teamLead: '',
    member2: '',
    member3: '',
    member4: '',
    institute: '',
    department: '',
    hearAbout: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    ['teamName', 'category', 'teamLead', 'member2', 'institute', 'department'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '16px',
      color: '#666'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
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
      fontSize: '12px',
      marginTop: '4px'
    },
    button: {
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px'
    },
    successMessage: {
      padding: '20px',
      backgroundColor: '#dcfce7',
      color: '#166534',
      borderRadius: '4px',
      textAlign: 'center',
      marginTop: '20px'
    },
    terms: {
      fontSize: '12px',
      color: '#666',
      marginTop: '20px',
      textAlign: 'center'
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <div style={styles.successMessage}>
          Registration submitted successfully! You will receive a confirmation email shortly.
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Code Red 4.0 Triathlon Registration Form</h1>
        <p style={styles.subtitle}>72 hours non-stop Triathlon featuring Hackathon & Design-a-thon</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.email ? '#dc2626' : '#ddd'
            }}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.phone ? '#dc2626' : '#ddd'
            }}
          />
          {errors.phone && <span style={styles.error}>{errors.phone}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Team Name</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.teamName ? '#dc2626' : '#ddd'
            }}
          />
          {errors.teamName && <span style={styles.error}>{errors.teamName}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Triathlon Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              ...styles.select,
              borderColor: errors.category ? '#dc2626' : '#ddd'
            }}
          >
            <option value="">Select category</option>
            <option value="hackathon">Hackathon</option>
            <option value="designathon">Design-a-thon</option>
            <option value="both">Both</option>
          </select>
          {errors.category && <span style={styles.error}>{errors.category}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Team Lead Name</label>
          <input
            type="text"
            name="teamLead"
            value={formData.teamLead}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.teamLead ? '#dc2626' : '#ddd'
            }}
          />
          {errors.teamLead && <span style={styles.error}>{errors.teamLead}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>2nd Team Member Name</label>
          <input
            type="text"
            name="member2"
            value={formData.member2}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.member2 ? '#dc2626' : '#ddd'
            }}
          />
          {errors.member2 && <span style={styles.error}>{errors.member2}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>3rd Team Member Name (Optional)</label>
          <input
            type="text"
            name="member3"
            value={formData.member3}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>4th Team Member Name (Optional)</label>
          <input
            type="text"
            name="member4"
            value={formData.member4}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Institute Name</label>
          <input
            type="text"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.institute ? '#dc2626' : '#ddd'
            }}
          />
          {errors.institute && <span style={styles.error}>{errors.institute}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.department ? '#dc2626' : '#ddd'
            }}
          />
          {errors.department && <span style={styles.error}>{errors.department}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>How did you hear about the TRIATHLON?</label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select option</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend/College</option>
            <option value="email">Email</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          Pay ₹500.00
        </button>

        <p style={styles.terms}>
          By proceeding with payment, you agree to the terms and conditions.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;