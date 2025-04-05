import { createClient } from '@vercel/edge-config';

// Create an Edge Config client
export const edgeConfig = createClient(process.env.EDGE_CONFIG || '');

// Type for contact form submissions
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  createdAt: string;
}

// Function to get all contact submissions
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const submissions = await edgeConfig.get('contactSubmissions') as ContactSubmission[] | null;
    return submissions || [];
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return [];
  }
}

// Function to add a new contact submission
export async function addContactSubmission(submission: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<ContactSubmission> {
  try {
    // Get existing submissions
    const submissions = await getContactSubmissions();
    
    // Create new submission with ID and timestamp
    const newSubmission: ContactSubmission = {
      ...submission,
      id: `submission_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    
    // Add new submission to the list
    const updatedSubmissions = [...submissions, newSubmission];
    
    // Update Edge Config
    await edgeConfig.set('contactSubmissions', updatedSubmissions);
    
    return newSubmission;
  } catch (error) {
    console.error('Error adding contact submission:', error);
    throw new Error('Failed to save contact submission');
  }
}
