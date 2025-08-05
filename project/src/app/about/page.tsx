
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight, ArrowRight, Heart, Users, Award, Zap } from 'lucide-react';

const categories = [
  'Air Freight',
  'Contract Logistics',
  'Ground Freight',
  'Ocean Freight',
  'SCS Management',
  'Special Offers',
];

const coreValues = [
    {
        icon: <Heart className="h-10 w-10 text-primary" />,
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity and ethical behavior in all of our actions.'
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: 'Customer Focus',
        description: 'Our success is tied to our customers\' success. We are committed to providing solutions that meet their needs.'
    },
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: 'Excellence',
        description: 'We pursue excellence in everything we do, striving for the highest quality in our services and operations.'
    },
    {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: 'Innovation',
        description: 'We embrace innovation and technology to continuously improve our services and provide cutting-edge solutions.'
    }
]

export default function AboutPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
        backgroundImage="/images/International Expansion.jpg"
        backgroundImageHint="office background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold font-headline mb-4">Who We Are</h2>
              <Image
                src="/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg"
                alt="Who We Are"
                width={800}
                height={400}
                className="rounded-lg shadow-md mb-6"
                data-ai-hint="team work warehouse"
              />
              <p className="text-muted-foreground">
                MCCED makes business flow. As one of the world's leading non-asset-based supply chain management companies, we design and implement industry-leading solutions in both freight management and contract logistics.
              </p>
              <p className="text-muted-foreground">
                Over 42,000 dedicated employees, working in 17 regional clusters around the globe, deliver operational excellence — to provide viable answers to the most challenging supply chain questions. MCCED applies its renowned operational expertise to provide best-in-class services across its integrated worldwide network, where our focus is equally on general business and the specialist needs of the automotive, consumer & retail, energy, healthcare, industrial & aerospace and technology sectors.
              </p>
            </div>
            
            <div className="my-12">
                 <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl font-bold font-headline mb-8">Our Core Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {coreValues.map((value) => (
                        <div key={value.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">{value.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">{value.title}</h3>
                                <p className="text-muted-foreground mt-2">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-headline mb-4">Our Mission</h3>
                <p className="text-muted-foreground">To be the most trusted and efficient global logistics and transportation provider, delivering excellence and value to our customers, partners, and employees.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline mb-4">Our Vision</h3>
                <p className="text-muted-foreground">To connect the world through smart and sustainable logistics, empowering businesses to grow and communities to thrive.</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <Card>
              <CardContent className="p-4">
                <form className="relative">
                  <Input placeholder="Search..." className="pr-10" />
                  <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                    <div className="w-12 h-1 bg-primary mb-2"></div>
                    CATEGORIES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link href="/services" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
                        <span className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                            {category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm mb-4">Contact us if you have any questions about our services. Our team is happy to help.</p>
                    <Button asChild variant="secondary" className="w-full">
                        <Link href="/contact">Contact Us <ArrowRight /></Link>
                    </Button>
                </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
