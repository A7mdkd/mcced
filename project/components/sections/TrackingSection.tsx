'use client';

import { motion, Variants } from 'framer-motion';
import { Search, Package, ArrowRight, MapPin, Clock, CheckCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the tracking submission
    console.log('Tracking number submitted:', trackingNumber);
    // Reset or show results
  };

  const trackingFeatures = [
    { 
      icon: <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />,
      text: 'Real-time location updates' 
    },
    { 
      icon: <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />,
      text: 'Estimated delivery times' 
    },
    { 
      icon: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />,
      text: 'Delivery confirmation' 
    },
    { 
      icon: <Package className="w-5 h-5 text-green-600 dark:text-green-400" />,
      text: 'Shipment details' 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Track Your Shipment <span className="text-primary">In Real-Time</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Stay informed about your cargo&#39;s journey from origin to destination. 
              Our advanced tracking system provides real-time updates on your shipment&#39;s location and status.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {trackingFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Updates every 30 minutes | 24/7 tracking availability</span>
            </div>
          </motion.div>

          {/* Right Column - Tracking Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Enter Your Tracking Number
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <Button className="w-full py-4 text-lg group">
                Track Shipment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Don&#39;t have a tracking number?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Contact our customer support team for assistance with your shipment.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+20 123 456 789</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 