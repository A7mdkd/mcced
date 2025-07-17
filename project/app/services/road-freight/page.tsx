import { Metadata } from 'next';
import RoadFreightService from '@/components/sections/services/RoadFreightService';

export const metadata: Metadata = {
  title: 'Road Freight Services | MCCED Logistics',
  description: 'Reliable road transportation services for local and international deliveries.',
};

export default function RoadFreightPage() {
  return (
    <main>
      <RoadFreightService />
    </main>
  );
} 