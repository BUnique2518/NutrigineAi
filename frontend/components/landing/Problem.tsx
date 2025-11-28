'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Card from './Card';

export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Scattered Information",
      description: "Diet plans in one app, workout routines in another, progress tracking somewhere else. Too many apps, too much hassle."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Time-Consuming Planning",
      description: "Hours spent planning meals, counting calories, and creating workout schedules manually every week."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "No Personalization",
      description: "Generic plans that don't account for your unique goals, dietary restrictions, or fitness level."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Difficult Progress Tracking",
      description: "Hard to see real results when your nutrition and fitness data live in different places."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <SectionWrapper className="bg-linear-to-br from-teal-50 via-cyan-50 to-sky-50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            The Problem
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Managing your health shouldn't feel like a full-time job
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {problems.map((problem, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-16 h-16 bg-linear-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}