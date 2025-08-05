
import { PageHeader } from "@/components/page-header";
import { QuoteForm } from "./quote-form";

export default function QuotePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <PageHeader
        title="Get a Quote"
        breadcrumb="Quote"
        backgroundImage="/images/loading-of-cargo-containers-to-airplane-2025-02-16-11-29-13-utc.jpg"
        backgroundImageHint="Cargo containers being loaded for shipment"
      />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-1 bg-primary mb-4 mx-auto"></div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-4">
                    REQUEST A QUOTE
                </h2>
                <p className="text-muted-foreground mb-8">
                    Fill out the form below, and our team will get back to you with a customized quote for your shipping needs. We are here to provide you with the best possible service.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <QuoteForm />
            </div>
        </div>
      </div>
    </>
  );
}
