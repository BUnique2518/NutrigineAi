"use client";

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';


export default function Audience() {
  const personas = [
    {
      title: "Busy Professionals",
      description: "You have goals but no time for complicated meal prep or gym sessions. NutriGenie adapts to your schedule with quick meals and efficient workouts.",
      emoji: "💼",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Fitness Enthusiasts",
      description: "You're serious about gains and need precise tracking. Get detailed macros, progressive overload plans, and performance analytics.",
      emoji: "🏋️",
      color: "from-cyan-500 to-sky-500"
    },
    {
      title: "Weight Loss Journeys",
      description: "Sustainable weight loss through balanced nutrition and exercise. No extreme diets, just smart science-backed guidance.",
      emoji: "⚖️",
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Health Beginners",
      description: "New to fitness and nutrition? We guide you every step with simple explanations, starter-friendly workouts, and easy meal ideas.",
      emoji: "🌱",
      color: "from-green-500 to-emerald-500"
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
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Built For You
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you're just starting or already on your journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="relative group">
              <div className={`absolute inset-0 bg-linear-to-br ${persona.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-6xl mb-4">{persona.emoji}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{persona.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{persona.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
}