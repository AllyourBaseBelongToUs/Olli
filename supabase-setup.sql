-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the created_at column for faster sorting
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at);

-- Set up Row Level Security (RLS) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows only authenticated users to read submissions
CREATE POLICY "Allow authenticated users to read submissions" 
  ON contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create a policy that allows anyone to insert submissions
CREATE POLICY "Allow anyone to insert submissions" 
  ON contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows only authenticated users to update submissions
CREATE POLICY "Allow authenticated users to update submissions" 
  ON contact_submissions 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Create a policy that allows only authenticated users to delete submissions
CREATE POLICY "Allow authenticated users to delete submissions" 
  ON contact_submissions 
  FOR DELETE 
  USING (auth.role() = 'authenticated');
