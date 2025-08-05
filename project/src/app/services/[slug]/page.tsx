
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';

const serviceData = {
  'cargo-service': {
    title: 'Cargo Service',
    image: '/images/cargo-container-ship-cargo-maritime-ship-with-con-2024-12-08-00-56-40-utc.jpg',
    aiHint: 'cargo logistics hub',
    description: [
      "Our general cargo services are designed to handle a wide variety of goods with efficiency and reliability. We provide comprehensive solutions for all your standard shipping needs, ensuring your cargo is transported safely and on time. Our network and expertise allow us to manage logistics for a diverse range of products and industries.",
      "From collection to delivery, we offer a seamless experience with real-time tracking and dedicated support. Whether you're shipping locally or globally, our team is committed to providing a high-quality service that meets your expectations."
    ],
    features: [
      'Handling of various types of general cargo',
      'Global and domestic shipping routes',
      'Secure packaging and handling',
      'Real-time tracking and status updates',
      'Dedicated customer service support'
    ]
  },
  'air-freight': {
    title: 'Air Freight',
    image: '/images/pexels-tima-miroshnichenko-6169002.jpg',
    aiHint: 'cargo plane tarmac sunset',
    description: [
      "As a leader in the global air freight industry, we provide a full suite of services to meet your needs. We understand the importance of speed and reliability in air transport. Our extensive network of dedicated air freight specialists ensures your shipments are handled with expertise and precision.",
      "From small parcels to oversized cargo, we have the capacity and flexibility to manage your shipments. We offer customized solutions, including temperature-controlled transport, hazardous materials handling, and high-value cargo security. Our advanced tracking technology provides real-time visibility, giving you peace of mind from takeoff to landing."
    ],
    features: [
      'Global network with coverage of all major airports',
      'Express and standard shipping options',
      'Door-to-door service and customs clearance',
      'Specialized handling for sensitive cargo',
      '24/7 customer support and tracking'
    ]
  },
  'sea-freight': {
    title: 'Sea Freight',
    image: '/images/aerial-view-of-container-cargo-ship-with-container-2025-01-10-00-16-55-utc.jpg',
    aiHint: 'container ship at port',
    description: [
        "Our sea freight services offer a reliable and cost-effective solution for transporting large volumes of goods internationally. We manage a vast network of shipping lanes and carriers to ensure your cargo reaches its destination safely and on time. Whether you need Full Container Load (FCL) or Less than Container Load (LCL) services, we have you covered.",
        "We handle all aspects of the shipping process, including documentation, customs brokerage, and inland transportation. Our team of experts is dedicated to providing tailored solutions that meet your specific supply chain requirements, ensuring a smooth and efficient journey for your goods across the oceans."
    ],
    features: [
        'FCL and LCL options available',
        'Global port coverage and carrier relationships',
        'Consolidation and deconsolidation services',
        'Real-time shipment tracking',
        'Comprehensive cargo insurance options'
    ]
  },
  'road-freight': {
    title: 'Road Freight',
    image: '/images/pexels-tiger-lily-4480984.jpg',
    aiHint: 'fleet of trucks on highway',
    description: [
        "Our road freight services provide flexible and efficient transportation for your goods across domestic and international borders. With a modern fleet and a network of trusted partners, we offer a range of solutions, including Full Truckload (FTL) and Less than Truckload (LTL) shipping. We are committed to providing reliable, on-time delivery for all your ground transport needs.",
        "We leverage advanced logistics technology to optimize routes, track shipments, and provide you with complete visibility. Our services are designed to be scalable and can be customized to handle everything from single pallets to oversized loads, with a focus on safety and security every step of the way."
    ],
    features: [
        'FTL and LTL shipping services',
        'Domestic and cross-border transportation',
        'Express and economy service levels',
        'Dedicated fleet and specialized equipment',
        'GPS tracking on all vehicles'
    ]
  },
   'rail-freight': {
    title: 'Rail Freight',
    image: '/images/pexels-artempodrez-5025667.jpg',
    aiHint: 'freight train mountains',
    description: [
        "Rail freight is a cost-effective and environmentally friendly option for long-distance inland transportation. Our rail logistics services connect key industrial hubs, offering a reliable alternative to road transport for bulk and containerized goods. We provide seamless integration with other transport modes for a complete door-to-door solution.",
        "With a focus on safety and efficiency, we manage all aspects of your rail shipments, from wagon allocation to terminal handling. Our network provides extensive coverage, and our team ensures your cargo moves smoothly along the tracks to its final destination."
    ],
    features: [
        'Cost-effective long-distance transport',
        'Environmentally friendly shipping option',
        'Block train and single wagon services',
        'Intermodal connectivity with road and sea freight',
        'Secure and reliable transit'
    ]
  },
  'customs': {
    title: 'Customs',
    image: '/images/pexels-julia-m-cameron-6994788.jpg',
    aiHint: 'customs officer inspecting cargo',
    description: [
        "Navigating the complexities of customs clearance is crucial for international trade. Our licensed customs brokerage team provides expert guidance and services to ensure your shipments comply with all regulations and move smoothly across borders. We handle all necessary documentation, duties, and taxes to prevent delays and minimize costs.",
        "With our deep understanding of international trade laws and relationships with customs authorities worldwide, we facilitate a swift and efficient clearance process. We are committed to providing accurate, timely, and compliant customs services to support your global business operations."
    ],
    features: [
        'Licensed and experienced customs brokers',
        'Import and export clearance',
        'Tariff classification and duty calculation',
        'Compliance consulting and trade advisory',
        'Electronic filing and automated processing'
    ]
  }
};

const allServices = [
  { slug: 'cargo-service', title: 'Cargo Service' },
  { slug: 'air-freight', title: 'Air Freight' },
  { slug: 'sea-freight', title: 'Sea Freight' },
  { slug: 'road-freight', title: 'Road Freight' },
  { slug: 'rail-freight', title: 'Rail Freight' },
  { slug: 'customs', title: 'Customs' },
];

const faqItems = [
    { value: 'faq-1', question: 'What is the typical transit time?', answer: 'Transit times vary based on the destination and service level selected. For specific details, please request a quote or contact our support team.' },
    { value: 'faq-2', question: 'How is the cost calculated?', answer: 'Costs are calculated based on weight, volume, origin, destination, and the type of service. We provide detailed, transparent quotes for all shipments.' },
    { value: 'faq-3', question: 'Is my shipment insured?', answer: 'We offer comprehensive cargo insurance options to protect your goods against loss or damage during transit. Please ask your service representative for more details.' },
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumb="Service Details"
        backgroundImage="/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg"
        backgroundImageHint="warehouse background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={500}
              className="w-full rounded-lg mb-8"
              data-ai-hint={service.aiHint}
            />
            <div className="prose max-w-none">
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>

            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Service Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="text-left hover:no-underline font-semibold data-[state=open]:text-primary">
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
          <aside className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                    <div className="w-12 h-1 bg-primary mb-2"></div>
                    ALL SERVICES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {allServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
                        <span className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                            {s.title}
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
    </>
  );
}
