
'use client';

import { Plane, Ship, Truck, Warehouse, Package, ShieldCheck, Users, Link as LinkIcon, Briefcase, Train } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const iconMap = {
  plane: Plane,
  ship: Ship,
  truck: Truck,
  warehouse: Warehouse,
  package: Package,
  shieldCheck: ShieldCheck,
  users: Users,
  link: LinkIcon,
  briefcase: Briefcase,
  train: Train,
};

export interface Service {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  slug: string;
}

interface ServiceCardProps {
  service: Service;
  basePath?: string;
}

export function ServiceCard({ service, basePath = '/services' }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Plane;

  return (
    <div className="flex items-start gap-6 text-white/90">
      <div className="flex-shrink-0">
        <IconComponent className="h-16 w-16 text-primary" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold font-headline mb-2">
            <Link href={`${basePath}/${service.slug}`} className="hover:text-primary transition-colors">{service.title}</Link>
        </h3>
        <p className="text-sm text-white/70">{service.description}</p>
      </div>
    </div>
  );
}
