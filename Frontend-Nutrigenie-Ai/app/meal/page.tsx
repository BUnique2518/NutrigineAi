"use client";

import React, { useState } from "react";
import { Play, AlertCircle, Lightbulb, UtensilsCrossed, Clock, Flame } from "lucide-react";

export default function MealDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState("Moderate");
  const [cuisineType, setCuisineType] = useState("Indian");
  const [mealType, setMealType] = useState("Lunch");
  const [dietaryPreference, setDietaryPreference] = useState("Non-Vegetarian");
  const [customMessage, setCustomMessage] = useState("");

  const difficultyOptions = ["Easy", "Moderate", "Hard"];
  const cuisineTypeOptions = [
    "Indian",
    "Italian",
    "Mexican",
    "Asian",
    "Mediterranean",
    "American",
    "Continental",
  ];
  const mealTypeOptions = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const dietaryPreferenceOptions = [
    "Vegetarian",
    "Non-Vegetarian",
    "Vegan",
    "Gluten-Free",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Meal Details</h1>
          <p className="text-gray-600 mt-1">Complete guide to prepare this delicious meal</p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-xl shadow">
          Back to Planner
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Video & Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Meal Name & Description */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Butter Chicken with Rice</h2>
            <p className="text-gray-600 text-lg mb-4">
              Creamy and aromatic butter chicken served with fluffy basmati rice. A classic Indian dish that's perfect for lunch or dinner with a rich tomato-based gravy.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Indian
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Lunch/Dinner
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                Moderate
              </span>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cooking Video
            </h3>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 w-20 h-20 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition"
              >
                <Play size={32} fill="white" />
              </button>
              <p className="absolute bottom-4 left-4 text-white text-sm">
                Duration: 8:30
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
                  Prep Time
                </p>
                <p className="text-2xl font-bold text-blue-600">15</p>
                <p className="text-xs text-gray-500">minutes</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Cook Time</p>
                <p className="text-2xl font-bold text-green-600">30</p>
                <p className="text-xs text-gray-500">minutes</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-600 font-medium mb-1">
                  Servings
                </p>
                <p className="text-2xl font-bold text-purple-600">2</p>
                <p className="text-xs text-gray-500">servings</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-orange-600">520</p>
                <p className="text-xs text-gray-500">per serving</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="text-green-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Ingredients
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">For Chicken</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex justify-between">
                    <span>• Chicken breast (cubed)</span>
                    <span className="text-gray-500">500g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Yogurt</span>
                    <span className="text-gray-500">1/2 cup</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Ginger-garlic paste</span>
                    <span className="text-gray-500">2 tbsp</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Red chili powder</span>
                    <span className="text-gray-500">1 tsp</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Salt & pepper</span>
                    <span className="text-gray-500">To taste</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-3">For Gravy</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex justify-between">
                    <span>• Butter</span>
                    <span className="text-gray-500">3 tbsp</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Onions (chopped)</span>
                    <span className="text-gray-500">2 medium</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Tomato sauce</span>
                    <span className="text-gray-500">1 cup</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Heavy cream</span>
                    <span className="text-gray-500">1/2 cup</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Kasuri methi</span>
                    <span className="text-gray-500">1 tsp</span>
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
              <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  1. Marinate the Chicken
                </h4>
                <p className="text-gray-700 text-sm">
                  Mix chicken with yogurt, ginger-garlic paste, chili powder, and salt. Let it marinate for at least 30 minutes in the refrigerator.
                </p>
              </div>

              <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  2. Cook the Chicken
                </h4>
                <p className="text-gray-700 text-sm">
                  Heat butter in a pan and cook the marinated chicken on high heat until it's lightly charred on the outside and cooked 70% through.
                </p>
              </div>

              <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  3. Prepare the Gravy Base
                </h4>
                <p className="text-gray-700 text-sm">
                  In the same pan, add butter and sauté chopped onions until golden brown. Add ginger-garlic paste and cook for 1 minute.
                </p>
              </div>

              <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  4. Add Tomato Sauce
                </h4>
                <p className="text-gray-700 text-sm">
                  Pour in tomato sauce and simmer for 5-7 minutes, stirring occasionally. The oil should start separating from the tomato mixture.
                </p>
              </div>

              <div className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  5. Combine & Finish
                </h4>
                <p className="text-gray-700 text-sm">
                  Add the cooked chicken back to the pan, stir in heavy cream, and sprinkle kasuri methi. Simmer for 3-5 minutes until well combined.
                </p>
              </div>
            </div>
          </div>

          {/* Nutritional Information */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-red-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Nutritional Information (Per Serving)
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-red-600">520</p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Protein</p>
                <p className="text-2xl font-bold text-blue-600">45</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Carbs</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Fat</p>
                <p className="text-2xl font-bold text-orange-600">32</p>
                <p className="text-xs text-gray-500">g</p>
              </div>
            </div>
          </div>

          {/* Tips & Variations */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Chef Tips & Variations
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  👨‍🍳 Pro Tips
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Don't skip the marination step for tender chicken</li>
                  <li>Use fresh cream for best taste</li>
                  <li>Add cream at the end to avoid curdling</li>
                  <li>Kasuri methi adds authentic flavor</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🔄 Variations
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>Use paneer for vegetarian version</li>
                  <li>Add mushrooms for extra texture</li>
                  <li>Try with cashew cream for richness</li>
                  <li>Reduce cream for lighter version</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pairing Suggestions */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Perfect Pairings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">🍚 Side Dishes</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Basmati rice or jeera rice</li>
                  <li>• Naan or roti</li>
                  <li>• Saffron rice</li>
                  <li>• Garlic bread</li>
                </ul>
              </div>

              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-gray-900 mb-2">🥗 Accompaniments</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Fresh green salad</li>
                  <li>• Cucumber raita</li>
                  <li>• Pickle or chutney</li>
                  <li>• Lemon wedges</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Storage Tips */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Storage & Reheating Tips
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  ❄️ Refrigeration
                </h4>
                <p className="text-gray-700 text-sm">
                  Store in an airtight container for up to 3 days. Let it cool to room temperature before refrigerating.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  🧊 Freezing
                </h4>
                <p className="text-gray-700 text-sm">
                  Can be frozen for up to 1 month. Thaw overnight in the refrigerator before reheating.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">
                  🔥 Reheating
                </h4>
                <p className="text-gray-700 text-sm">
                  Reheat gently on low to medium heat, stirring occasionally. Add a splash of water if it's too thick.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Meal Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow sticky top-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Meal Info
            </h3>
            <div className="space-y-4">
              {/* Difficulty Dropdown */}
              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled
                >
                  {difficultyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cuisine Type Dropdown */}
              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Cuisine
                </label>
                <select
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled
                >
                  {cuisineTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Meal Type Dropdown */}
              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Meal Type
                </label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled
                >
                  {mealTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dietary Preference Dropdown */}
              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">
                  Dietary Type
                </label>
                <select
                  value={dietaryPreference}
                  onChange={(e) => setDietaryPreference(e.target.value)}
                  className="w-full p-2 border rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled
                >
                  {dietaryPreferenceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition">
              Next Meal
            </button>
          </div>

          {/* Cost Summary Card */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Cost Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Ingredients</span>
                <span className="font-semibold text-gray-900">₹240</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Per Serving</span>
                <span className="font-semibold text-gray-900">₹120</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-orange-600">₹240</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium text-sm">
                🛒 Add to Shopping List
              </button>
              <button className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-medium text-sm">
                ⭐ Save Recipe
              </button>
              <button className="w-full py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition font-medium text-sm">
                👥 Share Meal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}