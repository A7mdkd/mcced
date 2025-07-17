import { Metadata } from 'next';
import SupplyChainService from '@/components/sections/consultation/SupplyChainService';

export const metadata: Metadata = {
  title: 'Supply Chain Consultation | MCCED Logistics',
  description: 'Comprehensive supply chain optimization and management solutions.',
};

export default function SupplyChainPage() {
  return (
    <main>
      <SupplyChainService />
    </main>
  );
} 