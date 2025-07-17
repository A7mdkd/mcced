import './globals.css';
import type { Metadata } from 'next';
// تمت إزالة استيراد Roboto من Google Fonts لاستخدام الخط المحلي
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// لا حاجة لتعريف roboto لأن الخط معرف محليًا في CSS

export const metadata: Metadata = {
  title: 'MCCED - Global Logistics Solutions | On Time, Every Time, Anywhere',
  description: 'MCCED provides comprehensive global logistics services including international freight, customs brokerage, warehousing, and supply chain solutions. Trusted by businesses worldwide since 2020.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
