"use client";

import { Goal } from "lucide-react"; 

interface GoalProgressCardProps {
  title: string;
  subtitle: string;
  initialWeight: number;
  currentWeight: number;
  targetWeight: number;
  unit: string;
  achieveByDays: number;
}

export default function GoalProgressCard({
  title,
  subtitle,
  initialWeight,
  currentWeight,
  targetWeight,
  unit,
  achieveByDays,
}: GoalProgressCardProps) {

  // Total weight the user wants to lose
  const totalToLose = Math.max(0, initialWeight - targetWeight);
  
  // How much weight the user has lost so far
  const weightLost = Math.max(0, initialWeight - currentWeight);
  
  // How much weight is remaining to lose
  const weightLeft = Math.max(0, currentWeight - targetWeight);
  
  // The completion percentage
  // (Handle division by zero if totalToLose is 0)
  const percentComplete = totalToLose > 0 ? (weightLost / totalToLose) * 100 : 100;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Goal className="text-green-400" size={18} />
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm">
          Initial weight:{" "}
          <span className="font-medium text-green-400">
            {initialWeight}
            {unit}
          </span>
        </p>
      </div>
      <p className="text-slate-400 text-sm mb-4">{subtitle}</p>

   
      <div className="flex-1 flex flex-col justify-center">
       
        <div className="mb-4">
          <p className="text-3xl font-bold text-green-400">
            {currentWeight}
            <span className="text-lg text-slate-400">
              {" "}
              / {targetWeight} {unit}
            </span>
          </p>
        </div>

        {/* Progress Bar (matches your design) */}
        <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
          <div
            className="bg-green-400 h-2 rounded-full transition-all"
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>

        {/* Labels under progress bar */}
        <div className="flex justify-between text-sm text-slate-400">
          <span>{percentComplete.toFixed(0)}% Complete</span>
          <span>
            {weightLeft.toFixed(0)} {unit} left
          </span>
        </div>

        
        <p className="text-slate-400 text-sm mt-6">
          Achieve your goal in{" "}
          <span className="font-medium text-green-400">
            {achieveByDays} days
          </span>
        </p>
      </div>
    </div>
  );
}