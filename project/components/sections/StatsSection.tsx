'use client';

import { motion, Variants } from 'framer-motion';
import { Truck, Plane, Ship, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
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

  const stats = [
    { 
      icon: <Truck className="w-12 h-12 text-primary mb-4" />,
      number: '500+', 
      label: 'Shipments Monthly', 
      description: 'Delivering cargo safely and on time'
    },
    { 
      icon: <Globe className="w-12 h-12 text-primary mb-4" />,
      number: '50+', 
      label: 'Countries Served', 
      description: 'Global logistics network'
    },
    { 
      icon: <Ship className="w-12 h-12 text-primary mb-4" />,
      number: '99.8%', 
      label: 'On-Time Delivery', 
      description: 'Reliability you can count on'
    },
    { 
      icon: <Plane className="w-12 h-12 text-primary mb-4" />,
      number: '24/7', 
      label: 'Customer Support', 
      description: 'Always available for you'
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            MCCED by the Numbers
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record of excellence in global logistics speaks through our achievements
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{stat.label}</h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 