import React from 'react';

/**
 * QualificationsSection Component
 * Displays Dr. Sakshi Naik's qualifications in an alternating Left-Right layout
 * with a continuous central vertical line and connector arms to each milestone (01 to 05).
 */
export default function QualificationsSection({ onBookAppointment, className = '' }) {
  const qualificationsList = [
    {
      id: '01',
      title: 'MBBS',
      subtitle: 'Bachelor of Medicine, Bachelor of Surgery',
      desc: 'Foundational medical training and clinical care excellence.',
      side: 'left', // Title on Left, Desc on Right
      accentColor: '#0B5DA7',
    },
    {
      id: '02',
      title: 'MS — Obstetrics & Gynaecology',
      subtitle: 'Master of Surgery in Women’s Health',
      desc: 'Advanced surgical expertise in maternity, childbirth, and pelvic care.',
      side: 'right', // Desc on Left, Title on Right
      accentColor: '#E94E9A',
    },
    {
      id: '03',
      title: 'DNB — Obstetrics & Gynaecology',
      subtitle: 'Diplomate of National Board',
      desc: 'National Board certification in high-risk pregnancy and patient safety.',
      side: 'left', // Title on Left, Desc on Right
      accentColor: '#0B5DA7',
    },
    {
      id: '04',
      title: 'Fellowship in Minimal Access Surgery (FMAS)',
      subtitle: 'Advanced Keyhole & Laparoscopic Surgery',
      desc: 'Precision minimally invasive surgery for faster, pain-free recovery.',
      side: 'right', // Desc on Left, Title on Right
      accentColor: '#E94E9A',
    },
    {
      id: '05',
      title: 'Fellowship in Assisted Reproductive Techniques (ART)',
      subtitle: 'Specialized Fertility & IVF Protocols',
      desc: 'Expert care in IVF, IUI, ICSI, and personalized fertility treatments.',
      side: 'left', // Title on Left, Desc on Right
      accentColor: '#0B5DA7',
    },
  ];

  return (
    <section 
      id="qualifications"
      className={`bg-white relative overflow-hidden py-16 sm:py-20 lg:py-24 ${className}`}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Centered 2 Lines */}
        <div className="mb-14 sm:mb-20 text-center">
          <div className="max-w-3xl mx-auto text-center">
            <span 
              className="block text-[#0B5DA7] font-bold text-xs sm:text-[13px] tracking-widest uppercase mb-2.5"
            >
              QUALIFICATIONS &amp; TRAINING
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#222B40] leading-tight tracking-tight"
            >
              Expert Care for{' '}
              <span className="text-[#E94E9A]">Women’s &amp; Fertility Health</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mt-3.5 rounded-full mx-auto" />
          </div>
        </div>

        {/* Symmetrically Centered Alternating Connected Timeline with Zero Gap */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Continuous Central Connecting Vertical Line: Signature brand blue-to-pink gradient */}
          <div className="absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-[2.5px] bg-gradient-to-b from-[#0B5DA7] via-[#E94E9A] via-[#0B5DA7] via-[#E94E9A] to-[#0B5DA7] shadow-[0_0_6px_rgba(11,93,167,0.15)] z-0 pointer-events-none" />

          {/* Rows List */}
          <div className="space-y-12 sm:space-y-16">
            {qualificationsList.map((item, index) => {
              const isDegreeLeft = item.side === 'left';
              const isBlue = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="flex items-center justify-between w-full relative group transition-transform duration-300 hover:-translate-y-1"
                >
                  
                  {/* LEFT COLUMN (Exactly 50% - 24px) */}
                  <div className="w-[calc(50%-24px)] flex items-center justify-end">
                    {isDegreeLeft ? (
                      /* Degree Title on Left + Theme Gradient Line touching Circle */
                      <div className="flex items-center justify-end w-full">
                        <div className="text-right">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#222B40] group-hover:text-[#0B5DA7] transition-colors leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#0B5DA7] font-semibold mt-1 tracking-wide">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* Theme Blue-to-Pink horizontal connector arm */}
                        <div className="flex items-center shrink-0 ml-3 sm:ml-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0B5DA7] -mr-0.5 z-10 hidden sm:block" />
                          <div className="w-8 sm:w-12 md:w-16 h-[2.5px] bg-gradient-to-r from-[#0B5DA7] to-[#0B5DA7] transition-all duration-300 group-hover:h-[3px] group-hover:shadow-[0_0_10px_rgba(11,93,167,0.6)]" />
                        </div>
                      </div>
                    ) : (
                      /* Description on Left */
                      <div className="text-right max-w-md pr-4 sm:pr-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal group-hover:text-slate-800 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CENTER CIRCLE NODE (Exactly 48px width in middle) */}
                  <div className="w-12 h-12 flex items-center justify-center relative z-10 shrink-0">
                    <div 
                      className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white border-2 ${
                        isBlue 
                          ? 'border-[#0B5DA7] text-[#0B5DA7] group-hover:bg-[#0B5DA7] group-hover:text-white group-hover:ring-4 group-hover:ring-[#0B5DA7]/20' 
                          : 'border-[#E94E9A] text-[#E94E9A] group-hover:bg-[#E94E9A] group-hover:text-white group-hover:ring-4 group-hover:ring-[#E94E9A]/20'
                      } flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg cursor-default select-none`}
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Exactly 50% - 24px) */}
                  <div className="w-[calc(50%-24px)] flex items-center justify-start">
                    {!isDegreeLeft ? (
                      /* Theme Pink Line touching Circle on left + Degree Title on Right */
                      <div className="flex items-center justify-start w-full">
                        {/* Theme Pink horizontal connector arm */}
                        <div className="flex items-center shrink-0 mr-3 sm:mr-4">
                          <div className="w-8 sm:w-12 md:w-16 h-[2.5px] bg-gradient-to-r from-[#E94E9A] to-[#E94E9A] transition-all duration-300 group-hover:h-[3px] group-hover:shadow-[0_0_10px_rgba(233,78,154,0.6)]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E94E9A] -ml-0.5 z-10 hidden sm:block" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#222B40] group-hover:text-[#E94E9A] transition-colors leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#E94E9A] font-semibold mt-1 tracking-wide">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Description on Right */
                      <div className="text-left max-w-md pl-4 sm:pl-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal group-hover:text-slate-800 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Consultation Action Button */}
        {onBookAppointment && (
          <div className="mt-16 sm:mt-20 text-center">
            <button
              type="button"
              onClick={onBookAppointment}
              className="inline-flex items-center gap-2 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-8 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="text-base leading-none font-black">&raquo;</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
