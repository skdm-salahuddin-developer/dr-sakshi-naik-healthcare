import React from 'react';

/**
 * 4-Card Feature Grid: Dedicated Care For Women & Expecting Mothers
 */
export default function WhyChooseDrSakshi() {
  const features = [
    {
      icon: '/images/icons/maternity-care.png',
      title: 'Personalized Care',
      desc: 'Tailored medical consultations and treatment plans designed around your individual health needs and family journey.',
      linkText: 'View More »',
      linkUrl: '#/treatments/maternity-care',
      linkColor: 'text-[#0B5DA7]',
    },
    {
      icon: '/images/icons/ambulance.png',
      title: 'Emergency & Labour Support',
      desc: 'Round-the-clock guidance, active labour monitoring, and dedicated assistance before, during, and after delivery.',
      linkText: 'View More »',
      linkUrl: '#/treatments/labour-and-delivery',
      linkColor: 'text-[#0B5DA7]',
    },
    {
      icon: '/images/icons/consultant.png',
      title: 'Convenient Consultations',
      desc: 'Accessible clinic location, structured consultation hours, and hassle-free appointment scheduling for all patients.',
      linkText: 'View More »',
      linkUrl: '#contact',
      linkColor: 'text-[#0B5DA7]',
    },
    {
      icon: '/images/icons/doctor.png',
      title: 'Expert Gynaecologist',
      desc: 'High clinical expertise in maternity monitoring, assisted fertility therapies, and advanced laparoscopic procedures.',
      linkText: 'View More »',
      linkUrl: '#about',
      linkColor: 'text-[#0B5DA7]',
    },
  ];

  return (
    <section className="bg-[#F9FAFC] py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered H2 with dual-tone text */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#222B40] tracking-tight"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Dedicated Care For{' '}
            <span className="text-[#E94E9A]">Women &amp; Expecting Mothers</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition duration-300 border border-slate-100 flex flex-col items-center justify-between group hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-bold text-[#222B40] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Unified Action Link */}
              <div className="mt-6 pt-2">
                <a
                  href={item.linkUrl}
                  className={`text-xs font-bold ${item.linkColor} hover:text-[#E94E9A] uppercase tracking-wider hover:underline transition-colors`}
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
