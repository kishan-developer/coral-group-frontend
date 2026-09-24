

export interface Vertical {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  secondImage: string;
  videoUrl?: string;
  mission: string;
  vision: string;
  description: string;
  stats: { label: string; value: string }[];
  services: { title: string; desc: string; icon: string }[];
  impact: { title: string; value: string; desc: string }[];
  locations: { city: string; country: string; description: string }[];
  innovation: { title: string; desc: string }[];
  leadership: { name: string; role: string; img: string }[];
  // New sections for Coral Greens Buildtech
  projects?: {
    name: string;
    location: string;
    type: string;
    description: string;
    status: string;
    images: string[];
  }[];
  expertise?: { title: string; desc: string; icon: string }[];
  benefits?: { title: string; desc: string; icon: string }[];
  process?: { step: number; title: string; desc: string; icon: string }[];
  sustainability?: { title: string; desc: string; icon: string }[];
  testimonials?: { name: string; role: string; content: string; rating: number }[];
  awards?: { title: string; year: string; description: string }[];
  media?: { type: string; title: string; url: string; date: string }[];
  faq?: { question: string; answer: string }[];
  competitiveEdge?: { title: string; desc: string; icon: string }[];
  futureGrowth?: { title: string; desc: string }[];
  contact?: {
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
}

export const verticals: Vertical[] = [
  {
    slug: "coral_greens_buildtech",
    title: "Coral Greens BUILDTECH Pvt. Ltd.",
    subtitle: "Real Estate Arm of Coral Group",
    // heroImage: "/New_Banner_Images/CAM_3_FINAL.jpg",
    heroImage: "https://res.cloudinary.com/drmpv5vne/image/upload/v1790145208/CAM_3_FINAL_3_kqjmp5.jpg",
    secondImage: "/Hotel_Images/DSC_0255.JPG",
    videoUrl: "/logos.mp4",
    mission: "To be a market leader in real estate by delivering high-quality projects that redefine urban living with a focus on sustainability, innovation, and excellence.",
    vision: "To create vibrant, sustainable communities that enhance the quality of life and provide long-term value to stakeholders.",
    description: "Established in 2010, CoralGreens BUILDTECH Pvt. Ltd. is a leading real estate developer headquartered in Varanasi. With over 1 million square feet of delivered projects, the company has significantly contributed to the city's urban landscape. Known for its commitment to quality, innovation, and customer satisfaction, CoralGreens BUILDTECH continues to expand its footprint with an unwavering focus on excellence. CoralGreens BUILDTECH is recognized for its financial strength, being a debt-free company with no outside promoters, ensuring complete independence and strategic agility. The company is also RERA approved, guaranteeing transparency and compliance with regulatory standards, further reinforcing customer trust and confidence. With a substantial land bank of 4 lakh sq. ft., the company is strategically positioned for future growth and expansion, ensuring a steady pipeline of upcoming projects.",
    stats: [
      { label: "Delivered Developments", value: "1M+ Sq. Ft." },
      { label: "Strategic Land Bank", value: "4 Lakh Sq. Ft." },
      { label: "Ongoing Major Projects", value: "4" },
      { label: "RERA Compliance", value: "100%" }
    ],
    services: [
      { title: "Real Estate Development", desc: "Diverse portfolio with over 1 million sq. ft. delivered, managing four major projects in Varanasi with modern infrastructure and community-centric designs.", icon: "Building2" },
      { title: "Commercial Leasing", desc: "Steady rental income from strategically located commercial spaces leased to leading brands like Reliance Jio Warehouse, Red Tape Showroom, and City Cart Showroom.", icon: "Briefcase" },
      { title: "Hospitality Ventures", desc: "Operates two premium boutique hotels with 56 rooms in Varanasi, with an upcoming 90-room luxury resort in Babatpur for leisure and business travelers.", icon: "Hotel" },
      { title: "Residential Projects", desc: "Expanding portfolio with upcoming group housing projects featuring smart living solutions, energy-efficient systems, and community-oriented developments.", icon: "Home" }
    ],
    impact: [
      { title: "Sustainable Energy Offset", value: "75%", desc: "Of our building operations are powered by renewable solar and energy-efficient smart grids." },
      { title: "Urban Economic Impact", value: "$1.5B+", desc: "Total value generated through our strategic real estate and infrastructure investments." }
    ],
    locations: [
      { city: "Varanasi", country: "India", description: "Corporate headquarters and primary engineering hub for all major residential and commercial developments." },
      { city: "Purvanchal Region", country: "India", description: "Strategic expansion zone for future community-centric townships and sustainable urban infrastructure." }
    ],
    innovation: [
      { title: "Advanced Seismic Engineering", desc: "Implementing next-gen earthquake-resistant foundations that exceed international safety and durability standards." },
      { title: "Smart Building Ecosystems", desc: "AI-integrated building management for real-time energy, security, and climate optimization." }
    ],
    leadership: [
      { name: "Mr. Khalid Ansari", role: "Chairman", img: "/Founders/khalid_sir.jpg" },
      { name: "Mr. Anas Ansari", role: "Executive Director", img: "/Founders/anas_sir.jpg" }
    ],
    projects: [
      {
        name: "Coral Skyline",
        location: "Rohaniya, Varanasi",
        type: "Residential",
        description: "Premium 3 & 4 BHK apartments with modern amenities, club house, swimming pool, and 24/7 security. Designed for luxury living with sustainable features.",
        status: "Ongoing",
        images: ["/slider/coral_skyline.jpeg", "/slider/coral_skyline2.jpeg", "/slider/coral_skyline3.jpeg", "/slider/coral_skyline4.jpeg"]
      },
      {
        name: "Coral Studios",
        location: "Harahua, Varanasi",
        type: "Residential",
        description: "Smart 1 & 2 BHK studios with modern interiors, smart home features, and prime location. Perfect for young professionals and small families.",
        status: "Upcoming",
        images: ["/slider/coral_studio.jpeg", "/slider/coral_studio2.jpeg", "/slider/coral_studio3.jpeg", "/slider/coral_studio4.jpeg"]
      },
      {
        name: "Coral Commercial Hub",
        location: "Cantt, Varanasi",
        type: "Commercial",
        description: "State-of-the-art commercial complex with office spaces, retail outlets, and modern facilities for businesses.",
        status: "Upcoming",
        images: ["/slider/commercial1.jpeg", "/slider/commercial2.jpeg", "/slider/commercial3.jpeg", "/slider/commercial4.jpeg"]
      }
    ],
    expertise: [
      { title: "Residential Development", desc: "Premium apartments and villas with modern design and sustainable features", icon: "Home" },
      { title: "Commercial Complexes", desc: "Modern office spaces and retail centers for growing businesses", icon: "Building2" },
      { title: "Smart Construction", desc: "Energy-efficient buildings with smart home integration", icon: "Zap" },
      { title: "Architectural Planning", desc: "Innovative designs that blend aesthetics with functionality", icon: "Target" },
      { title: "Structural Engineering", desc: "Robust construction with advanced seismic safety standards", icon: "ShieldCheck" },
      { title: "Green Spaces", desc: "Landscaped gardens and eco-friendly environments", icon: "Leaf" },
      { title: "Project Management", desc: "End-to-end project execution with timely delivery", icon: "CheckCircle2" },
      { title: "RERA Compliance", desc: "Fully compliant with all regulatory standards", icon: "Award" }
    ],
    benefits: [
      { title: "Innovative Architecture", desc: "Cutting-edge designs that set new standards in real estate", icon: "Lightbulb" },
      { title: "Sustainable Design", desc: "Energy-efficient buildings with green technology integration", icon: "Leaf" },
      { title: "Transparent Communication", desc: "Clear processes with regular updates to all stakeholders", icon: "CheckCircle2" },
      { title: "On-Time Delivery", desc: "Proven track record of delivering projects as scheduled", icon: "Target" },
      { title: "Strong Network", desc: "Trusted partnerships with top vendors and contractors", icon: "Users" },
      { title: "Customer-First Approach", desc: "Dedicated support throughout the buying journey and beyond", icon: "Heart" }
    ],
    process: [
      { step: 1, title: "Concept & Research", desc: "Thorough land analysis and market research for optimal project planning", icon: "MapPin" },
      { step: 2, title: "Architectural Planning", desc: "Innovative design development with focus on functionality and aesthetics", icon: "Building2" },
      { step: 3, title: "Engineering Design", desc: "Structural engineering with advanced safety and durability standards", icon: "ShieldCheck" },
      { step: 4, title: "Construction Execution", desc: "Quality construction with premium materials and skilled workforce", icon: "Wrench" },
      { step: 5, title: "Interior & Amenities", desc: "Modern interiors and premium amenities integration", icon: "Home" },
      { step: 6, title: "Delivery & Support", desc: "Final handover with comprehensive after-sales service", icon: "CheckCircle2" }
    ],
    sustainability: [
      { title: "Eco-Friendly Materials", desc: "Use of sustainable and locally sourced construction materials", icon: "Leaf" },
      { title: "Waste Management", desc: "Proper waste disposal and recycling systems", icon: "Wind" },
      { title: "Water Efficiency", desc: "Rainwater harvesting and water-saving fixtures", icon: "Zap" },
      { title: "Solar Technology", desc: "Solar panels and renewable energy integration", icon: "Sun" },
      { title: "Quality Audits", desc: "Regular quality checks and sustainability certifications", icon: "Award" },
      { title: "RERA Compliance", desc: "Full compliance with RERA and regulatory standards", icon: "ShieldCheck" }
    ],
    testimonials: [
      { name: "Rajesh Kumar", role: "Homeowner - Coral Skyline", content: "The quality of construction and attention to detail is exceptional. Coral Greens Buildtech delivered exactly what they promised - a dream home with all modern amenities.", rating: 5 },
      { name: "Priya Singh", role: "Property Investor", content: "Best investment decision I made. The location, amenities, and appreciation potential are outstanding. Highly recommend Coral Greens Buildtech for anyone looking for quality real estate.", rating: 5 },
      { name: "Amit Verma", role: "Business Owner - Coral Commercial Hub", content: "Modern design, smart features, and excellent customer service. The commercial space has exceeded our expectations for our business operations.", rating: 5 },
      { name: "Sneha Gupta", role: "Homeowner - Coral Studios", content: "Perfect for young professionals like us. The smart home features and prime location make it an ideal choice. The team was very supportive throughout the process.", rating: 5 },
      { name: "Dr. Rajendra Prasad", role: "Real Estate Consultant", content: "Coral Greens Buildtech sets the benchmark for transparency and quality in Varanasi's real estate market. Their projects are well-planned and delivered on time.", rating: 5 }
    ],
    awards: [
      { title: "Industry Accolades", year: "2024", description: "Recognized for excellence in real estate development and customer service" },
      { title: "Quality Certifications", year: "2024", description: "Adherence to international standards of quality, safety, and environmental sustainability" },
      { title: "Community Recognition", year: "2024", description: "Acknowledged for contribution to urban development and social responsibility" }
    ],
    media: [
      { type: "Article", title: "Coral Greens Buildtech Redefines Varanasi's Skyline", url: "#", date: "March 2024" },
      { type: "Interview", title: "Khalid Ansari: Vision for Sustainable Real Estate", url: "#", date: "January 2024" },
      { type: "Video", title: "Coral Skyline Project Tour", url: "#", date: "February 2024" },
      { type: "Article", title: "Future of Smart Living in Varanasi", url: "#", date: "December 2023" }
    ],
    faq: [
      { question: "What types of projects does Coral Greens Buildtech develop?", answer: "We develop premium residential apartments, commercial complexes, and mixed-use projects. Our portfolio includes 3-4 BHK luxury apartments, smart studios, office spaces, and retail centers." },
      { question: "Are the projects RERA approved?", answer: "Yes, all our projects are 100% RERA compliant. We maintain complete transparency and adhere to all regulatory standards to ensure your investment is secure." },
      { question: "How can I invest or book a unit?", answer: "You can visit our sales office, call our helpline, or fill out the inquiry form on our website. Our team will guide you through the booking process and payment schedules." },
      { question: "What sustainability practices are followed?", answer: "We follow eco-friendly construction practices including solar energy integration, rainwater harvesting, waste management systems, and use of sustainable materials. Our projects are IGBC certified for green building standards." },
      { question: "What amenities are provided in your projects?", answer: "Our projects include club house, swimming pool, landscaped gardens, 24/7 security, power backup, parking, gym, and community spaces. Amenities vary by project type." },
      { question: "How do you ensure timely delivery?", answer: "We have a proven track record of on-time delivery. Our experienced project management team, strong vendor network, and systematic process ensure projects are delivered as per schedule." }
    ],
    competitiveEdge: [
      { title: "Debt-Free and Financially Robust", desc: "Ensures financial stability, strategic flexibility, and sustainable growth", icon: "ShieldCheck" },
      { title: "No Outside Promoters", desc: "Privately owned with independent decision-making and strategic agility", icon: "Users" },
      { title: "RERA Compliance", desc: "Transparency and regulatory adherence, ensuring customer confidence and satisfaction", icon: "Award" },
      { title: "Experienced Leadership Team", desc: "Led by industry veterans with a strategic vision and customer-focused approach", icon: "TrendingUp" },
      { title: "Strategic Partnerships", desc: "Collaborations with leading architects, designers, and contractors to deliver world-class projects", icon: "Handshake" },
      { title: "Technological Integration", desc: "Use of advanced technology for efficient project management, digital marketing, and enhanced customer engagement", icon: "Zap" }
    ],
    futureGrowth: [
      { title: "Expand Beyond Varanasi", desc: "New projects in emerging urban markets" },
      { title: "Leverage Land Bank", desc: "Develop high-potential residential and commercial spaces" },
      { title: "Digital Transformation", desc: "Enhance customer experience through personalized solutions" },
      { title: "Sustainable Growth", desc: "Focus on eco-friendly developments and energy-efficient buildings" }
    ],
    contact: {
      phone: "+91 XXXXXXXXXX",
      email: "info@coralgreensbuildtech.com",
      address: "Coral Group Headquarters, Varanasi, Uttar Pradesh, India",
      whatsapp: "+91 XXXXXXXXXX"
    }
  },
  {
    slug: "coral_fashion_emporio",
    title: "Coral Fashion Emporio Pvt. Ltd.",
    subtitle: "Textile & Fashion Vertical",
    heroImage: "https://res.cloudinary.com/drmpv5vne/image/upload/v1790145541/6_1_srd0hj.jpg",
    secondImage: "/Hotel_Images/DSC_0255.JPG",
    videoUrl: "/logos.mp4",
    mission: "To preserve and promote traditional craftsmanship by blending it with contemporary design innovation, delivering premium textile experiences that celebrate cultural heritage and style excellence.",
    vision: "To be the global benchmark for artisanal heritage and modern fashion textiles, recognized for superior finishing, refined aesthetics, and an unparalleled customer experience.",
    description: "Coral Fashion Emporio Pvt. Ltd. represents Coral Group’s textile and fashion vertical, blending traditional craftsmanship with contemporary design. Our focus lies in quality sourcing, refined aesthetics, and superior finishing across our range of premium fabrics, sarees, and fashion textiles. We are committed to preserving traditional techniques while embracing modern trends, with a strong emphasis on branding, design innovation, and a seamless customer experience. This vertical reflects Coral Group’s deep dedication to cultural heritage, quality, and uncompromising style excellence.",
    stats: [
      { label: "Artisanal Partnerships", value: "500+" },
      { label: "Textile Variants", value: "1200+" },
      { label: "Heritage Preserved", value: "100%" },
      { label: "Global Reach", value: "12+ Nations" }
    ],
    services: [
      { title: "Premium Textiles", desc: "Sourcing and finishing high-quality fabrics and fashion textiles that set the standard for luxury and durability.", icon: "Award" },
      { title: "Heritage Sarees", desc: "Blending traditional weaving techniques with modern aesthetics to create timeless sarees that celebrate cultural identity.", icon: "Zap" },
      { title: "Design Innovation", desc: "Continuously evolving our branding and design processes to meet the demands of contemporary fashion markets.", icon: "Globe" }
    ],
    impact: [
      { title: "Cultural Preservation", value: "100%", desc: "Of our collections are inspired by and support traditional artisanal techniques and communities." },
      { title: "Artisan Empowerment", value: "500+", desc: "Skilled weavers and craftsmen supported through our ethical sourcing and production hubs." }
    ],
    locations: [
      { 
        city: "Varanasi", 
        country: "India",
        description: "The heart of our textile operations, specializing in traditional craftsmanship and heritage saree production." 
      },
      { 
        city: "Mumbai", 
        country: "India", 
        description: "Strategic fashion and design hub managing global branding and contemporary textile distribution." 
      }
    ],
    innovation: [
      { 
        title: "Superior Finishing", 
        desc: "Implementing advanced post-production processes to ensure every textile meets the highest standards of luxury and feel." 
      },
      { 
        title: "Modern-Traditional Blend", 
        desc: "Integrating contemporary silhouettes with traditional hand-woven fabrics for a unique market proposition." 
      }
    ],
    leadership: [
      { 
        name: "Mrs. Rumana Ansari", 
        role: "Director", 
        img: "/Founders/rumana_ansari.jpg" 
      }
    ]
  },
  {
    slug: "coral_exports",
    title: "Coral Export Pvt. Ltd.",
    subtitle: "Global Trade & Logistics Arm",
    heroImage: "/verticals/exports.png",
    secondImage: "/Hotel_Images/DSC_0255.JPG",
    videoUrl: "/logos.mp4",
    mission: "To serve as a reliable bridge between Indian craftsmanship and global markets by delivering high-quality textile and lifestyle products with technical excellence and ethical trade practices.",
    vision: "To be the premier global trade partner recognized for promoting Indian excellence worldwide and building long-term, trust-based relationships with international buyers.",
    description: "Coral Export is the Group’s global trade arm, focused on delivering Indian craftsmanship and quality products to international markets. We specialize in the export of textile and lifestyle products, maintaining strong compliance with international quality and trade standards. Our operations are built on reliable sourcing, meticulous packaging, and timely global deliveries. By building long-term relationships with international buyers, Coral Export strengthens the Group’s global presence while promoting Indian excellence worldwide.",
    stats: [
      { label: "Global Trade Routes", value: "25+" },
      { label: "Successful Shipments", value: "2500+" },
      { label: "International Buyers", value: "150+" },
      { label: "Compliance Score", value: "100%" }
    ],
    services: [
      { title: "Textile & Lifestyle Export", desc: "Specializing in the global distribution of premium Indian textiles and lifestyle products that meet international standards.", icon: "Globe" },
      { title: "Trade Compliance", desc: "Ensuring all shipments adhere to rigorous international quality, safety, and trade regulations for seamless delivery.", icon: "CheckCircle2" },
      { title: "Reliable Logistics", desc: "Managing end-to-end sourcing, specialized packaging, and timely global delivery networks across multiple continents.", icon: "Info" }
    ],
    impact: [
      { title: "Indian Excellence", value: "100%", desc: "Of our products promote local craftsmanship and quality to the global marketplace." },
      { title: "Global Reach", value: "25+", desc: "Nations served through our established international trade and supply chain network." }
    ],
    locations: [
      { city: "Varanasi", country: "India", description: "Operational headquarters and primary sourcing hub for premium Indian textile and lifestyle products." },
      { city: "Singapore", country: "Singapore", description: "Strategic logistics and trade clearing hub for our Pan-Asian and global distribution routes." }
    ],
    innovation: [
      { title: "Smart Packaging", desc: "Utilizing advanced packaging materials and techniques to ensure product integrity during long-haul international transit." },
      { title: "Digital Trade Network", desc: "Implementing real-time tracking and automated compliance systems for enhanced transparency with international buyers." }
    ],
    leadership: [
      { name: "Mr. Aamir Ansari", role: "Director", img: "/Founders/aamir_sir.jpg" }
    ]
  },
  {
    slug: "coral_hotels_and_resorts",
    title: "Coral Hotels & Resorts",
    subtitle: "Hospitality",
    heroImage: "https://res.cloudinary.com/drmpv5vne/image/upload/v1790145766/DSC_0358_ojo7nx.jpg",
    secondImage: "/Hotel_Images/DSC_0255.JPG",
    videoUrl: "/logos.mp4",
    mission: "To offer premium hospitality experiences rooted in comfort, service excellence, and cultural warmth, ensuring every guest journey is memorable.",
    vision: "To be the benchmark for luxury hospitality in Varanasi and beyond, blending traditional warmth with modern sophistication.",
    description: "Coral Hotels & Resorts is Coral Group’s hospitality vertical, offering premium experiences rooted in comfort, service excellence, and cultural warmth. This vertical reflects Coral Group’s commitment to memorable guest experiences and high service standards.",
    stats: [
      { label: "Boutique Hotels", value: "2" },
      { label: "Operational Rooms", value: "56" },
      { label: "Upcoming Rooms", value: "90" },
      { label: "Strategic Hub", value: "Varanasi" }
    ],
    services: [
      { title: "Strategic Locations", desc: "Prime properties located near Varanasi's key cultural and tourist destinations.", icon: "MapPin" },
      { title: "Modern Amenities", desc: "A perfect blend of traditional hospitality and state-of-the-art modern facilities.", icon: "Hotel" },
      { title: "Diverse Catering", desc: "Tailored experiences for tourists, pilgrims, and business travelers alike.", icon: "Users" }
    ],
    impact: [
      { title: "Guest Experience", value: "Premium", desc: "Rooted in service excellence and cultural warmth." },
      { title: "Upcoming Expansion", value: "90-Room", desc: "Luxury resort near Babatpur for leisure and business." }
    ],
    locations: [
      { city: "Varanasi", country: "India", description: "Two operational boutique hotels catering to diverse traveler needs." },
      { city: "Babatpur", country: "India", description: "Upcoming 90-room luxury resort designed for premium leisure and business travel." }
    ],
    innovation: [
      { title: "Heritage Fusion", desc: "Integrating traditional Indian hospitality with contemporary service standards." },
      { title: "Strategic Growth", desc: "Expanding footprint with luxury resorts in key transit and tourism hubs." }
    ],
    leadership: [
      { name: "Mr. Aamir Ansari", role: "Director", img: "/Founders/aamir_sir.jpg" }
    ]
  },
  {
    slug: "coral_foundation", 
    title: "Coral Foundation",
    subtitle: "Pillars of Social Transformation",
    heroImage: "/foundation_Img/foundation.jpeg",
    secondImage: "/foundation_Img/kambal/team.jpeg",
    videoUrl: "/logos.mp4",
    mission: "Driving systemic social change through education, equitable healthcare, and sustainable development.",
    vision: "A world where every individual has the dignity and opportunity to thrive and succeed.",
    description: "The philanthropic arm of Coral Group, dedicated to education, clean water initiatives, and vocational training for underprivileged communities.",
    stats: [
      { label: "Schools Built", value: "12" },
      { label: "Water Plants", value: "45" },
      { label: "Lives Impacted", value: "50K+" },
      { label: "Volunteers", value: "1500" }
    ],
    services: [
      { title: "Education Hubs", desc: "Digital literacy and technical schooling.", icon: "Award" },
      { title: "Clean Water", desc: "Solar-powered purification systems for villages.", icon: "Zap" },
      { title: "Vocational Skills", desc: "Empowering youth with trade skills.", icon: "Users" }
    ],
    impact: [
      { title: "Literacy Rate", value: "+15%", desc: "Increase in target communities." },
      { title: "Clean Water Access", value: "50K+", desc: "People reached daily." }
    ],
    locations: [
      { city: "Uttar Pradesh", country: "India", description: "Central operations for primary education and digital literacy programs across eastern districts." },
      { city: "Bihar", country: "India", description: "Regional hub specialized in clean water purification systems and rural vocational training camps." }
    ],
    innovation: [
      { title: "Mobile Schools", desc: "Bus-based classrooms for remote areas." },
      { title: "Solar Purifiers", desc: "Low-maintenance, grid-independent water tech." }
    ],
    leadership: [
      { name: "Mr. Khalid Ansari", role: "Chairman", img: "/Founders/khalid_sir.jpg" }
    ]
  }
];
