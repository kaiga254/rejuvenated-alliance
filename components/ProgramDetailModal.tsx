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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8 overflow-hidden relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed position outside the scrollable area */}
        <button
          onClick={onClose}
          className="sticky top-2 right-2 z-20 ml-auto mr-2 mt-2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 shadow-xl transition-all text-white hover:scale-110"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image Carousel - Full width, no height constraint */}
        {slideImages.length > 0 && (
          <div className="w-full">
            <ImageCarousel images={slideImages} alt={program.title} />
          </div>
        )}

        {/* Content */}
        <div className="p-8 md:p-10">
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

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
            <button className="flex-1 bg-primary-900 text-white px-6 py-3 rounded-md font-bold hover:bg-primary-800 transition-colors shadow-md hover:shadow-lg">
              Enroll Now
            </button>
            <button className="flex-1 border-2 border-primary-900 text-primary-900 px-6 py-3 rounded-md font-bold hover:bg-primary-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;
