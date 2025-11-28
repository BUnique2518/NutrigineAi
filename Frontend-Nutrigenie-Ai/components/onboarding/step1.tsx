"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleValueChange: (name: string, value: string) => void;
  formData: {
    age: string;
    gender: string;
    height: string;
    weight: string;
    phone: string;
    country: string;
    state: string;
  };
}

interface Step1Props extends StepProps {
  nextStep: () => void;
}

export default function Step1({
  nextStep,
  handleInputChange,
  handleValueChange,
  formData,
}: Step1Props) {
    
  const canProceed =
    formData.age &&
    formData.gender &&
    formData.height &&
    formData.weight &&
    formData.country &&
    formData.state;

  return (
    <div className="bg-[#232d3f] rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Personal Information</h2>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
            placeholder="25"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) => handleValueChange("gender", e.target.value)}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
          >
            <option value="" disabled>
              Select gender...
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
            placeholder="175"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
            placeholder="70"
          />
        </div>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
            placeholder="e.g., India"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
            placeholder="e.g., Maharashtra"
          />
        </div>
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      
      <div className="flex justify-end pt-4">
        <Button
          onClick={nextStep}
          disabled={!canProceed}
          className="bg-[#4ade80] hover:bg-[#3cd264] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-200 disabled:opacity-50"
        >
          Next
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}