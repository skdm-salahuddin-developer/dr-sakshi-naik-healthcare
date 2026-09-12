import React, { useState } from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';

/**
 * Main Hero Banner & Video Consultation Modal
 */
export default function HeroBanner({ onBookAppointment }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] flex items-center">
      
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/banner/g1.png"
          alt={`Mother and Child - ${clinicInfo.clinicName}`}
          className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] lg:object-right select-none"
        />
      </div>

      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute bottom-6 sm:bottom-10 left-0 w-80 sm:w-96 h-48 sm:h-64 pointer-events-none opacity-30 bg-repeat z-0"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      {/* Left Content Column */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-12 sm:pt-16 pb-28 sm:pb-32 lg:pb-36">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Doctor Name Eyebrow Tag */}
          <span 
            className="block text-base sm:text-lg lg:text-xl font-bold text-[#0B5DA7] tracking-tight mb-2.5 sm:mb-3.5"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {clinicInfo.doctorName}
          </span>

          {/* Display Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-[#222B40] tracking-tight mb-8 sm:mb-10 flex flex-col gap-2.5 sm:gap-3.5 lg:gap-4"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <span>
              Dedicated <span className="text-[#E94E9A]">Women's Health</span>
            </span>
            <span>&amp; Advanced</span>
            <span className="text-[#0B5DA7]">Fertility Care</span>
          </h1>

          {/* Dual Action CTA Row: Action Button + Animated Ripple Play Button */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* GET APPOINTMENTS Button */}
            <button
              type="button"
              onClick={onBookAppointment}
              className="bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2"
            >
              <span>GET APPOINTMENTS</span>
              <span className="text-base leading-none font-black">&raquo;</span>
            </button>

            {/* Ripple Play Button */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-12 h-12 rounded-full border border-[#F35858]/70 ripple-ring-1 pointer-events-none" />
              <span className="absolute w-12 h-12 rounded-full border border-[#F35858]/50 ripple-ring-2 pointer-events-none" />
              <span className="absolute w-12 h-12 rounded-full border border-[#F35858]/35 ripple-ring-3 pointer-events-none" />

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="relative z-10 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#F35858] hover:bg-[#e44646] p-0 shadow-md hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#F35858]/30"
                aria-label="Play introduction video"
              >
                <img
                  src="/images/icon-01.png"
                  alt="Play"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Preview */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden border border-gray-100 cursor-default"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F9FAFC]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F35858]" />
                <h3 className="font-bold text-[#222B40]">Virtual Clinic & Consultation Overview</h3>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-[#222B40] flex flex-col items-center justify-center text-white p-6">
              <div className="w-16 h-16 rounded-full bg-[#F35858] flex items-center justify-center mb-4 shadow-xl">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-bold">Welcome to {clinicInfo.doctorName}'s Clinic</p>
              <p className="text-xs text-gray-300 mt-1 max-w-md text-center">
                Dedicated patient care, advanced fertility labs, and comfortable maternity suites designed for you.
              </p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-end">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
