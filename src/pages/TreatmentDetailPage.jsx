import React, { useState, useEffect, useRef } from 'react';
import { treatmentsData } from '../data/treatmentsData.js';
import { clinicInfo } from '../data/clinicInfo.js';

/**
 * Dedicated Clinical Treatment Detail Page
 * Layout strictly matches the reference template format:
 * - Breadcrumb Banner
 * - 2-Column Responsive Layout:
 *   - LEFT SIDEBAR (~32% Width):
 *     1. "Our All Departments" (List of all 11 treatments with active state & chevrons)
 *     2. "Book Appointment" Form (Replacing opening hours and contact cards)
 *   - RIGHT MAIN CONTENT AREA (~68% Width):
 *     1. Top Hero Treatment Photograph
 *     2. Useful info and Health Tips (Treatment Overview)
 *     3. Situations Where This Care is Recommended
 *     4. Feature Clinical Image & Key Benefits (Heart check-markers grid)
 *     5. Frequently Asked Questions (Interactive Accordion)
 *     6. Book Appointment CTA Button
 */
export default function TreatmentDetailPage({
  slug,
  onNavigateHome,
  onNavigateTreatment,
  onBookAppointment,
}) {
  const [currentSlug, setCurrentSlug] = useState(slug || 'maternity-care');
  const dateInputRef = useRef(null);

  useEffect(() => {
    if (slug) {
      setCurrentSlug(slug);
    }
  }, [slug]);

  const treatment =
    treatmentsData.find((t) => t.slug === currentSlug) ||
    treatmentsData.find((t) => t.slug === slug) ||
    treatmentsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  // Interactive FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Left Sidebar Appointment Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    selectedTreatment: treatment.title,
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep selected treatment in sync when changing active slug
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      selectedTreatment: treatment.title,
    }));
  }, [treatment.title]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Page Breadcrumb Hero Banner (Standard Design System Format) */}
      <section className="relative w-full bg-[#EBF1EF] border-b border-gray-200/60 overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[390px] flex items-center">
        {/* Full-Width Right-Centered Hero Image with soft blend */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img
            src={treatment.bannerImage || '/images/service/treatment-banner-hd.jpg'}
            alt={`${treatment.title}`}
            className="w-full h-full object-cover object-right sm:object-[85%_center] select-none opacity-100"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EBF1EF] via-[#EBF1EF]/70 to-transparent w-full sm:w-3/5 md:w-1/2 pointer-events-none" />
        </div>

        {/* Left Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-xl py-9 sm:py-12 lg:py-14">
            <h1
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#222B40] tracking-tight leading-tight mb-2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {treatment.title.split(' ')[0]}{' '}
              <span className="text-[#E94E9A]">
                {treatment.title.split(' ').slice(1).join(' ')}
              </span>
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
                Treatments
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Main Department Detail Layout (Left Sidebar + Right Content Area) */}
      <section className="py-14 sm:py-18 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            
            {/* ================= LEFT SIDEBAR (~32% Width) ================= */}
            <aside className="w-full lg:w-[32%] shrink-0 space-y-8 text-left">
              
              {/* CARD 1: Our Clinical Treatments */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-[#0B5DA7] overflow-hidden">
                <div className="bg-[#0B5DA7] text-white px-5 py-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Our Clinical Treatments
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">
                  {treatmentsData.map((item) => {
                    const isActive = item.slug === treatment.slug;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => {
                          setCurrentSlug(item.slug);
                          if (onNavigateTreatment) {
                            onNavigateTreatment(item.slug);
                          }
                        }}
                        className={`w-full text-left px-5 py-3.5 flex items-center justify-between transition-all duration-300 ease-out group cursor-pointer text-[13.5px] relative overflow-hidden ${
                          isActive
                            ? 'bg-[#eaf5fc] text-[#0B5DA7] font-bold shadow-xs'
                            : 'text-[#333333] hover:text-[#0B5DA7] hover:bg-[#eaf5fc]/70 font-medium'
                        }`}
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        <span className="inline-block truncate pr-3 transition-transform duration-300 ease-out group-hover:translate-x-3">
                          {item.title}
                        </span>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span
                            className={`text-sm font-black transition-all duration-300 ease-out ${
                              isActive
                                ? 'text-[#0B5DA7] translate-x-0.5'
                                : 'text-gray-400 group-hover:text-[#E94E9A] group-hover:translate-x-1.5'
                            }`}
                          >
                            &raquo;
                          </span>
                          {/* Wide 10px Right-side Accent Indicator Bar (Active Blue or Hover Pink) */}
                          <span
                            className={`w-2.5 self-stretch -mr-5 -my-3.5 transition-all duration-300 ease-out ${
                              isActive
                                ? 'bg-[#0B5DA7] opacity-100'
                                : 'bg-[#E94E9A] opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CARD 2: Appointment Enquiry Form */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-[#E94E9A] overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#0B5DA7] to-[#094b87] text-white px-5 py-4 flex items-center gap-3 border-b-2 border-[#E94E9A]">
                  <svg className="w-6 h-6 text-[#E94E9A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Book An Appointment
                  </h3>
                </div>

                {/* Form Body */}
                <div className="p-5">
                  {formSubmitted ? (
                    <div className="text-center py-6 animate-in fade-in">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-base font-bold text-[#222B40] mb-1">
                        Enquiry Submitted!
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Thank you, <strong className="text-[#0B5DA7]">{formData.name}</strong>. Our clinical team will reach out to confirm your consultation for <strong className="text-[#222B40]">{formData.selectedTreatment}</strong>.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            date: '',
                            selectedTreatment: treatment.title,
                            message: '',
                          });
                        }}
                        className="text-xs font-bold text-[#0B5DA7] hover:underline"
                      >
                        Book Another Consultation
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800"
                        />
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Date
                        </label>
                        <div
                          onClick={() => {
                            try {
                              dateInputRef.current?.showPicker?.();
                            } catch (_) {}
                          }}
                          className="relative flex items-center cursor-pointer group"
                        >
                          <input
                            ref={dateInputRef}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            onClick={(e) => {
                              try {
                                e.target.showPicker();
                              } catch (_) {}
                            }}
                            className="w-full pl-3.5 pr-10 py-2.5 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800 cursor-pointer font-medium [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                          />
                          <div className="absolute right-3 text-[#0B5DA7] group-hover:text-[#E94E9A] transition-colors pointer-events-none">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                              <circle cx="8.5" cy="14.5" r="1" fill="currentColor" />
                              <circle cx="12" cy="14.5" r="1" fill="currentColor" />
                              <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Department / Treatment Selector */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Department / Treatment
                        </label>
                        <select
                          name="selectedTreatment"
                          value={formData.selectedTreatment}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800"
                        >
                          {treatmentsData.map((t) => (
                            <option key={t.slug} value={t.title}>
                              {t.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Notes / Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Message / Concerns
                        </label>
                        <textarea
                          rows="3"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any specific symptoms or questions..."
                          className="w-full px-3.5 py-2 text-xs bg-[#F9FAFC] border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] focus:bg-white text-slate-800 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative group overflow-hidden w-full bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase tracking-wider py-3.5 pl-4 pr-7 rounded-sm shadow-sm transition-all duration-200 hover:shadow active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        <span>{isSubmitting ? 'PROCESSING...' : 'SUBMIT APPOINTMENT ENQUIRY'}</span>
                        <span className="text-sm font-black leading-none transition-transform duration-200 group-hover:translate-x-1">&raquo;</span>
                        {/* Wide Right-side Hover Accent Bar */}
                        <span className="absolute top-0 right-0 bottom-0 w-2.5 bg-[#E94E9A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </aside>

            {/* ================= RIGHT MAIN CONTENT AREA (~68% Width) ================= */}
            <main className="w-full lg:w-[68%] space-y-8 text-left">
              
              {/* 1. Large Top Hero Treatment Photograph */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 relative group">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222B40]/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 2. Treatment Overview & Clinical Guidance */}
              <div>
                <h2
                  className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#222B40] leading-tight mb-3 tracking-tight"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Treatment Overview &amp;{' '}
                  <span className="text-[#E94E9A]">Clinical Guidance</span>
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mb-4" />
                <p
                  className="text-sm sm:text-[15px] md:text-base text-slate-600 leading-relaxed mb-4 font-normal"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {treatment.description}
                </p>
                <p
                  className="text-sm sm:text-[15px] md:text-base text-slate-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {treatment.overview}
                </p>
              </div>

              {/* 3. Our Treatment Solutions & Recommended Care */}
              <div className="pt-2">
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#222B40] tracking-tight mb-3"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Our Treatment Solutions &amp; Recommended Care
                </h3>
                <p
                  className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 font-normal"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Every woman's health journey is unique. Here are common situations and symptoms where consulting Dr. Sakshi Naik can help you find clear answers, peace of mind, and gentle care:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {(treatment.situationsRecommended || treatment.highlights).map((item, idx) => {
                    const text = typeof item === 'object' && item?.text ? item.text : item;
                    const iconSrc = typeof item === 'object' && item?.icon ? item.icon : '/images/icons/check.png';
                    return (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl bg-[#F9FAFC] hover:bg-[#F0F6FC] transition-colors border border-slate-100 flex items-center gap-3.5 sm:gap-4"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                          <img
                            src={iconSrc}
                            alt=""
                            className="w-full h-full object-contain select-none"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs sm:text-[13.5px] font-medium text-[#222B40] leading-snug">
                          {text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Single Clinical Image Above Benefits */}
              <div className="pt-2">
                <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 mb-6 bg-slate-50 relative group">
                  <img
                    src={treatment.clinicalImage || '/images/care/details/maternity-care-clinical.jpg'}
                    alt={`${treatment.title} Clinical Consultation`}
                    className="w-full h-[240px] sm:h-[280px] object-cover object-center group-hover:scale-101 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222B40]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Key Benefits & Treatment Advantages */}
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#222B40] tracking-tight mb-3"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Key Benefits &amp; Treatment Advantages
                </h3>
                <p
                  className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 font-normal"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  We focus on early detection, gentle treatments, and clear advice so you can feel healthy, confident, and supported at every visit:
                </p>
                <div className="bg-[#F9FAFC] rounded-xl p-5 sm:p-6 border border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {(treatment.keyBenefits || treatment.bullets).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#222B40]">
                        <svg className="w-4 h-4 text-[#E94E9A] shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. Book Appointment Action Bar */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="relative group overflow-hidden bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase pl-8 pr-10 py-4 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md active:scale-98 flex items-center gap-3 cursor-pointer"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  <span>BOOK APPOINTMENT FOR THIS TREATMENT</span>
                  <span className="text-base leading-none font-black transition-transform duration-200 group-hover:translate-x-1.5">&raquo;</span>
                  {/* Wide 10px Right-side Hover Accent Bar */}
                  <span className="absolute top-0 right-0 bottom-0 w-2.5 bg-[#E94E9A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              </div>

            </main>

          </div>
        </div>
      </section>

      {/* 3. Full-Width Frequently Asked Questions Section */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F9FAFC] border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span
                className="block text-[#0B5DA7] font-bold text-xs sm:text-sm uppercase tracking-wider mb-1.5"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Got Questions? We Have Answers
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222B40] tracking-tight mb-3"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Frequently Asked <span className="text-[#E94E9A]">Questions</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto rounded-full mb-3" />
              <p
                className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Here are simple, helpful answers to common questions our patients ask about {treatment.title}.
              </p>
            </div>

            {/* Wide Full-Width Accordion List */}
            <div className="max-w-4xl mx-auto space-y-3.5">
              {treatment.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span
                        className="text-sm sm:text-base font-bold text-[#222B40] pr-4 leading-snug"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-200 ${
                          isOpen
                            ? 'bg-[#0B5DA7] text-white rotate-180'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F9FAFC]/60 animate-in fade-in"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
