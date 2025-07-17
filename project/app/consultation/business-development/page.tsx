import { Metadata } from 'next';
import BusinessDevelopmentService from '@/components/sections/consultation/BusinessDevelopmentService';

export const metadata: Metadata = {
  title: 'Business Development Consultation | MCCED Logistics',
  description: 'Strategic business growth and market expansion services.',
};

export default function BusinessDevelopmentPage() {
  return (
    <main>
      <BusinessDevelopmentService />
    </main>
  );
} 