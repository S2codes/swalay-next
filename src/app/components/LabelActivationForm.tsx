"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/app/utils/cn';

// Define the validation schema
const SignupSchema = z.object({
  firstname: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z.string().min(1, { message: "Contact number is required" }),
  label: z.string().min(1, { message: "Label is required" }),
  userType: z.enum(["Normal Client", "Super Client"], { message: "User type is required" }),
});

// Infer the type for validation errors
type SignupData = z.infer<typeof SignupSchema>;

export function SignupFormDemo() {
  // Define the state for errors using the inferred type
  const [errors, setErrors] = useState<Partial<Record<keyof SignupData, { _errors: string[] }>>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: SignupData = {
      firstname: formData.get("firstname") as string,
      email: formData.get("email") as string,
      contact: formData.get("contact") as string,
      label: formData.get("label") as string,
      userType: formData.get("userType") as "Normal Client" | "Super Client",
    };

    const validation = SignupSchema.safeParse(data);
    if (!validation.success) {
      setErrors(validation.error.format());
      return;
    }

    setErrors({});
    console.log("Form submitted successfully", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1e]">
      <div className="max-w-md w-full mx-auto p-8 m-8">
        <div className="text-white p-8">
          <h2 className="font-bold text-3xl text-center mb-4">Label Activation</h2>
          <p className="text-center mb-8">For Authorized</p>
        </div>

        <form className="bg-[#2c2c2e] text-white p-8 rounded-lg shadow-lg mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input id="firstname" name="firstname" placeholder="Enter Your Name" type="text" className="bg-[#3a3a3c] text-white" />
              {errors.firstname && <span className="text-red-500">{errors.firstname._errors.join(', ')}</span>}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="swalay@fc.com" type="email" className="bg-[#3a3a3c] text-white" />
            {errors.email && <span className="text-red-500">{errors.email._errors.join(', ')}</span>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" name="contact" placeholder="Enter Your Contact Number" type="text" className="bg-[#3a3a3c] text-white" />
            {errors.contact && <span className="text-red-500">{errors.contact._errors.join(', ')}</span>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="label">Record Label</Label>
            <Input id="label" name="label" placeholder="Enter Your Label" type="text" className="bg-[#3a3a3c] text-white" />
            {errors.label && <span className="text-red-500">{errors.label._errors.join(', ')}</span>}
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
            {errors.userType && <span className="text-red-500">{errors.userType._errors.join(', ')}</span>}
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
