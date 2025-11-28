"use client";

import BmiMeter from "@/components/dashboard/BmiMeter";
import StressLevelMeter from "@/components/dashboard/StressLevelMeter";
import NutriGenScore from "@/components/dashboard/NutriGenScore";
import WeeklyFuelChart from "@/components/dashboard/WeeklyFuelChart";
import MealPlanner from "@/components/dashboard/MealPlanner";
import GoalProgressCard from "@/components/dashboard/GoalProgressCard";
import StreakTrackerCard from "@/components/dashboard/StreakTrackerCard";

// 1. Define the (large) props interface for all data

interface StreakDay {
  day: string;
  active: boolean;
}

interface MainContentProps {
  userScore: number;
  bmi: { value: number; status: string };
  bodyFat: {
    value: string;
    target: string;
    initialFat: string;
    alert: string;
  };
  stress: { status: string };
  goal: {
    title: string;
    subtitle: string;
    unit: string;
    initialWeight: number;
    currentWeight: number;
    targetWeight: number;
    achieveByDays: number;
  };
  streak: {
    title: string;
    subtitle: string;
    currentStreak: number;
    longestStreak: number;
    streakData: StreakDay[];
    date: string;
  };
  chartData: any[];
  mealData: any[];
}


export default function MainContent(props: MainContentProps) {

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <BmiMeter value={props.bmi.value} status={props.bmi.status} />

      

        <StressLevelMeter status={props.stress.status} />
      </div>

      {/* NutriGen Score */}
      <div className="mb-6">
        <NutriGenScore score={props.userScore} />
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <GoalProgressCard
          title={props.goal.title}
          subtitle={props.goal.subtitle}
          unit={props.goal.unit}
          initialWeight={props.goal.initialWeight}
          currentWeight={props.goal.currentWeight}
          targetWeight={props.goal.targetWeight}
          achieveByDays={props.goal.achieveByDays}
        />
        <StreakTrackerCard
          title={props.streak.title}
          subtitle={props.streak.subtitle}
          currentStreak={props.streak.currentStreak}
          longestStreak={props.streak.longestStreak}
          streakData={props.streak.streakData}
          date={props.streak.date}
        />
      </div>

    
    </div>
  );
}