'use client';

import { motion } from 'framer-motion';
import { 
  Network, 
  Warehouse, 
  BarChart, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Clock,
  Users,
  LineChart,
  TrendingUp,
  Building,
  ShoppingBag,
  PieChart,
  Layers
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const consultationServices = [
  {
    icon: Network,
    title: 'Supply Chain',
    description: 'Comprehensive supply chain optimization and management solutions for improved efficiency and reduced costs.',
    features: [
      'Network design and optimization',
      'Process improvement and standardization',
      'Inventory management strategies',
      'Technology integration and implementation'
    ],
  },
  {
    icon: Warehouse,
    title: 'Logistics',
    description: 'End-to-end logistics planning and execution services to streamline your operations and enhance performance.',
    features: [
      'Distribution strategy development',
      'Warehouse optimization',
      'Transport planning and execution',
      'Cost reduction strategies'
    ],
  },
  {
    icon: BarChart,
    title: 'Business Development',
    description: 'Strategic business growth and market expansion services to help you reach new markets and increase revenue.',
    features: [
      'Market analysis and opportunity identification',
      'Growth strategy development',
      'Partner selection and management',
      'International expansion planning'
    ],
  },
];

const industryExpertise = [
  { icon: Building, title: 'Manufacturing', description: 'Optimizing production logistics and supply chains' },
  { icon: ShoppingBag, title: 'Retail & E-commerce', description: 'Streamlining distribution and fulfillment' },
  { icon: PieChart, title: 'Energy & Resources', description: 'Managing complex global supply networks' },
  { icon: Layers, title: 'Technology', description: 'Agile logistics for fast-moving industries' },
];

export default function ConsultationServices() {
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
    <section id="consultation" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Consultation Services
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Expert Business Solutions
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Our team of industry experts provides strategic consultation services 
            to optimize your supply chain, logistics operations, and business development.
          </motion.p>
        </motion.div>

        {/* Main Consultation Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {consultationServices.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="p-6 h-full group cursor-pointer">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Consultation Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to deliver tailored solutions that address your unique business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Discover
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We analyze your current operations and identify key challenges and opportunities
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We develop customized solutions tailored to your specific business needs
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Implement
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We execute the plan with minimal disruption to your ongoing operations
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Optimize
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We continuously monitor and refine to ensure sustainable improvements
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Industry Expertise */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our consultants bring specialized knowledge across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryExpertise.map((industry) => (
              <motion.div
                key={industry.title}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation with our experts and discover how we can help optimize 
              your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/get-a-quote">
                Request Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" href="/contact#customer-service">
                <Clock className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 