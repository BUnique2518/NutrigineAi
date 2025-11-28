"use client";

import React from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import MainContent from "@/components/dashboard/MainContent";


// In the future, you'll fetch this data from your API.
const dashboardData = {
  user: {
    name: "Sarah Doe",
    email: "sarah.doe@example.com",
  },
  mainContent: {
    userScore: 55,
    bmi: { value: 4.5, status: "Normal" },
    bodyFat: {
      value: "16.8%",
      target: "15.0%",
      initialFat: "30%",
      alert: "1.8% above target",
    },
    stress: { status: "Moderate" },
    goal: {
      title: "Weight Loss",
      subtitle: "Your current fitness goal",
      unit: "kg",
      initialWeight: 80,
      currentWeight: 70,
      targetWeight: 65,
      achieveByDays: 45,
    },
    streak: {
      title: "Daily Fitness Streak",
      subtitle: "Maintain consistency with your daily workouts.",
      currentStreak: 5,
      longestStreak: 17,
      streakData: [
        { day: "M", active: true },
        { day: "T", active: true },
        { day: "W", active: false },
        { day: "T", active: true },
        { day: "F", active: true },
        { day: "S", active: false },
        { day: "S", active: false },
      ],
      date: "Wednesday, October 20",
    },
    chartData: [
      { day: "Mon", calories: 2200, protein: 120, carbs: 280, fat: 60, target: 2000 },
      { day: "Tue", calories: 2100, protein: 115, carbs: 260, fat: 55, target: 2000 },
      { day: "Wed", calories: 1900, protein: 110, carbs: 240, fat: 50, target: 2000 },
      { day: "Thu", calories: 2300, protein: 130, carbs: 300, fat: 65, target: 2000 },
      { day: "Fri", calories: 2400, protein: 135, carbs: 320, fat: 70, target: 2000 },
      { day: "Sat", calories: 2250, protein: 125, carbs: 290, fat: 62, target: 2000 },
      { day: "Sun", calories: 2100, protein: 118, carbs: 270, fat: 58, target: 2000 },
    ],
    mealData: [
      { day: "Thursday, Jul 29", type: "Healthy Mix", kcal: 1800, protein: 90 },
      { day: "Friday, Jul 30", type: "Low Carb", kcal: 1750, protein: 110 },
      { day: "Saturday, Jul 31", type: "High Protein", kcal: 1900, protein: 130 },
      { day: "Sunday, Aug 01", type: "Cheat Food", kcal: 1500, protein: 90 },
      { day: "Monday, Aug 02", type: "Healthy Mix", kcal: 1800, protein: 90 },
    ],
  },
};
// --- END OF YOUR HARDCODED DATA ---

export default function DashboardClient() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  // In a real app, you would use React.useEffect and React.useState
  // to fetch this data from your API.
  const [data, setData] = React.useState(dashboardData);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar now receives the user data */}
      <Sidebar
        open={sidebarOpen}
        // user={data.user}
        // currentPage="Dashboard"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-black border-b border-slate-800 px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-green-400 hover:text-green-300"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search dashboard..."
              className="bg-slate-800 text-white placeholder-slate-500 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {/* Placeholder notification/profile icons */}
            <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
            <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-black">
          {/* MainContent now receives all its data as props */}
          <MainContent {...data.mainContent} />
        </div>
      </div>
    </div>
  );
}