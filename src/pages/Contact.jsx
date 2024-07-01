// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      }
    }
  };

  return (
    <section className='contactContainer'>
      <h2>Contact</h2>
      <form className='contactForm'>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formState.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formState.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formState.message} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
