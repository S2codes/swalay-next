"use client";
import React, { useState } from 'react';
import { z } from 'zod';

// Define the schema using Zod
const schema = z.object({
  name: z.string().nonempty("Full Name is required"),
  email: z.string().nonempty("Email is required").email("Email is invalid"),
  contact: z.string().nonempty("Contact number is required").regex(/^\d+$/, "Contact number is invalid"),
  label: z.string().nonempty("Record Label is required"),
  userType: z.enum(["normal-client", "super-client"]),
});

const LabelActivationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    label: '',
    userType: 'normal-client',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = schema.safeParse(formData);

    if (!validationResult.success) {
      const validationErrors = validationResult.error.format();
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with form submission (e.g., API call)
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-800">Label Activation</h1>
        <p className="text-center mb-6 text-blue-800">For SwaLay Authorized Employees</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name._errors}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email._errors}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact</label>
            <input
              type="tel"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Your Contact Number"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contact && <p className="text-red-500 text-sm mt-2">{errors.contact._errors}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="label" className="block text-gray-700 font-medium mb-2">Record Label</label>
            <input
              type="text"
              id="label"
              value={formData.label}
              onChange={handleChange}
              placeholder="Enter Your Record Label"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.label && <p className="text-red-500 text-sm mt-2">{errors.label._errors}</p>}
          </div>
          <div className="mb-6">
            <p className="block text-gray-700 font-medium mb-2">Type of user</p>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="normal-client"
                name="userType"
                value="normal-client"
                checked={formData.userType === 'normal-client'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="normal-client" className="text-gray-700">Normal Client</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="super-client"
                name="userType"
                value="super-client"
                checked={formData.userType === 'super-client'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="super-client" className="text-gray-700">Super Client</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LabelActivationForm;
