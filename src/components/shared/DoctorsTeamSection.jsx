import React, { useState } from 'react';
import { doctorsData } from '../../data/doctorsData.js';

/**
 * Medical Doctors Team Showcase Grid
 * Displays 2 primary doctors initially with a button to reveal the other team members.
 */
export default function DoctorsTeamSection({ onBookAppointment }) {
  const [showAll, setShowAll] = useState(false);
  const displayedDoctors = showAll ? doctorsData : doctorsData.slice(0, 2);

  return (
    <section id="doctors" className="bg-white py-16 lg:py-24 border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Subtle Dot Pattern */}
      <div 
        className="absolute top-8 left-0 w-80 sm:w-96 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />
      <div 
        className="absolute bottom-8 right-0 w-80 sm:w-96 h-64 pointer-events-none opacity-15 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="block text-[#0B5DA7] text-lg sm:text-xl font-bold tracking-tight mb-1">
            Who We Are
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] mt-1 tracking-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Meet Our <span className="text-[#E94E9A]">Professional Doctors</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Doctor Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {displayedDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col sm:flex-row items-stretch justify-between relative group"
            >
              {/* Geometric Watermark */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] text-[#209BE3] z-0"
                viewBox="0 0 450 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="45" cy="55" r="3.5" fill="currentColor" />
                <circle cx="140" cy="40" r="3" fill="currentColor" />
                <circle cx="110" cy="115" r="3.5" fill="currentColor" />
                <circle cx="210" cy="95" r="4" fill="currentColor" />
                <circle cx="65" cy="195" r="3" fill="currentColor" />
                <circle cx="165" cy="190" r="3.5" fill="currentColor" />
                <circle cx="260" cy="180" r="3" fill="currentColor" />
                <circle cx="120" cy="275" r="3.5" fill="currentColor" />
                <circle cx="225" cy="260" r="3" fill="currentColor" />
                <circle cx="330" cy="230" r="3.5" fill="currentColor" />
                <circle cx="350" cy="90" r="3" fill="currentColor" />
                <line x1="45" y1="55" x2="140" y2="40" stroke="currentColor" strokeWidth="0.75" />
                <line x1="45" y1="55" x2="110" y2="115" stroke="currentColor" strokeWidth="0.75" />
                <line x1="140" y1="40" x2="210" y2="95" stroke="currentColor" strokeWidth="0.75" />
                <line x1="110" y1="115" x2="210" y2="95" stroke="currentColor" strokeWidth="0.75" />
                <line x1="110" y1="115" x2="65" y2="195" stroke="currentColor" strokeWidth="0.75" />
                <line x1="65" y1="195" x2="165" y2="190" stroke="currentColor" strokeWidth="0.75" />
                <line x1="165" y1="190" x2="210" y2="95" stroke="currentColor" strokeWidth="0.75" />
                <line x1="165" y1="190" x2="260" y2="180" stroke="currentColor" strokeWidth="0.75" />
                <line x1="210" y1="95" x2="350" y2="90" stroke="currentColor" strokeWidth="0.75" />
                <line x1="260" y1="180" x2="350" y2="90" stroke="currentColor" strokeWidth="0.75" />
                <line x1="65" y1="195" x2="120" y2="275" stroke="currentColor" strokeWidth="0.75" />
                <line x1="120" y1="275" x2="225" y2="260" stroke="currentColor" strokeWidth="0.75" />
                <line x1="165" y1="190" x2="225" y2="260" stroke="currentColor" strokeWidth="0.75" />
                <line x1="225" y1="260" x2="330" y2="230" stroke="currentColor" strokeWidth="0.75" />
                <line x1="260" y1="180" x2="330" y2="230" stroke="currentColor" strokeWidth="0.75" />
              </svg>

              {/* Left Side: Details Column (~58%) */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between z-10 flex-1 min-w-0 sm:w-[58%]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#222B40] tracking-tight group-hover:text-[#0B5DA7] transition-colors">
                    {doc.name}
                  </h3>
                  {doc.designation ? (
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-500 mb-2 mt-0.5">
                      {doc.designation}
                    </p>
                  ) : (
                    <div className="h-1.5" />
                  )}
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mb-3 font-normal">
                    {doc.bio}
                  </p>

                  {/* Credential Key-Value Table */}
                  <div className="space-y-1 sm:space-y-1.5 text-xs sm:text-[13px] text-gray-600 border-t border-gray-100 pt-2.5">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-800 w-24 sm:w-26 shrink-0">Speciality</span>
                      <span className="mr-2 text-gray-400 font-semibold">:</span>
                      <span className="text-gray-600 leading-snug font-medium">{doc.speciality}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-gray-800 w-24 sm:w-26 shrink-0">Degrees</span>
                      <span className="mr-2 text-gray-400 font-semibold">:</span>
                      <span className="text-gray-600 leading-snug font-medium">{doc.degrees}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-gray-800 w-24 sm:w-26 shrink-0">Experience</span>
                      <span className="mr-2 text-gray-400 font-semibold">:</span>
                      <span className="text-gray-600 leading-snug font-medium">{doc.experience}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-gray-800 w-24 sm:w-26 shrink-0">Consultation</span>
                      <span className="mr-2 text-gray-400 font-semibold">:</span>
                      <span className="text-gray-600 leading-snug font-medium">{doc.consultation}</span>
                    </div>
                    <div className="flex items-center pt-0.5">
                      <span className="font-bold text-gray-800 w-24 sm:w-26 shrink-0">Follow us</span>
                      <span className="mr-2 text-gray-400 font-semibold">:</span>
                      <div className="flex items-center gap-2.5 text-xs">
                        <a href="#contact" aria-label="Facebook" className="text-[#1877F2] hover:scale-110 transition-transform">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="#contact" aria-label="Twitter" className="text-[#1DA1F2] hover:scale-110 transition-transform">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="#contact" aria-label="Instagram" className="text-[#E4405F] hover:scale-110 transition-transform">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View Profile Action Link */}
                <div className="mt-4 pt-1">
                  <a
                    href={doc.profileHref}
                    className={`inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold ${doc.linkColor} uppercase tracking-wider hover:underline transition-colors`}
                  >
                    <span>VIEW PROFILE</span>
                    <span className="text-sm font-black leading-none">&raquo;</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Doctor Portrait Cutout */}
              <div className="w-full sm:w-[42%] relative overflow-hidden flex items-end justify-center sm:justify-end z-10 bg-transparent pr-0 sm:pr-1 self-stretch">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-auto h-full max-h-[260px] sm:max-h-[290px] object-contain object-bottom sm:object-bottom-right group-hover:scale-105 transition-transform duration-500 select-none bg-transparent"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered CTA Button to toggle remaining doctors */}
        {doctorsData.length > 2 && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-sm hover:shadow-md active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>{showAll ? 'SHOW LESS DOCTORS' : 'VIEW ALL DOCTORS'}</span>
              <span className="text-sm font-black leading-none">{showAll ? '«' : '»'}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
