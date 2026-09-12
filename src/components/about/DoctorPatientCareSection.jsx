import React from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';

/**
 * About Doctor & Patient Care Philosophy Section
 * "Welcome To Dr. Sakshi Naik / Setting The Standards in Women’s & Maternal Care"
 */
export default function DoctorPatientCareSection({ onBookAppointment, className = '' }) {
  const checklist = [
    'Complete Maternity Care',
    'High-Risk Pregnancy Support',
    'Advanced Fertility & IVF',
    'Minimally Invasive Laparoscopy',
    'Personalised Counselling',
    '24/7 Labour & Delivery Guidance',
  ];

  return (
    <section className={`bg-white border-b border-gray-100 relative overflow-hidden ${className || 'py-16 lg:py-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Split */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column (~54% Width) - Introduction & Approach */}
          <div className="w-full lg:w-[54%] text-left">
            <span 
              className="block text-[#0B5DA7] font-bold text-lg md:text-xl mb-1.5 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Welcome To Our Maternity &amp; Fertility Clinic
            </span>

            <h2 
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#222B40] leading-tight mb-6 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Setting The Standards in{' '}
              <span className="text-[#E94E9A]">Women’s &amp; Maternal Care</span>
            </h2>

            <p 
              className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 font-normal"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {clinicInfo.doctorName} offers dedicated obstetric, fertility, and gynaecological care focused on compassion, medical precision, and patient empowerment. From pre-pregnancy planning and high-risk maternity management to advanced reproductive therapies and minimally invasive surgeries, every consultation is designed around personalized attention, comfort, and safety.
            </p>

            {/* 6-Point Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
              {checklist.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#222B40]"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  <svg className="w-4 h-4 text-[#E94E9A] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={onBookAppointment}
              className="bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2 cursor-pointer"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <span>CONSULTATION DETAILS</span>
              <span className="text-base leading-none font-black">&raquo;</span>
            </button>
          </div>

          {/* Right Column (~46% Width) - Full Height with Zero Left/Right Cropping */}
          <div className="w-full lg:w-[46%] relative max-w-lg mx-auto lg:max-w-none">
            <div 
              className="absolute -top-6 -right-6 w-48 h-48 pointer-events-none opacity-25 bg-repeat -z-10"
              style={{ backgroundImage: "url('/images/about/pattan.png')" }}
            />

            <div className="relative rounded-md overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img
                src="/images/care/details/g3-tall.png"
                alt="Doctor & Patient Care Consultation"
                className="w-full h-[380px] sm:h-[430px] lg:h-[460px] object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* Floating Experience Card - Translucent Glassmorphism with Low White Opacity */}
            <div 
              className="absolute -bottom-6 sm:bottom-6 -left-3 sm:-left-7 bg-white/55 backdrop-blur-md p-4 sm:p-5 rounded-md shadow-md flex items-center gap-4 border-l-4 border-[#E94E9A] border border-white/60 max-w-xs z-10 animate-in fade-in"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/icons/medical-symbol.png"
                  alt="Hospital Experience Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#0B5DA7] tracking-tight leading-none mb-1">
                  12+ <span className="text-xs font-bold text-black uppercase tracking-wide">Years of</span>
                </h3>
                <p className="text-xs text-black font-semibold leading-tight">
                  Excellence in Women's Healthcare
                </p>
              </div>
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}
