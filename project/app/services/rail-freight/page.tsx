import { Metadata } from 'next';
import RailFreightService from '@/components/sections/services/RailFreightService';

export const metadata: Metadata = {
  title: 'Rail Freight Services | MCCED Logistics',
  description: 'Eco-friendly rail freight solutions for long-distance cargo transportation.',
};

export default function RailFreightPage() {
  return (
    <main>
      <RailFreightService />
    </main>
  );
} 