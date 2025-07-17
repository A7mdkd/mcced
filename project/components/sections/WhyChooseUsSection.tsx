'// eslint-disable-next-line react/no-unescaped-entities\n'
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Globe, Award, Users, Leaf } from 'lucide-react';

export default function WhyChooseUsSection() {
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

  const features = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: 'Reliability & Punctuality',
      description: 'We pride ourselves on delivering your cargo on time, every time, with a 99.9% on-time delivery record.'
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: 'Global Network',
      description: 'Our extensive international network spans 50+ countries, ensuring seamless logistics anywhere in the world.'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'Cargo Safety',
      description: 'Advanced tracking systems and strict security protocols keep your shipments safe throughout their journey.'
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Expert Team',
      description: 'Our experienced professionals provide personalized solutions and dedicated support for your logistics needs.'
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: 'Sustainability',
      description: 'We\'re committed to environmentally responsible practices, reducing our carbon footprint across operations.'
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: 'Certified Quality',
      description: 'MCCED meets international standards with ISO 9001, ISO 14001, and industry-specific certifications.'
    }
  ];

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
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose MCCED
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver more than just cargo – we deliver peace of mind through our commitment to excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Promise to You
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At MCCED, we&#39;re not just moving cargo – we&#39;re moving your business forward. 
            Our commitment to excellence, reliability, and customer satisfaction is at the heart of everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 