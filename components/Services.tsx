import React from 'react';
import { Activity, Users, BookOpen, Scale } from 'lucide-react';
import { ServiceCardProps } from '../types';

const services: ServiceCardProps[] = [
  {
    title: "Health & Wellness",
    description: "Comprehensive programs focusing on physical mobility, nutrition workshops, and mental health support tailored for seniors.",
    icon: <Activity className="h-8 w-8 text-primary-500" />,
  },
  {
    title: "Social Connection",
    description: "Regular community gatherings, tea socials, and hobby clubs to combat isolation and foster lasting friendships.",
    icon: <Users className="h-8 w-8 text-secondary-500" />,
  },
  {
    title: "Digital Literacy",
    description: "Patient, hands-on training for smartphones, tablets, and internet safety to keep you connected with loved ones.",
    icon: <BookOpen className="h-8 w-8 text-teal-500" />,
  },
  {
    title: "Legal Advocacy",
    description: "Expert guidance on healthcare directives, housing rights, and estate planning to ensure your voice is always heard.",
    icon: <Scale className="h-8 w-8 text-indigo-500" />,
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
    <div className="mb-4 p-3 bg-slate-50 rounded-full w-fit group-hover:bg-primary-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
    <a href="#" className="inline-block mt-4 text-primary-800 font-bold hover:underline">
      Learn More &rarr;
    </a>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Initiatives</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a holistic approach to senior living, addressing physical, emotional, and practical needs through our dedicated programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;