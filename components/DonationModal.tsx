import React from "react";
import { X, CreditCard, Smartphone } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close donation modal"
          title="Close"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-primary-900 p-6 text-white text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">
            Support Our Cause
          </h3>
          <p className="text-primary-100 text-sm">
            Your contribution makes a difference.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Mpesa Section */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-slate-800">M-Pesa</h4>
            </div>
            <div className="space-y-2 text-sm text-slate-600 pl-11">
              <div className="flex justify-between">
                <span>Phone Number:</span>
                <span className="font-mono font-bold text-slate-900">
                  +254 724 217330
                </span>
              </div>
              <div className="flex justify-between">
                <span>Paybill Number:</span>
                <span className="font-mono font-bold text-slate-900">
                  ------
                </span>
              </div>
              <div className="flex justify-between">
                <span>Account Number:</span>
                <span className="font-mono font-bold text-slate-900">
                  ------
                </span>
              </div>
            </div>
          </div>

          {/* Bank Section */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-800">Bank Transfer</h4>
            </div>
            <div className="space-y-2 text-sm text-slate-600 pl-11">
              <div className="grid grid-cols-[110px_1fr] gap-3 items-start">
                <span>Bank Name:</span>
                <span className="font-bold text-slate-900 text-right">
                  Diamond Trust Bank
                </span>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-3 items-start">
                <span>Account Name:</span>
                <span className="font-bold text-slate-900 text-right break-words leading-relaxed">
                  Rejuvenated Seniors Alliance International
                </span>
              </div>
              <div className="grid grid-cols-[110px_1fr] gap-3 items-start">
                <span>Account Number:</span>
                <span className="font-mono font-bold text-slate-900 text-right">
                  0083598001
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-slate-400 mt-4">
            Thank you for your generosity. All donations go directly to
            supporting our seniors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
