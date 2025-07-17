'use client';

import { motion } from 'framer-motion';
import { 
  Plane, 
  Clock, 
  Globe, 
  CheckCircle, 
  Package, 
  ThermometerSnowflake, 
  Shield,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Time-critical shipments delivered with speed and precision',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Extensive network reaching all major airports worldwide',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Temperature Control',
    description: 'Specialized handling for temperature-sensitive cargo',
  },
  {
    icon: Shield,
    title: 'Secure Transport',
    description: 'Enhanced security protocols for high-value shipments',
  },
];

const services = [
  'Next-flight-out service for urgent shipments',
  'Consolidated air freight for cost efficiency',
  'Charter services for oversized or special cargo',
  'Door-to-door delivery options',
  'Real-time tracking and monitoring',
  'Customs clearance and documentation',
  'Specialized handling for dangerous goods',
  'Insurance coverage options',
];

export default function AirFreightService() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
            <Image
              src="/images/loading-of-cargo-containers-to-airplane-2025-02-16-11-29-13-utc.jpg"
              alt="Air Freight"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="relative py-20 px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Plane className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Air Freight Services</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Fast, reliable, and efficient air cargo solutions for time-sensitive shipments worldwide
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Global Air Freight Solutions
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              MCCED provides comprehensive air freight services designed to meet your most demanding 
              shipping requirements. Whether you need to transport urgent documents, perishable goods, 
              or oversized equipment, our air freight solutions ensure your cargo reaches its destination 
              quickly, safely, and on schedule.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our extensive network of airline partners and global agents allows us to offer competitive 
              rates and flexible scheduling options to destinations worldwide. We handle all aspects of 
              your air shipment, from pickup and documentation to customs clearance and final delivery.
            </p>
            
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/get-a-quote" size="lg">
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Air Freight Services?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2 text-primary" />
                Specialized Cargo Handling
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We offer specialized handling for various cargo types including pharmaceuticals, 
                perishables, dangerous goods, valuable items, and oversized shipments. Our team 
                ensures compliance with all international regulations while maintaining the 
                integrity of your cargo.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship by Air?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our air freight specialists today and discover how we can optimize 
              your air cargo shipments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/get-a-quote">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" href="/contact#customer-service">
                Contact Customer Service
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 