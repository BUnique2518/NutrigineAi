'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';


export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us About You",
      description: "Share your goals, dietary preferences, fitness level, and any restrictions. Takes less than 2 minutes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "AI Creates Your Plan",
      description: "Our AI analyzes your profile and generates a personalized nutrition and fitness plan optimized for your success.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Follow & Track Daily",
      description: "Get daily meal suggestions, workout routines, and track everything in one place. Simple, intuitive, effective.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Watch Your Progress",
      description: "Track your transformation with detailed analytics, progress photos, and achievement milestones.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    
    <SectionWrapper className="bg-linear-to-br from-teal-50 via-cyan-50 to-sky-50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get started in minutes and see results in weeks
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-teal-500 via-cyan-500 to-sky-500 transform -translate-x-1/2 hidden lg:block" />

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-teal-200/50 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                    <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              </div>

              <div className="relative z-10 shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-linear-to-br from-teal-500 via-cyan-500 to-sky-500 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/50"
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}