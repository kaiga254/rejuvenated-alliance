import React from "react";
import Services from "../components/Services";

const Programs: React.FC = () => {
  return (
    <div className="flex-grow bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4 text-center">
          Our Programs & Services
        </h1>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
          Explore the various programs and services we offer to support, engage,
          and uplift the seniors in our community. We are committed to providing
          comprehensive care and engaging activities.
        </p>
      </div>

      {/* We reuse the rich Services component here */}
      <Services />
    </div>
  );
};

export default Programs;
