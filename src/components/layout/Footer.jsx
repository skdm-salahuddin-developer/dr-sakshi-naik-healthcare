import React from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';

/**
 * 3-Tier Global Site Footer with Clinic Hours, Google Map, and Brand Info
 */
export default function Footer() {
  const openingHours = [
    { day: 'Saturday', hours: '09:00 am - 08:00 pm' },
    { day: 'Sunday', hours: '10:00 am - 02:00 pm (Emergency 24/7)' },
    { day: 'Monday', hours: '09:00 am - 08:00 pm' },
    { day: 'Tuesday', hours: '09:00 am - 08:00 pm' },
    { day: 'Wednesday', hours: '09:00 am - 08:00 pm' },
    { day: 'Thursday', hours: '09:00 am - 08:00 pm' },
    { day: 'Friday', hours: '09:00 am - 08:00 pm' },
  ];

  return (
    <footer className="w-full bg-white relative">
      
      {/* 1. TOP CONTACT RIBBON (3 Colored Horizontal Blocks) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        
        {/* Left Block (Royal Blue - #0B5DA7) */}
        <div className="bg-[#0B5DA7] py-3 px-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 text-white">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
            <img
              src="/images/icons/phone-call.png"
              alt="Phone"
              className="w-4.5 h-4.5 sm:w-6 sm:h-7 object-contain brightness-0 invert"
            />
          </div>
          <div>
            <span className="italic text-[10px] sm:text-xs block text-white/90 tracking-wide">
              Give us a Call
            </span>
            <a
              href={`tel:${clinicInfo.phones.primary.replace(/\s+/g, '')}`}
              className="font-bold text-sm sm:text-lg lg:text-xl text-white hover:underline transition-all block mt-0.5 tracking-tight"
            >
              {clinicInfo.phones.primary}
            </a>
          </div>
        </div>

        {/* Middle Block (Maternity Pink - #E94E9A) */}
        <div className="bg-[#E94E9A] py-3 px-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 text-white">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
            <img
              src="/images/icons/email.png"
              alt="Email"
              className="w-4.5 h-4.5 sm:w-6 sm:h-7 object-contain brightness-0 invert"
            />
          </div>
          <div>
            <span className="italic text-[10px] sm:text-xs block text-white/90 tracking-wide">
              Send us a Message
            </span>
            <a
              href={`mailto:${clinicInfo.email}`}
              className="font-bold text-xs sm:text-base lg:text-lg text-white hover:underline transition-all block mt-0.5 tracking-tight break-all"
            >
              {clinicInfo.email}
            </a>
          </div>
        </div>

        {/* Right Block (Deep Navy Blue - #094b87) */}
        <div className="bg-[#094b87] py-3 px-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 text-white">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
            <img
              src="/images/icons/placeholder.png"
              alt="Location"
              className="w-4.5 h-4.5 sm:w-6 sm:h-7 object-contain brightness-0 invert"
            />
          </div>
          <div>
            <span className="italic text-[10px] sm:text-xs block text-white/90 tracking-wide">
              Visit our Location
            </span>
            <h5 className="font-bold text-xs sm:text-sm lg:text-base text-white block mt-0.5 tracking-tight leading-snug">
              {clinicInfo.address.line1}, Goregaon East
            </h5>
            <p className="text-[10px] sm:text-xs text-white/80 truncate">
              Mumbai, Maharashtra - 400097
            </p>
          </div>
        </div>

      </div>

      {/* 2. MAIN FOOTER BODY (3-Column Layout: About + Hours + Google Map) */}
      <div className="w-full bg-[#F9FAFC] border-b border-slate-200">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[380px]">
          
          {/* Column 1: About & Clinic Intro with Shifted Hospital Illustration on Mobile */}
          <div className="lg:col-span-4 p-4 sm:p-8 lg:p-10 flex flex-col justify-between bg-white lg:bg-transparent border-b lg:border-b-0 border-slate-200 relative overflow-hidden">
            <div>
              <h4 
                className="text-lg sm:text-xl font-bold text-[#222B40] mb-2 sm:mb-3.5 tracking-tight"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                About {clinicInfo.doctorName}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-5">
                Dedicated to providing compassionate, evidence-based maternity, advanced 3D laparoscopic surgery, and personalized fertility care for women at every stage of life.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider px-4 sm:px-6 py-2 sm:py-3 rounded shadow-sm hover:shadow transition-all duration-200 w-fit mb-2 sm:mb-4 cursor-pointer"
              >
                <span>VIEW PROFILE</span>
                <span className="text-sm font-black leading-none">&raquo;</span>
              </a>
            </div>

            {/* Hospital Building Illustration shifted as background watermark on mobile, cleanly anchored on desktop */}
            <img
              src="/images/footer/01.png"
              alt="Hospital Building"
              className="sm:hidden absolute right-2 bottom-1 max-h-20 w-auto object-contain opacity-20 pointer-events-none select-none"
              loading="lazy"
            />
            <div className="hidden sm:flex mt-3 pt-3 w-full items-end justify-start">
              <img
                src="/images/footer/01.png"
                alt="Hospital Building"
                className="max-h-36 sm:max-h-40 w-auto object-contain select-none pointer-events-none drop-shadow-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2: Weekly Consultation Hours - Compact spacing on mobile */}
          <div className="lg:col-span-4 p-4 sm:p-8 lg:p-10 bg-white flex flex-col justify-center border-b lg:border-b-0 lg:border-x border-slate-200">
            <h4 
              className="text-base sm:text-xl font-bold text-[#222B40] mb-2 sm:mb-5 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Our Opening Hours
            </h4>
            <div className="space-y-1 sm:space-y-2.5">
              {openingHours.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1 sm:py-2 border-b border-dashed border-slate-200 text-[11px] sm:text-sm text-slate-600 font-medium"
                >
                  <span className="text-slate-800 font-semibold">{item.day}</span>
                  <span className="text-slate-500">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Full-Bleed Interactive Google Map - Reduced height on mobile */}
          <div className="lg:col-span-4 h-44 sm:h-72 lg:h-auto w-full relative min-h-[175px] sm:min-h-[320px] lg:min-h-[360px]">
            <iframe
              src={clinicInfo.mapEmbedUrl}
              className="w-full h-full min-h-[175px] sm:min-h-[320px] lg:min-h-[360px] border-0"
              allowFullScreen
              loading="lazy"
              title="Main Clinic Location"
            />
          </div>

        </div>
      </div>

      {/* 3. BOTTOM SUB-FOOTER BAR */}
      <div className="bg-white py-2 sm:py-5 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-2 sm:gap-3.5">
          
          {/* Logo, Brand Text & Social Links with extended generous spacing */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 sm:gap-y-4 gap-x-10 sm:gap-x-16 lg:gap-x-24 pl-1 sm:pl-3 lg:pl-5">
            
            {/* Brand Logo with Official Clinic Emblem */}
            <div className="flex items-center gap-3 shrink-0">
              <img 
                src="/images/logo/logo.png" 
                alt="Women’s Healthcare and Fertility Services Logo"
                className="h-10 sm:h-14 lg:h-16 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col justify-center text-left">
                <span 
                  className="text-sm sm:text-lg lg:text-xl font-bold text-[#222B40] tracking-tight leading-tight"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Women’s Healthcare
                </span>
                <span 
                  className="text-[10.5px] sm:text-xs lg:text-[13px] font-semibold text-slate-600 leading-snug"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  and Fertility Services
                </span>
              </div>
            </div>

            {/* Subtle Divider between logo/brand and social icons */}
            <div className="hidden lg:block w-px h-9 bg-slate-200" />

            {/* Social Media Icons - Compact height with wide generous gap on mobile */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-4 text-xs sm:text-sm text-slate-600 font-medium py-0.5">
              
              {/* Facebook */}
              <a
                href={clinicInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#3b5998] transition-colors group p-0.5"
                aria-label="Facebook"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform shadow-xs">
                  f
                </span>
                <span className="hidden sm:inline font-semibold text-slate-700 group-hover:text-[#3b5998]">Facebook</span>
              </a>

              <span className="hidden sm:inline text-slate-300 select-none text-sm">/</span>

              {/* Instagram */}
              <a
                href={clinicInfo.socialLinks.instagram || "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#E4405F] transition-colors group p-0.5"
                aria-label="Instagram"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <span className="hidden sm:inline font-semibold text-slate-700 group-hover:text-[#E4405F]">Instagram</span>
              </a>

              <span className="hidden sm:inline text-slate-300 select-none text-sm">/</span>

              {/* Twitter / X */}
              <a
                href={clinicInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#1da1f2] transition-colors group p-0.5"
                aria-label="Twitter"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs group-hover:scale-110 transition-transform shadow-xs">
                  𝕏
                </span>
                <span className="hidden sm:inline font-semibold text-slate-700 group-hover:text-[#1da1f2]">Twitter</span>
              </a>

              <span className="hidden sm:inline text-slate-300 select-none text-sm">/</span>

              {/* LinkedIn */}
              <a
                href={clinicInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#0077b5] transition-colors group p-0.5"
                aria-label="LinkedIn"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs group-hover:scale-110 transition-transform shadow-xs">
                  in
                </span>
                <span className="hidden sm:inline font-semibold text-slate-700 group-hover:text-[#0077b5]">Linkedin</span>
              </a>

            </div>

          </div>

          {/* Copyright strip with designer credit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-center text-xs text-slate-400 pt-2 sm:pt-2.5 border-t border-slate-100 w-full">
            <p>
              &copy; {new Date().getFullYear()} {clinicInfo.doctorName} - Women's Healthcare &amp; Fertility Care.
            </p>
            <p className="text-slate-500 font-medium text-[11px] sm:text-xs">
              Designed &amp; Developed by <span className="font-semibold text-[#0B5DA7]">Shree Krishna Digital Marketing</span>
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
