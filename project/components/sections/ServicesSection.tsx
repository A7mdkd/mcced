'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Warehouse, 
  Network, 
  Plane,
  Ship,
  Train,
  FileText,
  BarChart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, href }) => {
  return (
    <Link href={href}>
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#0277B6] border border-transparent dark:border-gray-700"
        whileHover={{ y: -5 }} // Slight lift on hover
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="text-[#0277B6] mb-4"
          whileHover={{ rotate: 10, scale: 1.1 }} // Icon animation on hover
          transition={{ duration: 0.3 }}
        >
          <Icon size={48} strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </Link>
  );
};

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments.',
    href: '/services/air-freight'
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective sea freight solutions for large volume shipments.',
    href: '/services/sea-freight'
  },
  {
    icon: Truck,
    title: 'Road Freight',
    description: 'Reliable road transportation for local and international deliveries.',
    href: '/services/road-freight'
  },
  {
    icon: Train,
    title: 'Rail Freight',
    description: 'Eco-friendly rail freight for long-distance cargo transportation.',
    href: '/services/rail-freight'
  },
  {
    icon: FileText,
    title: 'Customs Services',
    description: 'Expert customs clearance and documentation services.',
    href: '/services/customs'
  },
  {
    icon: Network,
    title: 'Supply Chain',
    description: 'Comprehensive supply chain optimization and management.',
    href: '/consultation/supply-chain'
  },
  {
    icon: Warehouse,
    title: 'Logistics',
    description: 'End-to-end logistics planning and execution services.',
    href: '/consultation/logistics'
  },
  {
    icon: BarChart,
    title: 'Business Development',
    description: 'Strategic business growth and market expansion services.',
    href: '/consultation/business-development'
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Optional: Background image with semi-transparent overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg" // Changed image
          alt="Logistics background"
          layout="fill"
          objectFit="cover"
          quality={70}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From global freight forwarding to business consultation, MCCED ensures your cargo moves safely, smoothly, and on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <motion.button
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;