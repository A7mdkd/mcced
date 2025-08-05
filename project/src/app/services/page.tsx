
'use client';

import { PageHeader } from '@/components/page-header';
import { ServiceCard, type Service } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ShieldCheckIcon, Clock, Phone } from 'lucide-react';
import Image from 'next/image';

const services: Service[] = [
   {
    icon: 'package',
    title: 'Cargo Service',
    slug: 'cargo-service',
    description: "Comprehensive cargo services for all your standard shipping needs. We handle a wide variety of goods with efficiency and reliability.",
  },
  {
    icon: 'plane',
    title: 'Air Freight',
    slug: 'air-freight',
    description: "Setting the standard in air freight. Our global network has the power to help businesses grow - based on years of experience and influenced by the changing needs of our customers.",
  },
  {
    icon: 'ship',
    title: 'Sea Freight',
    slug: 'sea-freight',
    description: "The world's fourth largest provider of ocean freight services. We expedited nearly 1.5 million TEUs via ocean freight, moving away from purely transactional business.",
  },
  {
    icon: 'truck',
    title: 'Road Freight',
    slug: 'road-freight',
    description: "Our worldwide network is well positioned to help develop efficient and tailor-made domestic and trans-border programs for distributing your goods.",
  },
   {
    icon: 'train', // تأكد أن ServiceCard يدعم هذا النوع
    title: 'Rail Freight',
    slug: 'rail-freight',
    description: 'A cost-effective and environmentally friendly option for long-distance inland transport, connecting key industrial hubs with reliability and efficiency.',
  },
  {
    icon: 'shieldCheck',
    title: 'Customs',
    slug: 'customs',
    description: 'Navigate the complexities of international trade with our expert customs brokerage services. We ensure smooth and compliant customs clearance for your shipments.',
  }
];


export default function ServicesPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumb="Services"
        backgroundImage="/images/containers-on-a-vessel-global-market-cargo-shipp-2025-01-27-22-31-38-utc.jpg"
        backgroundImageHint="container vessel at sea"
      />

      {/* Quality and Performance Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                QUALITY AND PERFORMANCE AT THE RIGHT PRICE
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <p>
                MCCED is one of the world's leading providers of end-to-end supply chain solutions. We combine intercontinental Air and Ocean Freight with comprehensive Value-Added Logistics Services and Supply Chain Services. The range of Supply Chain Solutions can vary from simple transport or storage up to complex operations.
              </p>
              <p>
                We optimize all activities around information, material and financial flow. We provide globally integrated end-to-end solutions tailored to our customers' supply chain management needs with a special commitment to industry specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'rgb(29, 50, 70)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <ServiceCard key={service.title} service={{
                ...service,
                image:
                  service.slug === 'cargo-service'
                    ? '/images/cargo-container-ship-cargo-maritime-ship-with-con-2024-12-08-00-56-40-utc.jpg'
                    : service.slug === 'air-freight'
                    ? '/images/pexels-tima-miroshnichenko-6169002.jpg'
                    : service.slug === 'sea-freight'
                    ? '/images/aerial-view-of-container-cargo-ship-with-container-2025-01-10-00-16-55-utc.jpg'
                    : service.slug === 'road-freight'
                    ? '/images/pexels-tiger-lily-4480984.jpg'
                    : service.slug === 'rail-freight'
                    ? '/images/pexels-artempodrez-5025667.jpg'
                    : service.slug === 'customs'
                    ? '/images/pexels-julia-m-cameron-6994788.jpg'
                    : service.image,
              }} />
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">EFFECTIVE SOLUTIONS</h2>
              <p className="mt-4 text-muted-foreground">
                You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world's biggest corporations. You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing, or whether it requires a completely new integrated supply chain model.
              </p>
            </div>
            <div>
              <Image 
                src="/images/pexels-tiger-lily-4484078.jpg"
                alt="Effective Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="trucks on highway"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheckIcon className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">SAFE & SECURE</h3>
              <p className="text-sm opacity-90">You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world's biggest corporations.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">FAST DELIVERY</h3>
              <p className="text-sm opacity-90">You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">24/7 SUPPORT</h3>
              <p className="text-sm opacity-90">All of which explains why you'll find the team of outstanding support at TransCargo ready to apply their passion for solutions in support of your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline mb-4 md:mb-0 text-foreground">
              Not sure which solution fits your business needs?
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
