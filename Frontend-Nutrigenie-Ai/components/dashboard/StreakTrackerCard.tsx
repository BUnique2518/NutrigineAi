"use client";

import { Check } from "lucide-react";

interface StreakDay {
  day: string;
  active: boolean;
}

interface StreakTrackerCardProps {
  title: string;
  subtitle: string;
  currentStreak: number;
  longestStreak: number;
  streakData: StreakDay[];
  date: string;
}

export default function StreakTrackerCard({
  title,
  subtitle,
  currentStreak,
  longestStreak,
  streakData,
  date,
}: StreakTrackerCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="w-5 h-5 rounded-full bg-green-400/20 border border-green-400 flex items-center justify-center">
          <Check className="text-green-400" size={12} />
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-4">{subtitle}</p>
      <p className="text-slate-400 text-xs mb-4">{date}</p>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Streak Circles */}
        <div className="flex gap-2 mb-6 justify-between">
          {streakData.map((item, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                item.active
                  ? "bg-green-400 text-black"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {item.day}
            </div>
          ))}
        </div>

        <p className="text-3xl font-bold text-green-400 mb-2">
          {currentStreak} Days
        </p>
        <p className="text-slate-400 text-xs mb-4">Current Streak</p>

        {/* Footer */}
        <div className="flex justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
          <span>Longest Streak: {longestStreak} days</span>
          <button className="text-green-400 hover:text-green-300">
            + Log Workout
          </button>
        </div>
      </div>
    </div>
  );
}