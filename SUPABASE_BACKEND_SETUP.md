# MidGrow Website - Complete Supabase Backend Setup

Your MidGrow website is now fully equipped with a comprehensive Supabase backend! Here's everything you need to know about the database structure and how to set it up.

## 🗃️ Database Structure Overview

### Core Business Tables
- **`services`** - Your service offerings (Digital Marketing, SEO, Web Dev, etc.)
- **`pricing_plans`** - Your pricing tiers (Basic, Standard, Premium)
- **`sectors`** - Industry-specific solutions (Manufacturing, Healthcare, etc.)

### Content Management
- **`blog_posts`** - Blog articles with full content management
- **`blog_categories`** - Blog post categories
- **`blog_tags`** - Blog post tags
- **`blog_post_tags`** - Many-to-many relationship for post tags

### Portfolio & Social Proof
- **`projects`** - Your case studies and portfolio items
- **`testimonials`** - Client testimonials and reviews

### Customer Interaction
- **`contact_submissions`** - Contact form submissions with CRM features
- **`newsletter_subscribers`** - Email newsletter subscribers

### Analytics & Tracking
- **`page_views`** - Page view tracking
- **`events`** - Custom event tracking
- **`site_settings`** - Configurable site settings

## 🚀 Setup Instructions

### Step 1: Create Database Schema
1. Open your Supabase project dashboard
2. Go to the SQL Editor
3. Copy and paste the content from `supabase_complete_schema.sql`
4. Click "RUN" to execute the script

### Step 2: Seed Initial Data
1. In the SQL Editor, copy and paste the content from `supabase_seed_data.sql`
2. Click "RUN" to populate your database with sample data

### Step 3: Configure Row Level Security (RLS)
The schema automatically sets up RLS policies for:
- ✅ Public read access to published content
- ✅ Public write access to contact forms and newsletter
- ✅ Protected admin data
- ✅ Analytics tracking permissions

### Step 4: Environment Variables
Make sure your `.env.local` file includes:
```env
NEXT_PUBLIC_SUPABASE_URL=https://rxiwnzowlclkjmoinbkc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aXduem93bGNsa2ptb2luYmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5ODMzODUsImV4cCI6MjA2NTU1OTM4NX0.2cWl4mKDCrujjsirerEsjSXtv-TIbQWp1_Toy12aWb4
```

## 🛠️ Available Functions

### Content Management
```typescript
// Services
const services = await getServices()
const newService = await createService(serviceData)

// Blog Posts
const blogPosts = await getBlogPosts()
const blogPost = await getBlogPostBySlug('post-slug')
const featuredPosts = await getFeaturedBlogPosts(3)

// Projects
const projects = await getProjects()
const project = await getProjectBySlug('project-slug')
const featuredProjects = await getFeaturedProjects(3)

// Testimonials
const testimonials = await getTestimonials()
const featuredTestimonials = await getFeaturedTestimonials(3)
```

### Customer Interaction
```typescript
// Contact Form
const result = await submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!',
  // ... other fields
})

// Newsletter
const subscription = await subscribeToNewsletter('email@example.com')
const unsubscribe = await unsubscribeFromNewsletter('email@example.com')
```

### Analytics
```typescript
// Page Views
await trackPageView({
  page_path: '/about',
  page_title: 'About Us',
  session_id: 'session123'
})

// Custom Events
await trackEvent({
  event_name: 'button_click',
  event_data: { button_id: 'cta-main' }
})
```

### Site Configuration
```typescript
// Get all public settings
const settings = await getSiteSettings()

// Get specific setting
const contactEmail = await getSiteSetting('contact_email')
```

## 📊 Database Views & Functions

### Pre-built Views
- **`blog_posts_with_details`** - Blog posts with categories and tags
- **`projects_with_sector`** - Projects with sector information
- **`contact_submissions_analytics`** - Contact form analytics

### Utility Functions
- **`increment_blog_post_views(slug)`** - Increment blog post view count
- **`get_popular_blog_posts(limit)`** - Get most viewed blog posts
- **`get_recent_blog_posts(limit)`** - Get latest blog posts

## 🔍 Search Functionality
```typescript
// Search across all content
const results = await searchContent('digital marketing', 10)
// Returns results from blog posts, projects, and services
```

## 🔧 Admin Dashboard Data

Your database now supports building an admin dashboard with:
- Contact form submissions with status tracking
- Blog post management with publish/draft states
- Project portfolio management
- Testimonial approval workflow
- Newsletter subscriber management
- Site settings configuration
- Analytics and reporting

## 🎯 SEO & Analytics Ready

The database includes:
- SEO metadata fields for all content
- Page view tracking
- Event tracking for user interactions
- Search functionality
- Site settings for meta tags and social links

## 📈 Scalability Features

- **Optimized indexes** for fast queries
- **Automatic timestamps** with triggers
- **Soft deletes** where appropriate
- **Batch operations** support
- **Full-text search** capabilities

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Input validation** at database level
- **Audit logging** for sensitive operations
- **Rate limiting** friendly structure
- **GDPR compliance** ready

## 🚀 Next Steps

1. **Test the Setup**: Run the provided SQL scripts in your Supabase dashboard
2. **Verify Data**: Check that sample data appears in your tables
3. **Test Functions**: Try the contact form and other features
4. **Customize**: Modify the sample data to match your business
5. **Build Admin Panel**: Create admin interfaces for content management

## 📝 Sample Data Included

The seed script includes:
- ✅ 6 Service offerings
- ✅ 3 Pricing plans
- ✅ 6 Industry sectors
- ✅ 3 Sample blog posts
- ✅ 3 Sample projects
- ✅ 5 Sample testimonials
- ✅ Blog categories and tags
- ✅ Site settings

## 🆘 Troubleshooting

### Common Issues:
1. **Foreign Key Errors**: Make sure to run the schema script before the seed script
2. **Permission Errors**: Ensure you have the correct Supabase project credentials
3. **RLS Errors**: Check that RLS policies are created correctly

### Getting Help:
- Check the Supabase logs in your dashboard
- Review the SQL error messages
- Verify your environment variables are correct

## 🎉 Congratulations!

Your MidGrow website now has a professional, scalable backend that can handle:
- Customer inquiries and lead management
- Content management for blog and portfolio
- Analytics and user tracking
- Newsletter management
- SEO optimization
- And much more!

Happy building! 🚀
