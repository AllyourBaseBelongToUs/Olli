-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'new'
);

-- Create an index on the created_at column for faster sorting
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at);

-- Create an index on the status column for faster filtering
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);

-- Set up Row Level Security (RLS) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert submissions
CREATE POLICY "Allow anyone to insert submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows only authenticated users to read submissions
CREATE POLICY "Allow authenticated users to read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a policy that allows only authenticated users to update submissions
CREATE POLICY "Allow authenticated users to update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create a policy that allows only authenticated users to delete submissions
CREATE POLICY "Allow authenticated users to delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create a function to disable RLS for the service role
-- This allows your server-side API to bypass RLS when using the service role key
CREATE OR REPLACE FUNCTION auth.is_service_role()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN current_setting('request.jwt.claim.role', true)::text = 'service_role';
END;
$$ LANGUAGE plpgsql;

-- Create a policy that allows the service role to bypass RLS
CREATE POLICY "Allow service role to bypass RLS"
  ON contact_submissions
  USING (auth.is_service_role());

-- Grant necessary permissions to authenticated and anon roles
GRANT SELECT, INSERT, UPDATE, DELETE ON contact_submissions TO authenticated;
GRANT INSERT ON contact_submissions TO anon;
