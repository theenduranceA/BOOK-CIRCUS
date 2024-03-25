import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <div className='contact-us-title'>
      <p>If you have any questions, suggestions, or feedback, feel free to reach out to us:</p>
      <ul>
        <li>Email: info@bookcircus.com</li>
        <li>Phone: +2349024200040</li>
      </ul>
      <p>Alternatively, you can fill out the form below:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='contact-us-form'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;