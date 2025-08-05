
'use server';

import { z } from 'zod';
import { sendContactEmail } from './nodemailer';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(1, 'Subject is required.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export type ContactState = {
  message: string | null;
  error: string | null;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function submitContactAction(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: null,
      error: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // إرسال البيانات إلى ايميل الشركة
    await sendContactEmail(validatedFields.data);

    return {
      message: "Thank you for your message! We'll get back to you shortly.",
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
