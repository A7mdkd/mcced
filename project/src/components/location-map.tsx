
'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export function LocationMap() {
  return (
    <section className="w-full relative">
      <div className="h-[500px] w-full">
        <iframe
          src="https://maps.google.com/maps?q=10th%20of%20Ramadan%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Head Office Location"
        ></iframe>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg uppercase tracking-wider text-primary">
                EGYPT - HEAD QUARTER
              </h3>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <p className="text-sm">10th of Ramadan City, Sharkia Governorate, Egypt</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <p className="text-sm">+201002434197</p>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <p className="text-sm">ops@mcced.com</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
