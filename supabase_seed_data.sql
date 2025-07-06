-- Data Seeding Script for MidGrow Website
-- Run this after the main schema to populate tables with initial data

-- ==============================================
-- SEED SERVICES DATA
-- ==============================================
INSERT INTO services (title, description, icon, features, slug, is_active, sort_order) VALUES
  (
    'Digital Marketing',
    'Strategic online advertising, social media management, and brand outreach to amplify your digital presence.',
    '📱',
    ARRAY['Social Media Marketing', 'Email Campaigns', 'Brand Strategy', 'A/B Testing'],
    'digital-marketing',
    true,
    1
  ),
  (
    'SEO Services',
    'Boost your search rankings with comprehensive SEO strategies, local optimization, and keyword targeting.',
    '🔍',
    ARRAY['Technical SEO', 'Local SEO', 'Keyword Research', 'Analytics'],
    'seo-services',
    true,
    2
  ),
  (
    'Web Development',
    'Modern, responsive websites and eCommerce platforms built with cutting-edge technologies.',
    '💻',
    ARRAY['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
    'web-development',
    true,
    3
  ),
  (
    'App Development',
    'Native and hybrid mobile applications for Android and iOS that drive user engagement.',
    '📲',
    ARRAY['iOS Development', 'Android Development', 'Hybrid Apps', 'UI/UX Design'],
    'app-development',
    true,
    4
  ),
  (
    'Business Automation',
    'Streamline operations with custom CRM, HR systems, and workflow automation solutions.',
    '⚙️',
    ARRAY['CRM Systems', 'Workflow Automation', 'HR Solutions', 'Process Optimization'],
    'business-automation',
    true,
    5
  ),
  (
    'Content Creation',
    'Engaging content across all platforms - blogs, graphics, infographics, and social media.',
    '✍️',
    ARRAY['Blog Writing', 'Graphic Design', 'Infographics', 'Social Media Content'],
    'content-creation',
    true,
    6
  )
ON CONFLICT (slug) DO NOTHING;

-- ==============================================
-- SEED PRICING PLANS DATA
-- ==============================================
INSERT INTO pricing_plans (name, price, period, description, features, is_popular, is_active, sort_order) VALUES
  (
    'Basic',
    '₹15,000',
    '/month',
    'Perfect for small businesses starting their digital journey',
    ARRAY[
      'Social Media Management',
      'Basic SEO Optimization',
      'Monthly Analytics Report',
      'Email Support',
      'Content Calendar'
    ],
    false,
    true,
    1
  ),
  (
    'Standard',
    '₹35,000',
    '/month',
    'Ideal for growing businesses wanting comprehensive digital presence',
    ARRAY[
      'Everything in Basic',
      'Google Ads Management',
      'Advanced SEO Strategy',
      'Weekly Performance Reports',
      'Phone Support',
      'Landing Page Creation',
      'A/B Testing'
    ],
    true,
    true,
    2
  ),
  (
    'Premium',
    '₹65,000',
    '/month',
    'For established businesses seeking complete digital transformation',
    ARRAY[
      'Everything in Standard',
      'Custom Web Development',
      'Mobile App Development',
      'Business Automation',
      'Dedicated Account Manager',
      'Priority Support',
      'Performance-based Optimization',
      'Monthly Strategy Sessions'
    ],
    false,
    true,
    3
  );

-- ==============================================
-- SEED SECTORS DATA
-- ==============================================
INSERT INTO sectors (name, slug, icon, description, short_description, challenges, solutions, services, benefits, seo_keywords, is_active, sort_order) VALUES
  (
    'Manufacturing',
    'manufacturing',
    '🏭',
    'Digital transformation solutions for manufacturing companies to optimize operations, improve efficiency, and enhance customer reach.',
    'Streamline operations and boost efficiency with digital solutions',
    ARRAY[
      'Inefficient inventory management',
      'Poor supplier communication',
      'Limited online presence',
      'Manual quality control processes',
      'Lack of real-time production monitoring'
    ],
    ARRAY[
      'Custom inventory management systems',
      'Supplier portal development',
      'Manufacturing website with product catalogs',
      'Quality control automation tools',
      'Real-time dashboard for production monitoring'
    ],
    ARRAY[
      'Custom Web Applications',
      'ERP Integration',
      'Digital Marketing',
      'E-commerce Solutions',
      'Business Automation'
    ],
    ARRAY[
      'Reduced operational costs',
      'Improved production efficiency',
      'Better supplier relationships',
      'Enhanced quality control',
      'Increased online visibility'
    ],
    ARRAY[
      'manufacturing digital transformation',
      'manufacturing web development',
      'manufacturing automation',
      'manufacturing ERP',
      'manufacturing website design'
    ],
    true,
    1
  ),
  (
    'Healthcare',
    'healthcare',
    '🏥',
    'HIPAA-compliant digital solutions for healthcare providers, clinics, and medical practices.',
    'Secure and compliant digital solutions for healthcare',
    ARRAY[
      'Patient data security concerns',
      'Inefficient appointment scheduling',
      'Poor patient communication',
      'Manual record keeping',
      'Limited online presence'
    ],
    ARRAY[
      'HIPAA-compliant patient portals',
      'Online appointment scheduling systems',
      'Automated patient communication',
      'Electronic health records integration',
      'Medical practice websites'
    ],
    ARRAY[
      'Web Development',
      'Patient Portal Development',
      'Medical SEO',
      'Healthcare Digital Marketing',
      'Appointment Scheduling Systems'
    ],
    ARRAY[
      'Improved patient satisfaction',
      'Reduced administrative workload',
      'Better patient data security',
      'Increased appointment bookings',
      'Enhanced online reputation'
    ],
    ARRAY[
      'healthcare web development',
      'medical website design',
      'healthcare digital marketing',
      'patient portal development',
      'medical practice automation'
    ],
    true,
    2
  ),
  (
    'E-commerce',
    'e-commerce',
    '🛒',
    'Complete e-commerce solutions from store setup to digital marketing and growth optimization.',
    'Complete e-commerce solutions for online businesses',
    ARRAY[
      'Low online sales conversion',
      'Poor website user experience',
      'Ineffective digital marketing',
      'Inventory management issues',
      'Payment processing problems'
    ],
    ARRAY[
      'High-converting e-commerce websites',
      'User experience optimization',
      'Targeted digital marketing campaigns',
      'Inventory management systems',
      'Secure payment gateway integration'
    ],
    ARRAY[
      'E-commerce Development',
      'Digital Marketing',
      'SEO Services',
      'Payment Integration',
      'Inventory Management'
    ],
    ARRAY[
      'Increased online sales',
      'Better customer experience',
      'Higher conversion rates',
      'Streamlined operations',
      'Enhanced security'
    ],
    ARRAY[
      'e-commerce web development',
      'online store development',
      'e-commerce digital marketing',
      'shopify development',
      'e-commerce SEO'
    ],
    true,
    3
  ),
  (
    'Restaurant',
    'restaurant',
    '🍽️',
    'Digital solutions for restaurants, cafes, and food service businesses to boost online orders and customer engagement.',
    'Digital solutions to boost restaurant online presence',
    ARRAY[
      'Low online ordering',
      'Poor online presence',
      'Ineffective social media',
      'Manual reservation management',
      'Limited customer engagement'
    ],
    ARRAY[
      'Online ordering systems',
      'Restaurant websites with menus',
      'Social media marketing',
      'Table reservation systems',
      'Customer loyalty programs'
    ],
    ARRAY[
      'Restaurant Web Development',
      'Online Ordering Systems',
      'Social Media Marketing',
      'Local SEO',
      'Digital Menu Creation'
    ],
    ARRAY[
      'Increased online orders',
      'Better customer engagement',
      'Improved local visibility',
      'Streamlined operations',
      'Higher customer retention'
    ],
    ARRAY[
      'restaurant web development',
      'online ordering system',
      'restaurant digital marketing',
      'restaurant SEO',
      'food delivery app'
    ],
    true,
    4
  ),
  (
    'Education',
    'education',
    '🎓',
    'Digital transformation solutions for educational institutions, online learning platforms, and training centers.',
    'Digital transformation for educational institutions',
    ARRAY[
      'Limited online presence',
      'Poor student engagement',
      'Inefficient course management',
      'Manual registration processes',
      'Lack of online learning tools'
    ],
    ARRAY[
      'Educational websites',
      'Learning management systems',
      'Online course platforms',
      'Student portal development',
      'Digital marketing for education'
    ],
    ARRAY[
      'Educational Web Development',
      'LMS Development',
      'Student Portal Creation',
      'Educational Digital Marketing',
      'Online Course Platform'
    ],
    ARRAY[
      'Improved student engagement',
      'Streamlined course management',
      'Better online presence',
      'Increased enrollments',
      'Enhanced learning experience'
    ],
    ARRAY[
      'educational web development',
      'learning management system',
      'online course platform',
      'student portal development',
      'educational digital marketing'
    ],
    true,
    5
  ),
  (
    'Real Estate',
    'real-estate',
    '🏘️',
    'Digital solutions for real estate agents, property managers, and real estate companies to showcase properties and generate leads.',
    'Digital solutions for real estate professionals',
    ARRAY[
      'Low lead generation',
      'Poor property showcase',
      'Manual property management',
      'Limited online presence',
      'Ineffective marketing'
    ],
    ARRAY[
      'Real estate websites with property listings',
      'Property management systems',
      'Lead generation tools',
      'Virtual property tours',
      'Real estate digital marketing'
    ],
    ARRAY[
      'Real Estate Web Development',
      'Property Listing Websites',
      'Lead Generation Systems',
      'Real Estate Digital Marketing',
      'Property Management Tools'
    ],
    ARRAY[
      'Increased lead generation',
      'Better property showcase',
      'Streamlined property management',
      'Improved online presence',
      'Higher conversion rates'
    ],
    ARRAY[
      'real estate web development',
      'property listing website',
      'real estate digital marketing',
      'property management system',
      'real estate lead generation'
    ],
    true,
    6
  )
ON CONFLICT (slug) DO NOTHING;

-- ==============================================
-- SEED SAMPLE BLOG POSTS
-- ==============================================
INSERT INTO blog_posts (
  title, 
  slug, 
  excerpt, 
  content, 
  author_name, 
  published_at, 
  is_published, 
  is_featured, 
  read_time,
  seo_title,
  seo_description,
  seo_keywords,
  category_id
) VALUES
  (
    'Complete Guide to Digital Transformation for Small Businesses',
    'digital-transformation-guide',
    'Learn how small businesses can successfully navigate digital transformation with practical strategies and actionable tips.',
    '<h2>Introduction</h2><p>Digital transformation is no longer a luxury for small businesses—it''s a necessity. In today''s competitive landscape, businesses that embrace digital tools and strategies are more likely to succeed and grow.</p><h2>Key Areas of Digital Transformation</h2><h3>1. Online Presence</h3><p>Every business needs a professional website and social media presence. This is often the first point of contact with potential customers.</p><h3>2. Process Automation</h3><p>Automating repetitive tasks can save time and reduce errors. Consider tools for customer relationship management (CRM), invoicing, and scheduling.</p><h3>3. Data-Driven Decision Making</h3><p>Use analytics tools to understand your customers better and make informed business decisions.</p><h2>Getting Started</h2><p>Start small and gradually expand your digital capabilities. Focus on the areas that will have the most immediate impact on your business.</p>',
    'MidGrow Team',
    '2025-01-01T00:00:00Z',
    true,
    true,
    5,
    'Digital Transformation Guide for Small Businesses | MidGrow',
    'Complete guide to digital transformation for small businesses. Learn practical strategies and actionable tips to modernize your business operations.',
    ARRAY['digital transformation', 'small business', 'business strategy', 'automation', 'digital tools'],
    (SELECT id FROM blog_categories WHERE slug = 'business-growth' LIMIT 1)
  ),
  (
    'SEO Best Practices for 2025: What Every Business Owner Should Know',
    'seo-best-practices-2025',
    'Discover the latest SEO strategies and best practices for 2025 to improve your website''s search engine rankings.',
    '<h2>The SEO Landscape in 2025</h2><p>Search engine optimization continues to evolve, with search engines becoming smarter and more focused on user experience.</p><h2>Core SEO Principles</h2><h3>1. Content Quality</h3><p>Create valuable, original content that answers your audience''s questions and solves their problems.</p><h3>2. Technical SEO</h3><p>Ensure your website loads fast, is mobile-friendly, and has proper site structure.</p><h3>3. Local SEO</h3><p>For local businesses, optimize for local search by claiming your Google Business Profile and getting positive reviews.</p><h2>Action Steps</h2><p>Start with a comprehensive SEO audit, then focus on creating high-quality content and building authoritative backlinks.</p>',
    'MidGrow Team',
    '2025-01-02T00:00:00Z',
    true,
    true,
    7,
    'SEO Best Practices 2025: Complete Guide | MidGrow',
    'Learn the latest SEO best practices for 2025. Improve your website rankings with proven strategies and techniques.',
    ARRAY['SEO', 'search engine optimization', 'SEO best practices', 'SEO 2025', 'website ranking'],
    (SELECT id FROM blog_categories WHERE slug = 'seo' LIMIT 1)
  ),
  (
    'How to Build a High-Converting Website for Your Business',
    'high-converting-website-guide',
    'Step-by-step guide to building a website that converts visitors into customers with proven design and optimization techniques.',
    '<h2>Why Website Conversion Matters</h2><p>A high-converting website turns visitors into customers, subscribers, or leads. It''s the foundation of your digital marketing success.</p><h2>Key Elements of High-Converting Websites</h2><h3>1. Clear Value Proposition</h3><p>Your value proposition should be immediately clear to visitors. What problem do you solve? How are you different?</p><h3>2. Compelling Call-to-Actions</h3><p>Use clear, action-oriented language for your buttons and links. Test different variations to see what works best.</p><h3>3. Social Proof</h3><p>Include testimonials, reviews, case studies, and trust badges to build credibility.</p><h2>Optimization Strategies</h2><p>Continuously test and optimize your website elements using A/B testing and user feedback.</p>',
    'MidGrow Team',
    '2025-01-03T00:00:00Z',
    true,
    false,
    6,
    'How to Build a High-Converting Website | MidGrow',
    'Learn how to build a high-converting website that turns visitors into customers. Proven strategies and techniques included.',
    ARRAY['website conversion', 'web design', 'conversion optimization', 'high-converting website', 'website design'],
    (SELECT id FROM blog_categories WHERE slug = 'web-development' LIMIT 1)
  )
ON CONFLICT (slug) DO NOTHING;

-- ==============================================
-- SEED SAMPLE PROJECTS
-- ==============================================
INSERT INTO projects (
  title,
  slug,
  description,
  short_description,
  client_name,
  client_industry,
  project_type,
  technologies,
  services_provided,
  project_duration,
  budget_range,
  results,
  challenges,
  solutions,
  is_featured,
  is_published,
  completed_at,
  sector_id
) VALUES
  (
    'E-commerce Platform for Fashion Retailer',
    'fashion-retailer-ecommerce',
    'Complete e-commerce solution for a growing fashion retailer, including custom design, payment integration, and inventory management.',
    'Custom e-commerce platform with advanced features',
    'StyleHub Fashion',
    'Fashion Retail',
    'E-commerce Development',
    ARRAY['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    ARRAY['Web Development', 'E-commerce Setup', 'Payment Integration', 'Digital Marketing', 'SEO'],
    '3 months',
    '₹2,50,000 - ₹5,00,000',
    ARRAY['300% increase in online sales', '50% reduction in cart abandonment', '150% increase in mobile conversions'],
    ARRAY['Complex product variations', 'Multi-currency support', 'High-performance requirements'],
    ARRAY['Custom product configurator', 'Optimized checkout process', 'Progressive web app implementation'],
    true,
    true,
    '2024-12-15T00:00:00Z',
    (SELECT id FROM sectors WHERE slug = 'e-commerce' LIMIT 1)
  ),
  (
    'Healthcare Practice Management System',
    'healthcare-practice-management',
    'HIPAA-compliant practice management system for a multi-location healthcare provider.',
    'Comprehensive healthcare practice management solution',
    'HealthCare Plus',
    'Healthcare',
    'Custom Software Development',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    ARRAY['Custom Development', 'System Integration', 'Security Implementation', 'Staff Training'],
    '6 months',
    '₹5,00,000 - ₹10,00,000',
    ARRAY['80% reduction in appointment scheduling time', '90% improvement in patient data security', '60% increase in patient satisfaction'],
    ARRAY['HIPAA compliance requirements', 'Legacy system integration', 'Multi-location synchronization'],
    ARRAY['Secure API architecture', 'Real-time data synchronization', 'Comprehensive audit logging'],
    true,
    true,
    '2024-11-30T00:00:00Z',
    (SELECT id FROM sectors WHERE slug = 'healthcare' LIMIT 1)
  ),
  (
    'Restaurant Online Ordering System',
    'restaurant-online-ordering',
    'Complete online ordering and delivery management system for a restaurant chain.',
    'Online ordering system with delivery management',
    'Tasty Bites',
    'Restaurant',
    'Web Application',
    ARRAY['React Native', 'Node.js', 'MySQL', 'Firebase', 'Stripe'],
    ARRAY['Mobile App Development', 'Web Development', 'Payment Integration', 'Digital Marketing'],
    '4 months',
    '₹3,00,000 - ₹6,00,000',
    ARRAY['200% increase in online orders', '40% reduction in order processing time', '95% customer satisfaction rate'],
    ARRAY['Real-time order tracking', 'Delivery route optimization', 'Peak hour handling'],
    ARRAY['Real-time WebSocket implementation', 'Google Maps integration', 'Auto-scaling infrastructure'],
    false,
    true,
    '2024-10-20T00:00:00Z',
    (SELECT id FROM sectors WHERE slug = 'restaurant' LIMIT 1)
  )
ON CONFLICT (slug) DO NOTHING;

-- ==============================================
-- SEED SAMPLE TESTIMONIALS
-- ==============================================
INSERT INTO testimonials (
  client_name,
  client_position,
  client_company,
  testimonial,
  rating,
  service_type,
  is_featured,
  is_published,
  project_id
) VALUES
  (
    'Rajesh Kumar',
    'CEO',
    'StyleHub Fashion',
    'MidGrow transformed our online presence completely. Our e-commerce platform is now converting 3x better than before, and our sales have increased by 300%. The team was professional, responsive, and delivered exactly what we needed.',
    5,
    'E-commerce Development',
    true,
    true,
    (SELECT id FROM projects WHERE slug = 'fashion-retailer-ecommerce' LIMIT 1)
  ),
  (
    'Dr. Priya Sharma',
    'Practice Manager',
    'HealthCare Plus',
    'The practice management system developed by MidGrow has revolutionized our operations. We''ve reduced appointment scheduling time by 80% and our patients love the new patient portal. Highly recommended!',
    5,
    'Healthcare Software',
    true,
    true,
    (SELECT id FROM projects WHERE slug = 'healthcare-practice-management' LIMIT 1)
  ),
  (
    'Arjun Patel',
    'Owner',
    'Tasty Bites',
    'Our online ordering system has been a game-changer for our restaurant. Online orders have increased by 200% and the system handles our peak hours perfectly. The MidGrow team understood our needs and delivered beyond expectations.',
    5,
    'Restaurant Technology',
    true,
    true,
    (SELECT id FROM projects WHERE slug = 'restaurant-online-ordering' LIMIT 1)
  ),
  (
    'Sneha Gupta',
    'Marketing Director',
    'GreenTech Solutions',
    'MidGrow''s digital marketing services helped us increase our lead generation by 250%. Their SEO strategies improved our search rankings significantly, and their social media campaigns brought in high-quality leads.',
    5,
    'Digital Marketing',
    false,
    true,
    NULL
  ),
  (
    'Vikram Singh',
    'Founder',
    'EduTech Academy',
    'The learning management system built by MidGrow has transformed our online education delivery. Student engagement has improved by 85% and our course completion rates have doubled. Excellent work!',
    5,
    'Educational Technology',
    false,
    true,
    NULL
  );

-- ==============================================
-- UPDATE SITE SETTINGS WITH REAL DATA
-- ==============================================
UPDATE site_settings SET 
  value = 'MidGrow - Digital Transformation Solutions'
WHERE key = 'site_name';

UPDATE site_settings SET 
  value = 'Transform your business with our comprehensive digital solutions. Web development, digital marketing, SEO, and automation services for growing businesses.'
WHERE key = 'site_description';

-- ==============================================
-- CREATE SAMPLE BLOG POST TAGS RELATIONSHIPS
-- ==============================================
INSERT INTO blog_post_tags (blog_post_id, blog_tag_id)
SELECT 
  bp.id,
  bt.id
FROM blog_posts bp
CROSS JOIN blog_tags bt
WHERE 
  (bp.slug = 'digital-transformation-guide' AND bt.slug IN ('strategy', 'small-business', 'digital-marketing'))
  OR (bp.slug = 'seo-best-practices-2025' AND bt.slug IN ('seo', 'best-practices', 'tips'))
  OR (bp.slug = 'high-converting-website-guide' AND bt.slug IN ('web-development', 'best-practices', 'tutorial'))
ON CONFLICT (blog_post_id, blog_tag_id) DO NOTHING;

-- ==============================================
-- COMPLETION MESSAGE
-- ==============================================
SELECT 'Sample data seeded successfully! 🌱' as message;
