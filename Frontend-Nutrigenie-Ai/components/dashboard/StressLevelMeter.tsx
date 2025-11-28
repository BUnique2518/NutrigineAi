"use client";

import { Leaf } from "lucide-react"; 

interface StressLevelMeterProps {
  status: "Low" | "Moderate" | "High" | string;
}

// Helper function to get dynamic styles based on status
const getStressDetails = (status: string) => {
  switch (status) {
    case "Low":
      return { color: "text-green-400", percent: 25 };
    case "Moderate":
      return { color: "text-yellow-400", percent: 50 };
    case "High":
      return { color: "text-red-400", percent: 85 };
    default:
      return { color: "text-slate-400", percent: 0 };
  }
};

export default function StressLevelMeter({ status }: StressLevelMeterProps) {
  // Get dynamic color and percent
  const { color, percent } = getStressDetails(status);

  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-white font-semibold mb-1">Stress Level Meter</h3>
      <p className="text-slate-400 text-sm mb-6">
        Your current mental well-being
      </p>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-40 h-40 rounded-full border-10 border-slate-700 flex items-center justify-center relative">
          {/* Background Ring */}
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
            <circle
              className="text-white/10" 
              stroke="currentColor"
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            />
            {/* Value Ring */}
            <circle
              className={color} // DYNAMIC COLOR
              stroke="currentColor"
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset} // DYNAMIC OFFSET
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          {/* Text Inside */}
          <div className="flex flex-col items-center justify-center">
            <Leaf size={40} className={color} />
            <p className={`text-sm font-bold text-slate-400 mt-1`}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}