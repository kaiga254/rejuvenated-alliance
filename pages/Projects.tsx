import React, { useState } from "react";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { featuredProjectsData } from "../data/projects";
import { Project } from "../types";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex-grow bg-slate-50">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/slides/hero4.jpg"
            alt="Seniors participating in activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Discover the specific initiatives and projects we've undertaken to
            create tangible impact in the lives of seniors across our
            communities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            Featured Initiatives
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto border-t border-transparent">
            Explore some of our most impactful community efforts aimed at
            enhancing the lives of seniors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedProject(project as Project)}
            >
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col relative">
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span
                    className={`text-xs font-bold px-4 py-2 rounded-full shadow-sm border whitespace-nowrap ${
                      project.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                        : project.status === "Ongoing"
                          ? "bg-blue-100 text-blue-800 border-blue-200"
                          : "bg-amber-100 text-amber-800 border-amber-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3 mt-2 group-hover:text-secondary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                  <div className="text-sm font-semibold text-slate-500 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {project.date}
                  </div>
                  <span className="text-secondary-600 font-bold group-hover:text-secondary-700 flex items-center transition-colors">
                    Details
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
