import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Create a client with the anon key for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Create a client with the service role key for server-side operations
// This has admin privileges and can bypass RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Type for contact form submissions
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  created_at?: string;
}

// Function to add a new contact submission
export async function addContactSubmission(submission: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> {
  try {
    console.log('Adding submission to Supabase:', submission);

    // Insert the submission into the 'contact_submissions' table using the admin client
    // This bypasses RLS policies
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([submission])
      .select();

    if (error) {
      console.error('Error adding contact submission to Supabase:', error);
      throw new Error(`Failed to save contact submission: ${error.message}`);
    }

    console.log('Submission added successfully to Supabase:', data);
    return data[0];
  } catch (error) {
    console.error('Error adding contact submission:', error);
    throw new Error('Failed to save contact submission');
  }
}

// Function to get all contact submissions
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact submissions:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return [];
  }
}
