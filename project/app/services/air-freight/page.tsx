import { Metadata } from 'next';
import AirFreightService from '@/components/sections/services/AirFreightService';

export const metadata: Metadata = {
  title: 'Air Freight Services | MCCED Logistics',
  description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.',
};

export default function AirFreightPage() {
  return (
    <main>
      <AirFreightService />
    </main>
  );
} 