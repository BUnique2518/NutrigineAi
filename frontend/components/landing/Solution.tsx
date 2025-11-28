"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CardSwap, { Card } from "../CardSwap";

export default function Solution() {
  return (
    <SectionWrapper className="bg-linear-to-br from-teal-50 via-cyan-50 to-sky-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT BLOCK */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                The Solution
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              One intelligent platform that brings everything together
            </p>
          </motion.div>

          {/* CARD SWAP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div style={{ height: 600, position: "relative", width: "100%", maxWidth: 720 }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
                width="100%"
                height={600}
              >

               <Card>
  <div className="p-8 h-full flex flex-col justify-center items-center bg-linear-to-br from-teal-100 via-cyan-100 to-sky-100 rounded-2xl">

    {/* 🔥 NEW AI ANIMATED ICON */}
    <div className="w-48 h-48 mb-6 rounded-lg shadow-xl bg-white/70 flex items-center justify-center">
      <svg width="110" height="110" viewBox="0 0 200 200" className="ai-anim">
        <defs>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="200" y2="200">
            <stop stopColor="#14B8A6" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        {/* Outer pulsing ring */}
        <circle cx="100" cy="100" r="70" stroke="url(#aiGrad)" strokeWidth="6" fill="none" className="ai-ring" />

        {/* AI Chip Core */}
        <rect x="70" y="70" width="60" height="60" rx="12" fill="url(#aiGrad)" className="ai-core" />

        {/* CPU circuit lines */}
        <line x1="100" y1="20" x2="100" y2="60" stroke="#14B8A6" strokeWidth="6" className="ai-line" />
        <line x1="100" y1="140" x2="100" y2="180" stroke="#0EA5E9" strokeWidth="6" className="ai-line-delayed" />
        <line x1="20" y1="100" x2="60" y2="100" stroke="#14B8A6" strokeWidth="6" className="ai-line" />
        <line x1="140" y1="100" x2="180" y2="100" stroke="#0EA5E9" strokeWidth="6" className="ai-line-delayed" />
      </svg>
    </div>

    <h3 className="text-2xl font-semibold mb-2">AI-Powered Intelligence</h3>
    <p className="text-center text-gray-600">
      Advanced AI analyzes your goals, preferences, and progress to create personalized meal plans 
      and workout routines that evolve with you.
    </p>
  </div>
</Card>


                {/* CARD 2 — COMPLETE INTEGRATION */}
                <Card>
                  <div className="p-8 h-full flex flex-col justify-center items-center bg-linear-to-br from-cyan-100 via-sky-100 to-white rounded-2xl">

                    {/* ANIMATED INTEGRATION ICON */}
                    <div className="w-48 h-48 mb-6 rounded-lg shadow-xl bg-white/70 flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 256 256">
                        <defs>
                          <linearGradient id="grad2" x1="0" y1="0" x2="256" y2="256">
                            <stop stopColor="#0EA5E9" />
                            <stop offset="1" stopColor="#38BDF8" />
                          </linearGradient>
                        </defs>

                        <circle cx="128" cy="128" r="90" fill="url(#grad2)" />

                        <rect className="slide-anim" x="88" y="60" width="80" height="20" rx="6" fill="white" opacity="0.9" />
                        <rect className="slide-anim-delay" x="88" y="118" width="80" height="20" rx="6" fill="white" opacity="0.9" />
                        <rect className="slide-anim-delay2" x="88" y="176" width="80" height="20" rx="6" fill="white" opacity="0.9" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2">Complete Integration</h3>
                    <p className="text-center text-gray-600">
                      Nutrition tracking, fitness planning, and progress monitoring work together seamlessly. Your food choices inform your workout intensity, and vice versa.
                    </p>
                  </div>
                </Card>

                {/* CARD 3 — REAL TIME INSIGHTS */}
                <Card>
                  <div className="p-8 h-full flex flex-col justify-center items-center bg-linear-to-br from-sky-100 via-blue-50 to-white rounded-2xl">

                    {/* ANIMATED ANALYTICS ICON */}
                    <div className="w-48 h-48 mb-6 rounded-lg shadow-xl bg-white/70 flex items-center justify-center">
                      <svg width="110" height="110" viewBox="0 0 256 256">
                        <defs>
                          <linearGradient id="grad3" x1="0" y1="0" x2="256" y2="256">
                            <stop stopColor="#38BDF8" />
                            <stop offset="1" stopColor="#0284C7" />
                          </linearGradient>
                        </defs>

                        <rect width="256" height="256" rx="40" fill="url(#grad3)" />

                        <path
                          d="M70 150l35-40 30 35 40-55"
                          stroke="white"
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="line-draw"
                        />

                        <circle cx="70" cy="150" r="8" fill="white" />
                        <circle cx="105" cy="110" r="8" fill="white" />
                        <circle cx="135" cy="145" r="8" fill="white" />
                        <circle cx="175" cy="90" r="8" fill="white" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2">Real-Time Insights</h3>
                    <p className="text-center text-gray-600">
                      See exactly how your daily choices impact your long-term goals with comprehensive analytics and beautiful visualizations.
                    </p>
                  </div>
                </Card>

              </CardSwap>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}