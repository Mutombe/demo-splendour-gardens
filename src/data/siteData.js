export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Splendour Gardens",
    legalName: "Splendour Gardens Events Venue",
    tagline: "Where Splendour Meets Celebration.",
    description:
      "Splendour Gardens is a premium events venue in Waterfalls, Harare, offering elegant garden settings, modern amenities, and professional event coordination for weddings, parties, and corporate functions.",
    phone: "+263 77 587 4865",
    phoneRaw: "+263775874865",
    whatsappNumber: "263775874865",
    email: "bookings@splendourgardens.co.zw",
    address: "253 Hurlingh Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.1,
    ratingRounded: 4,
    reviewCount: 152,
    established: "2014",
    yearsExperience: "10+",
    projectsCompleted: "1,200+",
    employees: "30+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "splendour-gardens-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/splendourgardens/",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Splendour",
    logoLine2: "Gardens",
  },

  hero: {
    badge: "Waterfalls' Most Elegant Events Venue",
    titleParts: [
      { text: "WHERE " },
      { text: "SPLENDOUR", highlight: true },
      { text: " MEETS CELEBRATION." },
    ],
    subtitle:
      "Elegant garden spaces, a grand pavilion, and a decade of flawless event execution. Splendour Gardens is where Harare celebrates its most important moments.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Tour the Venue",
    trustBadge: "1,200+ Events Celebrated",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Splendour Gardens professional image 1" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Splendour Gardens professional image 2" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Splendour Gardens professional image 3" },
    ],
  },

  stats: [
    { number: "1200+", label: "Events Hosted" },
    { number: "10+", label: "Years of Service" },
    { number: "600", label: "Max Guests" },
    { number: "152", label: "Google Reviews" },
  ],

  servicesPreview: [
    {
      title: "Garden Weddings",
      desc: "Romantic garden ceremonies and elegant receptions in our manicured grounds with fairy-light canopies and floral arches.",
      icon: "Heart",
    },
    {
      title: "Grand Pavilion Events",
      desc: "Our covered pavilion hosts up to 600 guests for receptions, galas, and large-scale celebrations rain or shine.",
      icon: "Buildings",
    },
    {
      title: "Corporate Functions",
      desc: "Professional event spaces with full AV capability for conferences, product launches, and team-building events.",
      icon: "Briefcase",
    },
    {
      title: "Birthday Parties",
      desc: "Versatile party spaces from intimate garden corners for small gatherings to full venue hire for milestone celebrations.",
      icon: "Star",
    },
    {
      title: "Cultural Events",
      desc: "Culturally sensitive spaces for traditional ceremonies, thanksgivings, and family gatherings with modern comforts.",
      icon: "Leaf",
    },
    {
      title: "Photo Shoots",
      desc: "Picturesque garden backdrops, architectural features, and natural lighting perfect for professional photography.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Garden Weddings",
        slug: "garden-weddings",
        desc: "Romantic garden ceremonies and elegant receptions in our manicured grounds with fairy-light canopies and floral arches.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Grand Pavilion Events",
        slug: "grand-pavilion-events",
        desc: "Our covered pavilion hosts up to 600 guests for receptions, galas, and large-scale celebrations rain or shine.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Corporate Functions",
        slug: "corporate-functions",
        desc: "Professional event spaces with full AV capability for conferences, product launches, and team-building events.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
      {
        title: "Birthday Parties",
        slug: "birthday-parties",
        desc: "Versatile party spaces from intimate garden corners for small gatherings to full venue hire for milestone celebrations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Cultural Events",
        slug: "cultural-events",
        desc: "Culturally sensitive spaces for traditional ceremonies, thanksgivings, and family gatherings with modern comforts.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Photo Shoots",
        slug: "photo-shoots",
        desc: "Picturesque garden backdrops, architectural features, and natural lighting perfect for professional photography.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Splendour",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in garden weddings.",
        client: "Commercial Client",
        services: ["Garden Weddings", "Grand Pavilion Events"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Splendour",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in grand pavilion events.",
        client: "Residential Client",
        services: ["Grand Pavilion Events", "Corporate Functions"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Splendour",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate functions.",
        client: "Industrial Client",
        services: ["Corporate Functions", "Birthday Parties"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Splendour",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in birthday parties.",
        client: "Institutional Client",
        services: ["Birthday Parties", "Cultural Events"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Splendour",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cultural events.",
        client: "Commercial Client",
        services: ["Cultural Events", "Photo Shoots"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Splendour",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in photo shoots.",
        client: "Residential Client",
        services: ["Photo Shoots", "Garden Weddings"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Splendour Gardens was the perfect venue for our wedding. The gardens are genuinely beautiful and the pavilion was set up exactly as we had envisioned.",
      name: "Munyaradzi Gweru",
      role: "Groom, October 2023",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We have hosted our company Christmas party at Splendour Gardens for three years running. The staff know us by name and the standard never drops.",
      name: "Tsitsi Manyanga",
      role: "Events Coordinator, Econet",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "The most organized venue we have ever worked with. As a decor company, we appreciate a venue team that communicates well and allows seamless setup.",
      name: "Grace Makamure",
      role: "Director, Elite Decor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "My parents' golden anniversary was held at Splendour Gardens and it was absolutely magnificent. Every detail was perfect from start to finish.",
      name: "Brian Sithole",
      role: "Anniversary Organizer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "For over a decade, Splendour Gardens has been Waterfalls' premier events destination. What began as a family garden has blossomed into one of Harare's most beloved venues, hosting over 1,200 celebrations.",
      "Our commitment to excellence is reflected in every manicured hedge, every trained staff member, and every seamlessly executed event. With 152 Google reviews and a loyal following, Splendour Gardens is proof that attention to detail creates unforgettable experiences.",
    ],
    values: [
      { title: "A Decade of Trust", desc: "Over 10 years and 1,200 events of proven excellence. Our track record speaks for itself." },
      { title: "All-Weather Capability", desc: "Grand pavilion provides covered space for 600 guests. Your event is weather-proof without losing the garden atmosphere." },
      { title: "Inclusive Packages", desc: "Venue, tables, chairs, linen, garden lighting, and coordination all included in our packages." },
      { title: "Prime Location", desc: "Easy access from all parts of Harare with ample secure parking on premises." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Splendour Gardens was the perfect venue for our wedding. The gardens are genuinely beautiful and the pavilion was set up exactly as we had envisioned.", name: "Munyaradzi Gweru", role: "Groom, October 2023", rating: 5 },
      { text: "We have hosted our company Christmas party at Splendour Gardens for three years running. The staff know us by name and the standard never drops.", name: "Tsitsi Manyanga", role: "Events Coordinator, Econet", rating: 5 },
      { text: "The most organized venue we have ever worked with. As a decor company, we appreciate a venue team that communicates well and allows seamless setup.", name: "Grace Makamure", role: "Director, Elite Decor", rating: 5 },
      { text: "My parents' golden anniversary was held at Splendour Gardens and it was absolutely magnificent. Every detail was perfect from start to finish.", name: "Brian Sithole", role: "Anniversary Organizer", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Splendour Gardens",
        address: "253 Hurlingh Ave, Harare, Zimbabwe",
        phone: "+263 77 587 4865",
        email: "bookings@splendourgardens.co.zw",
      },
    ],
  },

  homeCta: {
    title: "CELEBRATE IN SPLENDOUR",
    subtitle: "Your most important moments deserve a venue that matches their significance. Splendour Gardens is ready to make your vision reality.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Splendour Gardens! I would like to inquire about venue availability.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },

  footer: {
    description: "Splendour Gardens is a premium events venue in Waterfalls, Harare, offering elegant garden settings, modern amenities, and professional event coordina...",
    copyright: "Splendour Gardens",
  },
};

export default siteData;
