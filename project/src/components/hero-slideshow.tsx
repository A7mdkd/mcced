
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';


const iconPngs = [
  '/images/truckicon.png',
  '/images/planeicone.png',
  '/images/shipicone.png',
  '/images/werehouseicone.png',
];


const slides = [
  {
    value: 'road',
    image: '/images/hero pic1.jpg',
    aiHint: 'hero pic 1',
    headline: ['Continental', 'Transportation'],
    description: 'We continuously evolve our logistics solutions to meet global challenges.',
    animation: 'kenburns-zoom-out',
    title: 'Road Freight',
  },
  {
    value: 'air',
    image: '/images/hero pic2.jpg',
    aiHint: 'hero pic 2',
    headline: ['Global Air', 'Cargo'],
    description: 'Fast and secure air freight services to deliver your goods across the globe.',
    animation: 'cube-rotate',
    title: 'Air Freight',
  },
  {
    value: 'sea',
    image: '/images/hero pic3.jpg',
    aiHint: 'hero pic 3',
    headline: ['Efficient Sea', 'Freight'],
    description: 'Cost-effective sea transportation for large shipments and international trade.',
    animation: 'pixel-dissolve',
    title: 'Sea Freight',
  },
  {
    value: 'warehousing',
    image: '/images/hero pic4.jpg',
    aiHint: 'hero pic 4',
    headline: ['Advanced', 'Warehousing'],
    description: 'Strategic warehousing solutions to streamline your supply chain operations.',
    animation: 'zoom-in-out',
    title: 'Warehousing',
  },
];


export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animations = [
    'kenburns-zoom-out',
    'cube-rotate',
    'pixel-dissolve',
    'zoom-in-out',
    'fade-in',
    'slide-left',
    'slide-right',
    'rotate-in',
    'scale-up',
    'scale-down',
  ];

  function getRandomAnimation() {
    return animations[Math.floor(Math.random() * animations.length)];
  }

  const [slideAnimations, setSlideAnimations] = useState(slides.map(() => animations[0]));

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      setSlideAnimations((prevAnims) => {
        const newAnims = [...prevAnims];
        newAnims[next] = getRandomAnimation();
        return newAnims;
      });
      return next;
    });
  };
  
  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    timeoutRef.current = setTimeout(handleNext, 6000);

    return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused]);


  const handleTabChange = (value: string) => {
    const newIndex = slides.findIndex(slide => slide.value === value);
    if (newIndex !== -1 && newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
    }
  };

  const activeTabValue = slides[currentSlide].value;
  const slideContent = slides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.value}
          className={cn(
            'absolute inset-0 pointer-events-none',
            'transition-all duration-[2000ms] will-change-opacity',
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
          )}
          style={{ perspective: '1000px' }}
        >
          <Image
            src={slide.image}
            alt={slide.headline.join(' ')}
            fill
            quality={85}
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{objectFit: 'cover'}}
            data-ai-hint={slide.aiHint}
            className={cn(
                'transition-transform duration-[7000ms] ease-out',
                index === currentSlide ? slideAnimations[index] : ''
            )}
            priority={index === 0}
          />
          {/* طبقة تدرج أغمق على الجوال */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}
      {/* طبقة تدرج على سطح المكتب */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* محتوى السلايد النصي */}
      <div className={cn("absolute inset-0 z-30 flex h-full p-4 md:p-16 items-center justify-center md:justify-start text-center md:text-left")}> 
        <div 
          key={currentSlide}
          className="md:ml-24 bg-gray-900/70 text-primary-foreground p-6 md:p-12 rounded-lg max-w-lg backdrop-blur-sm animate-fade-in-up"
        >
            <div className="w-12 h-1 bg-primary mb-4 md:w-16 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
            <h1 
              className="text-3xl md:text-5xl font-bold font-headline tracking-tight uppercase animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
                {slideContent.headline[0]}<br/>{slideContent.headline[1]}
            </h1>
            <p 
              className="mt-4 md:mt-6 text-sm md:text-lg text-white/80 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
                {slideContent.description}
            </p>
        </div>
      </div>
      
      {/* Navigation and Service Tabs */}
      <div className="absolute z-20 bottom-0 left-0 right-0 hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
            <div className="hidden md:grid grid-cols-4 w-full justify-items-center mb-2">
              {iconPngs.map((icon, index) => {
                const isActive = index === currentSlide;
                return (
                  <div key={icon} className="flex justify-center">
                    <Image
                      src={icon}
                      alt={slides[index].title + ' icon'}
                      width={110}
                      height={110}
                      className={cn(
                        "transition-all duration-300 hover:scale-125",
                        isActive ? "scale-125" : "grayscale brightness-0"
                      )}
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                );
              })}
            </div>
        </div>
        
        <div className="bg-blue-950/90">
            <div className="container mx-auto px-4 md:px-6">
                <Tabs value={activeTabValue} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-x-2 bg-transparent p-0 h-auto rounded-none border-none">
                    {slides.map((slide, index) => {
                        return (
                            <TabsTrigger
                                key={slide.value}
                                value={slide.value}
                                className="group flex flex-col items-center justify-center gap-2 text-white/70 p-4 border-t-4 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary transition-all rounded-none h-full bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:bg-transparent hover:text-white"
                            >
                                <span className="font-semibold text-xs uppercase tracking-wider group-hover:text-white">{slide.title}</span>
                            </TabsTrigger>
                        )
                    })}
                    </TabsList>
                </Tabs>
            </div>
        </div>
      </div>
    </section>
  );
}
