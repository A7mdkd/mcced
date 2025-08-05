
'use client';

import { PageHeader } from '@/components/page-header';
import { ServiceCard, type Service } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ShieldCheckIcon, Clock, Phone } from 'lucide-react';
import Image from 'next/image';

const solutions: Service[] = [
  {
    icon: 'users',
    title: 'Consultation',
    slug: 'consultation',
    description: "Expert consultation to optimize your logistics strategy and improve supply chain efficiency. We provide insights that drive growth and reduce costs.",
  },
  {
    icon: 'link',
    title: 'Supply Chain',
    slug: 'supply-chain',
    description: "End-to-end supply chain management solutions. We design, implement, and manage robust supply chains that are both resilient and cost-effective.",
  },
  {
    icon: 'truck',
    title: 'Logistics',
    slug: 'logistics',
    description: "Comprehensive logistics services tailored to your needs. From warehousing to final delivery, we handle every step with precision and care.",
  },
  {
    icon: 'briefcase',
    title: 'Business Development',
    slug: 'business-development',
    description: 'Strategic business development services to help you expand into new markets and grow your business. We identify opportunities and build partnerships.',
  }
];


export default function SolutionsPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <PageHeader
        title="Our Solutions"
        breadcrumb="Solutions"
        backgroundImage="/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg"
        backgroundImageHint="business meeting handshake"
      />

      {/* Quality and Performance Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                TAILORED SOLUTIONS FOR YOUR BUSINESS
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <p>
                We provide globally integrated end-to-end solutions tailored to our customers' supply chain management needs with a special commitment to industry specific requirements. Our solutions are designed to optimize all activities around information, material, and financial flow.
              </p>
              <p>
                From strategic consultation to business development, our team is dedicated to helping you achieve your goals. We leverage our expertise and global network to deliver measurable results and drive sustainable growth for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'rgb(29, 50, 70)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((service) => (
              <ServiceCard key={service.title} service={{
                ...service,
                image:
                  service.slug === 'consultation'
                    ? '/images/pexels-fauxels-3183197.jpg'
                    : service.slug === 'supply-chain'
                    ? '/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg'
                    : service.slug === 'logistics'
                    ? '/images/pexels-elevate-1267338.jpg'
                    : service.slug === 'business-development'
                    ? '/images/Company Founded.jpg'
                    : service.image,
              }} basePath="/solutions" />
            ))}
          </div>
        </div>
      </section>

      {/* Effective Solutions Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">INNOVATIVE APPROACH</h2>
              <p className="mt-4 text-muted-foreground">
                You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world's biggest corporations. You benefit from every innovation, whether it involves a simple extension to our products, a development in warehousing, or a completely new integrated supply chain model.
              </p>
            </div>
            <div>
              <Image 
                src="/images/pexels-fauxels-3183197.jpg"
                alt="Effective Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="team brainstorming office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline mb-4 md:mb-0 text-foreground">
              Ready to optimize your supply chain?
            </h2>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Now <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
