import { Metadata } from 'next';
import GetAQuoteForm from '../../components/sections/GetAQuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote | MCCED Logistics',
  description: 'Request a free logistics quote tailored to your needs.',
};

export default function GetAQuotePage() {
  return (
    <main>
      <GetAQuoteForm />
    </main>
  );
}
