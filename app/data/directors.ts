export interface Director {
  slug: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  videoUrl?: string;
  
  // 1. Director’s Profile
  bio: string;
  
  // 2. Vision & Mission
  vision: string;
  mission: string;
  
  // 3. Message from the Director
  message: string;
  
  // 4. Leadership Philosophy
  philosophy: string;
  
  // 5. Professional Journey
  journey: { year: string; title: string; desc: string }[];
  
  // 6. Roles & Responsibilities
  responsibilities: { title: string; desc: string; icon: string }[];
  
  // 7. Key Achievements
  achievements: { label: string; value: string; desc: string }[];
  
  // 8. Projects Led
  projects: { title: string; category: string; image: string }[];
  
  // 9. Awards & Recognitions
  awards: { title: string; organization: string; year: string }[];
  
  // 10. Team & Culture
  culture: string;
  
  // 11. Contact & Connect (Handled in component but metadata here)
  socials?: { type: 'linkedin' | 'twitter' | 'email'; link: string }[];
}

export const directors: Director[] = [
  {
    slug: "khalid_ansari",
    name: "Mr. Khalid Ansari",
    role: "Chairman & Founder",
    quote: "Foundation for a global legacy is built on integrity and vision.",
    image: "/Founders/khalid_sir.jpg",
    videoUrl: "/videos/logos.mp4",
    bio: "Widely recognized for his strategic insight and leadership, Mr. Khalid Ansari has been the cornerstone of Coral Group's transformation into a globally diversified industrial conglomerate.",
    vision: "To transform Coral Group into a multi-generational conglomerate that sets global benchmarks in infrastructure and social impact.",
    mission: "To establish a global legacy of excellence through diversified industrial growth and ethical leadership.",
    message: "Welcome to the future of Coral Group. Our commitment to excellence began decades ago with a simple promise: to build with integrity. Today, that promise spans continents and industries, driven by a vision that transcends mere profit. We are building legacies.",
    philosophy: "I believe in 'Value-First' leadership. Success is not measured by the height of our towers, but by the depth of the trust our communities place in us. Integrity is the only non-negotiable metric.",
    journey: [
      { year: "1990", title: "Inception", desc: "Founded the first coral textile unit with a vision for global scale." },
      { year: "2005", title: "Industrial Pivot", desc: "Diversification into heavy infrastructure and real estate development." },
      { year: "2015", title: "Global Presence", desc: "Established international hubs in Dubai and London." },
      { year: "2024", title: "Legacy Phase", desc: "Focusing on sustainable governance and philanthropic scaling." }
    ],
    responsibilities: [
      { title: "Strategic Expansion", desc: "Directing the group's entry into high-growth international markets.", icon: "Globe" },
      { title: "Governance Oversight", desc: "Maintaining the ethical and legal frameworks of all verticals.", icon: "ShieldCheck" },
      { title: "Philanthropic Direction", desc: "Leading the Coral Foundation's social impact projects.", icon: "Heart" }
    ],
    achievements: [
      { label: "Growth", value: "5000%", desc: "Increase in group valuation over three decades." },
      { label: "Community", value: "50k+", desc: "Families supported through foundation initiatives." }
    ],
    projects: [
      { title: "Coral Greens Phase I", category: "Real Estate", image: "/property/SK1.jpg" },
      { title: "Global Logistics Hub", category: "Infrastructure", image: "/Office/AMN_4991.jpeg" }
    ],
    awards: [
      { title: "Industrialist of the Year", organization: "Global Business Federation", year: "2018" },
      { title: "Lifetime Achievement", organization: "Urban Development Council", year: "2022" }
    ],
    culture: "We foster a culture of 'Ownership'. Every member of Coral Group is an architect of our shared destiny. We prioritize resilience and mutual respect above all.",
    socials: [
      { type: 'linkedin', link: '#' },
      { type: 'email', link: 'khalid@coral-group.in' }
    ]
  },
  {
    slug: "anas_ansari",
    name: "Mr. Anas Ansari",
    role: "Managing Director",
    quote: "Innovation is the bridge between a dream and reality.",
    image: "/Founders/anas_sir.jpg",
    videoUrl: "/videos/logos.mp4",
    bio: "Anas Ansari is a dynamic leader committed to innovation and excellence. His strategic foresight has been pivotal in shaping the group’s success.",
    vision: "Leading Coral Group towards a future where technology and sustainability are the primary drivers of urban development.",
    mission: "Driving technological transformation and operational excellence across all business verticals.",
    message: "At Coral Group, we don't just build structures; we build smarter ecosystems. My goal is to ensure that every project we touch is infused with the latest in sustainable technology and modern design philosophy.",
    philosophy: "Modern leadership is about agility. In a rapidly changing world, the ability to pivot without losing sight of our core values is what defines us. Technology is our greatest tool for human progress.",
    journey: [
      { year: "2010", title: "Director of Ops", desc: "Modernized the internal ERP across all group divisions." },
      { year: "2018", title: "Managing Director", desc: "Took charge of the day-to-day strategic operations of the conglomerate." },
      { year: "2022", title: "Smart City Initiative", desc: "Launched the first AI-integrated residential complex in India." }
    ],
    responsibilities: [
      { title: "Tech Integration", desc: "Oversight of digital transformation and AI deployment.", icon: "Cpu" },
      { title: "Urban Planning", desc: "Lead architect of the group's iconic real estate masterplans.", icon: "Building2" },
      { title: "Ops Excellence", desc: "Streamlining logistics and manufacturing efficiency.", icon: "Zap" }
    ],
    achievements: [
      { label: "Innovation", value: "98%", desc: "Digital adoption rate across group personnel." },
      { label: "Speed", value: "2X", desc: "Improvement in project delivery timelines." }
    ],
    projects: [
      { title: "The Smart Towers", category: "Commercial", image: "/property/SK2.jpg" },
      { title: "Eco-Lifestyle Resort", category: "Hospitality", image: "/Beach/AMN_4957-2.jpeg" }
    ],
    awards: [
      { title: "Tech Visionary Award", organization: "NASSCOM Insight", year: "2021" },
      { title: "Young Leader 40u40", organization: "Business World", year: "2019" }
    ],
    culture: "Our culture is one of 'Fearless Innovation'. We encourage calculated risks and constant learning to stay at the vanguard of the industry.",
    socials: [
      { type: 'linkedin', link: '#' },
      { type: 'twitter', link: '#' }
    ]
  },
  {
    slug: "aisha_ansari",
    name: "Mrs. Aisha Ansari",
    role: "Director",
    quote: "Strategic foresight is the key to navigating global markets.",
    image: "/Founders/aisha_ansari.jpg",
    videoUrl: "/videos/logos.mp4",
    bio: "Aisha Ansari brings a global perspective to her role, effectively navigating diverse markets with her multi-lingual expertise.",
    vision: "Establishing Coral Group as a multilingual, cross-cultural industrial power.",
    mission: "Facilitating global connectivity and operational harmony across international borders.",
    message: "The world is shrinking, and opportunities are expanding. My focus is on ensuring Coral Group speaks the language of global business—not just literally, but through shared standards of excellence.",
    philosophy: "I believe in 'Inclusive Globalization'. Expanding into new markets must be done with deep respect for local cultures and a commitment to adding value to their economies.",
    journey: [
      { year: "2012", title: "Regional Lead", desc: "Managed the group's first cross-border advisory project." },
      { year: "2017", title: "Director of International", desc: "Architected the expansion strategy for Southeast Asia and Europe." }
    ],
    responsibilities: [
      { title: "Global Partnerships", desc: "Building diplomatic and business ties with international firms.", icon: "Globe" },
      { title: "Market Strategy", desc: "Forecasting and navigating entry into new regional markets.", icon: "Target" }
    ],
    achievements: [
      { label: "Global Reach", value: "4 Regions", desc: "Active strategic presence across multiple continents." },
      { label: "Partners", value: "50+", desc: "International corporate alliances established." }
    ],
    projects: [
      { title: "Bali Hospitality Hub", category: "Hospitality", image: "/Beach/AMN_4957-3.jpeg" },
      { title: "London Consultancy HQ", category: "Corporate", image: "/Office/AMN_4991.jpeg" }
    ],
    awards: [
      { title: "Global Strategy Award", organization: "Intl Trade Forum", year: "2020" }
    ],
    culture: "We value 'Cultural Empathy'. Diversity is our strength, and we build teams that can bridge the gap between local craft and global demand.",
    socials: [
      { type: 'linkedin', link: '#' }
    ]
  },
  {
    slug: "rumana_ansari",
    name: "Mrs. Rumana Ansari",
    role: "Director",
    quote: "Design is not just what it looks like; it's how it works and lasts.",
    image: "/Founders/rumana_ansari.jpg",
    videoUrl: "/videos/logos.mp4",
    bio: "A graduate of Lady Shri Ram College, Rumana Ansari prioritizes sustainability and quality, ensuring excellence in every design.",
    vision: "Redefining modern luxury through the lens of environmental consciousness and artisanal craft.",
    mission: "Blending aesthetic excellence with structural integrity and sustainable practices.",
    message: "Design is a responsibility. At Coral Group, we aim to create spaces and products that don't just exist for the moment, but age gracefully with the planet.",
    philosophy: "I advocate for 'Conscious Aesthetics'. Beauty is meaningless if it isn't sustainable. Every texture and form must have a purpose that respects the environment.",
    journey: [
      { year: "2014", title: "Creative Head", desc: "Launched the Coral Fashion Emporio project with local artisans." },
      { year: "2019", title: "Director of Sustainability", desc: "Implemented the 'Zero-Waste Build' protocol for all new projects." }
    ],
    responsibilities: [
      { title: "Creative Direction", desc: "Oversight of design aesthetics for luxury exports and fashion.", icon: "Lightbulb" },
      { title: "Eco-Compliance", desc: "Standardizing sustainable materials across the group.", icon: "Leaf" }
    ],
    achievements: [
      { label: "Green Index", value: "100%", desc: "Of new projects meet high-efficiency green standards." },
      { label: "Artisans", value: "500+", desc: "Handicraft workers provided sustainable livelihoods." }
    ],
    projects: [
      { title: "Coral Emporio Collection", category: "Fashion", image: "/Gallery/AMN_4972.jpeg" },
      { title: "Eco-Aura Residences", category: "Real Estate", image: "/property/SK2.jpg" }
    ],
    awards: [
      { title: "Sustainable Design Award", organization: "EcoBuild India", year: "2023" }
    ],
    culture: "We believe in 'Sustainable Artisanship'. We combine the wisdom of traditional craft with the precision of modern engineering.",
    socials: [
      { type: 'linkedin', link: '#' }
    ]
  },
  {
    slug: "aamir_ansari",
    name: "Mr. Aamir Ansari",
    role: "Director",
    quote: "Technology is the ultimate lever for global progress.",
    image: "/Founders/aamir_sir.jpg",
    videoUrl: "/videos/logos.mp4",
    bio: "With a BA Honours from Coventry London, Aamir Ansari brings an innovative mindset focused on technological advancement.",
    vision: "Positioning Coral Group as a tech-first conglomerate in the global marketplace.",
    mission: "Integrating cutting-edge technology and data-driven strategy into the group's core operations.",
    message: "The next industrial revolution is happening now. My mission is to ensure Coral Group is leading it, using AI and data to solve complex logistical challenges.",
    philosophy: "I follow 'Data-Driven Intuition'. We use hard data to back our decisions, but we never ignore the human factor that drives market sentiment.",
    journey: [
      { year: "2016", title: "Tech Strategy Lead", desc: "Implemented the group's first blockchain-based supply chain tracker." },
      { year: "2021", title: "Director of Innovation", desc: "Leading the R&D division for automated manufacturing and global fintech." }
    ],
    responsibilities: [
      { title: "Digital Infrastructure", desc: "Managing the group's cloud systems and cybersecurity.", icon: "Lock" },
      { title: "Fintech Integration", desc: "Overseeing international trade finance automation.", icon: "Coins" }
    ],
    achievements: [
      { label: "Automation", value: "65%", desc: "Of core logistics handles through autonomous systems." },
      { label: "Data Index", value: "X3", desc: "Increase in predictive accuracy for market demand." }
    ],
    projects: [
      { title: "Quantum Logistics AI", category: "Tech", image: "/Office/AMN_4991.jpeg" },
      { title: "FinTrade Global", category: "Fintech", image: "/property/SK1.jpg" }
    ],
    awards: [
      { title: "Young Tech Innovator", organization: "London Tech Week", year: "2022" }
    ],
    culture: "We culture 'Radical Transparency'. Data should flow through the organization as freely as ideas, empowering everyone to make better decisions.",
    socials: [
      { type: 'linkedin', link: '#' }
    ]
  }
];
