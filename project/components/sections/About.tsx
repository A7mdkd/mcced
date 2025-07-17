'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Lightbulb,
  Shield,
  Leaf,
  Zap
} from 'lucide-react';
import Card from '@/components/ui/Card';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    icon: Shield,
    title: 'Quality',
    description: 'We maintain the highest standards in every aspect of our logistics operations.',
    color: 'text-blue-600',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and reducing our environmental footprint.',
    color: 'text-green-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology to optimize logistics solutions.',
    color: 'text-yellow-600',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your success is our priority. We build lasting partnerships through trust.',
    color: 'text-red-600',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Streamlined processes and optimized routes for maximum efficiency.',
    color: 'text-purple-600',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Extensive network spanning across continents for seamless connectivity.',
    color: 'text-indigo-600',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'MCCED was established with a vision to revolutionize global logistics.',
    image: '/images/Company Founded.jpg',
  },
  {
    year: '2021',
    title: 'International Expansion',
    description: 'Extended our services to 20+ countries across multiple continents.',
    image: '/images/International Expansion.jpg',
  },
  {
    year: '2022',
    title: 'Technology Integration',
    description: 'Launched our advanced tracking system and digital platform.',
    image: '/images/Technology Integration.jpg',
  },
  {
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Implemented eco-friendly practices and carbon-neutral shipping options.',
    image: '/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg',
  },
  {
    year: '2024',
    title: 'Global Recognition',
    description: 'Achieved industry certifications and expanded to 50+ countries.',
    image: '/images/Global Recognition.jpg',
  },
];

import Image from 'next/image';

export default function About() {
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
    <section id="about" className="pt-0 pb-20 bg-white dark:bg-gray-800">
      {/* Hero Image */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] mb-12 overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src="/images/hero pic2.jpg"
          alt="About MCCED Hero"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* تدرج لوني فوق الصورة لمزيد من العمق */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-white/60 to-transparent dark:from-gray-900/60 dark:via-gray-800/40 pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            About MCCED
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Connecting the World Through Logistics
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Since 2020, MCCED has been at the forefront of global logistics, 
            delivering innovative solutions that connect businesses worldwide.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the world&apos;s most trusted logistics partner, enabling seamless global 
                trade through innovative solutions, sustainable practices, and unwavering 
                commitment to excellence. We envision a connected world where distance 
                is no barrier to business success.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver exceptional logistics services that exceed customer expectations 
                through cutting-edge technology, expert knowledge, and personalized solutions. 
                We are committed to building lasting partnerships and contributing to our 
                clients&apos; success in the global marketplace.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${value.color} bg-current/10`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From humble beginnings to global recognition, here&apos;s how we&apos;ve grown
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-0 overflow-hidden">
                      <div className="relative w-full h-40 md:h-56 mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center w-full h-full"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-white/10 to-transparent" />
                      </div>
                      <div className="flex items-center mb-3 px-6">
                        <span className="text-2xl font-bold text-primary mr-4">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 px-6 pb-4">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary to-cyan-600 rounded-2xl p-8 md:p-12 text-white"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-xl opacity-90">
              Trusted by businesses worldwide for reliable logistics solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '1000+', label: 'Happy Clients' },
              { icon: Globe, number: '50+', label: 'Countries' },
              { icon: Award, number: '15+', label: 'Industry Awards' },
              { icon: Target, number: '99.9%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}