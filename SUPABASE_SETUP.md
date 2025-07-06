# Supabase Integration Setup Guide

## 1. Get Your Supabase Credentials

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings** → **API**
4. Copy the following values:
   - **Project URL** (under "Project URL")
   - **Anon Public Key** (under "Project API keys")

## 2. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## 3. Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase_schema.sql` file
3. Paste it into the SQL Editor and run it
4. This will create the `contact_submissions` table with proper permissions

## 4. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `/contact` page
3. Fill out and submit the contact form
4. Check your Supabase dashboard under **Table Editor** → **contact_submissions** to see the submitted data

## 5. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables to your deployment platform:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. Make sure your Supabase project is properly configured for production

## 6. Security Notes

- The anon key is safe to use in client-side code
- Row Level Security (RLS) is enabled on the contact_submissions table
- The current policy allows anyone to insert contact form submissions
- Consider adding rate limiting in production

## 7. Troubleshooting

- Check the browser console for any error messages
- Verify your environment variables are loaded correctly
- Ensure the database table was created successfully
- Check Supabase logs in the dashboard for any database errors
