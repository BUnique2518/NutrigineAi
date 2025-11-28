"use client";

import dynamic from "next/dynamic";
import { ComponentProps, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

// dynamically import FloatingLines on client only (prevents SSR errors)
const FloatingLines = dynamic(() => import("./FloatingLines.jsx"), {
  ssr: false,
});



interface FloatingLinesProps extends ComponentProps<typeof FloatingLines> {
  enabledWaves: string[];
  lineCount: number[];
  lineDistance: number[];
  bendRadius: number;
  bendStrength: number;
  interactive: boolean;
  parallax: boolean;
}

export default function Hero() {
  // reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // simple mobile detection (only used to disable heavy background)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setPrefersReducedMotion(mq.matches);
    handle();
    mq.addEventListener?.("change", handle);
    // mobile detect
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      mq.removeEventListener?.("change", handle);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
  <div className="absolute inset-0 -z-10 h-full w-full pointer-events-auto overflow-hidden">
  <FloatingLines
    linesGradient={["#14B8A6", "#0EA5E9", "#60A5FA"]}
    enabledWaves={["top", "middle", "bottom"]}
    lineCount={[10, 15, 20]}
    lineDistance={[8, 6, 4]}
    topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
    middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
    bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1 }}
    bendRadius={5.0}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
    mouseDamping={0.12}
    parallaxStrength={0.35}
    animationSpeed={1}
    mixBlendMode="normal"
  />

  {/* FIXED: Allow mouse events to pass through */}
  <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/20 to-transparent" />
</div>



      {/* subtle fallback/overlay for mobile or reduced motion */}
      {(isMobile || prefersReducedMotion) && (
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50 to-sky-50" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.06),transparent_50%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-teal-200/50 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-sm font-medium text-teal-900">AI-Powered Nutrition & Fitness</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-white via-green-600 to-white bg-clip-text text-transparent">
            NutriGenie.ai
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Your Food & Fitness Companion
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your health journey with AI-powered meal planning, personalized workouts,
          and real-time progress tracking. All in one beautiful app.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" >Get Started</Button>
        </motion.div>
      </motion.div>

    </div>
  );
}