import React from "react";
import { X, Quote } from "lucide-react";
import { Voice } from "../types";

interface VoicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  voice: Voice | null;
}

const VoicesModal: React.FC<VoicesModalProps> = ({
  isOpen,
  onClose,
  voice,
}) => {
  if (!isOpen || !voice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="h-6 w-6 text-slate-500" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <img
            src={voice.image}
            alt={voice.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
          <div className="absolute bottom-4 left-4 text-white md:hidden">
            <h3 className="text-xl font-serif font-bold">{voice.name}</h3>
            <p className="text-sm opacity-90">{voice.role}</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <Quote className="h-10 w-10 text-primary-200 mb-6" />

          <div className="hidden md:block mb-8">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              {voice.name}
            </h3>
            <p className="text-primary-600 font-medium">{voice.role}</p>
          </div>

          <div className="prose prose-lg text-slate-600">
            <p className="italic text-xl text-slate-800 mb-8 border-l-4 border-secondary-500 pl-4">
              "{voice.quote}"
            </p>
            <div className="whitespace-pre-line text-base leading-relaxed">
              {voice.story}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoicesModal;
