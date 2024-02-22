// src/components/FormAction.js
import React, { useState } from 'react';
import './FormAction.css'; // Import the CSS file

const FormAction = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);

    // Reset the form
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
    });

    // Show an alert
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-action-container">
      <h2>Form Action</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormAction;
