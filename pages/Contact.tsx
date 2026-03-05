import React, { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Important: you should replace these placeholders with your actual emailjs credentials
    emailjs
      .sendForm(
        "service_sxci1nc", // Replace with your Service ID
        "template_nqbxp3i", // Replace with your Template ID
        form.current,
        "XJTcow_n7OuL7ZXxv",
        // "public_key_xxxxxxx" // Pass your Public Key here
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus("error");
          console.error("EmailJS Error:", error.text);
        },
      );
  };

  return (
    <div className="flex-grow bg-slate-50">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a question about our
            programs, want to volunteer, or need support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div className="bg-primary-900 text-white rounded-2xl shadow-sm p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-primary-100 leading-relaxed">
                    Webuye Road
                    <br />
                    Kakamega, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <Phone className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                  <p className="text-primary-100 leading-relaxed">
                    +254 724 217-330
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-primary-800/50 p-4 rounded-xl">
                <Mail className="w-6 h-6 text-secondary-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                  <p className="text-primary-100 leading-relaxed">
                    info@rsainternational.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              Send us a message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-lg flex items-center gap-3 border border-emerald-200">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                  Thank you! Your message has been sent successfully. We will
                  get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg flex items-center gap-3 border border-red-200">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                  Oops! Something went wrong while sending your message. Please
                  try again later.
                </p>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="title"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full flex items-center justify-center gap-2 px-3 py-3 mt-4 rounded-lg text-base font-bold bg-secondary-500 text-white hover:bg-secondary-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
