import React, { useState, useEffect } from 'react';
import { blogArticles } from '../../data/blogData.js';

/**
 * Maternity & Health Insights Blog Feed Slider
 */
export default function BlogNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen for 1-card vs 2-card calculation
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isMobile ? blogArticles.length - 1 : blogArticles.length - 2;

  // Auto-slide every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="blog" className="bg-white py-16 lg:py-24 relative overflow-hidden border-b border-gray-100">
      
      {/* Background Subtle Dot Pattern */}
      <div 
        className="absolute top-8 left-0 w-80 sm:w-96 h-64 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />
      <div 
        className="absolute bottom-8 right-0 w-80 sm:w-96 h-64 pointer-events-none opacity-15 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="block text-[#0B5DA7] text-xl sm:text-2xl font-bold tracking-tight">
            Insights &amp; News
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] mt-1 tracking-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Expert Advice &amp; <span className="text-[#E94E9A]">Maternity Care Guides</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous articles"
            className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-20 text-[#222B40] hover:text-[#73B737] p-1 transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next articles"
            className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-20 text-[#222B40] hover:text-[#73B737] p-1 transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Overflow Track */}
          <div className="overflow-hidden py-2 px-0">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
              }}
            >
              {blogArticles.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 shrink-0 px-1.5 sm:px-2"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
                    
                    {/* Top Banner Thumbnail Image */}
                    <div className="relative overflow-hidden h-56 sm:h-64 w-full bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Body Content */}
                    <div className="px-3 sm:px-4 py-4 sm:py-5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Horizontal Metadata Row */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs text-slate-500 mb-3 font-medium">
                          <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{item.date}</span>
                          </div>

                          <span className="text-slate-300">•</span>

                          <div className="flex items-center gap-1.5 text-slate-600">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{item.author}</span>
                          </div>

                          <span className="text-slate-300">•</span>

                          <div className="flex items-center gap-1.5 text-slate-500">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{item.comments}</span>
                          </div>
                        </div>

                        {/* Article Title */}
                        <h3 className="text-base sm:text-lg font-bold text-[#222B40] hover:text-[#0B5DA7] cursor-pointer mb-2.5 line-clamp-2 leading-snug transition-colors">
                          {item.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-3 mb-5 leading-relaxed font-normal">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Read More Action Button */}
                      <div>
                        <a
                          href="#blog"
                          className={`inline-flex items-center gap-1.5 text-white font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-sm transition-all duration-200 ${item.hoverBg}`}
                          style={{ backgroundColor: item.accentColor }}
                        >
                          <span>READ MORE</span>
                          <span className="text-xs font-black leading-none">&raquo;</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#0B5DA7]'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Centered CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>VIEW ALL BLOG PAGE</span>
            <span className="text-sm font-black leading-none">&raquo;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
