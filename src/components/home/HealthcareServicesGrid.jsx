import React from 'react';
import { servicesData } from '../../data/servicesData.js';

/**
 * 2x2 Healthcare Services Grid with S-Curve Wave Image Mask
 */
export default function HealthcareServicesGrid({ onBookAppointment }) {
  return (
    <section className="bg-[#F9FAFC] py-16 lg:py-24 border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Subtle Dot Pattern */}
      <div 
        className="absolute top-8 right-0 w-80 sm:w-96 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] tracking-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            What Medical Services Do{' '}
            <span className="text-[#E94E9A]">We Offer?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col sm:flex-row items-stretch justify-between group"
            >
              {/* Left Side: Content */}
              <div className="px-6 py-6 sm:px-7 sm:py-7 flex flex-col justify-between flex-1 min-w-0 sm:w-[54%]">
                <div>
                  <h3 className="text-xl font-bold text-[#222B40] mb-2.5 tracking-tight group-hover:text-[#0B5DA7] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-1">
                  <a
                    href={card.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5DA7] hover:text-[#094b87] uppercase tracking-wider hover:underline transition-colors"
                  >
                    <span>READ MORE</span>
                    <span className="text-sm font-black leading-none">&raquo;</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Treatment Image with S-Curve Wave Mask */}
              <div className="w-full sm:w-[46%] h-52 sm:h-auto min-h-[220px] relative overflow-hidden flex items-center justify-end bg-white">
                <div className={`absolute inset-0 ${card.tintBg} mix-blend-multiply z-[5] pointer-events-none`} />

                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <svg
                  className="absolute top-0 bottom-0 -left-0.5 h-full w-16 sm:w-20 lg:w-24 text-white pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0,0 L 70,0 C 35,25 65,50 25,75 C 5,88 35,98 80,100 L 0,100 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="text-center mt-12 sm:mt-14">
          <button
            type="button"
            onClick={onBookAppointment}
            className="inline-flex items-center gap-2 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-sm hover:shadow-md active:scale-98 transition-all duration-200"
          >
            <span>VIEW ALL SERVICES</span>
            <span className="text-sm font-black leading-none">&raquo;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
