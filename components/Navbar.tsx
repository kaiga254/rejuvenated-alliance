import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#mission' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-primary-900 p-2 rounded-lg mr-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary-900 leading-none">
                Rejuvenated Seniors
              </h1>
              <span className="text-xs uppercase tracking-widest text-slate-500">Alliance</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-primary-800 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-secondary-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-100 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-900 hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-secondary-500 text-white"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;