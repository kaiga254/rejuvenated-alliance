import React from "react";
import { X, Calendar, MapPin } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-8 overflow-hidden relative animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 shadow-lg transition-all border border-white/40 hover:scale-110 group"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[400px] flex-shrink-0 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm whitespace-nowrap ${
                  project.status === "Completed"
                    ? "bg-emerald-500 text-white"
                    : project.status === "Ongoing"
                      ? "bg-blue-500 text-white"
                      : "bg-amber-500 text-white"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 overflow-y-auto flex-1 bg-white">
          <div className="flex flex-wrap gap-6 mb-8 text-slate-600 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary-500" />
              <span className="font-medium">{project.date}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary-500" />
                <span className="font-medium">{project.location}</span>
              </div>
            )}
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              About the Project
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
