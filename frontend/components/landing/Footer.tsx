'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

export default function Footer() {
  const links = {
    Product: ['Features', 'FAQ', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (

    <SectionWrapper className="bg-linear-to-br from-teal-50 via-cyan-50 to-sky-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
      <footer className="bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="border-t border-gray-200 pt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <Image src="/images/nutrigenie.png" alt="NutriGenie Logo" width={64} height={64} className="w-16 h-16 mb-2" />
                  <h3 className="text-2xl font-bold">
                    <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      NutriGenie.ai
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Nutrigenie — Because Your Body Deserves Its Own AI
                </p>
                <div className="flex gap-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-linear-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-800 mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item}>
                        <motion.a
                          href="#"
                          whileHover={{ x: 3 }}
                          className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                        >
                          {item}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2025 NutriGenie.ai. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                Made with <span className="text-red-500">❤️</span> for healthier lives
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}