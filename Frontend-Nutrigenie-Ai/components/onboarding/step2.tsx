"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleValueChange: (name: string, value: string) => void;
  formData: {
    goal: string;
    fitnessLevel: string;
    activityLevel: string;
    dietType: string;
  };
}

interface Step2Props extends StepProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step2({
  nextStep,
  prevStep,
  handleInputChange,
  handleValueChange,
  formData,
}: Step2Props) {
  const canProceed =
    formData.goal &&
    formData.fitnessLevel &&
    formData.activityLevel &&
    formData.dietType;

  return (
    <div className="bg-[#232d3f] rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Fitness & Diet Goals</h2>

    
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Primary Goal
        </label>
        <select
          name="goal"
          value={formData.goal}
          onChange={(e) => handleValueChange("goal", e.target.value)}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
        >
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Strength">Strength</option>
        </select>
      </div>

      
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-medium text-gray-300">
            Rate Your Fitness Level (1-100)
          </label>
          <span className="text-[#4ade80] font-semibold">
            {formData.fitnessLevel}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          name="fitnessLevel"
          value={formData.fitnessLevel}
          onChange={handleInputChange}
          className="w-full h-2 bg-[#0f1419] rounded appearance-none cursor-pointer slider-thumb"
          style={{
            background: `linear-gradient(to right, #4ade80 0%, #4ade80 ${formData.fitnessLevel}%, #0f1419 ${formData.fitnessLevel}%, #0f1419 100%)`,
          }}
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Activity Level
        </label>
        <select
          name="activityLevel"
          value={formData.activityLevel}
          onChange={(e) => handleValueChange("activityLevel", e.target.value)}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
        >
          <option value="Sedentary">Sedentary (Little/no exercise)</option>
          <option value="Lightly active">
            Lightly active (1-2 days/week)
          </option>
          <option value="Moderately active">
            Moderately active (3-4 days/week)
          </option>
          <option value="Very active">Very active (5+ days/week)</option>
        </select>
      </div>

     
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Diet Type
        </label>
        <select
          name="dietType"
          value={formData.dietType}
          onChange={(e) => handleValueChange("dietType", e.target.value)}
          className="w-full bg-[#0f1419] text-white px-3 py-2 rounded border border-gray-700 focus:border-[#4ade80] focus:outline-none transition"
        >
          <option value="Balanced Diet">Balanced Diet (No preference)</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Keto">Keto</option>
          <option value="Paleo">Paleo</option>
        </select>
      </div>

      {/* Footer with Nav Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          onClick={prevStep}
          variant="outline"
          className="bg-transparent border-gray-600 hover:bg-[#0f1419] text-gray-300 font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Back
        </Button>
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