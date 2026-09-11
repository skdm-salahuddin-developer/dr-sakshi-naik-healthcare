import React, { useState } from 'react';
import { treatmentsData } from '../../data/treatmentsData.js';

/**
 * Interactive Tabbed Clinical Treatments Showcase
 */
export default function TreatmentsShowcase({ onBookAppointment }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = treatmentsData[activeTab] || treatmentsData[0];

  return (
    <section id="treatments" className="bg-white py-16 lg:py-24 relative overflow-hidden border-b border-gray-100">
      
      {/* Background Subtle Dot Pattern matching template */}
      <div 
        className="absolute top-10 left-0 w-80 sm:w-96 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] tracking-tight leading-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Specialized Healthcare Led By{' '}
            <span className="text-[#E94E9A]">Dr. Sakshi Naik</span>
            <br />
            For Every Stage Of Life
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Vertical Navigation Tabs */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col divide-y divide-gray-100 max-h-[560px] overflow-y-auto pr-1">
            {treatmentsData.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center gap-3 py-3.5 px-1 text-left transition-all duration-200 group relative ${
                    isActive
                      ? 'text-[#0B5DA7] font-bold'
                      : 'text-[#555555] hover:text-[#222B40] font-medium'
                  }`}
                >
                  {/* Large Icon matching template */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <img
                      src={item.tabIcon}
                      alt={item.tabTitle}
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>

                  {/* Tab Title */}
                  <span className="text-[14px] sm:text-[15px] tracking-tight truncate">
                    {item.tabTitle}
                  </span>

                  {/* Prominent Active Tab Bottom Border */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Active Showcase */}
          <div className="lg:col-span-9 xl:col-span-9 pt-2 sm:pt-4 lg:pt-6 xl:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Content Area */}
              <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Selected Treatment Title */}
                  <h3 className="text-2xl sm:text-[27px] font-bold text-[#222B40] tracking-tight mb-4 leading-snug">
                    {current.title}
                  </h3>

                  {/* Overview Paragraph */}
                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {current.description}
                  </p>

                  {/* 2-Column Checklist with double arrows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                    {current.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-sm text-[#555555]">
                        <span className="text-[#E94E9A] font-black text-sm select-none shrink-0 leading-none">
                          &raquo;
                        </span>
                        <span className="font-medium text-gray-700 text-[13px]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar: Doctor profile snippet + READ MORE button */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/01.jpg"
                      alt="Dr. Sakshi Naik"
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-xs"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#222B40] leading-tight">
                        Dr. Sakshi Naik
                      </h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        Specialist
                      </p>
                    </div>
                  </div>

                  <a
                    href={`#/treatments/${current.slug}`}
                    className="bg-[#0B5DA7] hover:bg-[#094b87] text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-1.5"
                  >
                    <span>READ MORE</span>
                    <span className="text-sm font-black leading-none">&raquo;</span>
                  </a>
                </div>

              </div>

              {/* Right Medical Image with floating badge */}
              <div className="md:col-span-6 lg:col-span-6 relative flex items-center">
                <div className="relative w-full h-[380px] sm:h-[440px] md:h-[460px] lg:h-[480px] rounded-md overflow-hidden shadow-md group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-xs shadow-lg border border-gray-100 flex items-center justify-center p-2.5">
                    <img
                      src={current.badgeIcon}
                      alt="Category"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
