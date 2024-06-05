"use client";
import React from "react";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/app/utils/cn';

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1e] ">
      <div className="max-w-md w-full mx-auto p-8 m-8">
        <div className=" text-white p-8 ">
          <h2 className="font-bold text-3xl text-center mb-4 ">
           Label Activation
          </h2>
          <p className="text-center mb-8">
            For Authorized 
          </p>
        </div>

        <form className="bg-[#2c2c2e] text-white p-8 rounded-lg shadow-lg mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input id="firstname" placeholder="Enter Your Name" type="text" className="bg-[#3a3a3c] text-white" />
            </LabelInputContainer>
            
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="swalay@fc.com" type="email" className="bg-[#3a3a3c] text-white" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Contact</Label>
            <Input id="password" placeholder="123-4567-890" type="tel"pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  className="bg-[#3a3a3c] text-white" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Record Label</Label>
            <Input id="twitterpassword" placeholder="Enter Your Label" type="text" className="bg-[#3a3a3c] text-white" />
          </LabelInputContainer>
          <div className="mb-8">
            <Label className="block mb-2">Type of user</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="userType" value="Normal Client" defaultChecked />
                <span className="ml-2">Normal Client</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="userType" value="Super Client" />
                <span className="ml-2">Super Client</span>
              </label>
            </div>
          </div>

          <button
            className="bg-gradient-to-br from-[#3a3a3c] to-[#1c1c1e] w-full text-white rounded-md h-10 font-medium shadow-lg"
            type="submit"
          >
            Register Now
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
