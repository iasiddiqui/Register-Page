import React, { useState } from 'react';
import './register.css';

const titles = [
  { value: '', label: 'Select Title' },
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Ms.', label: 'Ms.' },
  { value: 'Dr.', label: 'Dr.' },
  { value: 'Prof.', label: 'Prof.' },
];

const countries = [
  { value: '', label: 'Select Country' },
  { value: 'India', label: 'India' },
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Canada', label: 'Canada' },
];

const initialState = {
  title: '',
  name: '',
  email: '',
  alternativeEmail: '',
  phone: '',
  whatsappNumber: '',
  institution: '',
  country: '',
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title*:</label>
          <select
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          >
            {titles.map((title) => (
              <option key={title.value} value={title.value}>
                {title.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email*:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="alternativeEmail">Alternative Email:</label>
          <input
            type="email"
            id="alternativeEmail"
            name="alternativeEmail"
            value={formData.alternativeEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone*:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="institution">Institution*:</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Select Country*:</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;