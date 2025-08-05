'use server';

import { z } from 'zod';

const quoteSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service type.'),
  destination: z.string().min(1, 'Destination is required.'),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  specialHandling: z.string().optional(),
  name: z.string().min(1, 'Your name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
});

export type QuoteState = {
  message: string | null;
  error: string | null;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function submitQuoteAction(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const validatedFields = quoteSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: null,
      error: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // In a real application, you would send this data via email or to a CRM.
    // For this example, we'll just log it to the console.
    console.log('New Quote Request:', validatedFields.data);

    return {
      message: "Thank you for your request! We'll be in touch with your quote shortly.",
      error: null,
      errors: {},
    };
  } catch (error) {
    console.error(error);
    return {
      message: null,
      error: 'An unexpected error occurred. Please try again later.',
      errors: {},
    };
  }
}
