import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css';
import { MainLayout } from './layouts/index.js';
import { HomePage, AboutPage, TreatmentDetailPage, FaqPage, ContactPage } from './pages/index.js';

export default function App() {
  const parseCurrentRoute = () => {
    if (typeof window === 'undefined') return { page: 'home', slug: 'maternity-care' };
    const hash = window.location.hash || '';
    const pathname = window.location.pathname || '';

    // Check for treatments route: #/treatments/:slug or #treatments/:slug or /treatments/:slug
    if (hash.includes('treatments/')) {
      const slug = hash.split('treatments/')[1]?.replace(/[^a-zA-Z0-9_-]/g, '') || 'maternity-care';
      return { page: 'treatment', slug };
    }
    if (pathname.includes('/treatments/')) {
      const slug = pathname.split('/treatments/')[1]?.replace(/[^a-zA-Z0-9_-]/g, '') || 'maternity-care';
      return { page: 'treatment', slug };
    }
    if (hash === '#about') {
      return { page: 'about', slug: 'maternity-care' };
    }
    if (hash === '#faq') {
      return { page: 'faq', slug: 'maternity-care' };
    }
    if (hash === '#contact') {
      return { page: 'contact', slug: 'maternity-care' };
    }
    return { page: 'home', slug: 'maternity-care' };
  };

  const [route, setRoute] = useState(parseCurrentRoute);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const locomotiveScrollRef = useRef(null);

  // Initialize Locomotive Scroll for smooth scrolling
  useEffect(() => {
    try {
      locomotiveScrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        },
      });
    } catch (err) {
      console.warn('LocomotiveScroll init error:', err);
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  const scrollToTop = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }, 50);
  };

  // Scroll to top whenever route or slug changes
  useEffect(() => {
    scrollToTop();
  }, [route.page, route.slug]);

  useEffect(() => {
    const handleRouteChange = () => {
      const parsed = parseCurrentRoute();
      setRoute(parsed);
      scrollToTop();
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigateTo = (page, slug = 'maternity-care') => {
    if (page === 'treatment') {
      setRoute({ page: 'treatment', slug });
      window.location.hash = `#/treatments/${slug}`;
    } else if (page === 'about') {
      setRoute({ page: 'about', slug: 'maternity-care' });
      window.location.hash = '#about';
    } else if (page === 'faq') {
      setRoute({ page: 'faq', slug: 'maternity-care' });
      window.location.hash = '#faq';
    } else if (page === 'contact') {
      setRoute({ page: 'contact', slug: 'maternity-care' });
      window.location.hash = '#contact';
    } else {
      setRoute({ page: 'home', slug: 'maternity-care' });
      window.location.hash = '#home';
    }
    scrollToTop();
  };

  // Scroll-triggered smooth and visible directional edge reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed', 'is-arrived', 'section-arrived');
            // Trigger all nested directional elements
            const children = entry.target.querySelectorAll(
              '.reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-fade, .arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            );
            children.forEach((child) => child.classList.add('is-revealed', 'is-arrived'));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08,
      }
    );

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec, sIdx) => {
        sec.classList.add('section-arrive');

        // 1. Section Headings - Alternate coming from Left & Right for rich visual dynamics
        const headings = sec.querySelectorAll('h1, h2, h3');
        headings.forEach((h, hIdx) => {
          if (!h.classList.contains('reveal-left') && !h.classList.contains('reveal-right')) {
            if ((sIdx + hIdx) % 2 === 0) {
              h.classList.add('reveal-left');
            } else {
              h.classList.add('reveal-right');
            }
          }
        });

        // 2. 2-Column Split Sections: Left column from left edge, Right column from right edge
        const splitCols = sec.querySelectorAll('.flex-col.lg\\:flex-row > div, .flex-col.md\\:flex-row > div');
        if (splitCols.length >= 2) {
          splitCols.forEach((col, cIdx) => {
            if (!col.classList.contains('reveal-left') && !col.classList.contains('reveal-right')) {
              if (cIdx % 2 === 0) {
                col.classList.add('reveal-left');
              } else {
                col.classList.add('reveal-right', 'reveal-delay-1');
              }
            }
          });
        }

        // 3. Grid Cards - Alternate entering from Left and Right with stagger delays
        const gridItems = sec.querySelectorAll('.grid > div, .grid > article, form');
        gridItems.forEach((item, gIdx) => {
          if (!item.classList.contains('reveal-left') && !item.classList.contains('reveal-right') && !item.classList.contains('reveal-up')) {
            if (gIdx % 2 === 0) {
              item.classList.add('reveal-left');
            } else {
              item.classList.add('reveal-right');
            }
            const delayClass = `reveal-delay-${Math.min((gIdx % 4) + 1, 4)}`;
            item.classList.add(delayClass);
          }
        });

        // Check if already in viewport
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          sec.classList.add('is-revealed', 'is-arrived', 'section-arrived');
          sec
            .querySelectorAll(
              '.reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-fade, .arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            )
            .forEach((el) => el.classList.add('is-revealed', 'is-arrived'));
        } else {
          observer.observe(sec);
        }
      });
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [route.page, route.slug]);

  return (
    <MainLayout
      currentPage={route.page}
      onNavigate={navigateTo}
      isAppointmentModalOpen={appointmentModalOpen}
      onOpenAppointmentModal={() => setAppointmentModalOpen(true)}
      onCloseAppointmentModal={() => setAppointmentModalOpen(false)}
    >
      <div key={`${route.page}-${route.slug || ''}`} className="page-arrival">
        {route.page === 'treatment' ? (
          <TreatmentDetailPage
            slug={route.slug}
            onNavigateHome={() => navigateTo('home')}
            onNavigateTreatment={(slug) => navigateTo('treatment', slug)}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'about' ? (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'faq' ? (
          <FaqPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : route.page === 'contact' ? (
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        ) : (
          <HomePage
            onBookAppointment={() => setAppointmentModalOpen(true)}
          />
        )}
      </div>
    </MainLayout>
  );
}
