import React from 'react';
import { careFeaturesData } from '../../data/careFeaturesData.js';

/**
 * "Our Professionals We Care About You" 4-Card Care Pillars Grid
 */
export default function AboutCareSection({ onBookAppointment }) {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100 relative overflow-hidden">
      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute top-10 right-0 w-80 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] tracking-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Our Professionals We{' '}
            <span className="text-[#E94E9A]">Care About You</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {careFeaturesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md p-8 text-center shadow-sm hover:shadow-md transition duration-300 border border-slate-100 flex flex-col items-center justify-between group hover:-translate-y-1 min-h-[310px]"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 
                className="text-lg sm:text-xl font-bold text-[#222B40] mb-3 tracking-tight"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p 
                className="text-sm text-slate-500 leading-relaxed mb-6 font-normal"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {item.desc}
              </p>

              {/* Read More Link */}
              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B5DA7] hover:text-[#E94E9A] uppercase tracking-wider hover:underline transition-colors mt-auto cursor-pointer"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <span>READ MORE</span>
                <span className="text-sm font-black leading-none">&raquo;</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
