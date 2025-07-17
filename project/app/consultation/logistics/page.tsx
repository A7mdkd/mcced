import { Metadata } from 'next';
import LogisticsService from '@/components/sections/consultation/LogisticsService';

export const metadata: Metadata = {
  title: 'Logistics Consultation | MCCED Logistics',
  description: 'End-to-end logistics planning and execution services.',
};

export default function LogisticsConsultationPage() {
  return (
    <main>
      <LogisticsService />
    </main>
  );
} 