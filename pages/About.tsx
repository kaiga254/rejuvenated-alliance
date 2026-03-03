import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-8 text-center">
          About Us
        </h1>

        {/* Mission, Vision, Values */}
        <section className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600">
                To enhance the well-being of seniors by reducing social
                isolation, promoting physical and mental vitality, and providing
                necessary support services through community-based initiatives.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600">
                A community where every senior enjoys a dignified, fulfilling,
                and connected life.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Our Values
              </h2>
              <p className="text-slate-600">
                Compassion, Community, Dignity, and Respect.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-12 text-center">
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/5] bg-slate-200">
                <img
                  src="/images/founder1.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Jane Doe
                </h3>
                <p className="text-secondary-600 font-medium mb-4">
                  Co-Founder & President
                </p>
                <p className="text-slate-600 text-sm">
                  Dedicated to improving senior care with over 20 years of
                  experience in community building.
                </p>
              </div>
            </div>
            {/* Founder 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/5] bg-slate-200">
                <img
                  src="/images/founder2.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  John Smith
                </h3>
                <p className="text-secondary-600 font-medium mb-4">
                  Co-Founder & Director of Operations
                </p>
                <p className="text-slate-600 text-sm">
                  Passionate about healthcare and accessible living for the
                  aging population.
                </p>
              </div>
            </div>
            {/* Founder 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/5] bg-slate-200">
                <img
                  src="/images/founder3.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Sarah Lee
                </h3>
                <p className="text-secondary-600 font-medium mb-4">
                  Co-Founder & Community Lead
                </p>
                <p className="text-slate-600 text-sm">
                  Championing mental vitality and social connections for our
                  beloved seniors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
