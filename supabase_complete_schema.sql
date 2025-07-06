-- MidGrow Website - Complete Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor to create all required tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================
-- CORE BUSINESS TABLES
-- ==============================================

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(10) NOT NULL,
  features TEXT[] NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Pricing Plans Table
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  period VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  features TEXT[] NOT NULL,
  is_popular BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Industry Sectors Table
CREATE TABLE IF NOT EXISTS sectors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  icon VARCHAR(10) NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  challenges TEXT[] NOT NULL,
  solutions TEXT[] NOT NULL,
  services TEXT[] NOT NULL,
  benefits TEXT[] NOT NULL,
  seo_keywords TEXT[] NOT NULL,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- BLOG & CONTENT TABLES
-- ==============================================

-- Blog Categories Table
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  color VARCHAR(20) DEFAULT '#3B82F6',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author_name VARCHAR(255) NOT NULL DEFAULT 'MidGrow Team',
  author_email VARCHAR(255),
  author_avatar VARCHAR(500),
  published_at TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  read_time INTEGER DEFAULT 5,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT[],
  category_id UUID REFERENCES blog_categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Blog Tags Table
CREATE TABLE IF NOT EXISTS blog_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  color VARCHAR(20) DEFAULT '#10B981',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Blog Post Tags Junction Table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  blog_tag_id UUID REFERENCES blog_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(blog_post_id, blog_tag_id)
);

-- ==============================================
-- PORTFOLIO & CASE STUDIES
-- ==============================================

-- Projects/Case Studies Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  client_name VARCHAR(255),
  client_industry VARCHAR(255),
  project_type VARCHAR(255) NOT NULL,
  technologies TEXT[] NOT NULL,
  services_provided TEXT[] NOT NULL,
  project_duration VARCHAR(100),
  budget_range VARCHAR(100),
  featured_image VARCHAR(500),
  gallery_images TEXT[],
  project_url VARCHAR(500),
  github_url VARCHAR(500),
  results TEXT[],
  challenges TEXT[],
  solutions TEXT[],
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  completed_at TIMESTAMP WITH TIME ZONE,
  sector_id UUID REFERENCES sectors(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- TESTIMONIALS & REVIEWS
-- ==============================================

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_position VARCHAR(255),
  client_company VARCHAR(255),
  client_avatar VARCHAR(500),
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  service_type VARCHAR(255),
  project_id UUID REFERENCES projects(id),
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- CONTACT & LEADS
-- ==============================================

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(255),
  budget VARCHAR(100),
  message TEXT NOT NULL,
  source VARCHAR(100) DEFAULT 'website',
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new',
  priority VARCHAR(20) DEFAULT 'normal',
  assigned_to VARCHAR(255),
  notes TEXT,
  followed_up_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source VARCHAR(100) DEFAULT 'website',
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- ANALYTICS & TRACKING
-- ==============================================

-- Page Views Table
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path VARCHAR(500) NOT NULL,
  page_title VARCHAR(500),
  referrer VARCHAR(500),
  user_agent TEXT,
  ip_address INET,
  session_id VARCHAR(255),
  user_id UUID, -- For authenticated users
  device_type VARCHAR(50),
  browser VARCHAR(100),
  os VARCHAR(100),
  country VARCHAR(100),
  city VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Events Table (for custom tracking)
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  event_data JSONB,
  page_path VARCHAR(500),
  session_id VARCHAR(255),
  user_id UUID,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- CONFIGURATION & SETTINGS
-- ==============================================

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(50) DEFAULT 'string',
  description TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================
-- INDEXES FOR BETTER PERFORMANCE
-- ==============================================

-- Services
CREATE INDEX IF NOT EXISTS services_slug_idx ON services(slug);
CREATE INDEX IF NOT EXISTS services_active_idx ON services(is_active);
CREATE INDEX IF NOT EXISTS services_sort_order_idx ON services(sort_order);

-- Pricing Plans
CREATE INDEX IF NOT EXISTS pricing_plans_active_idx ON pricing_plans(is_active);
CREATE INDEX IF NOT EXISTS pricing_plans_sort_order_idx ON pricing_plans(sort_order);

-- Sectors
CREATE INDEX IF NOT EXISTS sectors_slug_idx ON sectors(slug);
CREATE INDEX IF NOT EXISTS sectors_active_idx ON sectors(is_active);

-- Blog Posts
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS blog_posts_featured_idx ON blog_posts(is_featured);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category_id);

-- Blog Categories
CREATE INDEX IF NOT EXISTS blog_categories_slug_idx ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS blog_categories_active_idx ON blog_categories(is_active);

-- Blog Tags
CREATE INDEX IF NOT EXISTS blog_tags_slug_idx ON blog_tags(slug);
CREATE INDEX IF NOT EXISTS blog_tags_active_idx ON blog_tags(is_active);

-- Projects
CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);
CREATE INDEX IF NOT EXISTS projects_published_idx ON projects(is_published);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(is_featured);
CREATE INDEX IF NOT EXISTS projects_sector_idx ON projects(sector_id);

-- Testimonials
CREATE INDEX IF NOT EXISTS testimonials_published_idx ON testimonials(is_published);
CREATE INDEX IF NOT EXISTS testimonials_featured_idx ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS testimonials_project_idx ON testimonials(project_id);

-- Contact Submissions
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);

-- Newsletter Subscribers
CREATE INDEX IF NOT EXISTS newsletter_subscribers_email_idx ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS newsletter_subscribers_active_idx ON newsletter_subscribers(is_active);

-- Page Views
CREATE INDEX IF NOT EXISTS page_views_page_path_idx ON page_views(page_path);
CREATE INDEX IF NOT EXISTS page_views_created_at_idx ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS page_views_session_idx ON page_views(session_id);

-- Events
CREATE INDEX IF NOT EXISTS events_event_name_idx ON events(event_name);
CREATE INDEX IF NOT EXISTS events_created_at_idx ON events(created_at DESC);

-- Site Settings
CREATE INDEX IF NOT EXISTS site_settings_key_idx ON site_settings(key);
CREATE INDEX IF NOT EXISTS site_settings_public_idx ON site_settings(is_public);

-- ==============================================
-- TRIGGERS FOR UPDATED_AT TIMESTAMPS
-- ==============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables with updated_at column
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pricing_plans_updated_at
  BEFORE UPDATE ON pricing_plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sectors_updated_at
  BEFORE UPDATE ON sectors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_tags_updated_at
  BEFORE UPDATE ON blog_tags
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_newsletter_subscribers_updated_at
  BEFORE UPDATE ON newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================

-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies for content tables
CREATE POLICY "Allow public read access to active services" ON services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to active pricing plans" ON pricing_plans
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to active sectors" ON sectors
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to active blog categories" ON blog_categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to published blog posts" ON blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public read access to active blog tags" ON blog_tags
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to blog post tags" ON blog_post_tags
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to published projects" ON projects
  FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public read access to published testimonials" ON testimonials
  FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public read access to public site settings" ON site_settings
  FOR SELECT USING (is_public = true);

-- Insert policies for contact forms and subscriptions
CREATE POLICY "Allow contact form submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow newsletter subscriptions" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow page view tracking" ON page_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow event tracking" ON events
  FOR INSERT WITH CHECK (true);

-- Update policy for newsletter unsubscribes
CREATE POLICY "Allow newsletter unsubscribes" ON newsletter_subscribers
  FOR UPDATE USING (true) WITH CHECK (true);

-- ==============================================
-- INITIAL DATA SEEDING
-- ==============================================

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description, color) VALUES
  ('Digital Marketing', 'digital-marketing', 'Tips and strategies for digital marketing', '#3B82F6'),
  ('Web Development', 'web-development', 'Web development tutorials and best practices', '#10B981'),
  ('SEO', 'seo', 'Search engine optimization guides', '#F59E0B'),
  ('Business Growth', 'business-growth', 'Strategies for business growth and scaling', '#8B5CF6'),
  ('Technology', 'technology', 'Latest technology trends and insights', '#EF4444')
ON CONFLICT (slug) DO NOTHING;

-- Insert default blog tags
INSERT INTO blog_tags (name, slug, color) VALUES
  ('SEO', 'seo', '#10B981'),
  ('Digital Marketing', 'digital-marketing', '#3B82F6'),
  ('Web Development', 'web-development', '#8B5CF6'),
  ('Small Business', 'small-business', '#F59E0B'),
  ('Strategy', 'strategy', '#EF4444'),
  ('Tips', 'tips', '#06B6D4'),
  ('Tutorial', 'tutorial', '#84CC16'),
  ('Best Practices', 'best-practices', '#F97316')
ON CONFLICT (slug) DO NOTHING;

-- Insert default site settings
INSERT INTO site_settings (key, value, type, description, is_public) VALUES
  ('site_name', 'MidGrow', 'string', 'Website name', true),
  ('site_description', 'Digital transformation solutions for growing businesses', 'string', 'Website description', true),
  ('contact_email', 'hello@midgrow.com', 'string', 'Primary contact email', true),
  ('contact_phone', '+91 9876543210', 'string', 'Primary contact phone', true),
  ('business_hours', '9 AM - 6 PM IST', 'string', 'Business hours', true),
  ('social_linkedin', 'https://linkedin.com/company/midgrow', 'string', 'LinkedIn URL', true),
  ('social_twitter', 'https://twitter.com/midgrow', 'string', 'Twitter URL', true),
  ('social_instagram', 'https://instagram.com/midgrow', 'string', 'Instagram URL', true),
  ('google_analytics_id', '', 'string', 'Google Analytics ID', false),
  ('google_tag_manager_id', '', 'string', 'Google Tag Manager ID', false)
ON CONFLICT (key) DO NOTHING;

-- ==============================================
-- FUNCTIONS FOR COMMON OPERATIONS
-- ==============================================

-- Function to increment blog post views
CREATE OR REPLACE FUNCTION increment_blog_post_views(post_slug VARCHAR)
RETURNS VOID AS $$
BEGIN
  UPDATE blog_posts 
  SET views = views + 1, updated_at = TIMEZONE('utc'::text, NOW())
  WHERE slug = post_slug AND is_published = true;
END;
$$ LANGUAGE plpgsql;

-- Function to get popular blog posts
CREATE OR REPLACE FUNCTION get_popular_blog_posts(limit_count INTEGER DEFAULT 5)
RETURNS TABLE (
  id UUID,
  title VARCHAR,
  slug VARCHAR,
  excerpt TEXT,
  views INTEGER,
  published_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    bp.id,
    bp.title,
    bp.slug,
    bp.excerpt,
    bp.views,
    bp.published_at
  FROM blog_posts bp
  WHERE bp.is_published = true
  ORDER BY bp.views DESC, bp.published_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- Function to get recent blog posts
CREATE OR REPLACE FUNCTION get_recent_blog_posts(limit_count INTEGER DEFAULT 5)
RETURNS TABLE (
  id UUID,
  title VARCHAR,
  slug VARCHAR,
  excerpt TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  category_name VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    bp.id,
    bp.title,
    bp.slug,
    bp.excerpt,
    bp.published_at,
    bc.name as category_name
  FROM blog_posts bp
  LEFT JOIN blog_categories bc ON bp.category_id = bc.id
  WHERE bp.is_published = true
  ORDER BY bp.published_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- ==============================================
-- VIEWS FOR EASY QUERYING
-- ==============================================

-- View for blog posts with category and tags
CREATE OR REPLACE VIEW blog_posts_with_details AS
SELECT 
  bp.*,
  bc.name as category_name,
  bc.slug as category_slug,
  bc.color as category_color,
  ARRAY_AGG(bt.name) FILTER (WHERE bt.name IS NOT NULL) as tag_names,
  ARRAY_AGG(bt.slug) FILTER (WHERE bt.slug IS NOT NULL) as tag_slugs
FROM blog_posts bp
LEFT JOIN blog_categories bc ON bp.category_id = bc.id
LEFT JOIN blog_post_tags bpt ON bp.id = bpt.blog_post_id
LEFT JOIN blog_tags bt ON bpt.blog_tag_id = bt.id
GROUP BY bp.id, bc.name, bc.slug, bc.color;

-- View for projects with sector information
CREATE OR REPLACE VIEW projects_with_sector AS
SELECT 
  p.*,
  s.name as sector_name,
  s.slug as sector_slug,
  s.icon as sector_icon
FROM projects p
LEFT JOIN sectors s ON p.sector_id = s.id;

-- View for contact submissions with analytics
CREATE OR REPLACE VIEW contact_submissions_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_submissions,
  COUNT(DISTINCT email) as unique_emails,
  COUNT(*) FILTER (WHERE service IS NOT NULL) as with_service,
  COUNT(*) FILTER (WHERE budget IS NOT NULL) as with_budget,
  COUNT(*) FILTER (WHERE company IS NOT NULL) as with_company
FROM contact_submissions
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- ==============================================
-- COMPLETION MESSAGE
-- ==============================================

-- Add a completion log
INSERT INTO site_settings (key, value, type, description, is_public) VALUES
  ('database_schema_version', '1.0', 'string', 'Database schema version', false),
  ('database_initialized_at', TIMEZONE('utc'::text, NOW())::text, 'string', 'Database initialization timestamp', false)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Success message
SELECT 'MidGrow database schema created successfully! 🎉' as message;
