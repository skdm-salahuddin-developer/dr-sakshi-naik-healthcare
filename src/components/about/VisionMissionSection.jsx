import React from 'react';

/**
 * Section: Vision, Mission & Core Values
 * Clean, elegant, and simple 3-pillar presentation with logo-themed accents.
 */
export default function VisionMissionSection() {
  const principles = [
    {
      id: 'vision',
      title: 'Our Vision',
      icon: '/images/about/01.png',
      badgeBg: 'bg-[#E94E9A]/10',
      barColor: 'bg-[#E94E9A]',
      description:
        'Empowering women across every life milestone with empathetic, transparent, and globally benchmarked healthcare.',
    },
    {
      id: 'mission',
      title: 'Our Mission',
      icon: '/images/about/02.png',
      badgeBg: 'bg-[#0B5DA7]/10',
      barColor: 'bg-[#0B5DA7]',
      description:
        'Delivering individualized clinical excellence through advanced evidence-based protocols and patient-first care.',
    },
    {
      id: 'values',
      title: 'Core Values',
      icon: '/images/about/03.png',
      badgeBg: 'bg-[#E94E9A]/10',
      barColor: 'bg-[#E94E9A]',
      description:
        'Unhurried consultations, transparent diagnosis, and compassionate clinical partnership built on lifelong trust.',
    },
  ];

  return (
    <section className="bg-[#F9FAFC] py-14 sm:py-18 lg:py-20 relative overflow-hidden border-t border-b border-slate-100">
      {/* Subtle Dot Pattern Accent */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-repeat -z-0"
        style={{ backgroundImage: 'url("/images/about/pattan.png")' }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="block text-[#0B5DA7] font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
            Our Guiding Principles
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] tracking-tight leading-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Vision &amp; Philosophy Behind{' '}
            <span className="text-[#E94E9A]">Our Practice</span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3-Card Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Emblem */}
              <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-5 ${item.badgeBg} transition-transform duration-300 group-hover:scale-110`}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold text-[#222B40] mb-2.5 tracking-tight group-hover:text-[#0B5DA7] transition-colors"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Simple & Concise Description */}
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Delicate Indicator Line that Expands on Hover */}
              <div className={`w-10 h-0.5 ${item.barColor} mt-6 rounded-full group-hover:w-16 transition-all duration-300 opacity-70 group-hover:opacity-100`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
