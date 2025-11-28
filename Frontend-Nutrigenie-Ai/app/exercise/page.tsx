"use client";

import React, { useState } from "react";
import { Play, AlertCircle, Lightbulb, Target } from "lucide-react";

export default function ExerciseDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState("Intermediate");
  const [equipment, setEquipment] = useState("None (Bodyweight)");
  const [exerciseType, setExerciseType] = useState("Strength Training");
  const [experienceLevel, setExperienceLevel] = useState("Beginner+");
  const [customMessage, setCustomMessage] = useState("");

  const difficultyOptions = ["Low", "Moderate", "High", "Very High"];
  const equipmentOptions = [
    "None (Bodyweight)",
    "Dumbbells",
    "Barbell",
    "Resistance Bands",
    "Kettlebell",
    "Medicine Ball",
    "Gym Equipment",
  ];
  const exerciseTypeOptions = [
    "Strength Training",
    "Cardio",
    "Flexibility",
    "Balance",
    "Endurance",
    "Compound",
  ];
  const experienceLevelOptions = [
    "Beginner",
    "Beginner+",
    "Intermediate",
    "Advanced",
    "Professional",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Exercise Details</h1>
          <p className="text-gray-600 mt-1">Full guide to perfect your form</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-xl shadow">
          Back to Workout
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Video & Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Exercise Name & Description */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Push-ups</h2>
            <p className="text-gray-600 text-lg mb-4">
              A classic upper body exercise that builds chest, shoulder, and
              tricep strength using only your body weight.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Strength
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                No Equipment
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Intermediate
              </span>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Demo Video
            </h3>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 w-20 h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition"
              >
                <Play size={32} fill="white" />
              </button>
              <p className="absolute bottom-4 left-4 text-white text-sm">
                Duration: 2:45
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">
                  Duration
                </p>
                <p className="text-2xl font-bold text-blue-600">30-40</p>
                <p className="text-xs text-gray-500">seconds/set</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Sets</p>
                <p className="text-2xl font-bold text-green-600">3-4</p>
                <p className="text-xs text-gray-500">recommended</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-600 font-medium mb-1">
                  Repetitions
                </p>
                <p className="text-2xl font-bold text-purple-600">12-15</p>
                <p className="text-xs text-gray-500">per set</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Rest</p>
                <p className="text-2xl font-bold text-orange-600">60-90</p>
                <p className="text-xs text-gray-500">seconds</p>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Target Muscle Groups
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Primary</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Chest (Pectoralis Major)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Shoulders (Anterior Deltoids)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Triceps
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Secondary</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Core (Abdominals)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Lower Back
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Forearms
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Step-by-Step Instructions
            </h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  1. Starting Position
                </h4>
                <p className="text-gray-700 text-sm">
                  Place your hands on the floor, slightly wider than shoulder
                  width. Your body should form a straight line from head to
                  heels. Keep your core engaged and your eyes looking slightly
                  ahead.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  2. Lower Your Body
                </h4>
                <p className="text-gray-700 text-sm">
                  Lower your body by bending your elbows at approximately 45
                  degrees to your body. Go down until your chest is just above
                  the ground. Keep your body in a straight line throughout.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  3. Push Back Up
                </h4>
                <p className="text-gray-700 text-sm">
                  Push through your palms and return to the starting position.
                  Your elbows should extend fully but not lock out. Exhale as
                  you push up.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  4. Repeat
                </h4>
                <p className="text-gray-700 text-sm">
                  Perform 12-15 repetitions. Maintain consistent form and
                  breathing throughout the set. Rest for 60-90 seconds between
                  sets.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Common Mistakes to Avoid
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❌ Sagging Hips
                </h4>
                <p className="text-gray-700 text-sm">
                  Keeping your hips too high or allowing them to sag reduces
                  effectiveness and can strain your lower back. Maintain a
                  straight line from head to heels.
                </p>
              </div>

              <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❌ Flaring Elbows Out
                </h4>
                <p className="text-gray-700 text-sm">
                  Elbows should be at 45 degrees, not perpendicular to your
                  body. This protects your shoulders and targets chest muscles
                  more effectively.
                </p>
              </div>

              <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❌ Rushing Reps
                </h4>
                <p className="text-gray-700 text-sm">
                  Moving too quickly reduces muscle engagement. Take 2-3 seconds
                  to lower and 1-2 seconds to push up for better results.
                </p>
              </div>

              <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❌ Holding Your Breath
                </h4>
                <p className="text-gray-700 text-sm">
                  Always maintain steady breathing. Holding your breath can
                  increase blood pressure and reduce oxygen to muscles.
                </p>
              </div>

              <div className="p-4 border-l-4 border-red-600 bg-red-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❌ Incomplete Range of Motion
                </h4>
                <p className="text-gray-700 text-sm">
                  Go down until your chest nearly touches the ground for full
                  muscle engagement. Partial reps reduce effectiveness.
                </p>
              </div>
            </div>
          </div>

          {/* Breathing Tips */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Breathing Technique
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🫁 Optimal Breathing Pattern
                </h4>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal pl-5">
                  <li>
                    <strong>Inhale</strong> - Breathe in as you lower your body
                    down (eccentric phase)
                  </li>
                  <li>
                    <strong>Exhale</strong> - Breathe out as you push your body
                    up (concentric phase)
                  </li>
                  <li>
                    <strong>Hold</strong> - Brief pause at the top for 1 second
                  </li>
                </ol>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  💡 Why This Matters
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Prevents dizziness and loss of consciousness</li>
                  <li>Maintains stable oxygen levels in your muscles</li>
                  <li>Improves core stability during the movement</li>
                  <li>Enhances overall exercise performance</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ⚠️ Important Note
                </h4>
                <p className="text-sm text-gray-700">
                  Never hold your breath for extended periods. If you find
                  yourself breathless, reduce your pace or take a longer rest
                  between sets.
                </p>
              </div>
            </div>
          </div>

          {/* Tips & Variations */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Pro Tips & Variations
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  💪 Advanced Variations
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Diamond Push-ups (close grip)</li>
                  <li>Incline Push-ups (easier)</li>
                  <li>Decline Push-ups (harder)</li>
                  <li>One-arm Push-ups (advanced)</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🎯 Pro Tips
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Warm up with 5-10 light reps first</li>
                  <li>Quality over quantity always</li>
                  <li>Add resistance bands for more challenge</li>
                  <li>Keep hands shoulder-width apart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Exercise Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow sticky top-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Exercise Info
            </h3>
            <div className="space-y-4">
              {/* Difficulty Dropdown */}
              {/* <div className="border-b pb-3"> */}
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Intensity
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  {difficultyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              {/* </div> */}

              {/* Equipment Dropdown */}
              {/* <div className="border-b pb-3"> */}
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Equipment
                </label>
                <select
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  {equipmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              {/* </div> */}

              {/* Exercise Type Dropdown */}
              {/* <div className="border-b pb-3"> */}
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Exercise Type
                </label>
                <select
                  value={exerciseType}
                  onChange={(e) => setExerciseType(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  {exerciseTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              {/* </div> */}

              {/* Experience Level Dropdown */}
              {/* <div className="border-b pb-3"> */}
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Experience Level
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                >
                  {experienceLevelOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              {/* </div> */}
            </div>

            {/* Custom Message Section */}
            {/* <div className="mt-6 border-t pt-4">
              <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                Custom Notes
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Add any personal notes or modifications for this exercise..."
                className="w-full h-24 p-3 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div> */}
{/* 
            <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              Generate New Exercise
            </button> */}

            <button className="w-full mt-3 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition">
              Next Exercise
            </button>
          </div>

          {/* Similar Exercises */}
          {/* <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Similar Exercises
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                <p className="font-medium text-gray-900">Dumbbell Bench Press</p>
                <p className="text-xs text-gray-600">Chest, Shoulders</p>
              </button>

              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                <p className="font-medium text-gray-900">Incline Push-ups</p>
                <p className="text-xs text-gray-600">Easier variation</p>
              </button>

              <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                <p className="font-medium text-gray-900">Diamond Push-ups</p>
                <p className="text-xs text-gray-600">Triceps focused</p>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}