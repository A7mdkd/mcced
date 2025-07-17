'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  
  const slogan = ['On', 'Time,', 'Every', 'Time,', 'Anywhere.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % slogan.length);
    }, 600);

    return () => {
      clearTimeout(timer);
      clearInterval(wordTimer);
    };
  }, [slogan.length]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-cyan-600 to-blue-700 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-white">
            {/* Logo Animation */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Image
                src="/main logo.png"
                alt="MCCED Logo"
                width={200}
                height={100}
                className="filter brightness-0 invert"
              />
            </motion.div>

            {/* Animated Slogan */}
            <motion.div
              className="text-2xl md:text-3xl font-medium mb-8 h-12 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {slogan[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 1.5 }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Global Logistics Solutions
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}