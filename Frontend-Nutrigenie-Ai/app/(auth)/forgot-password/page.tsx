"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We will replace this with a Server Action soon
    console.log("Password reset requested for:", email);
    setIsSubmitted(true); // Show the success message
  };

  return (
    // Main Content
    <div className="container mx-auto px-4 md:px-12 py-8 md:py-16">
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm max-w-md w-full">
          
          {isSubmitted ? (
            // --- SUCCESS STATE ---
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Check your email
              </h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to{" "}
                <span className="font-medium text-gray-900">{email}</span>.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Log In
                </Link>
              </Button>
            </div>
          ) : (
            // --- INITIAL STATE ---
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Forgot your password?
              </h2>
              <p className="text-gray-600 mb-8">
                No problem. Enter your email below and we'll send you a link to
                reset it.
              </p>

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

                {/* Send Reset Link Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Reset Link
                </Button>
              </form>

              {/* Back to Login Link */}
              <div className="text-center mt-6">
                <Link
                  href="/login"
                  className="text-sm text-blue-600 hover:underline font-medium inline-flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back to Log In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}