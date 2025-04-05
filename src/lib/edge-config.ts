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
      mockStorage.set(key, value);
      return value;
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

    // Update Edge Config
    await edgeConfig.set('contactSubmissions', updatedSubmissions);

    return newSubmission;
  } catch (error) {
    console.error('Error adding contact submission:', error);
    throw new Error('Failed to save contact submission');
  }
}
