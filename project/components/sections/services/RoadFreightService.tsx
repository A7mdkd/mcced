'use client';

import { motion } from 'framer-motion';
import { 
  Truck, 
  Clock, 
  Globe, 
  CheckCircle, 
  Package, 
  Map, 
  Shield,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Map,
    title: 'Cross-Border Services',
    description: 'Seamless transportation across international borders with proper documentation',
  },
  {
    icon: Briefcase,
    title: 'Full & Partial Loads',
    description: 'Flexible options for shipments of all sizes',
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Time-definite delivery options for urgent shipments',
  },
  {
    icon: Shield,
    title: 'Secure Transport',
    description: 'Advanced tracking and security measures for your cargo',
  },
];

const services = [
  'Full Truckload (FTL) services',
  'Less than Truckload (LTL) consolidation',
  'Specialized vehicle options (refrigerated, flatbed, etc.)',
  'Cross-border transportation',
  'Express road freight services',
  'Last-mile delivery solutions',
  'Dangerous goods transportation',
  'Real-time shipment tracking',
];

export default function RoadFreightService() {
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
              src="/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg"
              alt="Road Freight"
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
              <Truck className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Road Freight Services</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Reliable road transportation services for local and international deliveries
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
              Comprehensive Road Freight Solutions
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              MCCED provides flexible and efficient road freight services tailored to your 
              specific transportation needs. From single pallets to full truckloads, we offer 
              reliable road shipping solutions for domestic and cross-border deliveries.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our extensive fleet of vehicles and network of trusted carriers allows us to 
              handle shipments of all sizes and types. We manage every aspect of your road 
              transportation, ensuring timely pickup, secure transit, and on-time delivery 
              to any destination.
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
              Why Choose Our Road Freight Services?
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
                Specialized Vehicle Options
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We offer a variety of specialized vehicles to accommodate different cargo types, 
                including refrigerated trucks for temperature-sensitive goods, flatbeds for 
                oversized items, and secured vehicles for high-value shipments. Our team will 
                help you select the most appropriate vehicle type for your specific cargo requirements.
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
              Ready to Transport by Road?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our road freight specialists today and discover how we can optimize 
              your ground transportation needs.
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