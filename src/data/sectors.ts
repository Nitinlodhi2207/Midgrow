// Sector-wise digital solutions data

export interface Sector {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  shortDescription: string
  challenges: string[]
  solutions: string[]
  services: string[]
  benefits: string[]
  caseStudyExample?: {
    title: string
    description: string
    results: string[]
  }
  seoKeywords: string[]
}

export const sectors: Sector[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: '🏭',
    description: 'Digital transformation solutions for manufacturing companies to optimize operations, improve efficiency, and enhance customer reach.',
    shortDescription: 'Streamline operations and boost efficiency with digital solutions',
    challenges: [
      'Inefficient inventory management',
      'Poor supplier communication',
      'Limited online presence',
      'Manual quality control processes',
      'Lack of real-time production monitoring'
    ],
    solutions: [
      'Custom inventory management systems',
      'Supplier portal development',
      'Manufacturing website with product catalogs',
      'Quality control automation tools',
      'Real-time dashboard for production monitoring'
    ],
    services: [
      'Custom Web Applications',
      'ERP Integration',
      'Digital Marketing',
      'E-commerce Solutions',
      'Business Automation'
    ],
    benefits: [
      'Reduced operational costs by 30-40%',
      'Improved inventory accuracy',
      'Enhanced supplier relationships',
      'Increased online visibility',
      'Streamlined quality processes'
    ],
    caseStudyExample: {
      title: 'Steel Manufacturing Company',
      description: 'Developed a comprehensive inventory and supplier management system',
      results: [
        '35% reduction in inventory costs',
        '50% faster supplier onboarding',
        '60% improvement in order accuracy'
      ]
    },
    seoKeywords: ['manufacturing digital solutions', 'inventory management software', 'manufacturing website', 'industrial automation']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    icon: '🏥',
    description: 'Comprehensive digital healthcare solutions including patient management systems, telemedicine platforms, and healthcare marketing.',
    shortDescription: 'Modernize healthcare delivery with digital patient care solutions',
    challenges: [
      'Complex patient record management',
      'Inefficient appointment scheduling',
      'Limited patient engagement',
      'Poor online reputation management',
      'Lack of telemedicine capabilities'
    ],
    solutions: [
      'Patient management systems',
      'Online appointment booking',
      'Patient engagement platforms',
      'Healthcare digital marketing',
      'Telemedicine applications'
    ],
    services: [
      'Healthcare Management Systems',
      'Telemedicine Platforms',
      'Digital Marketing for Healthcare',
      'Patient Engagement Tools',
      'Medical Website Development'
    ],
    benefits: [
      'Improved patient satisfaction',
      'Reduced administrative workload',
      'Enhanced patient engagement',
      'Better online reputation',
      'Expanded reach through telemedicine'
    ],
    caseStudyExample: {
      title: 'Multi-Specialty Clinic',
      description: 'Implemented complete digital patient management and telemedicine solution',
      results: [
        '70% reduction in appointment no-shows',
        '40% increase in patient satisfaction',
        '3x growth in online consultations'
      ]
    },
    seoKeywords: ['healthcare software', 'patient management system', 'telemedicine platform', 'medical practice marketing']
  },
  {
    id: 'energy',
    name: 'Energy & Renewable',
    slug: 'energy',
    icon: '⚡',
    description: 'Digital solutions for solar, renewable energy, and traditional energy companies to optimize operations and customer acquisition.',
    shortDescription: 'Power your energy business with smart digital solutions',
    challenges: [
      'Complex project management',
      'Difficult customer acquisition',
      'Inefficient monitoring systems',
      'Poor lead generation',
      'Lack of performance analytics'
    ],
    solutions: [
      'Solar project management platforms',
      'Energy monitoring dashboards',
      'Lead generation systems',
      'Customer portal development',
      'Performance analytics tools'
    ],
    services: [
      'Energy Management Systems',
      'Solar Calculator Tools',
      'Digital Marketing',
      'Project Management Platforms',
      'Customer Engagement Solutions'
    ],
    benefits: [
      'Improved project efficiency',
      'Better customer acquisition',
      'Real-time performance monitoring',
      'Enhanced customer satisfaction',
      'Data-driven decision making'
    ],
    caseStudyExample: {
      title: 'Solar Installation Company',
      description: 'Built comprehensive solar project management and customer acquisition platform',
      results: [
        '200% increase in qualified leads',
        '45% faster project completion',
        '85% improvement in customer satisfaction'
      ]
    },
    seoKeywords: ['solar software solutions', 'energy management system', 'renewable energy marketing', 'solar calculator']
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    slug: 'retail-ecommerce',
    icon: '🛒',
    description: 'Complete e-commerce solutions, inventory management, and digital marketing strategies for retail businesses.',
    shortDescription: 'Transform your retail business with powerful e-commerce solutions',
    challenges: [
      'Limited online presence',
      'Poor inventory management',
      'Low online sales conversion',
      'Ineffective digital marketing',
      'Complex order management'
    ],
    solutions: [
      'Custom e-commerce platforms',
      'Inventory management systems',
      'Digital marketing campaigns',
      'Order management automation',
      'Customer loyalty programs'
    ],
    services: [
      'E-commerce Development',
      'Digital Marketing',
      'Inventory Management',
      'Payment Gateway Integration',
      'Customer Analytics'
    ],
    benefits: [
      'Increased online sales',
      'Better inventory control',
      'Improved customer experience',
      'Enhanced brand visibility',
      'Automated business processes'
    ],
    caseStudyExample: {
      title: 'Fashion Retail Store',
      description: 'Developed complete e-commerce platform with inventory integration',
      results: [
        '300% increase in online sales',
        '50% reduction in inventory costs',
        '90% improvement in order accuracy'
      ]
    },
    seoKeywords: ['e-commerce development', 'retail software', 'online store development', 'inventory management']
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    icon: '🎓',
    description: 'Educational technology solutions including learning management systems, online course platforms, and student engagement tools.',
    shortDescription: 'Enhance learning experiences with innovative educational technology',
    challenges: [
      'Limited online learning capabilities',
      'Poor student engagement',
      'Inefficient administrative processes',
      'Lack of progress tracking',
      'Complex fee management'
    ],
    solutions: [
      'Learning management systems',
      'Online course platforms',
      'Student information systems',
      'Digital assessment tools',
      'Parent-teacher communication portals'
    ],
    services: [
      'LMS Development',
      'Educational Website Design',
      'Student Management Systems',
      'Online Assessment Tools',
      'Digital Marketing for Education'
    ],
    benefits: [
      'Enhanced learning outcomes',
      'Improved student engagement',
      'Streamlined administration',
      'Better parent communication',
      'Increased enrollment'
    ],
    caseStudyExample: {
      title: 'Coaching Institute',
      description: 'Implemented comprehensive online learning and student management platform',
      results: [
        '150% increase in student enrollment',
        '80% improvement in student performance',
        '60% reduction in administrative work'
      ]
    },
    seoKeywords: ['education software', 'learning management system', 'online course platform', 'student information system']
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    slug: 'logistics',
    icon: '🚛',
    description: 'Digital solutions for logistics companies including fleet management, route optimization, and shipment tracking systems.',
    shortDescription: 'Optimize your logistics operations with smart tracking solutions',
    challenges: [
      'Inefficient route planning',
      'Poor shipment visibility',
      'High fuel costs',
      'Manual tracking processes',
      'Customer service issues'
    ],
    solutions: [
      'Fleet management systems',
      'Route optimization tools',
      'Real-time tracking platforms',
      'Customer portal development',
      'Automated dispatch systems'
    ],
    services: [
      'Fleet Management Software',
      'Tracking & Monitoring Systems',
      'Route Optimization',
      'Customer Portals',
      'Logistics Marketing'
    ],
    benefits: [
      'Reduced operational costs',
      'Improved delivery times',
      'Enhanced customer satisfaction',
      'Better fleet utilization',
      'Real-time visibility'
    ],
    caseStudyExample: {
      title: 'Courier Service Company',
      description: 'Developed complete fleet management and tracking solution',
      results: [
        '25% reduction in fuel costs',
        '40% improvement in delivery times',
        '95% customer satisfaction rate'
      ]
    },
    seoKeywords: ['logistics software', 'fleet management system', 'shipment tracking', 'transportation management']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    icon: '🏘️',
    description: 'Comprehensive real estate solutions including property management systems, lead generation, and virtual tour technologies.',
    shortDescription: 'Modernize your real estate business with digital property solutions',
    challenges: [
      'Poor lead management',
      'Limited property visibility',
      'Inefficient client communication',
      'Manual documentation processes',
      'Lack of virtual showcasing'
    ],
    solutions: [
      'Property management systems',
      'Lead generation platforms',
      'Virtual tour integration',
      'Client relationship management',
      'Document automation tools'
    ],
    services: [
      'Real Estate Websites',
      'Property Management Systems',
      'Lead Generation',
      'Virtual Tours & 360° Photography',
      'CRM Development'
    ],
    benefits: [
      'Increased property visibility',
      'Better lead conversion',
      'Improved client relationships',
      'Automated workflows',
      'Enhanced property showcasing'
    ],
    caseStudyExample: {
      title: 'Property Developer',
      description: 'Built comprehensive property showcase and lead management platform',
      results: [
        '180% increase in qualified leads',
        '65% improvement in conversion rates',
        '50% reduction in site visit requirements'
      ]
    },
    seoKeywords: ['real estate software', 'property management system', 'real estate website', 'virtual property tours']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    icon: '🏨',
    description: 'Hotel and hospitality management solutions including booking systems, guest management, and revenue optimization.',
    shortDescription: 'Enhance guest experiences with comprehensive hospitality solutions',
    challenges: [
      'Complex booking management',
      'Poor guest communication',
      'Inefficient staff coordination',
      'Limited revenue optimization',
      'Manual check-in processes'
    ],
    solutions: [
      'Hotel management systems',
      'Online booking platforms',
      'Guest communication tools',
      'Staff management systems',
      'Revenue optimization tools'
    ],
    services: [
      'Hotel Management Software',
      'Booking System Development',
      'Guest Experience Platforms',
      'Revenue Management',
      'Hospitality Marketing'
    ],
    benefits: [
      'Improved booking efficiency',
      'Enhanced guest satisfaction',
      'Better staff coordination',
      'Increased revenue',
      'Streamlined operations'
    ],
    caseStudyExample: {
      title: 'Boutique Hotel Chain',
      description: 'Implemented complete hotel management and guest experience platform',
      results: [
        '45% increase in direct bookings',
        '30% improvement in guest satisfaction',
        '25% increase in revenue per room'
      ]
    },
    seoKeywords: ['hotel management software', 'booking system', 'hospitality solutions', 'guest management system']
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Cloud Kitchens',
    slug: 'restaurants',
    icon: '🍽️',
    description: 'Restaurant management solutions including POS systems, online ordering, delivery management, and customer engagement.',
    shortDescription: 'Streamline restaurant operations with integrated digital solutions',
    challenges: [
      'Complex order management',
      'Poor delivery coordination',
      'Limited online presence',
      'Inefficient inventory tracking',
      'Manual billing processes'
    ],
    solutions: [
      'Restaurant POS systems',
      'Online ordering platforms',
      'Delivery management tools',
      'Inventory management systems',
      'Customer loyalty programs'
    ],
    services: [
      'Restaurant POS Systems',
      'Online Ordering Platforms',
      'Delivery Management',
      'Restaurant Marketing',
      'Menu Management Systems'
    ],
    benefits: [
      'Increased order efficiency',
      'Better delivery management',
      'Enhanced customer experience',
      'Improved inventory control',
      'Higher customer retention'
    ],
    caseStudyExample: {
      title: 'Multi-Location Restaurant',
      description: 'Developed integrated POS and delivery management solution',
      results: [
        '60% increase in online orders',
        '35% improvement in delivery times',
        '80% increase in customer retention'
      ]
    },
    seoKeywords: ['restaurant software', 'POS system', 'online ordering platform', 'delivery management system']
  },
  {
    id: 'finance',
    name: 'Finance & Insurance',
    slug: 'finance',
    icon: '💰',
    description: 'Financial technology solutions including client management, portfolio tracking, and automated reporting systems.',
    shortDescription: 'Modernize financial services with secure and compliant solutions',
    challenges: [
      'Complex client management',
      'Manual reporting processes',
      'Compliance requirements',
      'Limited client engagement',
      'Poor data analytics'
    ],
    solutions: [
      'Client management systems',
      'Automated reporting tools',
      'Compliance management platforms',
      'Client portal development',
      'Financial analytics dashboards'
    ],
    services: [
      'Financial Management Software',
      'Client Portal Development',
      'Compliance Management',
      'Financial Analytics',
      'Insurance Management Systems'
    ],
    benefits: [
      'Improved client relationships',
      'Automated compliance reporting',
      'Enhanced data security',
      'Better client engagement',
      'Data-driven insights'
    ],
    caseStudyExample: {
      title: 'Financial Advisory Firm',
      description: 'Built comprehensive client management and reporting platform',
      results: [
        '50% reduction in reporting time',
        '40% improvement in client satisfaction',
        '100% compliance achievement'
      ]
    },
    seoKeywords: ['financial software', 'client management system', 'insurance software', 'financial analytics']
  },
  {
    id: 'legal',
    name: 'Legal Services',
    slug: 'legal',
    icon: '⚖️',
    description: 'Legal practice management solutions including case management, document automation, and client communication systems.',
    shortDescription: 'Streamline legal practice with efficient case management solutions',
    challenges: [
      'Complex case management',
      'Manual document preparation',
      'Poor client communication',
      'Billing inefficiencies',
      'Limited collaboration tools'
    ],
    solutions: [
      'Case management systems',
      'Document automation tools',
      'Client communication platforms',
      'Legal billing software',
      'Collaboration portals'
    ],
    services: [
      'Legal Practice Management',
      'Case Management Systems',
      'Document Automation',
      'Legal Billing Software',
      'Client Portal Development'
    ],
    benefits: [
      'Improved case organization',
      'Automated document generation',
      'Enhanced client communication',
      'Streamlined billing processes',
      'Better team collaboration'
    ],
    caseStudyExample: {
      title: 'Law Firm',
      description: 'Implemented comprehensive practice management and client portal solution',
      results: [
        '70% reduction in document preparation time',
        '50% improvement in billing accuracy',
        '85% increase in client satisfaction'
      ]
    },
    seoKeywords: ['legal software', 'case management system', 'legal practice management', 'document automation']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    slug: 'agriculture',
    icon: '🌾',
    description: 'Agricultural technology solutions including farm management, crop monitoring, and supply chain optimization.',
    shortDescription: 'Modernize farming operations with smart agricultural solutions',
    challenges: [
      'Poor crop monitoring',
      'Inefficient resource management',
      'Limited market access',
      'Manual record keeping',
      'Supply chain inefficiencies'
    ],
    solutions: [
      'Farm management systems',
      'Crop monitoring platforms',
      'Market access portals',
      'Agricultural record systems',
      'Supply chain management tools'
    ],
    services: [
      'Farm Management Software',
      'Crop Monitoring Systems',
      'Agricultural Marketplaces',
      'Supply Chain Management',
      'Agricultural Analytics'
    ],
    benefits: [
      'Improved crop yields',
      'Better resource utilization',
      'Enhanced market access',
      'Automated record keeping',
      'Optimized supply chain'
    ],
    caseStudyExample: {
      title: 'Agricultural Cooperative',
      description: 'Developed farm management and marketplace platform',
      results: [
        '30% increase in crop yields',
        '40% reduction in resource waste',
        '150% improvement in market reach'
      ]
    },
    seoKeywords: ['agriculture software', 'farm management system', 'crop monitoring', 'agricultural marketplace']
  },
  {
    id: 'construction',
    name: 'Construction & Contractors',
    slug: 'construction',
    icon: '🏗️',
    description: 'Construction management solutions including project tracking, resource management, and client communication systems.',
    shortDescription: 'Build better projects with comprehensive construction management tools',
    challenges: [
      'Complex project management',
      'Poor resource allocation',
      'Inefficient communication',
      'Manual progress tracking',
      'Budget overruns'
    ],
    solutions: [
      'Project management platforms',
      'Resource allocation tools',
      'Communication systems',
      'Progress tracking dashboards',
      'Budget management software'
    ],
    services: [
      'Construction Management Software',
      'Project Tracking Systems',
      'Resource Management',
      'Client Communication Portals',
      'Budget Management Tools'
    ],
    benefits: [
      'Improved project efficiency',
      'Better resource utilization',
      'Enhanced communication',
      'Real-time progress tracking',
      'Budget control'
    ],
    caseStudyExample: {
      title: 'Construction Company',
      description: 'Built comprehensive project management and tracking platform',
      results: [
        '25% reduction in project completion time',
        '35% improvement in resource utilization',
        '90% reduction in budget overruns'
      ]
    },
    seoKeywords: ['construction software', 'project management system', 'construction tracking', 'contractor management']
  },
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    slug: 'fashion',
    icon: '👗',
    description: 'Fashion industry solutions including e-commerce platforms, inventory management, and brand marketing strategies.',
    shortDescription: 'Style your fashion business with trendy digital solutions',
    challenges: [
      'Seasonal inventory management',
      'Poor online presence',
      'Limited brand visibility',
      'Complex size management',
      'Ineffective marketing'
    ],
    solutions: [
      'Fashion e-commerce platforms',
      'Inventory management systems',
      'Brand marketing campaigns',
      'Size management tools',
      'Customer engagement platforms'
    ],
    services: [
      'Fashion E-commerce Development',
      'Inventory Management',
      'Brand Marketing',
      'Size & Fit Solutions',
      'Customer Analytics'
    ],
    benefits: [
      'Increased online sales',
      'Better inventory control',
      'Enhanced brand visibility',
      'Improved customer experience',
      'Data-driven marketing'
    ],
    caseStudyExample: {
      title: 'Fashion Brand',
      description: 'Developed complete e-commerce and brand marketing platform',
      results: [
        '250% increase in online sales',
        '60% improvement in inventory turnover',
        '180% growth in brand awareness'
      ]
    },
    seoKeywords: ['fashion e-commerce', 'apparel website', 'fashion marketing', 'clothing inventory management']
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    slug: 'beauty',
    icon: '💄',
    description: 'Beauty and wellness solutions including appointment booking, customer management, and product catalog systems.',
    shortDescription: 'Beautify your business with elegant wellness management solutions',
    challenges: [
      'Complex appointment scheduling',
      'Poor customer retention',
      'Limited service visibility',
      'Manual inventory tracking',
      'Ineffective marketing'
    ],
    solutions: [
      'Appointment booking systems',
      'Customer management platforms',
      'Service catalog development',
      'Inventory management tools',
      'Beauty marketing campaigns'
    ],
    services: [
      'Salon Management Software',
      'Appointment Booking Systems',
      'Customer Loyalty Programs',
      'Beauty E-commerce',
      'Wellness Marketing'
    ],
    benefits: [
      'Streamlined appointments',
      'Higher customer retention',
      'Increased service bookings',
      'Better inventory control',
      'Enhanced customer experience'
    ],
    caseStudyExample: {
      title: 'Beauty Salon Chain',
      description: 'Implemented comprehensive salon management and booking platform',
      results: [
        '40% increase in appointment bookings',
        '65% improvement in customer retention',
        '80% reduction in no-shows'
      ]
    },
    seoKeywords: ['salon software', 'appointment booking system', 'beauty management', 'wellness platform']
  },
  {
    id: 'ngos',
    name: 'NGOs & Social Ventures',
    slug: 'ngos',
    icon: '🤝',
    description: 'Non-profit organization solutions including donor management, volunteer coordination, and impact tracking systems.',
    shortDescription: 'Amplify your social impact with purpose-driven digital solutions',
    challenges: [
      'Limited funding visibility',
      'Poor donor engagement',
      'Inefficient volunteer management',
      'Manual impact tracking',
      'Low online presence'
    ],
    solutions: [
      'Donor management systems',
      'Volunteer coordination platforms',
      'Impact tracking dashboards',
      'Fundraising campaign tools',
      'Social media management'
    ],
    services: [
      'NGO Management Software',
      'Donor Management Systems',
      'Volunteer Platforms',
      'Impact Tracking',
      'Fundraising Campaigns'
    ],
    benefits: [
      'Increased donations',
      'Better volunteer coordination',
      'Enhanced impact measurement',
      'Improved transparency',
      'Greater community reach'
    ],
    caseStudyExample: {
      title: 'Education NGO',
      description: 'Built comprehensive donor management and impact tracking platform',
      results: [
        '120% increase in donations',
        '85% improvement in volunteer engagement',
        '200% growth in community reach'
      ]
    },
    seoKeywords: ['NGO software', 'donor management system', 'volunteer management', 'impact tracking']
  }
]

export const getSectorBySlug = (slug: string): Sector | undefined => {
  return sectors.find(sector => sector.slug === slug)
}

export const getSectorsByCategory = (): Sector[] => {
  // You can implement categorization logic here if needed
  return sectors
}
