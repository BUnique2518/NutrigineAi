"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit2, ChevronRight, Calendar, Clock, Zap, CheckCircle, Flame } from "lucide-react";

type ExerciseItem = {
  id: string;
  name: string;
  duration: string;
  sets?: string;
  reps?: string;
  note?: string;
  difficulty?: "Easy" | "Moderate" | "Hard";
  muscleGroup?: string;
};

const sampleWeek: Record<string, ExerciseItem[]> = {
  Monday: [
    { 
      id: "push-ups", 
      name: "Push-ups", 
      duration: "15 min", 
      sets: "3", 
      reps: "12-15",
      difficulty: "Moderate",
      muscleGroup: "Chest, Shoulders"
    },
    { 
      id: "plank", 
      name: "Plank", 
      duration: "5 min", 
      sets: "3", 
      reps: "30-60s",
      difficulty: "Easy",
      muscleGroup: "Core"
    },
  ],
  Tuesday: [
    { 
      id: "squats", 
      name: "Bodyweight Squats", 
      duration: "20 min", 
      sets: "4", 
      reps: "15-20",
      difficulty: "Moderate",
      muscleGroup: "Legs, Glutes"
    },
  ],
  Wednesday: [
    { 
      id: "dumbbell-rows", 
      name: "Dumbbell Rows", 
      duration: "25 min", 
      sets: "3", 
      reps: "10-12",
      difficulty: "Hard",
      muscleGroup: "Back, Biceps"
    },
    { 
      id: "jump-rope", 
      name: "Jump Rope", 
      duration: "10 min", 
      note: "Cardio",
      difficulty: "Hard",
      muscleGroup: "Full Body"
    },
  ],
  Thursday: [
    { 
      id: "lunges", 
      name: "Forward Lunges", 
      duration: "20 min", 
      sets: "3", 
      reps: "12 each leg",
      difficulty: "Moderate",
      muscleGroup: "Legs"
    },
  ],
  Friday: [
    { 
      id: "burpees", 
      name: "Burpees", 
      duration: "15 min", 
      sets: "4", 
      reps: "8-12",
      difficulty: "Hard",
      muscleGroup: "Full Body"
    },
  ],
  Saturday: [
    { 
      id: "yoga-flow", 
      name: "Yoga Flow", 
      duration: "30 min", 
      note: "Flexibility & Recovery",
      difficulty: "Easy",
      muscleGroup: "Full Body"
    },
  ],
  Sunday: [
    { 
      id: "rest", 
      name: "Active Recovery", 
      duration: "30 min", 
      note: "Light walk / Stretching",
      difficulty: "Easy",
      muscleGroup: "Recovery"
    },
  ],
};

const getDifficultyBadge = (difficulty?: string) => {
  switch (difficulty) {
    case "Easy":
      return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" };
    case "Moderate":
      return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" };
    case "Hard":
      return { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" };
    default:
      return { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
  }
};

const getDayBgColor = (day: string) => {
  const colors: Record<string, string> = {
    Monday: "bg-blue-50",
    Tuesday: "bg-purple-50",
    Wednesday: "bg-pink-50",
    Thursday: "bg-green-50",
    Friday: "bg-orange-50",
    Saturday: "bg-indigo-50",
    Sunday: "bg-red-50",
  };
  return colors[day] || "bg-gray-50";
};

const getDayBorderColor = (day: string) => {
  const colors: Record<string, string> = {
    Monday: "border-blue-300 bg-blue-500/5",
    Tuesday: "border-purple-300 bg-purple-500/5",
    Wednesday: "border-pink-300 bg-pink-500/5",
    Thursday: "border-green-300 bg-green-500/5",
    Friday: "border-orange-300 bg-orange-500/5",
    Saturday: "border-indigo-300 bg-indigo-500/5",
    Sunday: "border-red-300 bg-red-500/5",
  };
  return colors[day] || "border-gray-300 bg-gray-500/5";
};

const getDayIcon = (day: string) => {
  const icons: Record<string, string> = {
    Monday: "🏋️",
    Tuesday: "💪",
    Wednesday: "🔥",
    Thursday: "🌿",
    Friday: "⚡",
    Saturday: "🧘",
    Sunday: "😌",
  };
  return icons[day] || "📅";
};

export default function WeeklyPlannerPage() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [checkedExercises, setCheckedExercises] = useState<Set<string>>(new Set());

  const openExercise = (exercise: ExerciseItem) => {
    router.push(`/exercise?id=${encodeURIComponent(exercise.id)}&name=${encodeURIComponent(exercise.name)}`);
  };

  const toggleExerciseCheck = (id: string) => {
    const newChecked = new Set(checkedExercises);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedExercises(newChecked);
  };

  const totalMinutes = Object.values(sampleWeek).flat().reduce((sum, ex) => {
    const mins = parseInt(ex.duration);
    return sum + mins;
  }, 0);

  const totalExercises = Object.values(sampleWeek).flat().length;
  const completedToday = checkedExercises.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10 font-sans">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">YOUR FITNESS JOURNEY</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              Weekly Exercise Plan
            </h1>
            <p className="text-gray-600 text-lg">Achieve your goals, one day at a time</p>
          </div>
          {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform font-semibold flex items-center justify-center gap-2 w-full md:w-auto">
            <Plus size={20} />
            Add Workout
          </button> */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Zap className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Exercises</p>
                <p className="text-3xl font-bold text-gray-900">{totalExercises}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="text-3xl font-bold text-gray-900">{totalMinutes}m</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-purple-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Days</p>
                <p className="text-3xl font-bold text-gray-900">7</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <CheckCircle className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">{completedToday}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Days Calendar */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Schedule</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(sampleWeek).map(([day, exercises]) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`group text-left p-6 rounded-2xl border-2 transition transform hover:scale-102 hover:shadow-lg ${
                  selectedDay === day
                    ? `${getDayBorderColor(day)} ring-2 ring-offset-2 ring-blue-400`
                    : "border-gray-200 hover:border-gray-300"
                } bg-white`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-3xl mb-1">{getDayIcon(day)}</p>
                    <h3 className="text-xl font-bold text-gray-900">{day}</h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold group-hover:bg-blue-100 group-hover:text-blue-700 transition">
                    {exercises.length}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {exercises.slice(0, 2).map((ex) => (
                    <div key={ex.id} className="text-sm">
                      <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {ex.name}
                      </p>
                      <p className="text-xs text-gray-500">{ex.duration}</p>
                    </div>
                  ))}
                  {exercises.length > 2 && (
                    <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                      +{exercises.length - 2} more exercise{exercises.length - 2 > 1 ? "s" : ""}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-medium">
                    {exercises.reduce((sum, ex) => sum + parseInt(ex.duration), 0)} min • {exercises.length} exercises
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className={`p-6 ${getDayBgColor(selectedDay)} border-b-2 ${getDayBorderColor(selectedDay).split(" ")[0]}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{getDayIcon(selectedDay)}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedDay}</h3>
                  <p className="text-sm text-gray-600">
                    {sampleWeek[selectedDay].length} exercises • {sampleWeek[selectedDay].reduce((sum, ex) => sum + parseInt(ex.duration), 0)}m
                  </p>
                </div>
              </div>
            </div>

            {/* Exercises List */}
            <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
              {sampleWeek[selectedDay].map((exercise, idx) => (
                <div
                  key={exercise.id}
                  className="group p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => openExercise(exercise)}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExerciseCheck(exercise.id);
                      }}
                      className="mt-1"
                    >
                      <div className={`w-6 h-6 rounded-full border-2 transition ${
                        checkedExercises.has(exercise.id)
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 hover:border-green-500"
                      }`}>
                        {checkedExercises.has(exercise.id) && (
                          <CheckCircle size={24} className="text-white" />
                        )}
                      </div>
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-bold text-sm ${checkedExercises.has(exercise.id) ? "line-through text-gray-400" : "text-gray-900"}`}>
                          {exercise.name}
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{exercise.muscleGroup}</p>
                      <div className="flex flex-wrap gap-1">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold border ${getDifficultyBadge(exercise.difficulty).bg} ${getDifficultyBadge(exercise.difficulty).text} ${getDifficultyBadge(exercise.difficulty).border} border`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {exercise.duration}
                        </span>
                      </div>
                      {exercise.sets && (
                        <p className="text-xs text-gray-600 mt-2">
                          <span className="font-semibold">{exercise.sets}</span> sets • <span className="font-semibold">{exercise.reps}</span>
                        </p>
                      )}
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition mt-1" size={18} />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 space-y-3">
              {/* <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                <Flame size={18} />
                Start Workout
              </button> */}
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2">
                <Edit2 size={18} />
                Regenerate Today's Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Motivational Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl mb-3">🎯</p>
            <h4 className="text-lg font-bold mb-2">Stay Consistent</h4>
            <p className="text-blue-100">Follow your plan daily to achieve your fitness goals faster.</p>
          </div>
          <div>
            <p className="text-4xl mb-3">⚡</p>
            <h4 className="text-lg font-bold mb-2">Track Progress</h4>
            <p className="text-blue-100">Check off exercises as you complete them and monitor your gains.</p>
          </div>
          <div>
            <p className="text-4xl mb-3">💪</p>
            <h4 className="text-lg font-bold mb-2">Build Strength</h4>
            <p className="text-blue-100">Progressive training leads to better results and improved fitness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}