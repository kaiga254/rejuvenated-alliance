import React from "react";
import { X } from "lucide-react";
import { ServiceCardProps } from "../types";
import ImageCarousel from "./ImageCarousel";

interface ProgramDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: ServiceCardProps | null;
}

const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  isOpen,
  onClose,
  program,
}) => {
  if (!isOpen || !program) return null;

  const slideImages =
    program.slideImages || (program.image ? [program.image] : []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8 overflow-hidden relative animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - More visible with contrasting colors */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-white hover:bg-slate-100 shadow-2xl transition-all border-2 border-slate-200 hover:border-slate-300 hover:scale-110 group"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-slate-700 group-hover:text-slate-900" />
        </button>

        {/* Image Carousel - Takes up at least 25% of modal height */}
        {slideImages.length > 0 && (
          <div className="w-full min-h-[300px] max-h-[35vh] flex-shrink-0 overflow-hidden">
            <ImageCarousel images={slideImages} alt={program.title} />
          </div>
        )}

        {/* Content - Scrollable area */}
        <div className="p-8 md:p-10 overflow-y-auto flex-1 bg-white relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-slate-50 rounded-full flex-shrink-0">
              {program.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                {program.title}
              </h2>
              <p className="text-lg text-slate-600">{program.description}</p>
            </div>
          </div>

          {/* Detailed Description */}
          {program.detailedDescription && (
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                About This Program
              </h3>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {program.detailedDescription}
              </p>
            </div>
          )}

          {/* Benefits */}
          {program.benefits && program.benefits.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Benefits
              </h3>
              <ul className="space-y-3">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-2 w-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-700 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {program.features && program.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <span className="h-2 w-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;
