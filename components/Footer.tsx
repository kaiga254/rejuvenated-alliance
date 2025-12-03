import React from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
               <Heart className="h-6 w-6 text-secondary-500 mr-2" />
               <span className="text-2xl font-serif font-bold text-white">Rejuvenated Seniors</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to enriching the lives of seniors through advocacy, community building, and comprehensive support services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#mission" className="hover:text-secondary-500 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-secondary-500 transition-colors">Programs & Services</a></li>
              <li><a href="#impact" className="hover:text-secondary-500 transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Harmony Lane,<br />Springfield, IL 62704</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                <span>contact@rsalliance.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and events.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary-500"
              />
              <button className="bg-secondary-500 text-white px-4 py-2 rounded-md font-bold hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rejuvenated Seniors Alliance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;