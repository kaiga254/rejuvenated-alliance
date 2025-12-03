import React from "react";
import { X, Mail, Phone, MessageCircle, MessageSquare } from "lucide-react";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const phoneNumber = "+254724217330";
  const email = "info@rejuvenatedseniorsalliance.org";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=Hi, I would like to volunteer with Rejuvenated Seniors Alliance`;
  const smsLink = `sms:${phoneNumber}?body=Hi, I would like to volunteer with Rejuvenated Seniors Alliance`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-800 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-primary-900 p-6 text-white text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">Join Our Team</h3>
          <p className="text-primary-100 text-sm">
            Your time and skills can make a real difference.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-slate-600 text-sm text-center mb-6">
            Ready to volunteer? Get in touch with us using any of the methods
            below:
          </p>

          {/* Email */}
          <a
            href={`mailto:${email}?subject=Volunteer Inquiry`}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 hover:border-primary-200 transition-all group"
          >
            <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">Email Us</h4>
              <p className="text-sm text-slate-600">{email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 hover:border-primary-200 transition-all group"
          >
            <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
              <p className="text-sm text-slate-600">{phoneNumber}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 hover:border-primary-200 transition-all group"
          >
            <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors">
              <MessageCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">WhatsApp</h4>
              <p className="text-sm text-slate-600">Message us directly</p>
            </div>
          </a>

          {/* SMS */}
          <a
            href={smsLink}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 hover:border-primary-200 transition-all group"
          >
            <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">Send SMS</h4>
              <p className="text-sm text-slate-600">Text us your interest</p>
            </div>
          </a>

          <p className="text-xs text-center text-slate-400 mt-6">
            We look forward to hearing from you and welcoming you to our
            volunteer family!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
