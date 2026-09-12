import React, { useState, useRef } from 'react';
import { clinicInfo } from '../data/clinicInfo.js';
import { treatmentsData } from '../data/treatmentsData.js';

/**
 * Dedicated Simple Contact Page for Dr. Sakshi Naik's Clinic
 * Contains only:
 * 1. Breadcrumb Hero Banner
 * 2. Contact Details (with icons from /images/icons/) & Simple Contact Form
 * 3. Location Map
 */
export default function ContactPage({ onNavigateHome }) {
  const dateInputRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    selectedLocation: clinicInfo.locations[0].title,
    selectedTreatment: 'Maternity Care',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const contactDetails = [
    {
      id: 'location',
      icon: '/images/icons/placeholder.png',
      title: 'Our Location',
      detail1: `${clinicInfo.address.line1}, Goregaon East`,
      detail2: 'Mumbai, Maharashtra - 400097',
    },
    {
      id: 'phone',
      icon: '/images/icons/phone-call.png',
      title: 'Phone',
      detail1: clinicInfo.phones.formattedPrimary,
      detail2: clinicInfo.email,
      href: `tel:${clinicInfo.phones.primaryRaw}`,
    },
    {
      id: 'emergency',
      icon: '/images/icons/ambulance.png',
      title: '24/7 Emergency Support',
      detail1: clinicInfo.phones.formattedPrimary,
      detail2: 'Immediate maternity & care support',
      href: `tel:${clinicInfo.phones.primaryRaw}`,
      isEmergency: true,
    },
    {
      id: 'timings',
      icon: '/images/icons/staff.png',
      title: 'Clinic Timings',
      detail1: `${clinicInfo.timings.opdDays}: ${clinicInfo.timings.opdHours}`,
      detail2: `Sunday: ${clinicInfo.timings.sunday}`,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Page Breadcrumb Hero Banner (Standard Design System Format) */}
      <section className="relative w-full bg-[#EBF1EF] border-b border-gray-200/60 overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[390px] flex items-center">
        {/* Full-Width Right-Centered Hero Banner Image with soft blend */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/about/contact-banner-hd.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover object-right sm:object-[85%_center] select-none opacity-100"
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
              Get In <span className="text-[#E94E9A]">Touch</span>
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
                Contact
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Simple Contact Details & Message Form Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
            
            {/* LEFT: Contact Details with Icons */}
            <div className="w-full lg:w-[42%] text-left space-y-4">
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#222B40] tracking-tight mb-2"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Reach Out <span className="text-[#E94E9A]">To Us</span>
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mb-4" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Have a question or looking to book your appointment? Contact our clinic directly through phone, email, or visit our location.
                </p>
              </div>

              {/* 4 Clean Contact Detail Cards */}
              <div className="space-y-3.5">
                {contactDetails.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl bg-[#F9FAFC] border transition-colors flex items-center gap-4 ${
                      item.isEmergency
                        ? 'border-[#E94E9A]/40 bg-[#fdf2f7]/50'
                        : 'border-slate-100 hover:border-[#0B5DA7]/30'
                    }`}
                  >
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain select-none"
                      />
                    </div>
                    <div className="text-left">
                      <h4
                        className="text-sm font-bold text-[#222B40] mb-0.5"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-xs sm:text-[13px] font-semibold hover:underline block ${
                            item.isEmergency ? 'text-[#E94E9A]' : 'text-[#0B5DA7]'
                          }`}
                        >
                          {item.detail1}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-[13px] text-slate-700 font-medium">
                          {item.detail1}
                        </p>
                      )}
                      <p className="text-[11.5px] text-slate-500 leading-snug">
                        {item.detail2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Simple Contact Form */}
            <div className="w-full lg:w-[58%] text-left bg-[#F9FAFC] p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3
                className="text-xl sm:text-2xl font-bold text-[#222B40] tracking-tight mb-2"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Consultation &amp; <span className="text-[#E94E9A]">Enquiry Form</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
                Please fill out the form below. Our team will get back to you promptly to confirm your consultation.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-200 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#222B40] mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Thank you, <strong className="text-[#0B5DA7]">{formData.name}</strong>. Our clinical team will contact you at <strong className="text-[#222B40]">{formData.phone}</strong> shortly regarding <strong className="text-[#222B40]">{formData.selectedTreatment}</strong> at <strong className="text-[#0B5DA7]">{formData.selectedLocation}</strong>.
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
                        selectedLocation: clinicInfo.locations[0].name,
                        selectedTreatment: 'Maternity Care',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-[#0B5DA7] hover:underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800"
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
                        placeholder="091362 34368"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800"
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
                          className="w-full pl-3.5 pr-10 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800 cursor-pointer font-medium [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
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
                  </div>

                  {/* Preferred Location Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Location
                    </label>
                    <select
                      name="selectedLocation"
                      value={formData.selectedLocation}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800 font-medium"
                    >
                      {clinicInfo.locations.map((loc) => (
                        <option key={loc.id} value={loc.title}>
                          {loc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Treatment Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Department / Treatment
                    </label>
                    <select
                      name="selectedTreatment"
                      value={formData.selectedTreatment}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800 font-medium"
                    >
                      {treatmentsData.map((t) => (
                        <option key={t.slug} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Symptoms (Optional)
                    </label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions, symptoms, or timing preferences..."
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B5DA7] text-slate-800 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group overflow-hidden w-full bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase tracking-wider py-3.5 pl-4 pr-7 rounded-sm shadow-sm transition-all duration-200 hover:shadow active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    <span>{isSubmitting ? 'PROCESSING...' : 'SEND CONSULTATION MESSAGE'}</span>
                    <span className="text-sm font-black leading-none transition-transform duration-200 group-hover:translate-x-1">&raquo;</span>
                    {/* Wide Right-side Hover Accent Bar */}
                    <span className="absolute top-0 right-0 bottom-0 w-2.5 bg-[#E94E9A] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Simple Addresses Section (No buttons, no extra badges) */}
      <section className="py-14 sm:py-16 bg-[#F9FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#222B40] tracking-tight leading-tight mb-2.5"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Our Clinic <span className="text-[#E94E9A]">Locations</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Find your nearest clinic location for consultations and appointments.
            </p>
          </div>

          {/* 3 Simple Address Cards - Clean, direct, no buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinicInfo.locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between text-left"
              >
                <div>
                  {/* Title: 1. Goregaon East, 2. Goregaon East, 3. Goregaon West */}
                  <h3
                    className="text-base sm:text-lg font-bold text-[#0B5DA7] mb-3 pb-2 border-b border-slate-100 tracking-tight"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {loc.title}
                  </h3>

                  {/* Address */}
                  <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed mb-4">
                    <p className="font-semibold text-slate-800">{loc.addressLine1}</p>
                    <p className="text-slate-600 mt-0.5">{loc.addressLine2}</p>
                    <p className="text-slate-500 mt-0.5">Mumbai, Maharashtra - {loc.pincode}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="pt-3 border-t border-slate-100 text-xs sm:text-[13px]">
                  <span className="text-slate-500 font-medium">Phone: </span>
                  <a
                    href={`tel:${loc.rawPhone}`}
                    className="font-bold text-[#222B40] hover:text-[#0B5DA7] transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Simple Clean Google Map (No buttons or switcher) */}
      <section className="w-full h-80 sm:h-96 lg:h-[420px] relative border-t border-slate-200">
        <iframe
          src={clinicInfo.mapEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Clinic Location Map"
        />
      </section>
    </div>
  );
}
