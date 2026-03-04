import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjectsData } from "../data/projects";
import ProjectDetailModal from "./ProjectDetailModal";
import DonationModal from "./DonationModal";
import { Project } from "../types";

const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const parseProjectDate = (date: string) => {
    const [day, month, year] = date.split("/").map(Number);

    if (!day || !month || !year) {
      return null;
    }

    return new Date(year, month - 1, day);
  };

  const getProjectStatus = (date: string): Project["status"] => {
    const projectDate = parseProjectDate(date);

    if (!projectDate) {
      return "Completed";
    }

    const today = new Date();
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    if (projectDate > todayStart) {
      return "Upcoming";
    }

    if (
      projectDate.getMonth() === todayStart.getMonth() &&
      projectDate.getFullYear() === todayStart.getFullYear()
    ) {
      return "Ongoing";
    }

    return "Completed";
  };

  const getStatusColor = (status: Project["status"]) => {
    if (status === "Completed") {
      return "emerald";
    }

    if (status === "Ongoing") {
      return "blue";
    }

    return "amber";
  };

  const featuredProjects = useMemo(() => {
    const getProjectTime = (date: string) => {
      const parsedDate = parseProjectDate(date);

      if (!parsedDate) {
        return 0;
      }

      return parsedDate.getTime();
    };

    return [...featuredProjectsData]
      .sort((firstProject, secondProject) => {
        return (
          getProjectTime(secondProject.date) - getProjectTime(firstProject.date)
        );
      })
      .slice(0, 3);
  }, []);

  const handleProjectAction = (
    project: Project,
    status: Project["status"],
    statusColor: string,
  ) => {
    if (status === "Completed") {
      setSelectedProject({
        ...project,
        status,
        statusColor,
      });
      return;
    }

    setIsDonationModalOpen(true);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto border-t border-transparent mb-8">
            Take a look at some of the recent initiatives we've been working on
            to support our seniors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => {
            const derivedStatus = getProjectStatus(project.date);
            const derivedStatusColor = getStatusColor(derivedStatus);

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                onClick={() =>
                  handleProjectAction(
                    project as Project,
                    derivedStatus,
                    derivedStatusColor,
                  )
                }
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
                        derivedStatusColor === "emerald"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : derivedStatusColor === "blue"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-amber-100 text-amber-800 border-amber-200"
                      }`}
                    >
                      {derivedStatus}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 mt-2 group-hover:text-secondary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span
                      className={`font-bold flex items-center transition-colors ${
                        derivedStatus === "Completed"
                          ? "text-blue-600 group-hover:text-blue-700"
                          : "text-orange-600 group-hover:text-orange-700"
                      }`}
                    >
                      {derivedStatus === "Completed" ? "Show More" : "Donate"}
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
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <ProjectDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
};

export default FeaturedProjects;
