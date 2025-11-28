"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import Step1 from "@/components/onboarding/step1";
import Step2 from "@/components/onboarding/step2";
import Step3 from "@/components/onboarding/step3";
import { useRouter } from "next/navigation";


const initialFormData = {
  age: "",
  gender: "",
  height: "", // in cm
  weight: "", // in kg
  phone: "", // Optional
  country: "",
  state: "",
  goal: "Weight Loss", // Default value
  fitnessLevel: "50", // Default value
  activityLevel: "Moderately active", // Default value
  dietType: "Balanced Diet", // Default value
  injuries: "",
  diseases: "",
  allergies: "",
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter(); 

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleValueChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  // This is the final submit for the *entire* form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FINAL ONBOARDING DATA:", formData);
    // Here we will call the Server Action to save the user's profile
    // and then redirect to the dashboard
    // router.push('/dashboard');
    alert("Profile complete! (Check console for data)");
    router.push("/"); // Redirect home for now
  };

  return (
    <div className="min-h-screen bg-[#1a202c] py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#4ade80] mb-2">
            Tell us about yourself
          </h1>
          <p className="text-gray-400">
            This helps us create your personalized fitness and nutrition plan.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-8">
          <p className="text-sm text-gray-400">
            Step {step} of {totalSteps}
          </p>
          <Progress
            value={progress}
            className="w-full h-2 bg-[#0f1419]"
            data-progress="dark"
          />
        </div>

        {/* Onboarding Form Container */}
        <main>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Step1
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                handleValueChange={handleValueChange}
                formData={formData}
              />
            )}
            {step === 2 && (
              <Step2
                nextStep={nextStep}
                prevStep={prevStep}
                handleInputChange={handleInputChange}
                handleValueChange={handleValueChange}
                formData={formData}
              />
            )}
            {step === 3 && (
              <Step3
                prevStep={prevStep}
                handleInputChange={handleInputChange}
                formData={formData}
              />
            )}
          </form>
        </main>
      </div>
    </div>
  );
}