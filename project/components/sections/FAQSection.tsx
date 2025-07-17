'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  variants: Variants;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, variants }: FAQItemProps) => {
  return (
    <motion.div
      variants={variants}
      className="border-b border-gray-200 dark:border-gray-700 last:border-0"
    >
      <button
        onClick={toggleOpen}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <div className="ml-2 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const faqs = [
    {
      question: "How do I track my shipment?",
      answer: "You can track your shipment by entering your tracking number on our tracking page. Our system provides real-time updates on your cargo's location, estimated delivery time, and current status. For additional assistance, you can contact our customer support team."
    },
    {
      question: "What shipping options do you offer?",
      answer: "We offer a comprehensive range of shipping options including air freight, sea freight, road transportation, and multimodal solutions. Each option comes with different speed, cost, and capacity considerations. Our team can help you select the best option based on your specific needs."
    },
    {
      question: "How do you handle customs clearance?",
      answer: "Our customs brokerage team handles all aspects of customs clearance, including documentation preparation, duty and tax calculations, and compliance with international regulations. We have expertise in customs procedures across multiple countries to ensure smooth border crossings."
    },
    {
      question: "Do you offer warehousing services?",
      answer: "Yes, we provide comprehensive warehousing solutions including short and long-term storage, inventory management, pick and pack services, and distribution. Our facilities are secure, modern, and equipped with advanced inventory tracking systems."
    },
    {
      question: "How do you handle fragile or hazardous goods?",
      answer: "We have specialized handling procedures for fragile items and certified processes for hazardous materials. Our team is trained in proper packaging, labeling, and transportation requirements for dangerous goods in compliance with international regulations such as IMDG, ADR, and IATA DGR."
    },
    {
      question: "What insurance options are available for my shipment?",
      answer: "We offer comprehensive cargo insurance options to protect your goods against loss, damage, or theft during transit. Coverage can be tailored to your specific needs and cargo value. Our team can provide detailed information about coverage options, premiums, and claim procedures."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our logistics services
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 px-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
} 