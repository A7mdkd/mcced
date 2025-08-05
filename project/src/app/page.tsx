
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { Globe, ShieldCheck, Users, TrendingUp, PlayCircle, Briefcase, Truck, UsersRound, ArrowRight, Quote, Package, Warehouse, Ship } from 'lucide-react';
import { HeroSlideshow } from "@/components/hero-slideshow";
import { AnimatedCounter } from '@/components/animated-counter';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { InlineQuoteForm } from '@/components/inline-quote-form';
import { LocationMap } from '@/components/location-map';


const ClipboardCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M9 4h6a2 2 0 0 1 2 2v2H7V6a2 2 0 0 1 2-2z"/>
    <path d="m9 14 2 2 4-4"/>
  </svg>
);


export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [serviceCarouselApi, setServiceCarouselApi] = useState<CarouselApi>();
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const serviceAutoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const specialServices = [
    {
      value: "air-freight",
      image: "/images/pexels-tima-miroshnichenko-6169002.jpg",
      aiHint: "cargo plane sunset",
      title: "Air Freight",
      description: "Fast and reliable air freight services for your time-sensitive shipments.",
      slug: "air-freight",
    },
    {
      value: "warehousing",
      image: "/images/foreman-or-worker-work-at-container-cargo-site-che-2025-03-15-12-05-51-utc.jpg",
      aiHint: "warehouse worker packaging",
      title: "Warehousing",
      description: "You can opt for dedicated platforms from the advantages related to shared surfaces.",
      slug: "warehousing",
    },
    {
      value: "road-freight",
      image: "/images/pexels-tiger-lily-4480984.jpg",
      aiHint: "trucks warehouse loading",
      title: "Road Freight",
      description: "With a global presence, we are one of the world's largest freight forwarding companies.",
      slug: "road-freight",
    },
    {
      value: "contract-logistics",
      image: "/images/Global Recognition.jpg",
      aiHint: "business professional smiling",
      title: "Contract Logistics",
      description: "Provides a scalable and customizable solution for retiring outdated IT assets.",
      slug: "contract-logistics",
    },
    {
      value: "sea-freight",
      image: "/images/aerial-view-of-container-cargo-ship-with-container-2025-01-10-00-16-55-utc.jpg",
      aiHint: "container ship sea",
      title: "Sea Freight",
      description: "Cost-effective sea freight for your large and bulk shipments worldwide.",
      slug: "sea-freight",
    },
    {
      value: "customs-brokerage",
      image: "/images/pexels-julia-m-cameron-6994788.jpg",
      aiHint: "customs officer reviewing documents",
      title: "Customs Brokerage",
      description: "Navigate customs with ease. Our experts ensure smooth clearance for your shipments.",
      slug: "customs-brokerage",
    },
  ];
  
  const faqItems = [
    {
        value: 'faq-1',
        question: 'How can I get a quote for my shipment?',
        answer: 'You can easily request a free quote by filling out the form on our "Get a Quote" page. Please provide as much detail as possible about your shipment, including origin, destination, weight, and dimensions, so we can provide an accurate estimate.',
    },
    {
        value: 'faq-2',
        question: 'What types of freight services do you offer?',
        answer: 'We offer a comprehensive range of freight services, including Air, Sea, Road, and Rail Freight. We handle everything from small parcels to oversized cargo and provide tailored solutions to meet your specific needs.',
    },
    {
        value: 'faq-3',
        question: 'Can you handle customs clearance for international shipments?',
        answer: 'Yes, our expert customs brokerage team handles all aspects of customs clearance. We manage documentation, duties, and taxes to ensure your shipments move smoothly across borders without delays.',
    },
    {
        value: 'faq-4',
        question: 'What makes MCCED different from other logistics providers?',
        answer: 'We pride ourselves on our global reach, tech-driven approach with real-time tracking, and unmatched reliability. Our dedicated support team is available 24/7 to provide expert assistance for all your logistics needs.',
    },
    {
        value: 'faq-5',
        question: 'Do you offer warehousing and storage solutions?',
        answer: 'Absolutely. We provide secure and flexible warehousing and storage services as part of our integrated supply chain solutions. Whether you need short-term storage or a long-term distribution center, we have the facilities to support your business.',
    },
  ];
  
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const testimonialTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!serviceCarouselApi) {
      return
    }

    const onSelect = (api: CarouselApi) => {
      setCurrentServiceSlide(api.selectedScrollSnap())
    }
    
    const scheduleAutoplay = () => {
      if (serviceAutoplayTimeoutRef.current) clearTimeout(serviceAutoplayTimeoutRef.current);
      serviceAutoplayTimeoutRef.current = setTimeout(() => {
        serviceCarouselApi.scrollNext()
      }, 4000);
    }
    
    serviceCarouselApi.on('select', onSelect)
    
    serviceCarouselApi.on('pointerDown', () => {
       if (serviceAutoplayTimeoutRef.current) clearTimeout(serviceAutoplayTimeoutRef.current);
    })
    
    serviceCarouselApi.on('settle', scheduleAutoplay)
    
    scheduleAutoplay()


    return () => {
      serviceCarouselApi.off('select', onSelect)
       if (serviceAutoplayTimeoutRef.current) clearTimeout(serviceAutoplayTimeoutRef.current);
    }
  }, [serviceCarouselApi])
  
  useEffect(() => {
    const nextTestimonial = () => setTestimonialSlide(prev => (prev + 1) % testimonials.length);
    testimonialTimeoutRef.current = setTimeout(nextTestimonial, 5000);
    return () => {
        if (testimonialTimeoutRef.current) clearTimeout(testimonialTimeoutRef.current);
    }
  }, [testimonialSlide]);

  const handleTestimonialDotClick = (index: number) => {
    setTestimonialSlide(index);
    if (testimonialTimeoutRef.current) clearTimeout(testimonialTimeoutRef.current);
  }

  const handleDotClick = (index: number) => {
    if (!serviceCarouselApi) return;
    serviceCarouselApi.scrollTo(index);
    if (serviceAutoplayTimeoutRef.current) clearTimeout(serviceAutoplayTimeoutRef.current);
  };


  const stats = [
    {
      icon: <ClipboardCheckIcon className="h-12 w-12 text-white" />,
      number: 320,
      label: "Projects Done"
    },
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      number: 72,
      label: "Clients Worldwide"
    },
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      number: 153,
      label: "Owned Vehicles"
    },
    {
      icon: <UsersRound className="h-12 w-12 text-white" />,
      number: 114,
      label: "People In Team"
    }
  ]
  
  const whyChooseUs = [
    {
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      title: "Global Reach",
      description: "Our extensive network ensures your cargo reaches any destination, anywhere.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 mb-4 text-primary" />,
      title: "Tech-Driven",
      description: "Leveraging cutting-edge technology for real-time tracking and efficiency.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
      title: "Unmatched Reliability",
      description: "Committed to delivering your shipments on time, every time, with utmost care.",
    },
    {
      icon: <Users className="h-8 w-8 mb-4 text-primary" />,
      title: "Dedicated Support",
      description: "A team of experts available 24/7 to support your logistics needs.",
    },
  ];

  const testimonials = [
    {
      name: "Anna Briggs",
      title: "CEO, Smart Move Ltd.",
      quote: "I've been happy with the services provided by TransCargo LLC. Samantha Culligan has been wonderful! She has returned my calls quickly, and she answered all my questions!",
      bgImage: "/images/pexels-julia-m-cameron-6994788.jpg",
      aiHint: "professional woman outside"
    },
    {
      name: "John Doe",
      title: "CEO, Tech Innovators",
      quote: "MCCED's logistics solutions have been a game-changer for our international distribution. Their professionalism and tech-driven approach are second to none.",
      bgImage: "/images/pexels-artempodrez-5025667.jpg",
      aiHint: "man looking at camera"
    },
    {
      name: "Jane Smith",
      title: "Supply Chain Manager, Global Retail",
      quote: "The reliability and real-time tracking from MCCED give us complete peace of mind. They are a true partner in our success.",
      bgImage: "/images/pexels-tiger-lily-4480984.jpg",
      aiHint: "woman smiling office"
    }
  ];

  const partners = [
    { name: "Global Trade Inc.", logo: "/logos/22.svg", aiHint: "abstract logo" },
    { name: "Innovate Corp.", logo: "/logos/23.svg", aiHint: "geometric logo" },
    { name: "Quantum Solutions", logo: "/logos/24.svg", aiHint: "minimalist logo" },
    { name: "Vertex Industries", logo: "/logos/25.svg", aiHint: "tech logo" },
    { name: "Apex Logistics", logo: "/logos/26.svg", aiHint: "symmetrical logo" },
    { name: "Pioneer Group", logo: "/logos/27.svg", aiHint: "bold logo" },
  ];

  const specialFeatures = [
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "PACKAGING AND STORAGE",
    },
    {
      icon: <Warehouse className="h-12 w-12 text-primary" />,
      title: "WAREHOUSING SERVICE",
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "GROUND TRANSPORT",
    },
    {
      icon: <Ship className="h-12 w-12 text-primary" />,
      title: "LOGISTIC SERVICES",
    },
  ]

  return (
    <div className="flex flex-col">
      <HeroSlideshow />

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                WELCOME TO OUR WEBSITE!
              </h2>
              <p className="text-muted-foreground">
                MCCED makes business flow. As one of the world's leading non-asset-based supply chain management companies, we design and implement industry-leading solutions in both freight management.
              </p>
              <p className="text-muted-foreground">
                Over 42,000 dedicated employees, working in 17 regional clusters around the globe, deliver operational excellence — to provide viable answers to the most challenging supply chain questions.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div>
                  <Image src="/images/main logo.png" alt="MCCED Logo" width={150} height={50} data-ai-hint="logo" />
                 
                </div>
              </div>
            </div>
            <div className="relative group">
              <Image
                src="/images/pexels-fauxels-3183197.jpg"
                alt="Business meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
                data-ai-hint="business meeting handshake"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <PlayCircle className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="w-full py-12 md:py-20" style={{backgroundColor: 'hsl(var(--primary))'}}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                {stat.icon}
                <p className="text-4xl font-bold mt-4">
                  {startCounter ? <AnimatedCounter target={stat.number} /> : '0'}
                </p>
                <p className="text-sm uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-4/12 space-y-6 text-center lg:text-left">
              <div className="w-16 h-1 bg-primary mx-auto lg:mx-0"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                SPECIAL SERVICES
              </h2>
              <p className="text-muted-foreground">
                Globally known for our ability to handle every last detail of our customers' particular logistics and forwarding needs. Our Special Services team takes care of all your logistics.
              </p>
              <div className="flex gap-2 pt-4 justify-center lg:justify-start">
                {specialServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      'h-3 w-3 rounded-full transition-colors',
                      currentServiceSlide === index ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                    )}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-8/12 w-full">
              <Carousel
                setApi={setServiceCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {specialServices.map((service, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="group overflow-hidden rounded-lg flex flex-col h-full">
                           <div className="relative w-full aspect-[400/250]">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                style={{objectFit: 'cover'}}
                                className="transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={service.aiHint}
                              />
                            </div>
                            <div className="p-6 bg-card flex flex-col flex-grow">
                              <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                              <p className="mt-2 text-muted-foreground flex-grow min-h-[6rem]">{service.description}</p>
                              <Link href="/services" className="inline-flex items-center text-primary font-semibold mt-4 group/link">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                              </Link>
                            </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Choose MCCED</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the MCCED difference. We are committed to excellence in every shipment.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="text-center p-6">
                {reason.icon}
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Parallax Section */}
      <section 
        className="relative w-full py-16 md:py-24 bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url('/images/containers-on-a-vessel-global-market-cargo-shipp-2025-01-27-22-31-38-utc.jpg')`}}
        data-ai-hint="logistics hub"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative mx-auto px-4 md:px-6 text-white text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-shadow-lg">
              Streamline Your Global Supply Chain
            </h2>
            <p className="mt-6 text-lg md:text-xl text-shadow">
              We provide end-to-end logistics solutions tailored to your industry. Trust our expertise to manage your cargo and ensure timely, secure delivery worldwide.
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Contact Now
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA and FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Your Partner in Global Logistics
              </h2>
              <p className="text-muted-foreground">
                From complex supply chains to time-sensitive shipments, we provide reliable and innovative solutions to meet your business needs. Let's build a smarter supply chain, together.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">
                FAQ
              </h2>
              <Accordion type="single" collapsible className="w-full" defaultValue={faqItems[0].value}>
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-left hover:no-underline font-semibold data-[state=open]:text-primary data-[state=open]:underline">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials */}
       <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-[1000ms]',
              testimonialSlide === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={testimonial.bgImage}
              alt={testimonial.name}
              fill
              style={{objectFit: 'cover'}}
              className="transition-transform duration-[5000ms] ease-out"
              data-ai-hint={testimonial.aiHint}
            />
             <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        <div className="relative z-10 flex h-full items-center justify-start text-left">
            <div 
                key={testimonialSlide}
                className="bg-card/90 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-2xl text-card-foreground animate-fade-in-up ml-24"
             >
              <Quote className="mx-auto h-12 w-12 text-primary" />
              <p className="mt-6 text-xl md:text-2xl italic">
                {testimonials[testimonialSlide].quote}
              </p>
              <div className="mt-8">
                <p className="font-bold text-lg">{testimonials[testimonialSlide].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[testimonialSlide].title}</p>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTestimonialDotClick(index)}
                    className={cn(
                      'h-2 w-2 rounded-full transition-colors',
                      testimonialSlide === index ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-primary/70'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl font-semibold text-muted-foreground">Trusted by Industry Leaders</h2>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={220} 
                  height={110} 
                  className="transition-all grayscale opacity-60 hover:grayscale-0 hover:opacity-100 invert dark:invert-0" 
                  data-ai-hint={partner.aiHint} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special + Quote Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                  WHAT MAKES US SPECIAL?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Over 42,000 dedicated employees, working in 17 regional clusters around the globe, deliver operational excellence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {specialFeatures.map(feature => (
                  <div key={feature.title} className="flex items-center gap-4">
                    {feature.icon}
                    <h3 className="font-bold text-sm">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-lg" style={{backgroundColor: 'rgb(29, 50, 70)'}}>
               <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-white">
                  REQUEST A FREE QUOTE
                </h2>
                <div className="mt-8">
                  <InlineQuoteForm />
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <LocationMap />
    </div>
  );
}
