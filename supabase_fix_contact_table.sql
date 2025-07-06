-- Fix for existing contact_submissions table
-- Run this SQL to add missing columns to the existing table

-- Add missing columns to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS source VARCHAR(100) DEFAULT 'website',
ADD COLUMN IF NOT EXISTS utm_source VARCHAR(100),
ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(100),
ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(100),
ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new',
ADD COLUMN IF NOT EXISTS priority VARCHAR(20) DEFAULT 'normal',
ADD COLUMN IF NOT EXISTS assigned_to VARCHAR(255),
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS followed_up_at TIMESTAMP WITH TIME ZONE;

-- Update existing records to have the new default values
UPDATE contact_submissions 
SET 
  source = 'website',
  status = 'new',
  priority = 'normal'
WHERE 
  source IS NULL 
  OR status IS NULL 
  OR priority IS NULL;

-- Add index for status column
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);

-- Success message
SELECT 'Contact submissions table updated successfully! ✅' as message;
