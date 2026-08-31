export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  fullAddress?: string;
  image: string;
  area: string;
  status: string;
  description: string;
  configuration?: string;
  detailedDescription?: string;
  promoterReraNumber?: string;
  reraNumber?: string;
  features: string[];
  reraId?: string;
  unitHighlights?: { unit: string; description: string }[];
  amenities: string[];
  gallery: string[];
  unitSize?: string;
  video?: string;
  // New Fields for 11 Sections
  vision?: string;
  specs?: { label: string; value: string }[];
  connectivity?: { landmark: string; distance: string }[];
  sustainability?: string[];
  timeline?: { phase: string; date: string; status: 'completed' | 'ongoing' | 'upcoming' }[];
  developer?: string;
  approvals?: string[];
  contact?: {
    phone?: string[];
    email?: string;
    website?: string;
  };
  designPhilosophy?: {
    title: string;
    description: string;
  };
  unitTypes?: {
    type: string;
    size: string;
    description: string;
  }[];
}

import { coralSkyline } from './projects/coral-skyline';
import { coralStudios } from './projects/coral-studios';

export const projects: Project[] = [
  // {
  //   id: "01",
  //   slug: "coral-garden",
  //   title: "Coral Garden",
  //   category: "Premium Residential Development",
  //   type: "Luxury Villa Project",
  //   location: "Babatpur, Varanasi, Uttar Pradesh – 221006",
  //   image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1784358785/coral_garden_coral_garden-babatpur-varanasi-coral_garden_eucpru.avif",

  //   area: "2 Acres",
  //   unitSize: "5,200 sq.ft.",
  //   configuration: "4 BHK Villas",
  //   status: "Ready to Move",
  //   reraId: "UPRERAPRJ7213",

  //   description:
  //     " Coral Garden is a premium ready-to-move residential project located in Babatpur, Varanasi. Spread across 2 acres, the development offers spacious 4 BHK luxury villas with approximately 5,200 sq.ft. of living space. Designed for modern family living, Coral Garden combines privacy, comfort, secure surroundings and thoughtfully planned lifestyle amenities.",
  //   detailedDescription:
  //     "Coral Garden is a premium ready-to-move residential project located in Babatpur, Varanasi. Spread across 2 acres, the development offers spacious 4 BHK luxury villas with approximately 5,200 sq.ft. of living space. Designed for modern family living, Coral Garden combines privacy, comfort, secure surroundings and thoughtfully planned lifestyle amenities.",

  //   features: [
  //     "Spacious 4 BHK luxury villas",
  //     "Approximately 5,200 sq.ft. super built-up area",
  //     "Ready-to-move residential project",
  //     "Premium development spread across 2 acres",
  //     "Secure gated community",
  //     "24×7 security and CCTV surveillance",
  //     "Landscaped gardens and tree plantation",
  //     "Children's play area",
  //     "Dedicated cycling and jogging track",
  //     "24×7 water supply with power backup"
  //   ],

  //   unitHighlights: [
  //     {
  //       unit: "4 BHK Villa",
  //       description:
  //         "A spacious villa configuration designed for premium family living"
  //     },
  //     {
  //       unit: "5,200 sq.ft.",
  //       description:
  //         "Approximate super built-up area of each listed villa"
  //     },
  //     {
  //       unit: "Ready to Move",
  //       description:
  //         "Completed residential project available for immediate possession"
  //     },
  //     {
  //       unit: "Gated Community",
  //       description:
  //         "Controlled residential environment supported by 24×7 security"
  //     }
  //   ],

  //   amenities: [
  //     "Children's Play Area",
  //     "Dedicated Car Parking",
  //     "24×7 Water Supply",
  //     "Cycling and Jogging Track",
  //     "Gated Community",
  //     "Indoor Games Area",
  //     "Landscaped Green Spaces",
  //     "Fire Sprinkler System",
  //     "24×7 Security",
  //     "CCTV Surveillance",
  //     "Power Backup"
  //   ],

  //   gallery: [

  //     "https://res.cloudinary.com/drmpv5vne/image/upload/v1784358785/fs_1_qdskpk.avif",
  //     "https://res.cloudinary.com/drmpv5vne/image/upload/v1784358786/fs_rtkhew.avif",
  //     "https://res.cloudinary.com/drmpv5vne/image/upload/v1784358786/fs_3_blrrwv.avif",
  //     "https://res.cloudinary.com/drmpv5vne/image/upload/v1784358786/fs_4_nqw0mp.avif",
  //   ],

  //   vision:
  //     "To offer spacious, secure and thoughtfully planned villa living that brings modern comfort and peaceful surroundings together in Babatpur, Varanasi.",

  //   specs: [
  //     {
  //       label: "Project Type",
  //       value: "Premium residential villa development"
  //     },
  //     {
  //       label: "Configuration",
  //       value: "4 BHK villas"
  //     },
  //     {
  //       label: "Villa Area",
  //       value: "Approximately 5,200 sq.ft. super built-up area"
  //     },
  //     {
  //       label: "Project Area",
  //       value: "Approximately 2 acres"
  //     },
  //     {
  //       label: "Possession",
  //       value: "Ready to Move"
  //     },
  //     {
  //       label: "RERA Registration",
  //       value: "UPRERAPRJ7213"
  //     }
  //   ],

  //   connectivity: [
  //     {
  //       landmark: "Hotel Dawat",
  //       distance: "1.3 km • Approximately 2 minutes"
  //     },
  //     {
  //       landmark: "Seth M.R. Jaipuria School, Babatpur",
  //       distance: "3 km • Approximately 4 minutes"
  //     },
  //     {
  //       landmark: "Baldeo Hospital",
  //       distance: "5.8 km • Approximately 6 minutes"
  //     },
  //     {
  //       landmark: "Lal Bahadur Shastri International Airport",
  //       distance: "Easy connectivity from Babatpur"
  //     },
  //     {
  //       landmark: "Babatpur Railway Station",
  //       distance: "Convenient road access"
  //     },
  //     {
  //       landmark: "Varanasi City",
  //       distance: "Well-connected through major roads"
  //     }
  //   ],

  //   sustainability: [
  //     "Landscaped green spaces throughout the community",
  //     "Dedicated tree plantation areas",
  //     "Low-density development spread across 2 acres",
  //     "Dedicated cycling and jogging track",
  //     "Walkable gated residential environment",
  //     "Open outdoor spaces supporting healthier living"
  //   ],

  //   timeline: [
  //     {
  //       phase: "Project Development",
  //       date: "Completed",
  //       status: "completed"
  //     },
  //     {
  //       phase: "Possession",
  //       date: "Ready to Move",
  //       status: "completed"
  //     }
  //   ]
  // },
  coralSkyline,
  coralStudios
];
