import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
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