import React from 'react';

/**
 * QualificationsSection Component
 * Displays Dr. Sakshi Naik's academic foundation, medical degrees, and surgical fellowships
 * alongside a modern portrait of the doctor with theme badges.
 */
export default function QualificationsSection({ onBookAppointment, className = '' }) {
  const qualificationsList = [
    {
      id: '01',
      title: 'MBBS',
      subtitle: 'Bachelor of Medicine, Bachelor of Surgery',
    },
    {
      id: '02',
      title: 'MS — Obstetrics & Gynaecology',
      subtitle: 'Master of Surgery in Comprehensive Maternity & Women’s Health',
    },
    {
      id: '03',
      title: 'DNB — Obstetrics & Gynaecology',
      subtitle: 'Diplomate of National Board (National Board of Examinations)',
    },
    {
      id: '04',
      title: 'Fellowship in Minimal Access Surgery (FMAS)',
      subtitle: 'Advanced Laparoscopic & Hysteroscopic Operative Procedures',
    },
    {
      id: '05',
      title: 'Fellowship in Assisted Reproductive Techniques (ART)',
      subtitle: 'Specialized Protocols in Infertility Management, IUI & IVF / ICSI',
    },
  ];

  return (
    <section 
      id="qualifications"
      className={`bg-[#F9FAFC] border-b border-gray-100 relative overflow-hidden py-16 lg:py-24 ${className}`}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Headline Row - Centered 2 Lines Simple Wording */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="max-w-3xl mx-auto text-center">
            <span 
              className="block text-[#0B5DA7] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2"
            >
              Qualifications &amp; Training
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#222B40] leading-tight tracking-tight"
            >
              Expert Care for{' '}
              <span className="text-[#E94E9A]">Women’s &amp; Fertility Health</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mt-4 rounded-full mx-auto" />
          </div>
        </div>

        {/* 2-Column Responsive Layout: Left = Doctor Portrait (Full Height), Right = Qualifications Card */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">
          
          {/* Left Column (~46% Width) - Seamless Doctor Portrait (No Background Box, Merges Directly with Section) */}
          <div className="w-full lg:w-[46%] relative max-w-lg mx-auto lg:max-w-none flex flex-col justify-end">
            {/* Seamless Doctor Portrait without background - merges with #F9FAFC */}
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-0 flex items-end justify-center">
              <img
                src="/images/about/dr-sakshi-no-bg.png"
                alt="Dr. Sakshi Naik - Consultant Obstetrician, Gynaecologist & Fertility Specialist"
                className="w-auto h-full max-h-[520px] sm:max-h-[560px] lg:max-h-[620px] object-contain object-bottom select-none drop-shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Floating Specialty / Doctor Credential Text */}
            <div 
              className="absolute bottom-2 sm:bottom-4 left-0 sm:left-2 flex items-center gap-3.5 max-w-xs z-10 animate-in fade-in"
            >
              <div className="w-10 h-10 rounded-full bg-[#E94E9A]/15 flex items-center justify-center shrink-0">
                <img
                  src="/images/icons/medical-symbol.png"
                  alt="Medical Symbol"
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#222B40] tracking-tight leading-tight mb-0.5">
                  Dr. Sakshi Naik
                </h3>
                <span className="block text-[10.5px] font-bold text-[#E94E9A] uppercase tracking-wider leading-none mb-1">
                  Fellowship Trained Specialist
                </span>
                <p className="text-xs text-[#0B5DA7] font-semibold leading-tight">
                  Obstetrics, Gynaecology &amp; Reproductive Surgery
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (~54% Width) - Qualifications List (Unboxed, Merges with Section Background) */}
          <div className="w-full lg:w-[54%] text-left flex flex-col">
            <div className="relative h-full flex flex-col justify-between py-2 sm:py-4">
              
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0B5DA7]">
                    Academic Foundation
                  </span>
                </div>

                <h3 className="text-2xl sm:text-[26px] font-bold text-[#222B40] tracking-tight mb-4">
                  Qualifications &amp; Certifications
                </h3>

                <div className="w-full h-px bg-slate-200/80 mb-6" />

                {/* Numbered Qualifications List */}
                <div className="space-y-4">
                  {qualificationsList.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-start gap-4 pb-4 border-b border-slate-200/70 last:border-0 last:pb-0 group transition-all duration-150"
                    >
                      {/* Number Badge */}
                      <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#eaf5fc] border border-slate-200 group-hover:border-[#0B5DA7]/30 text-slate-700 group-hover:text-[#0B5DA7] font-bold text-xs flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-2xs">
                        {item.id}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm sm:text-[15.5px] font-bold text-[#222B40] group-hover:text-[#0B5DA7] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          {item.highlight && (
                            <span className="text-[11px] font-semibold text-[#E94E9A] bg-[#fdf2f7] px-2.5 py-0.5 rounded-full whitespace-nowrap border border-[#E94E9A]/10">
                              {item.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              {onBookAppointment && (
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={onBookAppointment}
                    className="bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2 cursor-pointer"
                  >
                    <span>BOOK A CONSULTATION</span>
                    <span className="text-base leading-none font-black">&raquo;</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
