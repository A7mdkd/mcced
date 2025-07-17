'use client';

import { motion } from 'framer-motion';
import { 
  Warehouse, 
  CheckCircle, 
  ArrowRight, 
  BarChart, 
  TrendingUp, 
  Settings, 
  Truck,
  Route,
  LineChart,
  Database
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';

const processSteps = [
  {
    number: '01',
    title: 'Logistics Audit',
    description: 'Thorough evaluation of your current logistics operations, identifying inefficiencies and opportunities.',
    icon: BarChart
  },
  {
    number: '02',
    title: 'Solution Design',
    description: 'Creating customized logistics strategies and solutions tailored to your specific business needs.',
    icon: Settings
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Implementing the logistics plan with careful coordination and change management.',
    icon: Truck
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and refinement to maximize efficiency and cost-effectiveness.',
    icon: TrendingUp
  },
];

const services = [
  {
    title: 'Distribution Strategy',
    description: 'Optimize your distribution network to improve service levels and reduce costs',
    points: [
      'Distribution center location analysis',
      'Last-mile delivery optimization',
      'Multi-channel distribution planning',
      'Service level strategy development'
    ]
  },
  {
    title: 'Warehouse Optimization',
    description: 'Maximize efficiency and productivity in your warehousing operations',
    points: [
      'Warehouse layout design',
      'Storage systems selection',
      'Material handling improvement',
      'Labor productivity enhancement'
    ]
  },
  {
    title: 'Transport Planning',
    description: 'Develop efficient transportation strategies for your logistics operations',
    points: [
      'Mode selection optimization',
      'Carrier selection and management',
      'Route planning and optimization',
      'Fleet management strategies'
    ]
  },
  {
    title: 'Cost Reduction',
    description: 'Identify and implement opportunities to reduce logistics costs',
    points: [
      'Spend analysis and benchmarking',
      'Logistics outsourcing evaluation',
      'Consolidation opportunities',
      'Rate negotiation strategies'
    ]
  },
];

const caseStudies = [
  {
    title: 'Warehouse Network Redesign',
    industry: 'Retail',
    challenge: 'Fragmented distribution network with high costs and slow delivery',
    solution: 'Consolidated warehouses and implemented hub-and-spoke model',
    result: '28% reduction in logistics costs and 40% faster delivery times',
    image: '/images/Retail.jpg'
  },
  {
    title: 'Last-Mile Delivery Optimization',
    industry: 'E-commerce',
    challenge: 'Inefficient delivery routes and high customer complaints',
    solution: 'Route optimization and delivery tracking implementation',
    result: '32% increase in on-time deliveries and 45% reduction in customer complaints',
    image: '/images/E-commerce.jpg'
  },
];

export default function LogisticsService() {
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
    <>
      {/* Hero Section - Different style with diagonal background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-blue-700 py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1200 800">
            <path d="M0,0 L1200,0 L1200,800 L0,800 Z" fill="url(#header-gradient)" />
            <defs>
              <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0277B6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#065986" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path fill="rgba(255,255,255,0.05)" d="M0,800 L1200,0 L1200,800 L0,800 Z" />
            <path fill="rgba(255,255,255,0.05)" d="M1200,800 L0,400 L0,800 L1200,800 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white">
                <motion.div 
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Consultation Services
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics Consulting</h1>
                <p className="text-xl mb-8 text-white/90 max-w-lg">
                  Streamline your logistics operations with our expert consulting services. 
                  We help businesses enhance efficiency, reduce costs, and improve service levels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="lg" href="/get-a-quote">
                    Request Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="#services">
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] w-full">
                <Truck className="absolute top-1/4 left-1/4 text-white/20 w-20 h-20" />
                <Route className="absolute top-1/2 right-1/3 text-white/30 w-16 h-16" />
                <Database className="absolute bottom-1/4 right-1/4 text-white/20 w-24 h-24" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Warehouse className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process - Horizontal timeline style */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Our Approach
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Logistics Optimization Process
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              We follow a structured methodology to enhance your logistics operations
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="hidden md:flex justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <div className="flex justify-center mb-4">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card layout with expandable details */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Logistics Consulting Services
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              End-to-end logistics planning and execution services to streamline your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 hover:border-primary transition-colors cursor-pointer group">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" href="/get-a-quote">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Alternating layout */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Success Stories
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Case Studies
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how we&#39;ve helped organizations transform their logistics operations
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
                        {study.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Card className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      {study.title}
                    </h4>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h5 className="font-semibold text-primary mb-2">The Challenge</h5>
                        <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-primary mb-2">Our Solution</h5>
                        <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-primary mb-2">The Result</h5>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{study.result}</p>
                      </div>
                    </div>
                    
                    {/* Removed Read Full Case Study button as requested */}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient background with pattern */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700">
          <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with our logistics experts and discover how we can help streamline 
              your operations and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/get-a-quote">
                Request Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" href="/contact#customer-service">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 