import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4 text-center">
          Our Projects
        </h1>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
          Discover the specific initiatives and projects we've undertaken to
          create tangible impact in the lives of seniors across our communities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="aspect-video bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953eb1f5bc?auto=format&fit=crop&w=800&q=80"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Community Garden Initiative
              </h3>
              <p className="text-slate-600 flex-grow mb-4">
                A project focused on building accessible community gardens,
                allowing seniors to engage in therapeutic gardening, socialize,
                and grow fresh produce.
              </p>
              <div className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">
                Completed • Spring 2025
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="aspect-video bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Digital Literacy Drive
              </h3>
              <p className="text-slate-600 flex-grow mb-4">
                Equipping seniors with the skills and devices needed to stay
                connected with family, manage healthcare online, and explore the
                digital world safely.
              </p>
              <div className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">
                Ongoing
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="aspect-video bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=800&q=80"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Mobile Health Clinics
              </h3>
              <p className="text-slate-600 flex-grow mb-4">
                Partnering with local healthcare providers to bring essential
                basic checkups and wellness screenings directly to senior
                centers and residential communities.
              </p>
              <div className="text-sm font-semibold text-secondary-600 uppercase tracking-wide">
                Upcoming • Fall 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
