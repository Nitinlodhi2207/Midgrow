import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rxiwnzowlclkjmoinbkc.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aXduem93bGNsa2ptb2luYmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5ODMzODUsImV4cCI6MjA2NTU1OTM4NX0.2cWl4mKDCrujjsirerEsjSXtv-TIbQWp1_Toy12aWb4'

// Check if we have valid Supabase credentials
export const hasValidCredentials = supabaseUrl !== 'https://placeholder.supabase.co' && 
                                   supabaseKey !== 'placeholder-key' &&
                                   supabaseUrl.includes('supabase.co') &&
                                   supabaseKey.length > 50

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // We don't need auth persistence for contact forms
  }
})

// ==============================================
// TYPE DEFINITIONS FOR DATABASE
// ==============================================

// Contact Submissions
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
  source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  status?: string
  priority?: string
  assigned_to?: string
  notes?: string
  followed_up_at?: string
  created_at?: string
  updated_at?: string
}

// Services
export interface Service {
  id?: string
  title: string
  description: string
  icon: string
  features: string[]
  slug: string
  is_active?: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

// Pricing Plans
export interface PricingPlan {
  id?: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  is_popular?: boolean
  is_active?: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

// Sectors
export interface Sector {
  id?: string
  name: string
  slug: string
  icon: string
  description: string
  short_description: string
  challenges: string[]
  solutions: string[]
  services: string[]
  benefits: string[]
  seo_keywords: string[]
  is_active?: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

// Blog Categories
export interface BlogCategory {
  id?: string
  name: string
  slug: string
  description?: string
  color?: string
  is_active?: boolean
  sort_order?: number
  created_at?: string
  updated_at?: string
}

// Blog Posts
export interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  author_name?: string
  author_email?: string
  author_avatar?: string
  published_at?: string
  is_published?: boolean
  is_featured?: boolean
  read_time?: number
  views?: number
  likes?: number
  seo_title?: string
  seo_description?: string
  seo_keywords?: string[]
  category_id?: string
  created_at?: string
  updated_at?: string
}

// Blog Tags
export interface BlogTag {
  id?: string
  name: string
  slug: string
  color?: string
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

// Projects
export interface Project {
  id?: string
  title: string
  slug: string
  description: string
  short_description: string
  client_name?: string
  client_industry?: string
  project_type: string
  technologies: string[]
  services_provided: string[]
  project_duration?: string
  budget_range?: string
  featured_image?: string
  gallery_images?: string[]
  project_url?: string
  github_url?: string
  results?: string[]
  challenges?: string[]
  solutions?: string[]
  is_featured?: boolean
  is_published?: boolean
  completed_at?: string
  sector_id?: string
  created_at?: string
  updated_at?: string
}

// Testimonials
export interface Testimonial {
  id?: string
  client_name: string
  client_position?: string
  client_company?: string
  client_avatar?: string
  testimonial: string
  rating?: number
  service_type?: string
  project_id?: string
  is_featured?: boolean
  is_published?: boolean
  created_at?: string
  updated_at?: string
}

// Newsletter Subscribers
export interface NewsletterSubscriber {
  id?: string
  email: string
  first_name?: string
  last_name?: string
  is_active?: boolean
  subscribed_at?: string
  unsubscribed_at?: string
  source?: string
  tags?: string[]
  created_at?: string
  updated_at?: string
}

// Site Settings
export interface SiteSetting {
  id?: string
  key: string
  value?: string
  type?: string
  description?: string
  is_public?: boolean
  created_at?: string
  updated_at?: string
}

// Page Views
export interface PageView {
  id?: string
  page_path: string
  page_title?: string
  referrer?: string
  user_agent?: string
  ip_address?: string
  session_id?: string
  user_id?: string
  device_type?: string
  browser?: string
  os?: string
  country?: string
  city?: string
  created_at?: string
}

// Events
export interface Event {
  id?: string
  event_name: string
  event_data?: any
  page_path?: string
  session_id?: string
  user_id?: string
  ip_address?: string
  created_at?: string
}

// ==============================================
// DATABASE FUNCTIONS
// ==============================================

// Contact Form Functions
export async function submitContactForm(formData: {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
  source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}) {
  try {
    if (hasValidCredentials) {
      console.log('Submitting to Supabase database...')
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          service: formData.service || null,
          budget: formData.budget || null,
          message: formData.message,
          source: formData.source || 'website',
          utm_source: formData.utm_source || null,
          utm_medium: formData.utm_medium || null,
          utm_campaign: formData.utm_campaign || null,
          status: 'new',
          priority: 'normal'
        }])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(`Database error: ${error.message}`)
      }

      console.log('Contact form submitted successfully:', data)
      return { 
        success: true, 
        message: 'Your message has been sent successfully!',
        data 
      }
    } else {
      console.log('Supabase not configured, using fallback mode')
      console.log('Contact form submission (development mode):', formData)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return { 
        success: true, 
        message: 'Your message has been received! (Development mode)',
        data: null 
      }
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to submit contact form')
  }
}

// Services Functions
export async function getServices() {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function createService(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating service:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create service')
  }
}

// Pricing Plans Functions
export async function getPricingPlans() {
  try {
    const { data, error } = await supabase
      .from('pricing_plans')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching pricing plans:', error)
    return []
  }
}

export async function createPricingPlan(plan: Omit<PricingPlan, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('pricing_plans')
      .insert([plan])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating pricing plan:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create pricing plan')
  }
}

// Sectors Functions
export async function getSectors() {
  try {
    const { data, error } = await supabase
      .from('sectors')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching sectors:', error)
    return []
  }
}

export async function getSectorBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('sectors')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching sector:', error)
    return null
  }
}

export async function createSector(sector: Omit<Sector, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('sectors')
      .insert([sector])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating sector:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create sector')
  }
}

// Blog Functions
export async function getBlogPosts(limit?: number) {
  try {
    let query = supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error) throw error
    
    // Increment view count
    await supabase.rpc('increment_blog_post_views', { post_slug: slug })
    
    return data
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getFeaturedBlogPosts(limit: number = 3) {
  try {
    const { data, error } = await supabase
      .from('blog_posts_with_details')
      .select('*')
      .eq('is_published', true)
      .eq('is_featured', true)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}

export async function getBlogCategories() {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching blog categories:', error)
    return []
  }
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating blog post:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create blog post')
  }
}

// Projects Functions
export async function getProjects(limit?: number) {
  try {
    let query = supabase
      .from('projects_with_sector')
      .select('*')
      .eq('is_published', true)
      .order('completed_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('projects_with_sector')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getFeaturedProjects(limit: number = 3) {
  try {
    const { data, error } = await supabase
      .from('projects_with_sector')
      .select('*')
      .eq('is_published', true)
      .eq('is_featured', true)
      .order('completed_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating project:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create project')
  }
}

// Testimonials Functions
export async function getTestimonials(limit?: number) {
  try {
    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getFeaturedTestimonials(limit: number = 3) {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_published', true)
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching featured testimonials:', error)
    return []
  }
}

export async function createTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonial])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating testimonial:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to create testimonial')
  }
}

// Newsletter Functions
export async function subscribeToNewsletter(email: string, firstName?: string, lastName?: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        is_active: true,
        source: 'website'
      }])
      .select()

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return { success: false, message: 'Email already subscribed' }
      }
      throw error
    }

    return { success: true, message: 'Successfully subscribed to newsletter!', data }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to subscribe to newsletter')
  }
}

export async function unsubscribeFromNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        is_active: false,
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email)
      .select()

    if (error) throw error
    return { success: true, message: 'Successfully unsubscribed from newsletter!', data }
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to unsubscribe from newsletter')
  }
}

// Site Settings Functions
export async function getSiteSettings() {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('is_public', true)

    if (error) throw error
    
    // Convert to key-value object
    const settings: { [key: string]: string } = {}
    data.forEach(setting => {
      settings[setting.key] = setting.value
    })
    
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return {}
  }
}

export async function getSiteSetting(key: string) {
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', key)
      .eq('is_public', true)
      .single()

    if (error) throw error
    return data?.value
  } catch (error) {
    console.error('Error fetching site setting:', error)
    return null
  }
}

// Analytics Functions
export async function trackPageView(pageView: Omit<PageView, 'id' | 'created_at'>) {
  try {
    if (!hasValidCredentials) return

    const { data, error } = await supabase
      .from('page_views')
      .insert([pageView])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error tracking page view:', error)
    // Don't throw error for analytics, just log it
    return { success: false, error }
  }
}

export async function trackEvent(event: Omit<Event, 'id' | 'created_at'>) {
  try {
    if (!hasValidCredentials) return

    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error tracking event:', error)
    // Don't throw error for analytics, just log it
    return { success: false, error }
  }
}

// Search Functions
export async function searchContent(query: string, limit: number = 10) {
  try {
    const searchTerm = `%${query}%`
    
    // Search in blog posts
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts_with_details')
      .select('title, slug, excerpt, \'blog\' as type')
      .eq('is_published', true)
      .or(`title.ilike.${searchTerm},excerpt.ilike.${searchTerm},content.ilike.${searchTerm}`)
      .limit(limit)

    if (blogError) throw blogError

    // Search in projects
    const { data: projects, error: projectError } = await supabase
      .from('projects_with_sector')
      .select('title, slug, short_description as excerpt, \'project\' as type')
      .eq('is_published', true)
      .or(`title.ilike.${searchTerm},description.ilike.${searchTerm},short_description.ilike.${searchTerm}`)
      .limit(limit)

    if (projectError) throw projectError

    // Search in services
    const { data: services, error: serviceError } = await supabase
      .from('services')
      .select('title, slug, description as excerpt, \'service\' as type')
      .eq('is_active', true)
      .or(`title.ilike.${searchTerm},description.ilike.${searchTerm}`)
      .limit(limit)

    if (serviceError) throw serviceError

    // Combine results
    const results = [
      ...(blogPosts || []),
      ...(projects || []),
      ...(services || [])
    ]

    return results.slice(0, limit)
  } catch (error) {
    console.error('Error searching content:', error)
    return []
  }
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(' ').length
  return Math.ceil(words / wordsPerMinute)
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

// ==============================================
// BATCH OPERATIONS
// ==============================================

export async function seedInitialData() {
  try {
    // This function can be used to seed initial data
    // It should be run once after database setup
    
    console.log('Seeding initial data...')
    
    // You can add your initial data seeding logic here
    // For example, creating default services, pricing plans, etc.
    
    console.log('Initial data seeded successfully!')
    return { success: true }
  } catch (error) {
    console.error('Error seeding initial data:', error)
    throw new Error(error instanceof Error ? error.message : 'Failed to seed initial data')
  }
}
