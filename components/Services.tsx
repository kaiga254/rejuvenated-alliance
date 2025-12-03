import React, { useState } from "react";
import { Activity, Users, BookOpen, Scale } from "lucide-react";
import { ServiceCardProps } from "../types";
import ProgramDetailModal from "./ProgramDetailModal";

const services: ServiceCardProps[] = [
  {
    title: "Health & Wellness",
    description:
      "Comprehensive programs focusing on physical mobility, nutrition workshops, and mental health support tailored for seniors.",
    icon: <Activity className="h-8 w-8 text-primary-500" />,
    image: "/images/health-wellness.png",
    slideImages: ["/images/health-wellness.png"],
    detailedDescription: `Our Health & Wellness program is designed to promote physical, mental, and emotional well-being for seniors. We understand that maintaining good health is crucial for living independently and enjoying life to the fullest.

Through a combination of gentle exercise classes, nutrition education, and mental health support, we help seniors stay active, eat well, and maintain a positive outlook on life. Our experienced instructors and healthcare professionals work closely with each participant to create personalized wellness plans that meet their individual needs and abilities.`,
    benefits: [
      "Improved physical mobility and strength through gentle exercise",
      "Better nutrition and dietary habits with expert guidance",
      "Enhanced mental well-being and cognitive function",
      "Reduced risk of chronic diseases and health complications",
      "Increased energy levels and overall vitality",
      "Social connections with peers in a supportive environment",
    ],
    features: [
      "Gentle yoga and stretching classes",
      "Tai Chi and balance exercises",
      "Nutrition workshops and cooking demonstrations",
      "Health screenings and wellness checks",
      "Mental health counseling and support groups",
      "Mindfulness and meditation sessions",
    ],
  },
  {
    title: "Social Connection",
    description:
      "Regular community gatherings, tea socials, and hobby clubs to combat isolation and foster lasting friendships.",
    icon: <Users className="h-8 w-8 text-secondary-500" />,
    image: "/images/social-connection.png",
    slideImages: ["/images/social-connection.png"],
    detailedDescription: `Social isolation is one of the biggest challenges facing seniors today. Our Social Connection program creates warm, welcoming spaces where seniors can build meaningful relationships, share experiences, and enjoy life together.

From weekly tea socials to hobby clubs and special events, we offer numerous opportunities for seniors to connect with others who share similar interests and backgrounds. Our community gatherings are designed to be inclusive, engaging, and fun, fostering a sense of belonging and purpose.`,
    benefits: [
      "Combat loneliness and social isolation",
      "Build lasting friendships with peers",
      "Engage in meaningful conversations and activities",
      "Develop new interests and hobbies",
      "Feel valued and part of a supportive community",
      "Improve overall quality of life and happiness",
    ],
    features: [
      "Weekly tea and coffee socials",
      "Book clubs and reading groups",
      "Arts and crafts workshops",
      "Music and sing-along sessions",
      "Game nights and card tournaments",
      "Special holiday celebrations and events",
    ],
  },
  {
    title: "Digital Literacy",
    description:
      "Patient, hands-on training for smartphones, tablets, and internet safety to keep you connected with loved ones.",
    icon: <BookOpen className="h-8 w-8 text-teal-500" />,
    image: "/images/digital-literacy.png",
    slideImages: ["/images/digital-literacy.png"],
    detailedDescription: `In today's digital world, staying connected with family and friends often requires technology skills. Our Digital Literacy program provides patient, one-on-one instruction to help seniors confidently use smartphones, tablets, computers, and the internet.

We understand that technology can be intimidating, which is why our instructors take a gentle, step-by-step approach. Whether you want to video call your grandchildren, shop online, or simply browse the web safely, we'll help you build the skills you need at your own pace.`,
    benefits: [
      "Stay connected with family and friends through video calls",
      "Access important information and services online",
      "Enjoy entertainment like streaming movies and music",
      "Shop safely online for groceries and other needs",
      "Protect yourself from online scams and fraud",
      "Build confidence in using modern technology",
    ],
    features: [
      "One-on-one smartphone and tablet training",
      "Email and messaging basics",
      "Video calling with family (Zoom, WhatsApp, etc.)",
      "Safe online shopping and banking",
      "Social media basics (Facebook, etc.)",
      "Internet safety and scam prevention",
    ],
  },
  {
    title: "Legal Advocacy",
    description:
      "Expert guidance on healthcare directives, housing rights, and estate planning to ensure your voice is always heard.",
    icon: <Scale className="h-8 w-8 text-indigo-500" />,
    image: "/images/legal-advocacy.png",
    slideImages: ["/images/legal-advocacy.png"],
    detailedDescription: `Navigating legal matters can be overwhelming, especially for seniors. Our Legal Advocacy program connects you with experienced legal professionals who specialize in elder law, providing guidance on important issues like healthcare directives, housing rights, and estate planning.

We believe that every senior deserves to have their rights protected and their wishes respected. Our advocates work tirelessly to ensure you understand your options and can make informed decisions about your future. We also provide support in dealing with age discrimination, elder abuse, and other legal challenges.`,
    benefits: [
      "Protect your rights and interests",
      "Ensure your healthcare wishes are documented and respected",
      "Secure your housing and living arrangements",
      "Plan your estate and legacy effectively",
      "Access to experienced elder law attorneys",
      "Peace of mind knowing you're legally protected",
    ],
    features: [
      "Healthcare directive assistance (living wills, power of attorney)",
      "Estate planning and will preparation",
      "Housing rights advocacy",
      "Elder abuse prevention and reporting",
      "Benefits and entitlements guidance",
      "Free legal consultations and referrals",
    ],
  },
];

const ServiceCard: React.FC<ServiceCardProps & { onClick: () => void }> = ({
  title,
  description,
  icon,
  image,
  onClick,
}) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group overflow-hidden">
    {image && (
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="p-8">
      <div className="mb-4 p-3 bg-slate-50 rounded-full w-fit group-hover:bg-primary-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
      <button
        onClick={onClick}
        className="inline-block mt-4 text-primary-800 font-bold hover:underline"
      >
        Learn More &rarr;
      </button>
    </div>
  </div>
);

const Services: React.FC = () => {
  const [selectedProgram, setSelectedProgram] =
    useState<ServiceCardProps | null>(null);

  return (
    <>
      <section id="programs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Core Initiatives
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a holistic approach to senior living, addressing
              physical, emotional, and practical needs through our dedicated
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, idx) => (
              <ServiceCard
                key={idx}
                {...s}
                onClick={() => setSelectedProgram(s)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProgramDetailModal
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        program={selectedProgram}
      />
    </>
  );
};

export default Services;
