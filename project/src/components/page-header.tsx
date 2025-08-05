
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
  backgroundImageHint: string;
}

export function PageHeader({ title, breadcrumb, backgroundImage, backgroundImageHint }: PageHeaderProps) {
  const pathname = usePathname();

  return (
    <div className="relative h-64 md:h-80 w-full">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint={backgroundImageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center pt-24">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-shadow-lg">{title}</h1>
        <div className="flex items-center gap-2 mt-4 text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-muted-foreground">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
