import { NextRequest, NextResponse } from 'next/server';
import { addContactSubmission } from '@/lib/edge-config';
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
    console.log('API route called');

    // Parse the request body
    const body = await request.json();
    console.log('Request body:', body);

    // Validate the form data
    const result = formSchema.safeParse(body);
    console.log('Validation result:', result.success);

    if (!result.success) {
      console.log('Validation errors:', result.error.format());
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

    // Add the submission to Edge Config
    console.log('Adding submission to Edge Config');
    let submission;
    try {
      submission = await addContactSubmission(result.data);
      console.log('Submission added successfully:', submission);
    } catch (edgeConfigError) {
      console.error('Edge Config error:', edgeConfigError);
      throw edgeConfigError;
    }

    // Send email notification
    console.log('Sending email notification');
    try {
      await sendEmailNotification(submission);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Continue processing even if email fails
    }

    // Return success response
    console.log('Returning success response');
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        submission,
        note: process.env.NODE_ENV === 'production' ?
          'Note: In the current implementation, form submissions are logged but not permanently stored. We are working on implementing the full storage solution.' :
          undefined
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', error);

    // Return error response with more details
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your submission',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
