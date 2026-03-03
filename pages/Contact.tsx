import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
          We'd love to hear from you. Whether you have a question about our
          programs, want to volunteer, or need support.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-primary-900 text-white rounded-2xl shadow-sm p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-primary-100 leading-relaxed">
                    123 Community Hub Way
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <Phone className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                  <p className="text-primary-100 leading-relaxed">
                    +254 700 000 000
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <Mail className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                  <p className="text-primary-100 leading-relaxed">
                    hello@rejuvenatedalliance.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
