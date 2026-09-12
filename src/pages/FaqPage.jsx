import React, { useState } from 'react';
import { faqsData } from '../data/faqsData.js';
import { clinicInfo } from '../data/clinicInfo.js';

/**
 * Dedicated Frequently Asked Questions (FAQ) Page
 * Follows clinic brand guidelines, breadcrumb hero architecture,
 * and warm patient-first design.
 */
export default function FaqPage({ onNavigateHome, onBookAppointment }) {
  const [openFaqId, setOpenFaqId] = useState('faq-preg-1');

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Page Breadcrumb Hero Banner (Standard Design System Format) */}
      <section className="relative w-full bg-[#EBF1EF] border-b border-gray-200/60 overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[390px] flex items-center">
        {/* Full-Width Right-Centered Hero Banner Image with soft blend */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/faq-banner-hd.jpg"
            alt="Frequently Asked Questions"
            className="w-full h-full object-cover object-right sm:object-[85%_35%] select-none opacity-100"
            loading="eager"
          />
          {/* Soft opacity blend strictly on the text area, leaving the rest of the image completely crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EBF1EF] via-[#EBF1EF]/75 to-transparent w-[65%] sm:w-3/5 md:w-1/2 pointer-events-none" />
        </div>

        {/* Left Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-md sm:max-w-lg py-9 sm:py-12 lg:py-14">
            <h1
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#222B40] tracking-tight leading-tight mb-2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Frequently Asked <span className="text-[#E94E9A]">Questions</span>
            </h1>

            {/* Brand Blue-to-Pink Accent Bar */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mb-3" />

            {/* Breadcrumb Navigation Trail */}
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
                FAQ
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Main FAQ Content Area */}
      <section className="py-14 sm:py-18 lg:py-22">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Introduction */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222B40] tracking-tight mb-3"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              How Can We <span className="text-[#E94E9A]">Help You?</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto rounded-full mb-4" />
            <p
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Find straightforward, reassuring answers to the most common questions our patients ask about pregnancy, fertility, periods, surgeries, and clinic consultations.
            </p>
          </div>

          {/* FAQ Accordion List (Top 6 Essential Questions) */}
          <div className="space-y-3.5">
            {faqsData.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-md overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? 'border-[#0B5DA7]/40 bg-white shadow-sm ring-1 ring-[#0B5DA7]/10'
                      : 'border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#0B5DA7] text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <h3
                        className="text-sm sm:text-base font-bold text-[#222B40] leading-snug"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#E94E9A] text-white rotate-180'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-[14px] text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F9FAFC]/60 animate-in fade-in"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      <p className="font-normal">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Reassuring Consultation Callout Card */}
          <div className="mt-14 sm:mt-18 bg-gradient-to-r from-[#0B5DA7] to-[#094b87] rounded-md p-6 sm:p-10 text-white shadow-md relative overflow-hidden">
            {/* Soft background shape accents */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 rounded-full bg-[#E94E9A]/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <h3
                  className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight mb-2 leading-snug"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Still Have Questions? Consult With Dr. Sakshi Naik
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                  Every health situation is personal. Dr. Sakshi Naik provides unhurried, gentle consultations where you can discuss your symptoms in complete confidence.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="bg-[#E94E9A] hover:bg-[#d43f88] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2 cursor-pointer mx-auto md:mx-0"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  <span>BOOK AN APPOINTMENT</span>
                  <span className="text-sm font-black leading-none">&raquo;</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
