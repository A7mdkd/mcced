'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactMapSection() {
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

  const locations = [
    {
      name: 'Cairo Headquarters',
      address: '123 Logistics Street, Cairo, Egypt',
      phone: '+20 123 456 789',
      email: 'cairo@mcced.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      coordinates: { lat: 30.0444, lng: 31.2357 }, // Cairo coordinates
      isPrimary: true
    },
    {
      name: 'Dubai Office',
      address: '456 Trade Center, Dubai, UAE',
      phone: '+971 123 456 789',
      email: 'dubai@mcced.com',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM',
      coordinates: { lat: 25.2048, lng: 55.2708 }, // Dubai coordinates
      isPrimary: false
    },
    {
      name: 'Riyadh Office',
      address: '789 Business District, Riyadh, KSA',
      phone: '+966 123 456 789',
      email: 'riyadh@mcced.com',
      hours: 'Sun-Thu: 8:30 AM - 5:30 PM',
      coordinates: { lat: 24.7136, lng: 46.6753 }, // Riyadh coordinates
      isPrimary: false
    }
  ];

  const [activeLocation, setActiveLocation] = useState(locations[0]);

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
          <motion.span variants={itemVariants} className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Locations
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us Around the World
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With offices strategically located across the Middle East, we&#39;re ready to serve your global logistics needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office Locations */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Our Offices
              </h3>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      activeLocation.name === location.name 
                        ? 'bg-primary/10 border border-primary/30' 
                        : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveLocation(location)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <MapPin className={`w-5 h-5 ${activeLocation.name === location.name ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`} />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {location.name}
                          {location.isPrimary && (
                            <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded">HQ</span>
                          )}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden h-[400px] relative">
              {/* 
                This is where an actual map component would be integrated.
                For a real implementation, you would use a library like Google Maps, Mapbox, or Leaflet.
                Below is a placeholder that would be replaced with the actual map component.
              */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive map would be displayed here showing the location of {activeLocation.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Coordinates: {activeLocation.coordinates.lat}, {activeLocation.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Location Details */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {activeLocation.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">{activeLocation.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{activeLocation.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">{activeLocation.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Get Directions
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 