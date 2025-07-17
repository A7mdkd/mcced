'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BannerSectionProps {
  imageUrl: string;
  altText: string;
  textOverlay?: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  imageUrl,
  altText,
  textOverlay,
}) => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="relative w-full max-w-7xl mx-auto h-[120px] md:h-[200px] overflow-hidden rounded-xl shadow-lg dark:shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05, filter: 'brightness(0.8)' }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
            quality={80}
          />
        </motion.div>
        {textOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <p className="text-white text-2xl md:text-4xl font-bold opacity-70 text-center">
              {textOverlay}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default BannerSection;