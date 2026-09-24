import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonialsData.js';

/**
 * Patient Reviews & Testimonials Carousel Slider
 */
export default function PatientTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds (3000ms) smoothly from right to left
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="bg-[#F9FAFC] pt-16 lg:pt-20 pb-0 relative overflow-hidden">
      
      {/* Background Subtle Dot Pattern */}
      <div 
        className="absolute top-6 left-10 w-72 h-48 pointer-events-none opacity-20 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />
      <div 
        className="absolute top-1/2 right-12 w-64 h-48 pointer-events-none opacity-15 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-5">
          
          {/* Left Column (~70% Width) - Bracketed Testimonial Carousel */}
          <div 
            className="w-full lg:w-[70%] relative py-3 flex flex-col items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Outer Slider Wrapper */}
            <div className="relative w-full px-2 sm:px-4">
              
              {/* Left Navigation Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 z-20 text-[#222B40] hover:text-[#209BE3] p-1 transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95"
              >
                <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Navigation Arrow */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute -right-5 sm:-right-8 top-1/2 -translate-y-1/2 z-20 text-[#222B40] hover:text-[#209BE3] p-1 transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95"
              >
                <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Overflow Hidden Track */}
              <div className="overflow-hidden w-full py-1">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialsData.map((story) => (
                    <div
                      key={story.id}
                      className="w-full shrink-0 flex items-center justify-center px-0 select-none"
                    >
                      {/* Left Large Arrow Curly Bracket */}
                      <div className="shrink-0 h-[270px] sm:h-[330px] md:h-[370px] flex items-center justify-center">
                        <img
                          src="/images/testimonial/shape/01.png"
                          alt="{"
                          className="h-full w-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(32,155,227,0.15)]"
                          draggable="false"
                        />
                      </div>

                      {/* Middle Content Stack */}
                      <div className="flex-1 px-0 sm:px-1 md:px-2 flex flex-col items-center text-center max-w-xl lg:max-w-2xl">
                        
                        {/* Patient Avatar with Speech Bubble Quote Badge */}
                        <div className="relative mb-3">
                          <div className="w-16 h-16 sm:w-19 sm:h-19 rounded-full border-2 border-[#209BE3] p-0.5 shadow-md bg-white overflow-hidden">
                            <img
                              src={story.avatar}
                              alt={story.name}
                              className="w-full h-full object-cover rounded-full select-none pointer-events-none"
                            />
                          </div>
                          
                          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#209BE3] text-white flex items-center justify-center shadow-sm">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                        </div>

                        {/* Review Text */}
                        <p className="text-slate-600 text-xs sm:text-sm md:text-[15.5px] leading-relaxed italic max-w-lg lg:max-w-xl font-normal min-h-[75px] sm:min-h-[85px] flex items-center justify-center px-0">
                          "{story.review}"
                        </p>

                        {/* Patient Name & Details */}
                        <div className="mt-2.5 px-0">
                          <h4 className="text-sm sm:text-base font-bold text-[#222B40] tracking-tight">
                            {story.name}
                          </h4>
                          <p className="text-xs text-[#0B5DA7] font-semibold mt-0.5">
                            {story.role}
                          </p>
                        </div>

                        {/* 5-Star Rating */}
                        <div className="flex items-center justify-center gap-1 mt-2.5">
                          {[...Array(story.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                      </div>

                      {/* Right Large Arrow Curly Bracket */}
                      <div className="shrink-0 h-[270px] sm:h-[330px] md:h-[370px] flex items-center justify-center">
                        <img
                          src="/images/testimonial/shape/02.png"
                          alt="}"
                          className="h-full w-auto object-contain select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(32,155,227,0.15)]"
                          draggable="false"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-7 bg-[#0B5DA7]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right Column (~32% Width) - Doctor Cutout */}
          <div className="w-full lg:w-[32%] flex items-end justify-center lg:justify-end self-end pt-2 lg:pt-0">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md w-full flex justify-center lg:justify-end">
              <img
                src="/images/dr.sakshi.png"
                alt="Dr. Sakshi Naik - Senior Gynecologist & Fertility Specialist"
                className="max-h-[460px] sm:max-h-[520px] lg:max-h-[580px] w-auto object-contain select-none filter drop-shadow-sm pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Logo Blue & Pink Accent Border Line */}
      <div className="w-full h-1.5 flex mt-4 sm:mt-6">
        <div className="w-1/2 bg-[#0B5DA7]" />
        <div className="w-1/2 bg-[#E94E9A]" />
      </div>

    </section>
  );
}
