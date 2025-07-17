'use client';

import { motion } from 'framer-motion';
import { 
  Factory, 
  Car, 
  Shirt, 
  Pill, 
  Cpu, 
  Wheat,
  Hammer,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'End-to-end supply chain solutions for manufacturing companies',
    challenges: ['Just-in-time delivery', 'Raw material sourcing', 'Finished goods distribution'],
    solutions: ['Integrated supply chain', 'Inventory optimization', 'Multi-modal transport'],
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '200+', efficiency: '95%' }
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Specialized logistics for automotive parts and vehicle transportation',
    challenges: ['Complex supply chains', 'Quality requirements', 'Time-sensitive delivery'],
    solutions: ['Automotive-grade handling', 'Sequenced delivery', 'Quality assurance'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '150+', efficiency: '98%' }
  },
  {
    icon: Shirt,
    title: 'Fashion & Retail',
    description: 'Fast fashion and retail distribution with seasonal flexibility',
    challenges: ['Seasonal demands', 'Fast fashion cycles', 'Global distribution'],
    solutions: ['Flexible warehousing', 'Rapid distribution', 'Seasonal scaling'],
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '300+', efficiency: '92%' }
  },
  {
    icon: Pill,
    title: 'Healthcare & Pharma',
    description: 'Temperature-controlled and compliant pharmaceutical logistics',
    challenges: ['Regulatory compliance', 'Temperature control', 'Product integrity'],
    solutions: ['GDP compliance', 'Cold chain management', 'Serialization tracking'],
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '100+', efficiency: '99.9%' }
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'High-value electronics and technology product logistics',
    challenges: ['High-value cargo', 'Fragile handling', 'Security requirements'],
    solutions: ['Secure transport', 'Anti-static handling', 'Insurance coverage'],
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '180+', efficiency: '97%' }
  },
  {
    icon: Wheat,
    title: 'Agriculture & Food',
    description: 'Fresh produce and food product distribution with quality preservation',
    challenges: ['Perishable goods', 'Quality maintenance', 'Seasonal variations'],
    solutions: ['Cold chain logistics', 'Quality monitoring', 'Rapid distribution'],
    image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { clients: '250+', efficiency: '94%' }
  },
];

const capabilities = [
  {
    icon: TrendingUp,
    title: 'Industry Expertise',
    description: 'Deep understanding of sector-specific requirements and regulations'
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Specialized teams with industry knowledge and experience'
  },
  {
    icon: Award,
    title: 'Compliance',
    description: 'Full regulatory compliance and industry certifications'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge solutions tailored to industry needs'
  },
];

export default function Industries() {
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
    <section id="industries" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Industries We Serve
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Specialized Solutions by Industry
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We understand that every industry has unique logistics challenges. 
            Our specialized solutions are tailored to meet sector-specific requirements.
          </motion.p>
        </motion.div>

        {/* Industry Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {industries.map((industry, index) => (
            <motion.div key={industry.title} variants={itemVariants}>
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <industry.icon className="w-8 h-8 mb-2" />
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 text-white text-sm">
                    <div className="bg-black/50 rounded-lg p-2">
                      <div>{industry.stats.clients} Clients</div>
                      <div>{industry.stats.efficiency} Success Rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Challenges:</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose MCCED for Your Industry
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our industry-focused approach ensures you get specialized expertise and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <Hammer className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Industry Logistics?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our industry experts analyze your specific challenges and design 
              a customized logistics solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Industry Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Download Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}