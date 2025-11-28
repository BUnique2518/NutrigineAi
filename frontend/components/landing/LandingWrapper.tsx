"use client";

import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Audience from "@/components/landing/Audience";
import ScrollIndicator from "./ScrollIndicator";

export default function LandingWrapper() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Audience />

      <ScrollIndicator />
    </>
  );
}