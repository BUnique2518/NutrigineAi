"use client";

import React, { useState } from "react";
import { Plus, X, Download, AlertCircle, Lightbulb, Target, ChevronDown, ChevronUp } from "lucide-react";

type ExpandedSections = {
  overview: boolean;
  muscleGroups: boolean;
  instructions: boolean;
  mistakes: boolean;
  breathing: boolean;
  tips: boolean;
};

export default function ExercisePlannerUI() {
  const [goals, setGoals] = useState([""]); // Start with one empty input
  const [customMessage, setCustomMessage] = useState("");
  const [showExerciseDetails, setShowExerciseDetails] = useState(false);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    overview: true,
    muscleGroups: true,
    instructions: true,
    mistakes: true,
    breathing: false,
    tips: false,
  });

  // Sample fitness goals suggestions
  const goalSuggestions = [
    "Weight Loss",
    "Muscle Gain",
    "Cardio Endurance",
    "Flexibility",
    "Core Strength",
    "Stress Relief",
    "Athletic Performance",
    "Mobility",
    "Balance",
    "Stamina",
    "Toning",
    "Injury Recovery",
  ];

  const handleAddGoal = () => {
    setGoals([...goals, ""]);
  };

  const handleRemoveGoal = (index: number) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals.length === 0 ? [""] : newGoals);
  };

  const handleGoalChange = (index: number, value: string) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const handleAddSuggestion = (suggestion: string) => {
    const lastIndex = goals.length - 1;
    if (goals[lastIndex] === "") {
      handleGoalChange(lastIndex, suggestion);
    } else {
      setGoals([...goals, suggestion]);
    }
  };

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleGenerateWorkout = () => {
    // Validate that at least one goal is entered
    const hasValidGoal = goals.some((goal) => goal.trim() !== "");
    
    if (!hasValidGoal) {
      alert("Please enter at least one fitness goal");
      return;
    }

    // Show exercise details
    setShowExerciseDetails(true);

    // Scroll to exercise details section
    setTimeout(() => {
      const exerciseSection = document.getElementById("exercise-details");
      if (exerciseSection) {
        exerciseSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Custom Exercise Planner</h1>
        <button className="px-4 py-2 bg-black text-white rounded-xl shadow">
          Login
        </button>
      </header>

      {/* Input Section */}
      <section className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 gap-6">
        {/* Goals Input */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Your Fitness Goals</h2>
          <div className="space-y-3 mb-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => handleGoalChange(index, e.target.value)}
                  placeholder={`Goal ${index + 1}`}
                  className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {goals.length > 1 && (
                  <button
                    onClick={() => handleRemoveGoal(index)}
                    className="px-3 py-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Goal Button */}
          <button
            onClick={handleAddGoal}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition font-medium"
          >
            <Plus size={20} /> Add Goal
          </button>
        </div>

        {/* Goal Suggestions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Suggested Fitness Goals
          </h3>
          <div className="flex flex-wrap gap-2">
            {goalSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleAddSuggestion(suggestion)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition text-sm"
              >
                + {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Experience</option>
            <option>Beginner</option>
            <option>Beginner+</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Professional</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Intensity</option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
            <option>Very High</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Equipment</option>
            <option>No Equipment</option>
            <option>Dumbbells</option>
            <option>Resistance Bands</option>
            <option>Gym Equipment</option>
          </select>
        </div>

        {/* Custom Message Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Custom Instructions (Optional)
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Add any special instructions, injuries to avoid, or preferences for your workout..."
            className="w-full h-24 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Generate Workout Button */}
        <button
          onClick={handleGenerateWorkout}
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          Generate Workout Plan
        </button>
      </section>

      {/* Output Section - Only show when Generate Workout Plan is clicked */}
      {showExerciseDetails && (
        <section id="exercise-details" className="bg-white p-6 rounded-2xl shadow flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Exercise Details</h2>
            <button
              onClick={() => setShowExerciseDetails(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Hide Details
            </button>
          </div>

          {/* Overview Section */}
          <div className="border rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <button
              onClick={() => toggleSection("overview")}
              className="w-full p-4 flex items-center justify-between hover:bg-blue-100/50 transition rounded-t-xl"
            >
              <h3 className="font-semibold text-lg text-gray-900">Overview</h3>
              {expandedSections.overview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.overview && (
              <div className="p-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Exercise Name</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Push-ups
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="text-gray-700 text-sm">
                      A classic upper body exercise that builds chest, shoulder, and
                      tricep strength using only your body weight.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Target Muscle Groups */}
          <div className="border rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
            <button
              onClick={() => toggleSection("muscleGroups")}
              className="w-full p-4 flex items-center justify-between hover:bg-green-100/50 transition rounded-t-xl"
            >
              <div className="flex items-center gap-2">
                <Target className="text-green-600" size={20} />
                <h3 className="font-semibold text-lg text-gray-900">Target Muscle Groups</h3>
              </div>
              {expandedSections.muscleGroups ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.muscleGroups && (
              <div className="p-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Primary</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Chest (Pectoralis Major)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Shoulders (Anterior Deltoids)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Triceps
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-green-200">
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
            )}
          </div>

          {/* Step-by-Step Instructions */}
          <div className="border rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
            <button
              onClick={() => toggleSection("instructions")}
              className="w-full p-4 flex items-center justify-between hover:bg-blue-100/50 transition rounded-t-xl"
            >
              <h3 className="font-semibold text-lg text-gray-900">Step-by-Step Instructions</h3>
              {expandedSections.instructions ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.instructions && (
              <div className="p-4 border-t space-y-4">
                <div className="p-4 border-l-4 border-blue-600 bg-white rounded">
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

                <div className="p-4 border-l-4 border-blue-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Lower Your Body
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Lower your body by bending your elbows at approximately 45
                    degrees to your body. Go down until your chest is just above
                    the ground. Keep your body in a straight line throughout.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3. Push Back Up
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Push through your palms and return to the starting position.
                    Your elbows should extend fully but not lock out. Exhale as
                    you push up.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-600 bg-white rounded">
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
            )}
          </div>

          {/* Common Mistakes */}
          <div className="border rounded-xl bg-gradient-to-r from-red-50 to-pink-50">
            <button
              onClick={() => toggleSection("mistakes")}
              className="w-full p-4 flex items-center justify-between hover:bg-red-100/50 transition rounded-t-xl"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="text-red-600" size={20} />
                <h3 className="font-semibold text-lg text-gray-900">Common Mistakes to Avoid</h3>
              </div>
              {expandedSections.mistakes ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.mistakes && (
              <div className="p-4 border-t space-y-3">
                <div className="p-4 border-l-4 border-red-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ❌ Sagging Hips
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Keeping your hips too high or allowing them to sag reduces
                    effectiveness and can strain your lower back. Maintain a
                    straight line from head to heels.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ❌ Flaring Elbows Out
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Elbows should be at 45 degrees, not perpendicular to your
                    body. This protects your shoulders and targets chest muscles
                    more effectively.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ❌ Rushing Reps
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Moving too quickly reduces muscle engagement. Take 2-3 seconds
                    to lower and 1-2 seconds to push up for better results.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ❌ Holding Your Breath
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Always maintain steady breathing. Holding your breath can
                    increase blood pressure and reduce oxygen to muscles.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-600 bg-white rounded">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ❌ Incomplete Range of Motion
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Go down until your chest nearly touches the ground for full
                    muscle engagement. Partial reps reduce effectiveness.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Breathing Technique */}
          <div className="border rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
            <button
              onClick={() => toggleSection("breathing")}
              className="w-full p-4 flex items-center justify-between hover:bg-emerald-100/50 transition rounded-t-xl"
            >
              <h3 className="font-semibold text-lg text-gray-900">🫁 Breathing Technique</h3>
              {expandedSections.breathing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.breathing && (
              <div className="p-4 border-t space-y-4">
                <div className="p-4 bg-white rounded-lg border border-emerald-200">
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

                <div className="p-4 bg-white rounded-lg border border-emerald-200">
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

                <div className="p-4 bg-white rounded-lg border border-emerald-200">
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
            )}
          </div>

          {/* Pro Tips & Variations */}
          <div className="border rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50">
            <button
              onClick={() => toggleSection("tips")}
              className="w-full p-4 flex items-center justify-between hover:bg-yellow-100/50 transition rounded-t-xl"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="text-yellow-600" size={20} />
                <h3 className="font-semibold text-lg text-gray-900">Pro Tips & Variations</h3>
              </div>
              {expandedSections.tips ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.tips && (
              <div className="p-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-yellow-200">
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

                <div className="p-4 bg-white rounded-lg border border-yellow-200">
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
            )}
          </div>
        </section>
      )}
    </div>
  );
}