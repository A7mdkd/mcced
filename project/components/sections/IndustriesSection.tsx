'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowRight, Factory, Car, Shirt, Pill, Cpu, Wheat } from 'lucide-react';

export default function IndustriesSection() {
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

  const industries = [
    {
      icon: <Factory className="w-10 h-10 text-primary mb-4" />,
      name: 'Manufacturing',
      description: 'End-to-end supply chain solutions for manufacturing companies with just-in-time delivery.',
      image: '/images/pexels-julia-m-cameron-6994788.jpg',
    },
    {
      icon: <Car className="w-10 h-10 text-primary mb-4" />,
      name: 'Automotive',
      description: 'Specialized logistics for automotive parts and vehicle transportation with quality assurance.',
      image: '/images/pexels-wolfgang-weiser-467045605-31016465.jpg',
    },
    {
      icon: <Shirt className="w-10 h-10 text-primary mb-4" />,
      name: 'Fashion & Retail',
      description: 'Fast fashion and retail distribution with seasonal flexibility and rapid delivery.',
      image: '/images/vecteezy_a-beautiful-blonde-woman-in-a-business-suit_57322436.PNG',
    },
    {
      icon: <Pill className="w-10 h-10 text-primary mb-4" />,
      name: 'Healthcare & Pharma',
      description: 'Temperature-controlled and compliant pharmaceutical logistics with GDP compliance.',
      image: '/images/pexels-wolfgang-weiser-467045605-31016465.jpg',
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary mb-4" />,
      name: 'Technology',
      description: 'Secure transport for high-value electronics and technology products with insurance coverage.',
      image: '/images/pexels-julia-m-cameron-6994788.jpg',
    },
    {
      icon: <Wheat className="w-10 h-10 text-primary mb-4" />,
      name: 'Agriculture & Food',
      description: 'Fresh produce and food product distribution with quality preservation and cold chain logistics.',
      image: '/images/vecteezy_a-beautiful-blonde-woman-in-a-business-suit_57322436.PNG',
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We understand that every industry has unique logistics challenges. Our specialized solutions are tailored to meet sector-specific requirements.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {industry.description}
                </p>
                <a 
                  href={`/industries#${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button href="/industries">
            View All Industries
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 