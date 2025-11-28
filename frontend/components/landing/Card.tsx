"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  delay?: number;
}

export default function Card({ children, className = '', glowOnHover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={glowOnHover ? { y: -8, scale: 1.02 } : {}}
      className={`
        bg-white/80 backdrop-blur-xl rounded-3xl p-8
        border border-white/40 shadow-xl
        ${glowOnHover ? 'hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-300/50' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}