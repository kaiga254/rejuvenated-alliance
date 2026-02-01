import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import VolunteerModal from "./VolunteerModal";
import DonationModal from "./DonationModal";

const Hero: React.FC = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative w-full h-[600px] sm:h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            //src="https://picsum.photos/id/128/1920/1080"
            src="/images/slides/hero.jpg"
            alt="Seniors enjoying community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="sm:w-2/3 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight shadow-sm">
              Empowering Lives, <br />
              Enriching Communities.
            </h1>
            <p className="text-lg sm:text-xl text-primary-50 mb-8 font-light leading-relaxed">
              We are dedicated to ensuring that every senior lives with dignity,
              purpose, and connection. Join the alliance that is redefining the
              golden years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-secondary-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                Donate Now
              </button>
              <button
                onClick={() => setIsVolunteerModalOpen(true)}
                className="flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </>
  );
};

export default Hero;
