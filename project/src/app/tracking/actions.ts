'use server';

import { trackShipment, type TrackShipmentOutput } from '@/ai/flows/real-time-shipment-tracking';
import { z } from 'zod';

const formSchema = z.object({
  shipmentNumber: z.string().min(1, 'Shipment number is required.'),
});

export type TrackingState = {
  data: TrackShipmentOutput | null;
  error: string | null;
  message: string | null;
};

export async function trackShipmentAction(
  prevState: TrackingState,
  formData: FormData
): Promise<TrackingState> {
  const validatedFields = formSchema.safeParse({
    shipmentNumber: formData.get('shipmentNumber'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.flatten().fieldErrors.shipmentNumber?.[0] || 'Invalid input.',
      message: null,
    };
  }

  try {
    const result = await trackShipment({ shipmentNumber: validatedFields.data.shipmentNumber });
    return { data: result, error: null, message: 'Shipment found.' };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Failed to track shipment. Please check the number and try again.', message: null };
  }
}
