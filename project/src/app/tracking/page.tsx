import { TrackingClient } from './tracking-client';

export default function TrackingPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-headline">Shipment Tracking</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enter your shipment number below to get real-time updates on your cargo's location and status.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <TrackingClient />
      </div>
    </div>
  );
}
