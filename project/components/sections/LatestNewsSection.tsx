'use client';

import { motion, Variants } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function LatestNewsSection() {
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

  const newsItems = [
    {
      title: "MCCED Expands Operations to South America",
      excerpt: "We're excited to announce our expansion into South American markets, with new offices in Brazil and Argentina.",
      date: "June 15, 2024",
      image: "/images/pexels-wolfgang-weiser-467045605-31016465.jpg",
      category: "Company News"
    },
    {
      title: "New Sustainable Shipping Initiatives Launched",
      excerpt: "MCCED introduces eco-friendly packaging and carbon-neutral shipping options for environmentally conscious clients.",
      date: "May 28, 2024",
      image: "/images/pexels-julia-m-cameron-6994788.jpg",
      category: "Sustainability"
    },
    {
      title: "Digital Transformation in Global Logistics",
      excerpt: "Our new tracking platform leverages AI to provide real-time insights and predictive analytics for shipments.",
      date: "April 10, 2024",
      image: "/images/vecteezy_a-beautiful-blonde-woman-in-a-business-suit_57322436.PNG",
      category: "Technology"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest News & Updates
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest services, industry insights, and company announcements
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button variant="outline" href="#">
            View All News
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 