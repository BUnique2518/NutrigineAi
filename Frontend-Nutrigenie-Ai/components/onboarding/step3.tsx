"use client";

import { Button } from "@/components/ui/button";


interface StepProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: {
    allergies: string;
    injuries: string;
    diseases: string;
  };
}

interface Step3Props extends StepProps {
  prevStep: () => void;
}

export default function Step3({
  prevStep,
  handleInputChange,
  formData,
}: Step3Props) {
  return (
    <div className="bg-[#232d3f] rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Health Profile</h2>

      {/* Allergies */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Allergies / Restrictions
        </label>
        <textarea
          name="allergies"
          value={formData.allergies}
          onChange={handleInputChange}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition resize-none h-20"
          placeholder="e.g., Peanuts, Gluten, Shellfish, Lactose Intolerance..."
        />
      </div>

      {/* Injuries */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Any Injuries?
        </label>
        <textarea
          name="injuries"
          value={formData.injuries}
          onChange={handleInputChange}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition resize-none h-20"
          placeholder="e.g., Bad left knee, lower back pain, shoulder injury..."
        />
      </div>

      {/* Diseases */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Any Diseases?
        </label>
        <textarea
          name="diseases"
          value={formData.diseases}
          onChange={handleInputChange}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition resize-none h-20"
          placeholder="e.g., Type 2 Diabetes, High Blood Pressure, PCOS..."
        />
      </div>

   
      <div className="flex justify-between pt-4">
        <Button
          onClick={prevStep}
          variant="outline"
          className="bg-transparent border-gray-600 hover:bg-[#0f1419] text-gray-300 font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="bg-[#4ade80] hover:bg-[#3cd264] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-200"
        >
          Complete Profile
        </Button>
      </div>
    </div>
  );
}