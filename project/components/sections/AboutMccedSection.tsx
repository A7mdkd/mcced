'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const AboutMccedSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pexels-wolfgang-weiser-467045605-31016465.jpg" // Placeholder image, replace with actual path
          alt="MCCED global shipping operations"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="brightness-[0.6] saturate-[1.2]"
        />
        {/* Blue tinted overlay */}
        <div className="absolute inset-0 bg-[#0277B6] opacity-50"></div>
        {/* Animated dotted shipping path / globe lines - Placeholder for CSS/Lottie animation */}
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundImage: 'url("/images/dotted-lines.svg")', backgroundSize: 'cover', animation: 'moveLines 60s linear infinite' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side: Text content */}
          <motion.div
            className="w-full md:w-1/2 text-white text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-avenir text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Delivering Trust Across Borders
            </h2>
            <p className="font-avenir text-lg md:text-xl leading-relaxed mb-8">
              MCCED is a global logistics and export partner, dedicated to delivering seamless international shipping, expert customs handling, and efficient warehousing. With a commitment to precision, sustainability, and client satisfaction, we move businesses forward — on time, every time, anywhere.
            </p>
            <Button
              href="/about"
              className="bg-white text-[#0277B6] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
            >
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right side: Image with animated overlays - handled by background image and overlay divs */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">{/* This div is a placeholder for layout balance, actual image is background */}</div>
        </div>
      </div>

      {/* Keyframe for animation */}
      <style jsx>{`
        @keyframes moveLines {
          from { background-position: 0 0; }
          to { background-position: 100% 100%; }
        }
      `}</style>
    </section>
  );
};

export default AboutMccedSection;