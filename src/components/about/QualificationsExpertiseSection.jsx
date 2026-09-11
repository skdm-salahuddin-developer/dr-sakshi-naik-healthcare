import React from 'react';

/**
 * Section: Why Choose Dr. Sakshi Naik / Surgical & Academic Excellence
 * Replicates the exact style and 45/55 ratio of DoctorPatientCareSection with Image on LEFT and Content on RIGHT.
 */
export default function QualificationsExpertiseSection({ onBookAppointment, className = '' }) {
  const whyChooseCredentials = [
    {
      title: '15+ Years Clinical Excellence',
      detail: 'MBBS, MS (OB-GYN) with rigorous surgical fellowship training and thousands of safe deliveries.',
    },
    {
      title: 'Advanced Reproductive Medicine',
      detail: 'Fellowship-trained (FIRM) specialist offering ethical, individualized IVF & assisted conception care.',
    },
    {
      title: 'Minimally Invasive Laparoscopy',
      detail: 'Diploma in Advanced Laparoscopy (FMAS) providing day-care precision and faster, painless recovery.',
    },
    {
      title: 'Patient-Centric Partnership',
      detail: 'Active member of FOGSI & IMS dedicated to empathetic guidance, comfort, and transparent diagnosis.',
    },
  ];

  return (
    <section className={`bg-white border-b border-gray-100 relative overflow-hidden ${className || 'py-16 lg:py-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Split: Image on LEFT (~45%), Content on RIGHT (~55%) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column (~45% Width) - Image Frame & Floating Experience Badge */}
          <div className="w-full lg:w-[45%] relative max-w-lg mx-auto lg:max-w-none order-2 lg:order-1">
            {/* Subtle Dot Pattern */}
            <div 
              className="absolute -top-6 -left-6 w-48 h-48 pointer-events-none opacity-25 bg-repeat -z-10"
              style={{ backgroundImage: "url('/images/about/pattan.png')" }}
            />

            {/* Rounded Clinical Image */}
            <div className="relative rounded-md overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img
                src="/images/care/treatment-clinical-hd.jpg"
                alt="Why Choose Our Medical Excellence - Surgical & Academic Excellence"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover select-none"
                loading="lazy"
              />
            </div>

            {/* Floating Experience Card - Translucent Glassmorphism with Low White Opacity */}
            <div 
              className="absolute -bottom-6 sm:bottom-6 -right-3 sm:-right-7 bg-white/55 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-4 border-l-4 border-[#0B5DA7] border border-white/60 max-w-xs z-10 animate-in fade-in"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/care/icon/01.png"
                  alt="Clinical Experience Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#0B5DA7] tracking-tight leading-none mb-1">
                  15+ <span className="text-xs font-bold text-black uppercase tracking-wide">Years of</span>
                </h3>
                <p className="text-xs text-black font-semibold leading-tight">
                  Excellence in Surgical Care
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (~55% Width) - Content & Why Choose Us Highlights */}
          <div className="w-full lg:w-[55%] text-left order-1 lg:order-2">
            <span 
              className="block text-[#0B5DA7] font-bold text-lg md:text-xl mb-1.5 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Why Choose Our Medical Excellence
            </span>

            <h2 
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#222B40] leading-tight mb-6 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Surgical &amp; Academic Excellence,{' '}
              <span className="text-[#E94E9A]">Decades of Trust</span>
            </h2>

            <p 
              className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 font-normal"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Choosing our clinic means trusting in specialized surgical fellowships, cutting-edge evidence-based care, and dedicated personal warmth across every stage of your healthcare journey.
            </p>

            {/* Why Choose Us Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
              {whyChooseCredentials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#222B40]"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  <svg className="w-4 h-4 text-[#E94E9A] shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div>
                    <span className="block font-bold text-[#222B40] leading-snug">{item.title}</span>
                    <span className="block text-xs text-slate-500 font-normal leading-relaxed mt-0.5">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            {onBookAppointment && (
              <button
                type="button"
                onClick={onBookAppointment}
                className="bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2 cursor-pointer"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <span>GET APPOINTMENTS</span>
                <span className="text-base leading-none font-black">&raquo;</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
