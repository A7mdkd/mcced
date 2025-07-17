import { Metadata } from 'next';
import CustomsService from '@/components/sections/services/CustomsService';

export const metadata: Metadata = {
  title: 'Customs Services | MCCED Logistics',
  description: 'Expert customs clearance and documentation services.',
};

export default function CustomsPage() {
  return (
    <main>
      <CustomsService />
    </main>
  );
} 