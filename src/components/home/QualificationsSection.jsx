import React from 'react';

/**
 * QualificationsSection Component
 * Displays Dr. Sakshi Naik's qualifications in an unboxed, alternating 2-sided layout
 * (Degree on Left & Details on Right, then Details on Left & Degree on Right, vice-versa)
 * merged directly into the #F9FAFC section canvas.
 */
export default function QualificationsSection({ onBookAppointment, className = '' }) {
  const qualificationsList = [
    {
      id: '01',
      title: 'MBBS',
      subtitle: 'Bachelor of Medicine, Bachelor of Surgery',
      desc: 'Rigorous medical education establishing a comprehensive diagnostic and clinical care foundation.',
      side: 'left', // Degree on Left, Desc on Right
    },
    {
      id: '02',
      title: 'MS — Obstetrics & Gynaecology',
      subtitle: 'Master of Surgery in Maternity & Women’s Health',
      desc: 'Specialized postgraduate surgical expertise across complex deliveries, maternal health, and pelvic surgery.',
      side: 'right', // Desc on Left, Degree on Right
    },
    {
      id: '03',
      title: 'DNB — Obstetrics & Gynaecology',
      subtitle: 'Diplomate of National Board (NBE)',
      desc: 'National Board certified standard of excellence in clinical governance, high-risk pregnancy, and patient safety.',
      side: 'left', // Degree on Left, Desc on Right
    },
    {
      id: '04',
      title: 'Fellowship in Minimal Access Surgery (FMAS)',
      subtitle: 'Advanced Laparoscopic & Hysteroscopic Procedures',
      desc: 'State-of-the-art keyhole surgical fellowship offering precise operative treatment with minimal pain and rapid recovery.',
      side: 'right', // Desc on Left, Degree on Right
    },
    {
      id: '05',
      title: 'Fellowship in Assisted Reproductive Techniques (ART)',
      subtitle: 'Advanced Protocols in Infertility & Assisted Conception',
      desc: 'Fellowship-trained reproductive specialist delivering individualized IVF, ICSI, IUI, and personalized fertility solutions.',
      side: 'left', // Degree on Left, Desc on Right
    },
  ];

  return (
    <section 
      id="qualifications"
      className={`bg-[#F9FAFC] border-b border-gray-100 relative overflow-hidden py-16 lg:py-24 ${className}`}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Centered 2 Lines */}
        <div className="mb-14 sm:mb-20 text-center">
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

        {/* 2-Sided Alternating Unboxed Layout with Center Connecting Line */}
        <div className="relative">
          
          {/* Central Connecting Line (Desktop: Center, Mobile: Left Aligned) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0B5DA7] via-[#E94E9A] to-[#0B5DA7]/60 pointer-events-none" />

          {/* Rows List */}
          <div className="space-y-12 sm:space-y-16">
            {qualificationsList.map((item, index) => {
              const isDegreeLeft = item.side === 'left';

              return (
                <div 
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                >
                  
                  {/* LEFT COLUMN (Desktop ~50%) */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-14 md:text-right relative">
                    {/* Horizontal Connector Line: Left to Center Node (Desktop) */}
                    <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 w-12 pointer-events-none">
                      <div className={`w-full h-0.5 ${isDegreeLeft ? 'bg-gradient-to-r from-transparent to-[#0B5DA7]' : 'bg-gradient-to-r from-transparent to-slate-300'}`} />
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDegreeLeft ? 'bg-[#0B5DA7]' : 'bg-slate-400'}`} />
                    </div>

                    {isDegreeLeft ? (
                      /* Degree Title on Left */
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#222B40] group-hover:text-[#0B5DA7] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-[#0B5DA7] font-semibold mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    ) : (
                      /* Description on Left (When Degree is on Right) */
                      <div className="hidden md:block">
                        <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CENTER CONNECTING NODE / NUMBER BADGE */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div 
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F9FAFC] border-2 ${index % 2 === 0 ? 'border-[#0B5DA7] text-[#0B5DA7]' : 'border-[#E94E9A] text-[#E94E9A]'} flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md`}
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Desktop ~50%) */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-14 md:text-left mt-2 md:mt-0 relative">
                    {/* Horizontal Connector Line: Center Node to Right (Desktop) */}
                    <div className="hidden md:flex items-center absolute left-0 top-1/2 -translate-y-1/2 w-12 pointer-events-none">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${!isDegreeLeft ? 'bg-[#E94E9A]' : 'bg-slate-400'}`} />
                      <div className={`w-full h-0.5 ${!isDegreeLeft ? 'bg-gradient-to-r from-[#E94E9A] to-transparent' : 'bg-gradient-to-r from-slate-300 to-transparent'}`} />
                    </div>

                    {/* Mobile Horizontal Connector Arm from Left Vertical Line */}
                    <div className="block md:hidden absolute left-6 top-5 w-7 h-0.5 bg-gradient-to-r from-[#0B5DA7] to-slate-300 pointer-events-none" />

                    {isDegreeLeft ? (
                      /* Description on Right (When Degree is on Left) */
                      <div>
                        <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      /* Degree Title on Right */
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#222B40] group-hover:text-[#E94E9A] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-[#E94E9A] font-semibold mt-1">
                          {item.subtitle}
                        </p>
                        {/* On mobile, also show description below title */}
                        <p className="block md:hidden text-sm text-slate-600 leading-relaxed font-normal mt-2">
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
