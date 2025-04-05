import { createClient } from '@vercel/edge-config';

// Create an Edge Config client
// If EDGE_CONFIG is not set, we'll use a mock implementation for development
let edgeConfigClient: ReturnType<typeof createClient>;

if (process.env.EDGE_CONFIG) {
  // Use the real Edge Config client if the connection string is available
  edgeConfigClient = createClient(process.env.EDGE_CONFIG);
} else {
  // Create a mock implementation for development
  const mockStorage = new Map<string, any>();

  edgeConfigClient = {
    get: async (key: string) => mockStorage.get(key),
    getAll: async (keys?: string[]) => {
      if (keys) {
        return Object.fromEntries(
          keys.map(key => [key, mockStorage.get(key)])
        );
      }
      return Object.fromEntries(mockStorage.entries());
    },
    has: async (key: string) => mockStorage.has(key),
    digest: async () => '',
    // Add custom methods for our mock implementation
    set: async (key: string, value: any) => {
      console.log('Mock Edge Config: setting', key, 'to', value);
      try {
        mockStorage.set(key, value);
        console.log('Mock Edge Config: successfully set', key);
        return value;
      } catch (mockError) {
        console.error('Mock Edge Config: error setting', key, mockError);
        throw mockError;
      }
    },
    delete: async (key: string) => {
      mockStorage.delete(key);
      return true;
    },
  } as any;

  console.warn('EDGE_CONFIG environment variable not set. Using mock implementation.');
}

export const edgeConfig = edgeConfigClient;

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

    console.log('Current submissions:', submissions);
    console.log('Updated submissions:', updatedSubmissions);

    // For Edge Config, we can't use the set method directly in production
    // Instead, we'll use a different approach based on the environment

    if (process.env.NODE_ENV === 'development') {
      // In development, we're using the mock implementation which has a set method
      console.log('Using mock implementation to update Edge Config');
      try {
        // @ts-ignore - The mock implementation has a set method
        await edgeConfig.set('contactSubmissions', updatedSubmissions);
        console.log('Edge Config updated successfully (mock)');
      } catch (setError) {
        console.error('Error updating Edge Config (mock):', setError);
        throw new Error(`Failed to update Edge Config: ${setError instanceof Error ? setError.message : String(setError)}`);
      }
    } else {
      // In production, we'll just return the new submission without updating Edge Config
      // This is a temporary solution until we implement the proper API-based update
      console.log('In production: Edge Config updates not supported in client SDK');
      console.log('Returning submission without updating Edge Config');
      // TODO: Implement API-based update using fetch to Vercel API
    }

    return newSubmission;
  } catch (error) {
    console.error('Error adding contact submission:', error);
    throw new Error('Failed to save contact submission');
  }
}
