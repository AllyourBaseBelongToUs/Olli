import { NextRequest, NextResponse } from 'next/server';
// Temporarily comment out Edge Config imports until it's set up
// import { addContactSubmission } from '@/lib/edge-config';
import { sendEmailNotification } from '@/lib/email';
import { z } from 'zod';

// Define the form schema with Zod for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the form data
    const result = formSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: result.error.format()
        },
        { status: 400 }
      );
    }

    // Temporarily store submission in memory for testing
    const submission = {
      ...result.data,
      id: `submission_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    // Log the submission for debugging
    console.log('Form submission:', submission);

    // Send email notification (commented out until email service is set up)
    // await sendEmailNotification(submission);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        submission
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your submission'
      },
      { status: 500 }
    );
  }
}
