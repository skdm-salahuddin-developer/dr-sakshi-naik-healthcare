import React, { useState, useEffect, useRef } from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';
import { treatmentDropdownItems, dropdownLeftTreatments, dropdownRightTreatments } from '../../data/navigation.js';

/**
 * Global Sticky Navigation Header
 */
export default function Header({ onBookAppointment, currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTreatmentsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
          : 'bg-white border-b border-gray-100 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* LEFT: Brand Clinic Logo & Doctor Name */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className="flex items-center gap-3 group"
            >
              {/* Brand Clinic Logo Emblem */}
              <img
                src="/images/logo/logo.png"
                alt={`${clinicInfo.doctorName} Logo`}
                className="h-16 sm:h-[74px] lg:h-[82px] w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
              />

              {/* Brand Typography */}
              <div className="flex flex-col justify-center text-left">
                <span
                  className="text-base sm:text-lg lg:text-[21px] font-bold text-[#222B40] tracking-tight group-hover:text-[#0B5DA7] transition-colors leading-tight"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Women’s Healthcare
                </span>
                <span
                  className="text-[11px] sm:text-xs lg:text-[13.5px] font-semibold text-slate-600 group-hover:text-[#E94E9A] transition-colors leading-snug"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  and Fertility Services
                </span>
              </div>
            </a>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a
              href="#home"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className={`text-[15px] font-semibold transition-colors ${currentPage === 'home' ? 'text-[#0B5DA7]' : 'text-[#222B40] hover:text-[#0B5DA7]'
                }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('about');
                }
              }}
              className={`text-[15px] font-semibold transition-colors ${currentPage === 'about' ? 'text-[#E94E9A]' : 'text-[#222B40] hover:text-[#0B5DA7]'
                }`}
            >
              About
            </a>

            {/* Treatments Dropdown Menu */}
            <div
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${treatmentsOpen ? 'text-[#0B5DA7]' : 'text-[#222B40] hover:text-[#0B5DA7]'
                  }`}
              >
                <span>Treatments</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${treatmentsOpen ? 'rotate-180 text-[#0B5DA7]' : 'text-gray-500'
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Treatment 2-Column (Left and Right Side) Dropdown Menu with smooth top-to-bottom animation */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-1.5 w-[540px] lg:w-[580px] z-50 transition-all duration-300 ease-out origin-top ${
                  treatmentsOpen
                    ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-3 scale-y-95 pointer-events-none invisible'
                }`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3">
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Left Column (Treatments 1 to 6) */}
                    <div className="border-r border-gray-200 pr-2.5">
                      {dropdownLeftTreatments.map((item) => (
                        <a
                          key={item.slug}
                          href={`#/treatments/${item.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setTreatmentsOpen(false);
                            if (onNavigate) {
                              onNavigate('treatment', item.slug);
                            }
                          }}
                          className="flex items-center justify-between px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:text-[#0B5DA7] hover:bg-[#eaf5fc] border-b border-gray-300 transition-all group"
                        >
                          <span className="truncate">{item.title}</span>
                          <span className="text-[#E94E9A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-xs font-bold">
                            &raquo;
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Right Column (Treatments 7 to 11) */}
                    <div className="pl-0.5">
                      {dropdownRightTreatments.map((item) => (
                        <a
                          key={item.slug}
                          href={`#/treatments/${item.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setTreatmentsOpen(false);
                            if (onNavigate) {
                              onNavigate('treatment', item.slug);
                            }
                          }}
                          className="flex items-center justify-between px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:text-[#0B5DA7] hover:bg-[#eaf5fc] border-b border-gray-300 transition-all group"
                        >
                          <span className="truncate">{item.title}</span>
                          <span className="text-[#E94E9A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-xs font-bold">
                            &raquo;
                          </span>
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('faq');
                }
              }}
              className={`text-[15px] font-semibold transition-colors ${
                currentPage === 'faq' ? 'text-[#E94E9A]' : 'text-[#222B40] hover:text-[#0B5DA7]'
              }`}
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('contact');
                }
              }}
              className={`text-[15px] font-semibold transition-colors ${
                currentPage === 'contact' ? 'text-[#E94E9A]' : 'text-[#222B40] hover:text-[#0B5DA7]'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* RIGHT: Search & Book Appointment Button */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Search Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 rounded-full bg-[#0B5DA7] hover:bg-[#094b87] text-white flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {searchOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search treatments..."
                      className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0B5DA7]"
                      autoFocus
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action: Book Appointment */}
            <button
              type="button"
              onClick={onBookAppointment}
              className="bg-[#E94E9A] hover:bg-[#d63d88] text-white font-bold px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 flex items-center gap-2 text-sm"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <span>Book Appointment</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#222B40] hover:text-[#0B5DA7] hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#home"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
            className={`block px-3 py-2 text-base font-semibold ${currentPage === 'home' ? 'text-[#0B5DA7]' : 'text-[#222B40]'
              }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (onNavigate) {
                e.preventDefault();
                onNavigate('about');
              }
            }}
            className={`block px-3 py-2 text-base font-semibold ${currentPage === 'about' ? 'text-[#E94E9A]' : 'text-[#222B40]'
              }`}
          >
            About
          </a>
          <div>
            <button
              type="button"
              onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-[#222B40]"
            >
              <span>Treatments</span>
              <svg className={`w-4 h-4 ${mobileTreatmentsOpen ? 'rotate-180 text-[#0B5DA7]' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileTreatmentsOpen && (
              <div className="pl-4 pr-2 py-1 bg-gray-50 rounded-lg my-1 divide-y divide-gray-300 max-h-72 overflow-y-auto">
                {treatmentDropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigate) {
                        onNavigate('treatment', item.slug);
                      }
                    }}
                    className="block py-2 px-2 text-sm font-medium text-gray-700 hover:text-[#0B5DA7]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavigate) {
                onNavigate('faq');
              }
            }}
            className={`block px-3 py-2 text-base font-semibold ${
              currentPage === 'faq' ? 'text-[#E94E9A]' : 'text-[#222B40]'
            }`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavigate) {
                onNavigate('contact');
              }
            }}
            className={`block px-3 py-2 text-base font-semibold ${
              currentPage === 'contact' ? 'text-[#E94E9A]' : 'text-[#222B40]'
            }`}
          >
            Contact
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookAppointment) onBookAppointment();
              }}
              className="w-full bg-[#E94E9A] hover:bg-[#d63d88] text-white font-semibold py-3 rounded-lg shadow-md text-center flex items-center justify-center gap-2 text-sm"
            >
              <span>Book Appointment</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}