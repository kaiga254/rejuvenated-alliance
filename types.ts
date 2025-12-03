import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  detailedDescription?: string;
  benefits?: string[];
  features?: string[];
  slideImages?: string[];
}

export interface StatData {
  year: string;
  members: number;
  events: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}