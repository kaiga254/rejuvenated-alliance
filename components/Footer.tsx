import React, { useState } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";
import DonationModal from "./DonationModal";

// Custom TikTok icon since it might not be in all versions of lucide-react or to ensure specific styling if needed.
// However, assuming recent lucide-react has it or we use a text fallback/generic if missing.
// Checking lucide-react 0.554.0, it should have it. Let's try importing it.
// If it fails, I will use a placeholder.
// Actually, to be safe and avoid build errors if it's missing, I'll check if I can use a generic Icon or just try.
// I'll try importing 'Twitter' as a test? No, let's just stick to the requested ones.
// I will use a simple SVG for TikTok if I can't import it, but let's try importing `Video` as a fallback or just `Facebook`, `Linkedin`, `Youtube`.
// Wait, I can't easily "try" without running code. I'll assume standard icons exist.
// Facebook, Linkedin, Youtube are standard. TikTok is newer.
// Let's check if I can see the `lucide-react` exports? No.
// I'll use `Facebook`, `Linkedin`, `Youtube` and for TikTok I'll use a custom SVG or just text if I have to, but let's try to find a "Share2" or something if TikTok is missing.
// Actually, I'll just use the text "TikTok" if I'm unsure, but I want icons.
// Let's look at the existing imports: `Heart, Mail, MapPin, Phone`.
// I will add `Linkedin, Youtube, Facebook`. For TikTok, I'll check if `Music2` or something fits, or just use a generic one.
// Actually, I'll check if I can use a simple SVG for TikTok directly in the JSX to be safe.

const Footer: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-secondary-500 mr-2" />
                <span className="text-2xl font-serif font-bold text-white">
                  Rejuvenated Seniors
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Dedicated to enriching the lives of seniors through advocacy,
                community building, and comprehensive support services.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-secondary-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-slate-400 hover:text-secondary-500 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-slate-400 hover:text-secondary-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="text-slate-400 hover:text-secondary-500 transition-colors"
                >
                  {/* TikTok Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#mission"
                    className="hover:text-secondary-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-secondary-500 transition-colors"
                  >
                    Programs & Services
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    className="hover:text-secondary-500 transition-colors"
                  >
                    Our Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-500 transition-colors"
                  >
                    Volunteer
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="hover:text-secondary-500 transition-colors text-left"
                  >
                    Donate
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Kakamega,Webiye Road
                    <br />
                    Kenya
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>+254 724 217-330</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>info@rejuvenatedseniorsalliance.org</span>
                </li>
              </ul>
            </div>

            {/* Donate CTA */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                Make a Difference
              </h4>
              <p className="text-sm mb-4">
                Your support empowers seniors and strengthens our community.
                Every contribution counts.
              </p>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="bg-secondary-500 text-white px-4 py-3 rounded-md font-bold hover:bg-amber-600 transition-colors w-full shadow-lg transform hover:-translate-y-0.5"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Rejuvenated Seniors Alliance.
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default Footer;
