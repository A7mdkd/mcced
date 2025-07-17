'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function PartnersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  // Real partner logos from public/logos
  const partners = [
    { name: 'Partner 22', logo: '/logos/22.svg' },
    { name: 'Partner 23', logo: '/logos/23.svg' },
    { name: 'Partner 24', logo: '/logos/24.svg' },
    { name: 'Partner 25', logo: '/logos/25.svg' },
    { name: 'Partner 26', logo: '/logos/26.svg' },
    { name: 'Partner 27', logo: '/logos/27.svg' },
    { name: 'Partner 28', logo: '/logos/28.svg' },
    { name: 'Partner 29', logo: '/logos/29.svg' },
    { name: 'Partner 30', logo: '/logos/30.svg' },
    { name: 'Partner 31', logo: '/logos/31.svg' },
    { name: 'Partner 32', logo: '/logos/32.svg' },
    { name: 'Partner 33', logo: '/logos/33.svg' },
    { name: 'Partner 34', logo: '/logos/34.svg' },
  ];



  // سلايدر تلقائي أفقي
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const visibleCount = 6; // عدد الشعارات الظاهرة دفعة واحدة
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % partners.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [partners.length]);

  // حساب الشعارات المعروضة
  const getVisiblePartners = () => {
    if (partners.length <= visibleCount) return partners;
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(partners[(slide + i) % partners.length]);
    }
    return arr;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Network
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Partners & Clients
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading companies and serve clients across various industries to deliver exceptional logistics solutions
          </motion.p>
        </motion.div>

        {/* سلايدر أفقي للشعارات */}

        <div className="w-full flex justify-center items-center mb-20">
          <div ref={sliderRef} className="flex gap-12 transition-all duration-700">
            {getVisiblePartners().map((partner, idx) => (
              <motion.div
                key={partner.logo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg flex items-center justify-center shadow-md"
                style={{ minWidth: 200, minHeight: 200 }}
              >
                <div className="relative w-44 h-44">
                  <Image
                    src={partner.logo}
                    alt="Partner logo"
                    fill
                    className="object-contain filter-logo-black"
                    sizes="176px"
                    priority={idx === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
      <style>{`
        .filter-logo-black {
          filter: invert(0) brightness(0);
        }
        .dark .filter-logo-black {
          filter: none;
        }
      `}</style>
        </div>

        {/* تم حذف قسم كن شريكًا */}
      </div>
    </section>
  );
} 