import React from "react";
import Services from "../components/Services";

const Programs: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?auto=format&fit=crop&w=1920&q=80"
            alt="Seniors participating in activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Programs & Services
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Explore the various programs and services we offer to support,
            engage, and uplift the seniors in our community. We are committed to
            providing comprehensive care and engaging activities.
          </p>
        </div>
      </section>

      <div className="py-20">
        {/* We reuse the rich Services component here */}
        <Services />
      </div>
    </div>
  );
};

export default Programs;
