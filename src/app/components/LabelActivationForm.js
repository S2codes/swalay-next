// components/LabelActivationForm.js
import React from 'react';

const LabelActivationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Label Activation</h1>
        <p className="text-center mb-6 text-gray-500">For SwaLay Authorized Employees</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">Contact</label>
            <input type="tel" id="contact" placeholder="Enter Your Contact Number" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="label" className="block text-gray-700 font-bold mb-2">Record Label</label>
            <input type="text" id="label" placeholder="Enter Your Record Label" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-6">
            <p className="block text-gray-700 font-bold mb-2">Type of user</p>
            <div className="flex items-center mb-2">
              <input type="radio" id="normal-client" name="user-type" className="mr-2" defaultChecked />
              <label htmlFor="normal-client" className="text-gray-700">Normal Client</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="super-client" name="user-type" className="mr-2" />
              <label htmlFor="super-client" className="text-gray-700">Super Client</label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Registration Now</button>
        </form>
      </div>
    </div>
  );
}

export default LabelActivationForm;
