export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'user' | 'admin' | 'manager' | 'team' | 'super_admin';
  designation?: string;
  department?: string;
  avatar?: string;
  isAdmin: boolean;
  isActive: boolean;
  lastLogin?: string;
  assignedVerticals?: Vertical[];
  targets?: {
    monthly: number;
    quarterly: number;
    yearly: number;
  };
  performance?: {
    leadsAssigned: number;
    leadsConverted: number;
    conversionRate: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  category: string;
  priceRange: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  images: string[];
  amenities: string[];
  features: string[];
  specifications: any;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vertical {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  image?: string;
  category?: 'Residential' | 'Commercial' | 'Industrial';
  status: 'active' | 'inactive';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Query {
  _id: string;
  clientName: string;
  email: string;
  phone: string;
  propertyInterest?: Project | null;
  verticalInterest?: Vertical | null;
  message?: string;
  status: 'Pending' | 'In Progress' | 'Confirmed' | 'Cancelled';
  assignedExecutive?: User | string | null;
  source?: 'Website' | 'Referral' | 'Advertisement' | 'Social Media' | 'Walk-in';
  stage?: 'New' | 'Follow-up' | 'Negotiation' | 'Site Visit' | 'Closed' | 'Lost';
  value?: string;
  notes?: {
    content: string;
    admin: User | string;
    createdAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
