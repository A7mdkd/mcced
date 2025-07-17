import { Metadata } from 'next';
import SeaFreightService from '@/components/sections/services/SeaFreightService';

export const metadata: Metadata = {
  title: 'Sea Freight Services | MCCED Logistics',
  description: 'Cost-effective sea freight solutions for large volume shipments.',
};

export default function SeaFreightPage() {
  return (
    <main>
      <SeaFreightService />
    </main>
  );
} 