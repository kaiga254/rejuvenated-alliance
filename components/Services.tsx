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
    image: "/images/health-wellness1.jpg",
    slideImages: ["/images/health-wellness1.png"],
    detailedDescription: `The Rejuvenated Seniors Alliance (RSA) prioritizes the health of seniors by providing access to holistic health education and resources. Through workshops and community outreach, RSA advocates for regular health screenings, nutritional awareness, and physical activity, empowering elderly individuals to take charge of their well-being and improve their quality of life.  
    
    Focusing on disease prevention, RSA implements educational campaigns to raise awareness about common health risks among seniors. By promoting preventive measures such as vaccinations, regular check-ups, and healthy lifestyle choices, the organization aims to reduce the prevalence of chronic diseases and enhance the overall health of its members.

    Recognizing the emotional and mental challenges faced by seniors, RSA offers psychosocial care programs that foster connection and support. These initiatives include group discussions, counseling services, and social activities designed to alleviate loneliness and enhance emotional resilience, helping widows and widowers reclaim their sense of purpose and community.
    
    `,
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
    title: "Women Leadership",
    description:
      "Regular community gatherings, tea socials, and hobby clubs to empower women on leadership skills and community development.",
    icon: <Users className="h-8 w-8 text-secondary-500" />,
    image: "/images/leadership.jpg",
    slideImages: ["/images/leadership.jpg"],
    detailedDescription: `RSA champions women leadership by creating platforms for widows to engage in decision-making and community development. Through training programs and mentorship, the organization empowers women to harness their skills and voices, promoting gender equality and encouraging them to take on leadership roles within their households and communities.`,
    benefits: [
      "Women empowerment and leadership development",
      "Women's rights advocacy and awareness",
      "Women's health and wellness programs",
      "Women's financial literacy and empowerment",
      "Women's leadership and advocacy",
      "Women's community development and empowerment",
    ],
    features: [
      "Training programs and mentorship",
      "Women empowerment and leadership development",
      "Women's rights advocacy and awareness",
      "Women's health and wellness programs",
      "Women's financial literacy and empowerment",
      "Women's leadership and advocacy",
    ],
  },
  {
    title: "Discovery Bible Study",
    description:
      "Regular community gatherings, tea socials, and hobby clubs to combat isolation and foster lasting friendships.",
    icon: <BookOpen className="h-8 w-8 text-teal-500" />,
    image: "/images/bible-study.jpg",
    slideImages: ["/images/bible-study.jpg"],
    detailedDescription: `The Discovery Bible Study program offered by RSA encourages spiritual growth and community bonding among seniors. By engaging participants in discussions around biblical teachings, the program fosters a supportive environment where individuals can explore their faith, share experiences, and find comfort and strength in their spiritual journeys.`,
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
    title: "Food Program",
    description:
      "Expert guidance on healthcare directives, housing rights, and estate planning to ensure your voice is always heard.",
    icon: <Scale className="h-8 w-8 text-indigo-500" />,
    image: "/images/food-program.jpg",
    slideImages: ["/images/food-program.jpg"],
    detailedDescription: `RSA promotes economic empowerment for widows and widowers through skill development and entrepreneurship training. By equipping seniors with practical skills and business knowledge, the organization enables them to generate income, achieve financial independence, and contribute to their households and communities, ultimately enhancing their dignity and self-reliance.`,
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
  {
    title: "Economic Empowerment",
    description:
      "Expert guidance on healthcare directives, housing rights, and estate planning to ensure your voice is always heard.",
    icon: <Scale className="h-8 w-8 text-indigo-500" />,
    image: "/images/economic-empowerment.jpg",
    slideImages: ["/images/economic-empowerment.jpg"],
    detailedDescription: `RSA promotes economic empowerment for widows and widowers through skill development and entrepreneurship training. By equipping seniors with practical skills and business knowledge, the organization enables them to generate income, achieve financial independence, and contribute to their households and communities, ultimately enhancing their dignity and self-reliance.`,
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
  {
    title: "Legal Advocacy",
    description:
      "Expert guidance on healthcare directives, housing rights, and estate planning to ensure your voice is always heard.",
    icon: <Scale className="h-8 w-8 text-indigo-500" />,
    image: "/images/legal-advocacy.jpg",
    slideImages: ["/images/legal-advocacy.jpg"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
