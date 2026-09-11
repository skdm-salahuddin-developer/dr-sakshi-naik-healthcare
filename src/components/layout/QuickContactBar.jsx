import React from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';

/**
 * Floating Quick Contact Ribbon (Phone, Email, Location)
 */
export default function QuickContactBar() {
  const contactCards = [
    {
      icon: '/images/icons/phone-call.png',
      subtitle: 'Give us a Call',
      title: clinicInfo.phones.primary,
      href: `tel:${clinicInfo.phones.primary.replace(/\s+/g, '')}`,
      titleColor: 'text-[#0B5DA7]',
    },
    {
      icon: '/images/icons/email.png',
      subtitle: 'Send us a Message',
      title: clinicInfo.email,
      href: `mailto:${clinicInfo.email}`,
      titleColor: 'text-[#E94E9A]',
    },
    {
      icon: '/images/icons/placeholder.png',
      subtitle: 'Visit our Location',
      title: `${clinicInfo.address.line1}, ${clinicInfo.address.city}`,
      href: 'https://maps.google.com',
      titleColor: 'text-[#8B5CF6]',
    },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-22 z-20">
      {/* Background Dot Pattern Behind the Bar */}
      <div 
        className="absolute -top-10 left-0 w-96 h-32 pointer-events-none opacity-25 bg-repeat -z-10"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      {/* Floating Single Continuous White Container with Dividers */}
      <div className="bg-white/95 backdrop-blur-md rounded-sm border border-gray-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 sm:py-6 hover:bg-gray-50/70 transition-colors group"
            >
              {/* Icon Container matching exact template */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src={card.icon}
                  alt={card.subtitle}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>

              {/* Text: Italic subtitle + Colored Title */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] sm:text-sm font-medium italic text-gray-500">
                  {card.subtitle}
                </p>
                <h4 className={`text-sm sm:text-base font-bold ${card.titleColor} truncate mt-0.5 tracking-tight`}>
                  {card.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
