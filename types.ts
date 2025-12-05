export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name mapping
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}