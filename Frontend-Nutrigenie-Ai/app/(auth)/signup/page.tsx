"use client";

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, Utensils, BrainCircuit, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We will replace this with a Server Action soon
    console.log({ email, password, agreedToTerms });

    router.push("/onboarding");
  };

  return (
    // Main Content
    <div className="container mx-auto px-4 md:px-12 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Signup Form */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Begin your journey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="example.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter at least 8+ characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 accent-blue-600 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                By signing up, I agree with the{" "}
                <Link
                  href="/terms" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  Terms of Use & Privacy Policy
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              disabled={!agreedToTerms}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Register
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500 text-sm font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Login */}
               <div className="flex gap-4 justify-center">
                       <button
                type="button"
                className="w-14 h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center transition"
              >
                <Image
                  src="/images/Google.gif"
                  unoptimized
                  alt="Google login"
                  width={24} 
                  height={24} 
                 className="rounded-full" 
                />
              </button>

              <button
                type="button"
                className="w-14 h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center transition"
              >
                <Image
                  src="/images/facebook.gif"
                  alt="Facebook login"
                  unoptimized
                  width={100}
                  height={100}
                />
              </button>

              
              <button
                type="button"
                className="w-14 h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center transition"
              >
                <Image
                  src="/images/Github.gif"
                  alt="GitHub login"
                  width={100}
                  height={100}
                />
              </button>
            </div>
            {/* Login Link */}
            <p className="text-center text-gray-600 text-sm">
              Returning user?{" "}
              <Link
                href="/login" 
                className="text-blue-600 hover:underline font-medium"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
{/* Right Column - Benefits */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Come join us
          </h3>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>

          <div className="space-y-8">
            {/* Benefit 1: Personalized Meal Plans */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center shrink-0">
                <Utensils size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">
                  Personalized Meal Plans
                </h4>
                <p className="text-gray-600">
                  Get daily meal plans tailored to your goals, calories, and
                  dietary restrictions.
                </p>
              </div>
            </div>

            {/* Benefit 2: Smart Recipe AI */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
                <BrainCircuit size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg mb-1">
                  Smart Recipe AI
                </h4>
                <p className="text-gray-600">
                  Find delicious recipes based on the ingredients you
                  already have at home.
                </p>
              </div>
            </div>

            {/* Benefit 3: Custom Workouts */}
            <div className="flex gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center shrink-0">
                  <Dumbbell size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    Custom Workout Routines
                  </h4>
                  <p className="text-gray-600">
                    Receive exercise plans tailored to your fitness level,
                    goals, and available equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}