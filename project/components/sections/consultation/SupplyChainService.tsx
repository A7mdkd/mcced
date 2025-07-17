'use client';

import { motion } from 'framer-motion';
import { 
  Network, 
  CheckCircle, 
  ArrowRight, 
  BarChart, 
  TrendingUp, 
  Settings, 
  Layers,
  Users,
  LineChart
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';

const processSteps = [
  {
    number: '01',
    title: 'Assessment',
    description: 'Comprehensive analysis of your current supply chain operations, identifying strengths, weaknesses, and opportunities.',
    icon: BarChart
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Creating a tailored roadmap to optimize your supply chain based on business objectives and market conditions.',
    icon: LineChart
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Executing the strategic plan with careful change management and minimal disruption to operations.',
    icon: Settings
  },
  {
    number: '04',
    title: 'Continuous Improvement',
    description: 'Ongoing monitoring and refinement to ensure sustained performance and adaptability.',
    icon: TrendingUp
  },
];

const services = [
  {
    title: 'Network Design & Optimization',
    description: 'Strategically design your supply chain network to reduce costs and improve service levels',
    points: [
      'Facility location analysis',
      'Distribution network modeling',
      'Transportation route optimization',
      'Inventory positioning strategy'
    ]
  },
  {
    title: 'Process Improvement',
    description: 'Streamline operations and eliminate inefficiencies throughout your supply chain',
    points: [
      'Value stream mapping',
      'Lean methodology implementation',
      'Process standardization',
      'Performance metrics development'
    ]
  },
  {
    title: 'Inventory Management',
    description: 'Optimize inventory levels to balance service requirements with carrying costs',
    points: [
      'Inventory optimization modeling',
      'Safety stock calculation',
      'Demand forecasting improvement',
      'Obsolescence reduction strategies'
    ]
  },
  {
    title: 'Technology Integration',
    description: 'Leverage technology solutions to enhance visibility and control across your supply chain',
    points: [
      'Supply chain systems assessment',
      'Technology selection guidance',
      'Implementation support',
      'Data integration and analytics'
    ]
  },
];

const caseStudies = [
  {
    title: 'Manufacturing Cost Reduction',
    industry: 'Automotive',
    challenge: 'Rising logistics costs and inventory inefficiencies',
    solution: 'Network redesign and inventory optimization',
    result: '22% reduction in overall supply chain costs',
    image: '/images/Automotive.jpg'
  },
  {
    title: 'Global Distribution Enhancement',
    industry: 'Consumer Goods',
    challenge: 'Poor visibility and lengthy delivery times',
    solution: 'Technology integration and process standardization',
    result: '35% improvement in order fulfillment cycle time',
    image: '/images/Consumer Goods.jpg'
  },
];

export default function SupplyChainService() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Supply Chain Optimization</h1>
                <p className="text-xl mb-8 text-white/90 max-w-lg">
                  Transform your supply chain into a strategic advantage with our comprehensive 
                  consulting services. We help businesses optimize operations, reduce costs, 
                  and improve service levels.
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
                <Network className="absolute top-1/4 left-1/4 text-white/20 w-20 h-20" />
                <Layers className="absolute top-1/2 right-1/3 text-white/30 w-16 h-16" />
                <Users className="absolute bottom-1/4 right-1/4 text-white/20 w-24 h-24" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Network className="w-24 h-24 text-white" />
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
              Supply Chain Transformation Process
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              We follow a proven methodology to deliver measurable results for your supply chain operations
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
              Supply Chain Consulting Services
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to optimize every aspect of your supply chain
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
              See how we&#39;ve helped organizations transform their supply chains
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
              Ready to Transform Your Supply Chain?
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with our supply chain experts and discover how we can help optimize 
              your operations and drive sustainable growth.
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