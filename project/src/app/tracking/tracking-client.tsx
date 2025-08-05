'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { trackShipmentAction, type TrackingState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const initialState: TrackingState = {
  data: null,
  error: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Track Shipment
      <ArrowRight />
    </Button>
  );
}

export function TrackingClient() {
  const [state, formAction] = useFormState(trackShipmentAction, initialState);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Your Shipment</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              name="shipmentNumber"
              placeholder="e.g., MC123456789"
              required
              className="flex-grow"
            />
            <SubmitButton />
          </div>
          {state.error && (
            <p className="text-sm font-medium text-destructive">{state.error}</p>
          )}
        </form>

        {state.error && !state.data && (
          <Alert variant="destructive" className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        {state.data && (
          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Details</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-semibold">{state.data.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Current Location</p>
                    <p className="font-semibold">{`${state.data.location.city}, ${state.data.location.country}`}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Estimated Delivery</p>
                    <p className="font-semibold">{state.data.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipment Route</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-md border">
                  <iframe
                    src={state.data.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shipment Map"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
