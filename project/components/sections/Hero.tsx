'use client';

import { motion, easeInOut } from 'framer-motion';
import { ImagesSlider } from '@/components/ui/images-slider';
import { ArrowRight, Play, Plane, Ship, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const sloganVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const slogan = "On Time, Every Time, Anywhere.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Images Slider Background */}
      <div className="absolute inset-0 z-0">
        <ImagesSlider
          overlay={false}
          className="h-full w-full"
        >
          {/* فلتر تعتيم فقط بدون تغبيش */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </ImagesSlider>
        {/* عناصر خلفية إضافية */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse z-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full z-20"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-primary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Plane className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-primary/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Ship className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3 text-primary/15"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Globe className="w-12 h-12" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ textShadow: '0 2px 24px rgba(0,0,0,0.7)' }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Global Logistics Excellence Since 2020
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]"
        >
          Your Global
          <span className="block text-primary">Logistics Partner</span>
        </motion.h1>

        <motion.div
          variants={sloganVariants}
          className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-[0_2px_24px_rgba(0,0,0,1)]"
        >
          {slogan.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_24px_rgba(0,0,0,1)]"
        >
          MCCED delivers comprehensive logistics solutions across the globe. From international 
          freight to customs brokerage, we ensure your cargo reaches its destination safely, 
          efficiently, and on schedule.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="group">
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Global Partners' },
            { number: '50+', label: 'Countries Served' },
            { number: '10K+', label: 'Shipments Delivered' },
            { number: '99.9%', label: 'On-Time Delivery' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}