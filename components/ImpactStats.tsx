//"use client";

import React, { useEffect, useState, useRef } from "react";

const CountUp = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const ImpactStats = () => {
  const stats = [
    { value: 300, suffix: "+", label: "widows and widowers supported" },
    { value: 100, suffix: "+", label: "Projects Implemented" },
    { value: 80, suffix: "%", label: "Members Satisfaction Rate" },
    { value: 5, suffix: "+", label: "Partnerships" },
  ];

  return (
    <section className="relative bg-primary-900 py-16 md:py-24 text-white overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-30" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Growing Together, <br /> Year After Year.
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Since our inception, the Rejuvenated Seniors Alliance has seen
            exponential growth in community participation. Our numbers tell a
            story of connection, resilience, and the vital need for
            senior-focused resources.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary-500 flex justify-center items-center gap-1 font-serif">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-primary-100 uppercase tracking-widest group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
