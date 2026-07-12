import { PortfolioItem, WorkExperienceItem, ToolItem, CertificationItem, TestimonialItem, ProfileConfig } from './types';
import profileImage from './assets/images/profile_headshot_yellow_new.jpg';
import lumeBrandKit from './assets/images/lume_brand_kit_new.png';
import aftBrandKit from './assets/images/aft_brand_kit.jpg';
import revfitBrandKit from './assets/images/revfit_brand_kit_new.png';
import therapyDogsCarouselKit from './assets/images/therapy_dogs_carousel_new.png';
import revfitExcusesCarouselKit from './assets/images/revfit_excuses_carousel_kit_1782882907778.jpg';
import pushupChallengeTeam from './assets/images/pushup_challenge_team.jpg';
import evoltScanPromo from './assets/images/evolt_scan_promo.jpg';
import aftGymBag from './assets/images/aft_gym_bag.jpg';
import bookNextSession from './assets/images/book_next_session.jpg';
import aftWelcomePromo from './assets/images/aft_welcome_promo.jpg';
import bookDoulaWebinarCampaign from './assets/images/book_doula_webinar_campaign.jpg';
import socialEdgeCreativeCover from './assets/images/social_edge_creative_cover.jpg';
import maryLandingPageCover from './assets/images/mary_landing_page_cover.jpg';

export const profileData: ProfileConfig = {
  name: 'Mary Grace Belangel',
  titles: [
    'Social Media Manager',
    'Meta Ads Manager',
    'Admin Manager',
    'Virtual Assistant',
    'Web Designer & Portfolio Site Maker',
    'Digital Products Creator'
  ],
  photoUrl: profileImage, 
  email: 'marygracebelangel26@gmail.com',
  phone: '+63 998 475 7817',
  whatsapp: '+639984757817'
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-brand-lume',
    title: 'Brand Kit — LUMÉ Lash Studio',
    platform: 'brand',
    category: 'Brand Kits',
    filter: 'brand-kits',
    caption: 'Complete brand identity including logo suite, color palette, typography, moodboard, social media templates, and packaging design for a luxury lash studio.',
    metrics: 'Brand Kit Showcase',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#14B8A6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Sparkles',
      badgeText: 'Flagship Project'
    },
    imageUrl: lumeBrandKit
  },
  {
    id: 'port-brand-revfit',
    title: 'Brand Kit — REVFIT',
    platform: 'brand',
    category: 'Brand Kits',
    filter: 'brand-kits',
    caption: 'Complete gym/fitness brand kit including logo, color palette, typography, and sample social media designs for REVFIT, Australia — an active client project.',
    metrics: 'Active Project',
    accentColor: '#5CC4EE',
    visualStyle: {
      gradient: 'from-[#121212] via-[#5CC4EE]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Sparkles',
      badgeText: 'Featured Project'
    },
    imageUrl: revfitBrandKit
  },
  {
    id: 'port-brand-aft',
    title: 'Brand Kit — Active Fitness Tamworth',
    platform: 'brand',
    category: 'Brand Kits',
    filter: 'brand-kits',
    caption: 'Complete gym brand kit for Active Fitness Tamworth including color palette, typography, brand voice guidelines, logo usage, photography style, social media templates, highlight covers, CTA style, and hashtag strategy.',
    metrics: 'Active Project',
    accentColor: '#5DC6D4',
    visualStyle: {
      gradient: 'from-[#121212] via-[#5DC6D4]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Sparkles',
      badgeText: 'Featured Project'
    },
    imageUrl: aftBrandKit
  },
  {
    id: 'port-carousel-therapydogs',
    title: 'Carousel Post — Therapy Dogs NSW',
    platform: 'instagram',
    category: 'Carousel Post',
    filter: 'graphic-design',
    caption: 'A 5-slide social carousel designed to maintain reader engagement and educate on therapy dogs. I can help you design custom, scroll-stopping social media graphics and visual layouts tailored exactly to your unique brand identity to build deep emotional connection.',
    metrics: 'Featured Project',
    accentColor: '#3B82F6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#3B82F6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'LayoutGrid',
      badgeText: 'Carousel Slide'
    },
    imageUrl: therapyDogsCarouselKit
  },
  {
    id: 'port-carousel-revfit-excuses',
    title: 'Carousel Post — REVFIT Excuses',
    platform: 'instagram',
    category: 'Carousel Post',
    filter: 'graphic-design',
    caption: 'A high-intensity, dark/moody 5-slide fitness carousel designed to stop the scroll and handle objections. I can help you design professional, high-impact marketing visuals matching your unique branding and brand guidelines.',
    metrics: 'Featured Project',
    accentColor: '#5CC4EE',
    visualStyle: {
      gradient: 'from-[#121212] via-[#5CC4EE]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'LayoutGrid',
      badgeText: 'Carousel Slide'
    },
    imageUrl: revfitExcusesCarouselKit
  },
  {
    id: 'port-pushup-challenge',
    title: 'Event Poster — The Push-Up Challenge',
    platform: 'instagram',
    category: 'Event Poster',
    filter: 'graphic-design',
    caption: 'Bold dual-brand event poster designed for Active Fitness Tamworth and REVFIT\'s joint Push-Up Challenge fundraiser, driving team sign-ups with high-contrast typography and dynamic sport photography.',
    metrics: 'Featured Project',
    accentColor: '#5CC4EE',
    visualStyle: {
      gradient: 'from-[#121212] via-[#5CC4EE]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'TrendingUp',
      badgeText: 'Event Poster'
    },
    imageUrl: pushupChallengeTeam
  },
  {
    id: 'port-evolt-promo',
    title: 'Promo Graphic — EVOLT Body Scan',
    platform: 'instagram',
    category: 'Promo Post',
    filter: 'graphic-design',
    caption: 'Sleek dual-branded promotional graphic for Active Fitness Tamworth and REVFIT\'s EVOLT 360 body composition scan service, engineered to drive same-day scan bookings.',
    metrics: 'Featured Project',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#14B8A6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Percent',
      badgeText: 'Promo Post'
    },
    imageUrl: evoltScanPromo
  },
  {
    id: 'port-aft-bag',
    title: 'Product Post — AFT Gym Bag',
    platform: 'instagram',
    category: 'Product Post',
    filter: 'graphic-design',
    caption: 'Modern typographic product post designed for the Active Fitness Tamworth branded gym bag, built with bold oversized type and a clean teal-and-black brand palette to drive merchandise orders.',
    metrics: 'Featured Project',
    accentColor: '#5CC4EE',
    visualStyle: {
      gradient: 'from-[#121212] via-[#5CC4EE]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Sparkles',
      badgeText: 'Product Post'
    },
    imageUrl: aftGymBag
  },
  {
    id: 'port-book-session',
    title: 'Promo Post — Book Your Next Session',
    platform: 'instagram',
    category: 'Promo Post',
    filter: 'graphic-design',
    caption: 'On-location gym photography paired with bold call-to-action typography for Active Fitness Tamworth, designed to drive PT session bookings with clear contact details layered over the image.',
    metrics: 'Featured Project',
    accentColor: '#3B82F6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#3B82F6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Calendar',
      badgeText: 'Promo Post'
    },
    imageUrl: bookNextSession
  },
  {
    id: 'port-aft-welcome',
    title: 'Welcome Graphic — AFT New Member Promo',
    platform: 'instagram',
    category: 'Promo Post',
    filter: 'graphic-design',
    caption: 'Warm, on-brand welcome graphic for new Active Fitness Tamworth members who signed up to the $9.95 promo, pairing gym photography with a free training plan offer to boost early engagement.',
    metrics: 'Featured Project',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#14B8A6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Heart',
      badgeText: 'Promo Post'
    },
    imageUrl: aftWelcomePromo
  },
  {
    id: 'port-reels-collection',
    title: 'Short-Form Reels & Video Collection',
    platform: 'tiktok',
    category: 'Video Reels',
    filter: 'video',
    caption: 'Click here to view my entire curated collection of active, high-converting video reels, CapCut Pro editing workflows, motion graphics, and engaging short-form social video content hosted on Google Drive!',
    metrics: 'All Videos',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-900 via-teal-950/40 to-neutral-950',
      patternType: 'waves',
      primaryIcon: 'Play',
      badgeText: 'Video Reels'
    },
    videoUrl: 'https://drive.google.com/drive/folders/1OYSiqyiJrHy59di9jrSMVt8x3d5D_jx_?usp=drive_link'
  },

  {
    id: 'port-4',
    title: 'The Book Doula Webinar Campaign',
    platform: 'meta',
    category: 'Promo Post',
    filter: 'promo',
    caption: 'High-performing promotional marketing creative designed for Vanessa Barrington\'s interactive book launch webinar. Focused on conversion design best practices and clear typography hierarchy.',
    metrics: '850+ Signups',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-950 via-teal-950/50 to-neutral-900',
      patternType: 'waves',
      primaryIcon: 'Calendar',
      badgeText: 'Webinar Promo'
    },
    imageUrl: bookDoulaWebinarCampaign
  },
  {
    id: 'port-web-design-social-edge',
    title: 'Website — Social Edge Creative',
    platform: 'brand',
    category: 'Web Design',
    filter: 'web-design',
    caption: 'A fully custom, modern portfolio website built and designed from the ground up for Social Edge Creative — clean navigation, responsive layout, and a design that reflects the brand perfectly. Click through to view the live site.',
    metrics: 'Live Website',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-[#121212] via-[#14B8A6]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Globe',
      badgeText: 'Live Site'
    },
    liveUrl: 'https://socialedgecreativeservices.netlify.app/',
    imageUrl: socialEdgeCreativeCover
  },
  {
    id: 'port-web-design-mary-landing',
    title: 'Landing Page — Portfolio Sites for VAs & Small Business',
    platform: 'brand',
    category: 'Web Design',
    filter: 'web-design',
    caption: 'A bold, conversion-focused landing page sample built to show VAs and small business owners why a static PDF resume is no longer enough — designed to drive portfolio site bookings.',
    metrics: 'Landing Page',
    accentColor: '#EC4899',
    visualStyle: {
      gradient: 'from-[#121212] via-[#EC4899]/10 to-[#121212]',
      patternType: 'grid',
      primaryIcon: 'Globe',
      badgeText: 'Sample Page'
    },
    liveUrl: 'https://portfoliocreationbiz.netlify.app/',
    imageUrl: maryLandingPageCover
  }
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Social Media Manager',
    company: 'REVFIT',
    location: 'Australia',
    period: '2024 – Present',
    bullets: [
      'Manage daily content publishing, scheduling, and community interaction across all key platforms.',
      'Craft highly engaging, search-optimized captions, reel covers, and promotional post graphics.',
      'Design and script high-performance gym marketing campaigns to drive local gym membership trials.',
      'Track fitness audience analytics to adjust storytelling strategies and maximize weekly content reach.'
    ],
    isCurrent: true
  },
  {
    id: 'exp-2',
    role: 'Marketing and Operations Manager',
    company: 'The Book Doula by Vanessa Barrington',
    location: 'Australia / Remote',
    period: '2026',
    bullets: [
      'Directed full operational launch strategies for book publications, webinars, and audio content.',
      'Managed general social media operations, webinar scheduling pipelines, and podcast editing tracks.',
      'Coordinated email marketing list segmentation and designed premium outreach marketing materials.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Social Media Manager',
    company: 'Active Fitness Tamworth',
    location: 'Australia',
    period: '2023',
    bullets: [
      'Created and implemented high-retention content strategy focused on emotional local storytelling.',
      'Designed print and digital gym promotion banners, member checklists, and community assets.',
      'Increased general engagement statistics and page likes through targeted interaction campaigns.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Social Media Manager',
    company: 'Therapy Dogs NSW',
    location: 'Australia',
    period: '2023',
    bullets: [
      'Developed and posted heart-warming community outreach campaigns to foster trust and brand awareness.',
      'Coordinated digital event promotion templates, local awareness post schedules, and volunteer guides.',
      'Leveraged organic reach on Meta pages to coordinate community dog handler signups.'
    ]
  },
  {
    id: 'exp-5',
    role: 'Virtual Assistant / Social Media Manager',
    company: 'Freelance',
    location: 'Global (Australia, US, Online)',
    period: '2016 – Present',
    bullets: [
      'Provide general executive assistant operations, inbox management, and calendar scheduling.',
      'Formulate lead generation funnels, cold email lists, and automate pipelines using Zapier and CRMs.',
      'Formulate and design custom social media templates, blog infographics, newsletters, and video reels.'
    ]
  },
  {
    id: 'exp-6',
    role: 'Executive Assistant',
    company: 'L7 Pictures – American Dream TV Show',
    location: 'USA / Remote',
    period: '2021',
    bullets: [
      'Provided high-level virtual support, client liaison support, and coordinated internal production agendas.',
      'Managed executive calendars, coordinated filming schedules, and tracked cross-team correspondence.',
      'Optimized administrative workflows to improve overall film production coordination speeds.'
    ]
  },
  {
    id: 'exp-7',
    role: 'Newsletter Writer',
    company: 'Online Bible College',
    location: 'Remote',
    period: '2024',
    bullets: [
      'Authored, formatted, and copy-edited weekly spiritual educational newsletters sent to thousands.',
      'Structured reader engagement flows to increase call-to-action click-through rates on deep study guides.'
    ]
  },
  {
    id: 'exp-8',
    role: 'College Instructor',
    company: 'Brokenshire College Toril Inc.',
    location: 'Philippines',
    period: '2016 – 2021',
    bullets: [
      'Instructed tertiary classes in General Science and Media & Information Literacy.',
      'Pioneered interactive lesson structures, digital curriculum delivery, and student communication portals.'
    ]
  }
];

export const toolsList: ToolItem[] = [
  // Design & Video
  { name: 'Canva Pro', category: 'design', icon: 'Palette', rating: 'Expert' },
  { name: 'CapCut Pro', category: 'design', icon: 'Video', rating: 'Expert' },
  { name: 'Graphic Design', category: 'design', icon: 'Sparkles', rating: 'Pro' },
  
  // Marketing & Ads
  { name: 'Meta Business Suite', category: 'ads', icon: 'Meta', rating: 'Expert' },
  { name: 'Meta Pixels', category: 'ads', icon: 'Target', rating: 'Expert' },
  { name: 'Hootsuite', category: 'ads', icon: 'Send', rating: 'Pro' },
  { name: 'Google Analytics', category: 'ads', icon: 'BarChart3', rating: 'Pro' },
  
  // Email & Newsletters
  { name: 'Mailchimp', category: 'crm', icon: 'Mail', rating: 'Expert' },
  { name: 'Klaviyo', category: 'crm', icon: 'MailOpen', rating: 'Pro' },
  { name: 'Brevo', category: 'crm', icon: 'Inbox', rating: 'Pro' },
  { name: 'Newsletter Writing', category: 'crm', icon: 'FileText', rating: 'Expert' },

  // CRM, Automation & Workspace
  { name: 'Zapier', category: 'crm', icon: 'Zap', rating: 'Pro' },
  { name: 'Zoho CRM', category: 'crm', icon: 'Database', rating: 'Pro' },
  { name: 'Pipedrive', category: 'crm', icon: 'GitMerge', rating: 'Pro' },
  { name: 'Trello', category: 'productivity', icon: 'Trello', rating: 'Expert' },
  { name: 'Notion', category: 'productivity', icon: 'BookOpen', rating: 'Expert' },
  { name: 'Google Workspace', category: 'productivity', icon: 'FolderOpen', rating: 'Expert' },
  { name: 'Microsoft Teams', category: 'productivity', icon: 'Users', rating: 'Pro' },
  { name: 'Calendly', category: 'productivity', icon: 'Calendar', rating: 'Expert' },
  { name: 'Jotform', category: 'productivity', icon: 'CheckSquare', rating: 'Pro' },

  // Specialized VA tools
  { name: 'ChatGPT / AI Prompts', category: 'general', icon: 'Cpu', rating: 'Expert' },
  { name: 'Kixie', category: 'general', icon: 'PhoneCall', rating: 'Pro' },
  { name: 'Zendesk', category: 'general', icon: 'LifeBuoy', rating: 'Pro' },
  { name: 'Apollo.io', category: 'general', icon: 'SearchCode', rating: 'Pro' },
  { name: 'Wodify', category: 'general', icon: 'Activity', rating: 'Pro' },
  { name: 'Kajabi', category: 'general', icon: 'Compass', rating: 'Pro' },
  { name: 'Carrd', category: 'general', icon: 'Code', rating: 'Expert' }
];

export const certifications: CertificationItem[] = [
  {
    title: 'Certified Social Media Manager',
    issuer: 'PROVA',
    year: '2022',
    icon: 'Award'
  },
  {
    title: 'Xero Certified - Bookkeeping',
    issuer: 'PROVA',
    year: '2026',
    icon: 'ShieldCheck'
  },
  {
    title: 'Master of Arts in Educational Management',
    issuer: 'Holy Cross of Davao College (Undergraduate Studies)',
    year: 'Graduate Level',
    icon: 'GraduationCap'
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: 'test-joshua',
    name: 'Joshua Lawrence',
    role: 'Owner',
    company: 'Multiple Businesses',
    testimonial: 'I had the privilege of working with Mary across three of my businesses- a 24/7 gym, a fitness RTO, and my consulting company. Mary provided reliable and high-quality support in executive assistance, admin operations, social media, and graphic design, and quickly became instrumental to our growth.\n\nShe is proactive, trustworthy, and always committed to achieving the best outcome for the business. Mary consistently helped streamline systems, support our teams, and strengthen our brand presence, making it easier for me to focus on leadership and scaling.\n\nI can confidently recommend Mary to any organisation needing a professional, dependable and business-minded virtual assistant or executive support specialist. She is an asset to any team she works.',
    rating: 5,
    avatarInitials: 'JL'
  },
  {
    id: 'test-maisie',
    name: 'Maisie Dickson',
    role: 'Client & Partner',
    company: 'Social Media Campaigns',
    testimonial: 'Professional and social media savvy. Very happy with the service.',
    rating: 5,
    avatarInitials: 'MD'
  },
  {
    id: 'test-1',
    name: 'Vanessa Barrington',
    role: 'Founder & Publisher',
    company: 'The Book Doula',
    testimonial: 'Mary Grace has been an indispensable part of my team. She handled our book publication and webinar launch campaigns flawlessly, managing social scheduling, podcast tracks, and outreach marketing materials. Her organization and system tracking kept us completely on target.',
    rating: 5,
    avatarInitials: 'VB'
  },
  {
    id: 'test-social-edge',
    name: 'Social Edge Creative',
    role: 'Founder',
    company: 'Social Edge Creative',
    testimonial: 'I can\u2019t recommend Mary highly enough! From the very beginning, she was friendly, professional, and genuinely cared about bringing my vision for Social Edge Creative to life.\n\nShe created a portfolio website that perfectly reflects my brand and exceeded my expectations. The design is modern, clean, easy to navigate, and showcases my work exactly how I imagined. Mary was always quick to respond, open to feedback, and happy to make any changes along the way, making the whole process stress-free.\n\nIf you\u2019re looking for someone to create a beautiful, professional website with outstanding customer service, Mary is the person to go to. Thank you again for all your hard work\u2014I absolutely love the final result and look forward to working with you again in the future!',
    rating: 5,
    avatarInitials: 'SE'
  }
];

