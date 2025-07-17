"use client";
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function TrackingSection() {
  // Parallax effect
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
        aria-hidden
      >
        <Image
          src="/images/map.jpg"
          alt="Tracking Background"
          fill
          priority={false}
          className="object-cover object-center opacity-80 dark:opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-white/80 dark:to-gray-900/80" />
      </motion.div>

      {/* Content Box */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          Track your shipment easily
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 max-w-md">
          Enter your shipment or tracking number and follow your shipment status instantly through our smart platform.
        </p>
        <form
          action="https://mcced.com/tracking"
          method="get"
          className="flex w-full max-w-md justify-center"
          target="_blank"
        >
          <Button type="submit" className="px-8 py-3 text-base font-semibold rounded-lg">
            Track Shipment
          </Button>
        </form>
      </div>
    </section>
  );
}
  
