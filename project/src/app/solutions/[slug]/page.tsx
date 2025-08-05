
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';

const solutionData = {
  'consultation': {
    title: 'Consultation',
    image: '/images/pexels-fauxels-3183197.jpg',
    aiHint: 'business consultation meeting',
    description: [
      "Our expert consultants work with you to analyze your current logistics and supply chain operations. We identify areas for improvement, cost reduction, and efficiency gains. Our data-driven approach ensures that our recommendations are practical, actionable, and tailored to your specific business needs.",
      "We provide strategic guidance on everything from network design and inventory management to technology adoption and risk mitigation. Our goal is to help you build a more resilient, agile, and competitive supply chain that supports your long-term growth objectives."
    ],
    features: [
      'In-depth supply chain analysis and assessment',
      'Customized strategy development',
      'Performance benchmarking and KPI tracking',
      'Technology and automation consulting',
      'Risk management and contingency planning'
    ]
  },
  'supply-chain': {
    title: 'Supply Chain Management',
    image: '/images/containers-ready-to-be-shipped-logistic-global-m-2025-01-27-22-46-41-utc.jpg',
    aiHint: 'global supply chain network',
    description: [
        "We offer comprehensive, end-to-end supply chain management services. Our integrated solutions cover every aspect of your supply chain, from procurement and sourcing to warehousing, distribution, and final-mile delivery. We act as an extension of your team, managing the complexities so you can focus on your core business.",
        "Our global network, advanced technology platform, and industry expertise enable us to design, implement, and manage supply chains that are both efficient and resilient. We are committed to delivering visibility, reliability, and continuous improvement to drive value for your business."
    ],
    features: [
        'End-to-end supply chain visibility',
        'Procurement and supplier management',
        'Global warehousing and distribution network',
        'Order fulfillment and reverse logistics',
        'Data analytics and performance reporting'
    ]
  },
  'logistics': {
    title: 'Logistics',
    image: '/images/pexels-elevate-1267338.jpg',
    aiHint: 'logistics coordination hub',
    description: [
        "Our logistics services are designed to be flexible, scalable, and tailored to meet the unique needs of your business. We offer a full range of transportation, warehousing, and value-added services to ensure your goods are moved and managed efficiently. Our commitment to operational excellence means you can count on us for reliable, on-time performance.",
        "Whether you require a single service or a fully integrated logistics solution, we have the capabilities and expertise to deliver. We leverage our extensive network and technology to provide seamless coordination and complete visibility across all your logistics activities."
    ],
    features: [
        'Multimodal transportation management',
        'Flexible warehousing and storage solutions',
        'Value-added services (kitting, assembly, labeling)',
        'Cross-docking and consolidation',
        'Dedicated and shared logistics operations'
    ]
  },
   'business-development': {
    title: 'Business Development',
    image: '/images/Company Founded.jpg',
    aiHint: 'business growth strategy chart',
    description: [
        "We help you identify and capitalize on new growth opportunities. Our business development services are focused on helping you expand into new markets, reach new customers, and build strategic partnerships. We provide the market intelligence, strategic planning, and hands-on support you need to succeed.",
        "Our team works with you to understand your growth objectives and develop a customized plan to achieve them. From market entry strategy to lead generation and sales support, we provide the expertise and resources to help you accelerate your growth and achieve your business goals."
    ],
    features: [
        'Market research and opportunity analysis',
        'Go-to-market strategy development',
        'Lead generation and sales channel development',
        'Strategic partnership and alliance building',
        'International trade and expansion support'
    ]
  }
};

const allSolutions = [
  { slug: 'consultation', title: 'Consultation' },
  { slug: 'supply-chain', title: 'Supply Chain' },
  { slug: 'logistics', title: 'Logistics' },
  { slug: 'business-development', title: 'Business Development' },
];

const faqItems = [
    { value: 'faq-1', question: 'How do you tailor solutions to our industry?', answer: 'We start with a deep-dive analysis of your specific industry challenges and requirements. Our team has experience across various sectors, allowing us to apply best practices while customizing every aspect of the solution to fit your unique business context.' },
    { value: 'faq-2', question: 'What is the typical ROI on your solutions?', answer: 'Return on investment varies depending on the scope of the solution, but our clients typically see significant cost savings, improved efficiency, and enhanced customer satisfaction. We work with you to define key performance indicators (KPIs) and track progress against them.' },
    { value: 'faq-3', question: 'How do you ensure a smooth implementation?', answer: 'Our project management team follows a structured implementation methodology, ensuring clear communication, defined milestones, and minimal disruption to your operations. We work collaboratively with your team every step of the way.' },
];

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const solution = solutionData[slug as keyof typeof solutionData];

  if (!solution) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={solution.title}
        breadcrumb="Solution Details"
        backgroundImage="/images/group-of-workers-in-an-empty-container-storage-yar-2025-01-08-09-17-31-utc.jpg"
        backgroundImageHint="office background"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Image
              src={solution.image}
              alt={solution.title}
              width={1200}
              height={500}
              className="w-full rounded-lg mb-8"
              data-ai-hint={solution.aiHint}
            />
            <div className="prose max-w-none">
              {solution.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>

            <div className="my-12">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-2xl font-bold font-headline mb-6">Solution Features</h2>
              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
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
                    ALL SOLUTIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {allSolutions.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/solutions/${s.slug}`} className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors group">
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
                    <p className="text-sm mb-4">Contact us if you have any questions about our solutions. Our team is happy to help.</p>
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
