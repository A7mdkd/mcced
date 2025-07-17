'use client';

import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      quote: "MCCED has transformed our supply chain operations. Their attention to detail and commitment to on-time delivery has been crucial for our business growth.",
      author: "Sarah Johnson",
      position: "Operations Director, Global Tech Inc.",
      image: "/images/vecteezy_a-beautiful-blonde-woman-in-a-business-suit_57322436.PNG"
    },
    {
      quote: "We've been working with MCCED for over two years now, and their service has been exceptional. Their global network and expertise in customs procedures saved us countless hours.",
      author: "Michael Chen",
      position: "Supply Chain Manager, Retail Solutions",
      image: "/images/pexels-julia-m-cameron-6994788.jpg"
    },
    {
      quote: "The team at MCCED goes above and beyond to ensure our shipments arrive safely and on time. Their customer service is unmatched in the logistics industry.",
      author: "Ahmed Hassan",
      position: "CEO, International Exports Ltd.",
      image: "/images/pexels-wolfgang-weiser-467045605-31016465.jpg"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
          <motion.div variants={itemVariants} className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <Quote className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&#39;t just take our word for it. Here&#39;s what our clients have to say about our logistics services.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="relative w-40 h-40 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <div className="text-primary mb-6">
                        <Quote className="w-12 h-12 opacity-20 mx-auto md:mx-0" />
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 