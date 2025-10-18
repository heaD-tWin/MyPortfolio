export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // Keep for backward compatibility
  images?: string[]; // New: Array of image URLs
  featured: boolean;
}

export interface Technology {
  name: string;
  icon: string; // Will be used with react-icons
  iconPath?: string; // Optional path to image file
  category: 'language' | 'framework' | 'tool' | 'database' | 'other';
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  technologies: Technology[];
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  completionDate: string;
  certificateUrl?: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  socialLinks: SocialLink[];
}