
'use client';

import { PageHeader } from '@/components/page-header';
import { LocationMap } from '@/components/location-map';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, Building } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Main Office",
      value: "Main office Egypt , new cairo "
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone Number",
      value: "+201002434197"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Address",
      value: "ops@mcced.com"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Office Hours",
      value: "Mon - Fri: 10:00 AM - 6:00 PM"
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact"
        backgroundImage="/images/call center.jpg"
        backgroundImageHint="call center woman smiling"
      />
      
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-muted-foreground mb-8">
                We are here to help. Please fill out the form below, and our team will get back to you as soon as possible. For immediate assistance, please use the contact details provided.
              </p>
              <ContactForm />
            </div>
            <div>
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">
                CONTACT INFO
              </h2>
              <div className="space-y-8">
                {contactDetails.map(detail => (
                  <div key={detail.title} className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold font-headline">{detail.title}</h3>
                      <p className="text-muted-foreground mt-1">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LocationMap />
    </>
  );
}
