"use client";

import React, { useState } from "react";
import { Plus, X, ShoppingCart } from "lucide-react";

export default function MealPlannerUI() {
  const [ingredients, setIngredients] = useState([""]); // Start with one empty input
  const [customMessage, setCustomMessage] = useState("");
  const [showMealDetails, setShowMealDetails] = useState(false);

  // Sample ingredient suggestions
  const ingredientSuggestions = [
    "Chicken",
    "Rice",
    "Tomato",
    "Onion",
    "Garlic",
    "Ginger",
    "Paneer",
    "Spinach",
    "Potato",
    "Carrot",
    "Beans",
    "Mushroom",
  ];

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients.length === 0 ? [""] : newIngredients);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddSuggestion = (suggestion: string) => {
    const lastIndex = ingredients.length - 1;
    if (ingredients[lastIndex] === "") {
      handleIngredientChange(lastIndex, suggestion);
    } else {
      setIngredients([...ingredients, suggestion]);
    }
  };

  const handleGenerateMeal = () => {
    // Validate that at least one ingredient is entered
    const hasValidIngredient = ingredients.some((ingredient) => ingredient.trim() !== "");
    
    if (!hasValidIngredient) {
      alert("Please enter at least one ingredient");
      return;
    }

    // Show meal details
    setShowMealDetails(true);

    // Scroll to meal details section
    setTimeout(() => {
      const mealSection = document.getElementById("meal-details");
      if (mealSection) {
        mealSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Custom Meal Planner</h1>
        <button className="px-4 py-2 bg-black text-white rounded-xl shadow">
          Login
        </button>
      </header>

      {/* Input Section */}
      <section className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 gap-6">
        {/* Ingredients Input */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Your Ingredients</h2>
          <div className="space-y-3 mb-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {ingredients.length > 1 && (
                  <button
                    onClick={() => handleRemoveIngredient(index)}
                    className="px-3 py-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Ingredient Button */}
          <button
            onClick={handleAddIngredient}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition font-medium"
          >
            <Plus size={20} /> Add Ingredient
          </button>
        </div>

        {/* Ingredient Suggestions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Suggested Ingredients
          </h3>
          <div className="flex flex-wrap gap-2">
            {ingredientSuggestions.map((suggestion) => (
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
            <option>Filter by Taste</option>
            <option>Spicy</option>
            <option>Sweet</option>
            <option>Savoury</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Nutrition</option>
            <option>High Protein</option>
            <option>Low Carb</option>
            <option>Low Calorie</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Budget</option>
            <option>Under ₹100</option>
            <option>Under ₹200</option>
            <option>Under ₹300</option>
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
            placeholder="Add any special instructions or preferences for your meal..."
            className="w-full h-24 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Generate Meal Button */}
        <button
          onClick={handleGenerateMeal}
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          Generate Meal
        </button>
      </section>

      {/* Output Section - Only show when Generate Meal is clicked */}
      {showMealDetails && (
        <section id="meal-details" className="bg-white p-6 rounded-2xl shadow flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recommended Meal</h2>
            <button
              onClick={() => setShowMealDetails(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Hide Details
            </button>
          </div>

          {/* Overview Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Dish Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  Butter Chicken with Rice
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Description</p>
                <p className="text-gray-700 text-sm">
                  Creamy chicken curry served with basmati rice, perfect for your
                  high-protein needs.
                </p>
              </div>
            </div>
          </div>

          {/* Dish Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-xl bg-gray-50">
              <h3 className="font-semibold mb-3 text-gray-900">
                Required Extra Ingredients
              </h3>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex justify-between items-center">
                  <div className="flex justify-between flex-1">
                    <span>Butter</span>
                    <span className="text-gray-500">2 tbsp</span>
                  </div>
                  <button className="ml-3 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-1 text-xs">
                    <ShoppingCart size={14} /> Buy
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex justify-between flex-1">
                    <span>Cream</span>
                    <span className="text-gray-500">1/2 cup</span>
                  </div>
                  <button className="ml-3 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-1 text-xs">
                    <ShoppingCart size={14} /> Buy
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex justify-between flex-1">
                    <span>Spices Mix</span>
                    <span className="text-gray-500">1 tbsp</span>
                  </div>
                  <button className="ml-3 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-1 text-xs">
                    <ShoppingCart size={14} /> Buy
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-xl bg-gray-50">
              <h3 className="font-semibold mb-3 text-gray-900">
                Cooking Time & Servings
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Prep Time:</span>
                  <span className="font-medium">15 mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Cook Time:</span>
                  <span className="font-medium">30 mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Servings:</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Per Serving Nutrition Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Per Serving Nutritional Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-green-600">450</p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Protein</p>
                <p className="text-2xl font-bold text-blue-600">35</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-yellow-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Carbs</p>
                <p className="text-2xl font-bold text-yellow-600">42</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Fat</p>
                <p className="text-2xl font-bold text-orange-600">18</p>
                <p className="text-xs text-gray-500">g</p>
              </div>
            </div>
          </div>

          {/* Cost Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Estimated Cost
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                <p className="text-3xl font-bold text-purple-600">₹240</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-gray-600 mb-1">Cost per 100g</p>
                <p className="text-3xl font-bold text-purple-600">₹24</p>
              </div>
            </div>
          </div>

          {/* Method / Instructions */}
          <div className="p-4 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-3 text-gray-900">
              Method / Instructions
            </h3>
            <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
              <li>Heat butter in a pan and sauté onions until golden brown.</li>
              <li>Add ginger-garlic paste and cook for 2 minutes.</li>
              <li>Add marinated chicken and cook until 70% done.</li>
              <li>Add tomato sauce and spices, simmer for 10 minutes.</li>
              <li>Stir in cream and cook for another 5 minutes.</li>
              <li>Serve hot with basmati rice.</li>
            </ol>
          </div>
        </section>
      )}
    </div>
  );
}