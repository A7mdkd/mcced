'use server';
/**
 * @fileOverview A real-time shipment tracking AI agent.
 *
 * - trackShipment - A function that handles the shipment tracking process.
 * - TrackShipmentInput - The input type for the trackShipment function.
 * - TrackShipmentOutput - The return type for the trackShipment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrackShipmentInputSchema = z.object({
  shipmentNumber: z.string().describe('The shipment number to track.'),
});
export type TrackShipmentInput = z.infer<typeof TrackShipmentInputSchema>;

const TrackShipmentOutputSchema = z.object({
  location: z.object({
    latitude: z.number().describe('The latitude of the current shipment location.'),
    longitude: z.number().describe('The longitude of the current shipment location.'),
    city: z.string().describe('The city of the current shipment location.'),
    country: z.string().describe('The country of the current shipment location.'),
  }).describe('The current location of the shipment.'),
  status: z.string().describe('The current status of the shipment (e.g., In Transit, Arrived at Destination).'),
  estimatedDelivery: z.string().describe('The estimated delivery date of the shipment.'),
  mapUrl: z.string().describe('A URL to a map showing the shipment route and current location.'),
});
export type TrackShipmentOutput = z.infer<typeof TrackShipmentOutputSchema>;

export async function trackShipment(input: TrackShipmentInput): Promise<TrackShipmentOutput> {
  return trackShipmentFlow(input);
}

const trackShipmentPrompt = ai.definePrompt({
  name: 'trackShipmentPrompt',
  input: {schema: TrackShipmentInputSchema},
  output: {schema: TrackShipmentOutputSchema},
  prompt: `You are an expert logistics assistant. You are provided with a shipment number, and you must return the current location, status, estimated delivery date and map url for the shipment.

Shipment Number: {{{shipmentNumber}}}

Return the output in JSON format. For the mapUrl, use a URL to a map service like Google Maps showing the shipment route from origin to destination and the current location.
`,
});

const trackShipmentFlow = ai.defineFlow(
  {
    name: 'trackShipmentFlow',
    inputSchema: TrackShipmentInputSchema,
    outputSchema: TrackShipmentOutputSchema,
  },
  async input => {
    const {output} = await trackShipmentPrompt(input);
    return output!;
  }
);
