import React from "react";

const AboutMission: React.FC = () => {
  return (
    <section
      id="mission"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section - Acts as the anchor */}
          <div className="w-full lg:w-3/5 relative z-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/mission.png"
                alt="Senior woman smiling"
                className="w-full h-[400px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-500 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-40"></div>
          </div>

          {/* Content Overlap Card */}
          <div className="w-full lg:w-1/2 lg:-ml-20 relative z-10 mt-[-80px] lg:mt-0">
            <div className="bg-white/95 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-xl border border-white/20">
              <div className="inline-block bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Restoring Dignity, <br />
                <span className="text-primary-800">Inspiring Hope.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Rejuvenated Seniors Alliance, we believe that aging is not a
                decline, but a new chapter filled with potential. Our mission is
                to advocate for the rights of seniors, provide essential
                resources that foster independence, and create vibrant spaces
                for social engagement.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We bridge the gap between generations and ensure that no senior
                feels invisible or forgotten in our rapidly changing world.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div className="border-l-4 border-primary-500 pl-6">
                  <p className="text-3xl font-bold text-slate-900 mb-1">7+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    Years of Service
                  </p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-6">
                  <p className="text-3xl font-bold text-slate-900 mb-1">10+</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    Dedicated Volunteers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-24 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-secondary-100 text-secondary-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
              Our Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              A World Where Every Senior is Valued
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              "To create a world where every senior is valued, respected, and
              empowered to live a fulfilling life, free from isolation and
              neglect."
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Compassion",
              desc: "Acting with empathy, kindness, and understanding in every interaction.",
              color: "bg-primary-50",
              textColor: "text-primary-800",
            },
            {
              title: "Dignity",
              desc: "Respecting the inherent worth and wisdom of every individual we serve.",
              color: "bg-secondary-50",
              textColor: "text-secondary-800",
            },
            {
              title: "Community",
              desc: "Fostering deep connections and a sense of belonging for all seniors.",
              color: "bg-slate-50",
              textColor: "text-slate-800",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className={`${value.color} p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow`}
            >
              <h3
                className={`text-xl font-bold ${value.textColor} mb-4 font-serif`}
              >
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
