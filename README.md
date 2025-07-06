# Midgrow Website

A modern, responsive website for Midgrow built with Next.js, Supabase, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Contact Form**: Integrated with Supabase for form submissions
- **Blog System**: Dynamic blog with static generation
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase account (for contact form functionality)

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd midgrow
npm install
```

### 2. Environment Setup

Copy the environment example file:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API to get your URL and anon key
3. Create a table for contact form submissions:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for insertions (allows anyone to submit)
CREATE POLICY "Enable insert for all users" ON contact_submissions
FOR INSERT WITH CHECK (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog listing and dynamic posts
│   ├── contact/        # Contact page with form
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with Header/Footer
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
└── lib/
    └── supabase.ts     # Supabase client configuration
```

## 🎨 Pages Overview

### Homepage (`/`)
- Hero section with value proposition
- Services overview
- Testimonials section
- Call-to-action for contact

### Services (`/services`)
- Complete list of digital services
- Service cards with descriptions
- Contact CTAs

### About (`/about`)
- Company mission and vision
- Founder information
- Why choose us section

### Contact (`/contact`)
- Contact form integrated with Supabase
- Business contact information
- Location details

### Blog (`/blog`)
- Blog post listings
- Dynamic routing for individual posts
- SEO optimized articles

## 🔧 Customization

### Brand Colors
Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: #3b82f6;      /* Blue */
  --secondary: #8b5cf6;    /* Purple */
  --accent: #10b981;       /* Green */
}
```

### Content Updates
- Update business information in each page component
- Add your own blog posts in `src/app/blog/[slug]/page.tsx`
- Modify testimonials and service offerings

### Styling
The project uses Tailwind CSS v4. Custom components are defined in `globals.css`:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.section-padding` - Consistent section spacing
- `.container-custom` - Container with max-width

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: Fast loading and good user experience
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant components
- **Mobile**: Responsive design for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@midgrow.studio
- Website: [midgrow.studio](https://midgrow.studio)

---

Built with ❤️ by Midgrow
