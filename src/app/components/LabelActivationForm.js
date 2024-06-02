// components/LabelActivationForm.js
import React from 'react';

const LabelActivationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-800">Label Activation</h1>
        <p className="text-center mb-6 text-blue-800">For SwaLay Authorized Employees</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter Your Name" 
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Your Email" 
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact</label>
            <input 
              type="tel" 
              id="contact" 
              placeholder="Enter Your Contact Number" 
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="label" className="block text-gray-700 font-medium mb-2">Record Label</label>
            <input 
              type="text" 
              id="label" 
              placeholder="Enter Your Record Label" 
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-6">
            <p className="block text-gray-700 font-medium mb-2">Type of user</p>
            <div className="flex items-center mb-2">
              <input type="radio" id="normal-client" name="user-type" className="mr-2" defaultChecked />
              <label htmlFor="normal-client" className="text-gray-700">Normal Client</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="super-client" name="user-type" className="mr-2" />
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
}

export default LabelActivationForm;
