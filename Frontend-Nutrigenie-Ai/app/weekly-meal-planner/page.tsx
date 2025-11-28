"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit2, ChevronRight, Calendar, Clock, Flame, CheckCircle, UtensilsCrossed } from "lucide-react";

type MealItem = {
  id: string;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  calories: string;
  prepTime?: string;
  servings?: string;
  note?: string;
  difficulty?: "Easy" | "Moderate" | "Hard";
  cuisine?: string;
};

const sampleWeek: Record<string, MealItem[]> = {
  Monday: [
    { 
      id: "oatmeal-berries", 
      name: "Oatmeal with Berries", 
      type: "Breakfast",
      calories: "350 cal", 
      prepTime: "10 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "Continental"
    },
    { 
      id: "grilled-chicken-salad", 
      name: "Grilled Chicken Salad", 
      type: "Lunch",
      calories: "450 cal", 
      prepTime: "20 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "Mediterranean"
    },
    { 
      id: "pasta-marinara", 
      name: "Pasta Marinara", 
      type: "Dinner",
      calories: "550 cal", 
      prepTime: "25 min", 
      servings: "2",
      difficulty: "Moderate",
      cuisine: "Italian"
    },
  ],
  Tuesday: [
    { 
      id: "protein-smoothie", 
      name: "Protein Smoothie Bowl", 
      type: "Breakfast",
      calories: "380 cal", 
      prepTime: "8 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "American"
    },
    { 
      id: "tandoori-chicken", 
      name: "Tandoori Chicken Rice", 
      type: "Lunch",
      calories: "520 cal", 
      prepTime: "30 min", 
      servings: "1",
      difficulty: "Moderate",
      cuisine: "Indian"
    },
    { 
      id: "grilled-salmon", 
      name: "Grilled Salmon with Veggies", 
      type: "Dinner",
      calories: "580 cal", 
      prepTime: "35 min", 
      servings: "1",
      difficulty: "Moderate",
      cuisine: "Nordic"
    },
  ],
  Wednesday: [
    { 
      id: "pancakes", 
      name: "Whole Wheat Pancakes", 
      type: "Breakfast",
      calories: "420 cal", 
      prepTime: "15 min", 
      servings: "2",
      difficulty: "Moderate",
      cuisine: "American"
    },
    { 
      id: "buddha-bowl", 
      name: "Buddha Bowl", 
      type: "Lunch",
      calories: "480 cal", 
      prepTime: "20 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "Fusion"
    },
    { 
      id: "stir-fry", 
      name: "Vegetable Stir Fry", 
      type: "Dinner",
      calories: "420 cal", 
      prepTime: "25 min", 
      servings: "2",
      difficulty: "Easy",
      cuisine: "Asian"
    },
  ],
  Thursday: [
    { 
      id: "eggs-toast", 
      name: "Scrambled Eggs & Toast", 
      type: "Breakfast",
      calories: "340 cal", 
      prepTime: "10 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "Continental"
    },
    { 
      id: "taco-bowl", 
      name: "Taco Bowl", 
      type: "Lunch",
      calories: "510 cal", 
      prepTime: "25 min", 
      servings: "1",
      difficulty: "Moderate",
      cuisine: "Mexican"
    },
    { 
      id: "butter-chicken", 
      name: "Butter Chicken", 
      type: "Dinner",
      calories: "620 cal", 
      prepTime: "40 min", 
      servings: "2",
      difficulty: "Hard",
      cuisine: "Indian"
    },
  ],
  Friday: [
    { 
      id: "yogurt-granola", 
      name: "Greek Yogurt & Granola", 
      type: "Breakfast",
      calories: "300 cal", 
      prepTime: "5 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "Continental"
    },
    { 
      id: "sushi-rolls", 
      name: "Sushi Rolls", 
      type: "Lunch",
      calories: "480 cal", 
      prepTime: "30 min", 
      servings: "1",
      difficulty: "Hard",
      cuisine: "Japanese"
    },
    { 
      id: "steak-fries", 
      name: "Grilled Steak & Sweet Potato Fries", 
      type: "Dinner",
      calories: "650 cal", 
      prepTime: "35 min", 
      servings: "1",
      difficulty: "Moderate",
      cuisine: "American"
    },
  ],
  Saturday: [
    { 
      id: "avocado-toast", 
      name: "Avocado Toast", 
      type: "Breakfast",
      calories: "360 cal", 
      prepTime: "10 min", 
      servings: "1",
      difficulty: "Easy",
      cuisine: "American"
    },
    { 
      id: "biryani", 
      name: "Biryani", 
      type: "Lunch",
      calories: "580 cal", 
      prepTime: "45 min", 
      servings: "2",
      difficulty: "Hard",
      cuisine: "Indian"
    },
    { 
      id: "pasta-carbonara", 
      name: "Pasta Carbonara", 
      type: "Dinner",
      calories: "610 cal", 
      prepTime: "20 min", 
      servings: "2",
      difficulty: "Moderate",
      cuisine: "Italian"
    },
  ],
  Sunday: [
    { 
      id: "french-toast", 
      name: "French Toast", 
      type: "Breakfast",
      calories: "400 cal", 
      prepTime: "15 min", 
      servings: "2",
      difficulty: "Easy",
      cuisine: "American"
    },
    { 
      id: "pizza", 
      name: "Homemade Pizza", 
      type: "Lunch",
      calories: "520 cal", 
      prepTime: "40 min", 
      servings: "2",
      difficulty: "Moderate",
      cuisine: "Italian"
    },
    { 
      id: "roasted-veggies", 
      name: "Roasted Vegetables & Tofu", 
      type: "Dinner",
      calories: "420 cal", 
      prepTime: "30 min", 
      servings: "2",
      difficulty: "Easy",
      cuisine: "Vegan"
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

const getMealTypeColor = (type: string) => {
  switch (type) {
    case "Breakfast":
      return "bg-yellow-100 text-yellow-700";
    case "Lunch":
      return "bg-blue-100 text-blue-700";
    case "Dinner":
      return "bg-purple-100 text-purple-700";
    case "Snack":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
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
    Monday: "🥗",
    Tuesday: "🍛",
    Wednesday: "🥘",
    Thursday: "🍖",
    Friday: "🍱",
    Saturday: "🍕",
    Sunday: "🥞",
  };
  return icons[day] || "🍽️";
};

export default function WeeklyMealPlannerPage() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [checkedMeals, setCheckedMeals] = useState<Set<string>>(new Set());

  const openMeal = (meal: MealItem) => {
    router.push(`/meal?id=${encodeURIComponent(meal.id)}&name=${encodeURIComponent(meal.name)}`);
  };

  const toggleMealCheck = (id: string) => {
    const newChecked = new Set(checkedMeals);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedMeals(newChecked);
  };

  const totalCalories = Object.values(sampleWeek).flat().reduce((sum, meal) => {
    const cals = parseInt(meal.calories);
    return sum + cals;
  }, 0);

  const totalMeals = Object.values(sampleWeek).flat().length;
  const completedToday = checkedMeals.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10 font-sans">
      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">YOUR NUTRITION PLAN</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              Weekly Meal Planner
            </h1>
            <p className="text-gray-600 text-lg">Eat healthy, stay energized</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <UtensilsCrossed className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Meals</p>
                <p className="text-3xl font-bold text-gray-900">{totalMeals}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-orange-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Flame className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Calories</p>
                <p className="text-3xl font-bold text-gray-900">{totalCalories}</p>
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

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <CheckCircle className="text-blue-600" size={24} />
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Menu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(sampleWeek).map(([day, meals]) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`group text-left p-6 rounded-2xl border-2 transition transform hover:scale-102 hover:shadow-lg ${
                  selectedDay === day
                    ? `${getDayBorderColor(day)} ring-2 ring-offset-2 ring-green-400`
                    : "border-gray-200 hover:border-gray-300"
                } bg-white`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-3xl mb-1">{getDayIcon(day)}</p>
                    <h3 className="text-xl font-bold text-gray-900">{day}</h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold group-hover:bg-green-100 group-hover:text-green-700 transition">
                    {meals.length}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {meals.slice(0, 2).map((meal) => (
                    <div key={meal.id} className="text-sm">
                      <p className="font-semibold text-gray-800 group-hover:text-green-600 transition">
                        {meal.name}
                      </p>
                      <p className="text-xs text-gray-500">{meal.calories}</p>
                    </div>
                  ))}
                  {meals.length > 2 && (
                    <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                      +{meals.length - 2} more meal{meals.length - 2 > 1 ? "s" : ""}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-medium">
                    {meals.reduce((sum, meal) => sum + parseInt(meal.calories), 0)} cal • {meals.length} meals
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
                    {sampleWeek[selectedDay].length} meals • {sampleWeek[selectedDay].reduce((sum, meal) => sum + parseInt(meal.calories), 0)} cal
                  </p>
                </div>
              </div>
            </div>

            {/* Meals List */}
            <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
              {sampleWeek[selectedDay].map((meal, idx) => (
                <div
                  key={meal.id}
                  className="group p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition cursor-pointer"
                  onClick={() => openMeal(meal)}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMealCheck(meal.id);
                      }}
                      className="mt-1"
                    >
                      <div className={`w-6 h-6 rounded-full border-2 transition ${
                        checkedMeals.has(meal.id)
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 hover:border-green-500"
                      }`}>
                        {checkedMeals.has(meal.id) && (
                          <CheckCircle size={24} className="text-white" />
                        )}
                      </div>
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-bold text-sm ${checkedMeals.has(meal.id) ? "line-through text-gray-400" : "text-gray-900"}`}>
                          {meal.name}
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{meal.cuisine}</p>
                      <div className="flex flex-wrap gap-1">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getMealTypeColor(meal.type)}`}>
                          {meal.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold border ${getDifficultyBadge(meal.difficulty).bg} ${getDifficultyBadge(meal.difficulty).text} ${getDifficultyBadge(meal.difficulty).border} border`}>
                          {meal.difficulty}
                        </span>
                      </div>
                      {meal.prepTime && (
                        <p className="text-xs text-gray-600 mt-2">
                          <span className="font-semibold">⏱️ {meal.prepTime}</span> • <span className="font-semibold">🍽️ {meal.servings} serving{meal.servings !== "1" ? "s" : ""}</span>
                        </p>
                      )}
                      <p className="text-xs text-orange-600 font-semibold mt-1">🔥 {meal.calories}</p>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-green-600 transition mt-1" size={18} />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 space-y-3">
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2">
                <Edit2 size={18} />
                Generate Meal Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Motivational Section */}
      <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl mb-3">🥗</p>
            <h4 className="text-lg font-bold mb-2">Balanced Nutrition</h4>
            <p className="text-green-100">Follow your meal plan to maintain balanced nutrition and reach your health goals.</p>
          </div>
          <div>
            <p className="text-4xl mb-3">📊</p>
            <h4 className="text-lg font-bold mb-2">Track Calories</h4>
            <p className="text-green-100">Monitor your daily calorie intake and make informed food choices.</p>
          </div>
          <div>
            <p className="text-4xl mb-3">🍽️</p>
            <h4 className="text-lg font-bold mb-2">Enjoy Variety</h4>
            <p className="text-green-100">Discover diverse cuisines and meal options throughout the week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}