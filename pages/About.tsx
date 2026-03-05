import React from "react";
import { Mail, MessageSquare, MessageCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/slides/hero2.jpg"
            alt="Seniors enjoying time together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Empowering seniors to live dignified, fulfilling, and connected
            lives through compassion and community support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6 relative inline-block">
                Our Story
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary-500 rounded-full"></span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 mt-4">
                Rejuvenated Alliance was founded with a simple belief: every
                senior deserves to feel valued, connected, and supported. What
                began as a small community effort has grown into a dedicated
                initiative focused on reducing isolation, promoting wellness,
                and creating meaningful opportunities for seniors to thrive.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Through compassion and collaboration, we continue to build a
                stronger, more inclusive community for older adults and their
                families. We believe that aging is a journey that should be
                celebrated, and no one should have to walk it alone.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img
                src="/images/founders/members.jpeg"
                alt="Community gathering"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-primary-900">
            {/* <img
              src="/images/slides/hero1.jpg"
              alt="Hands together"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            /> */}
          </div>
          <div className="relative z-10 p-10 md:p-16 text-white grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 backdrop-blur-sm border border-white/20">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-100 leading-relaxed">
                To enhance the well-being of seniors by reducing social
                isolation, promoting physical and mental vitality, and providing
                necessary support services.
              </p>
            </div>
            <div className="text-center md:text-left transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 backdrop-blur-sm border border-white/20">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-100 leading-relaxed">
                A community where every senior enjoys a dignified, fulfilling,
                and connected life, surrounded by support and love.
              </p>
            </div>
            <div className="text-center md:text-left transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 backdrop-blur-sm border border-white/20">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <p className="text-primary-100 leading-relaxed">
                Compassion, Community, Dignity, and Respect sit at the heart of
                everything we do and every decision we make.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The passionate individuals who brought Rejuvenated Alliance to
              life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <img
                  src="/images/founders/lydia.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-8 text-center bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-secondary-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-primary-900 mb-1">
                  Lydia Kwamboka
                </h3>
                <p className="text-secondary-600 font-bold mb-4 uppercase tracking-wider text-sm">
                  Co-Founder
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  A dedicated psychologist with a calling to offer counceling
                  sessions to windows and widowers.
                </p>
                <div className="flex justify-center space-x-5 border-t border-slate-100 pt-6 mt-2">
                  <a
                    href="mailto:lydia@rsainternational.org"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="sms:+254724217330"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="SMS text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/+254724217330"
                    className="text-slate-400 hover:text-green-500 transition-colors transform hover:scale-110"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Founder 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <img
                  src="/images/founders/monica.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "";
                  }}
                />
              </div>
              <div className="p-8 text-center bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-secondary-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-primary-900 mb-1">
                  Monica Amunga
                </h3>
                <p className="text-secondary-600 font-bold mb-4 uppercase tracking-wider text-sm">
                  Co-Founder
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Passionate about healthcare and accessible living for the
                  aging population.
                </p>
                <div className="flex justify-center space-x-5 border-t border-slate-100 pt-6 mt-2">
                  <a
                    href="mailto:moamunga@rsainternational.org"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="sms:+254 724 217330"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="SMS text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/+254724217330"
                    className="text-slate-400 hover:text-green-500 transition-colors transform hover:scale-110"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Founder 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                <img
                  src=""
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "";
                  }}
                />
              </div>
              <div className="p-8 text-center bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-secondary-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-primary-900 mb-1">
                  Belinda
                </h3>
                <p className="text-secondary-600 font-bold mb-4 uppercase tracking-wider text-sm">
                  Community Lead
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Championing mental vitality and social connections for our
                  beloved seniors.
                </p>
                <div className="flex justify-center space-x-5 border-t border-slate-100 pt-6 mt-2">
                  <a
                    href="mailto:belindah@rsainternational.org"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="sms:++254710220655"
                    className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110"
                    title="SMS text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/+254710220655"
                    className="text-slate-400 hover:text-green-500 transition-colors transform hover:scale-110"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
