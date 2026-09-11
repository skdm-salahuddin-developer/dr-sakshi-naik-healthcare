import React from 'react';

/**
 * Full-Width Crisp HD About Clinic Breadcrumb Banner
 */
export default function AboutBanner({ onNavigateHome }) {
  return (
    <section className="relative w-full bg-[#EBF1EF] border-b border-gray-200/60 overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[390px] flex items-center">
      
      {/* Full-Width Right-Centered Doctors Banner Photo */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/about/about-banner-hd.jpg"
          alt="Women's Healthcare Consultation"
          className="w-full h-full object-cover object-right sm:object-[85%_center] select-none opacity-100"
          loading="eager"
        />
        {/* Soft edge blend for flawless text legibility across all screen sizes */}
        {/* Soft opacity blend strictly on the text area, leaving the rest of the image completely crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EBF1EF] via-[#EBF1EF]/75 to-transparent w-[65%] sm:w-3/5 md:w-1/2 pointer-events-none" />
      </div>

      {/* Left Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-md sm:max-w-lg py-9 sm:py-12 lg:py-14">
          <h1 
            className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222B40] tracking-tight leading-tight mb-2"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            About <span className="text-[#E94E9A]">Our Clinic</span>
          </h1>

          {/* Logo Themed Blue & Pink Accent Bar */}
          <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mb-3" />

          <nav className="flex items-center gap-1.5 text-xs sm:text-[13.5px] font-normal text-[#666666]">
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-[#666666] hover:text-[#0B5DA7] transition-colors cursor-pointer"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Home
            </button>
            <span className="text-[#999999] select-none">/</span>
            <span 
              className="text-[#0B5DA7] font-semibold"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              About
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
