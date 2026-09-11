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

  // Scroll-triggered smooth and soft directional arrival observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-arrived', 'section-arrived');
            // Trigger internal directional children
            const children = entry.target.querySelectorAll(
              '.arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            );
            children.forEach((child) => child.classList.add('is-arrived'));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.06,
      }
    );

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        sec.classList.add('section-arrive');

        // 1. Headings coming softly from right side
        const headings = sec.querySelectorAll('h1, h2, h3');
        headings.forEach((h) => {
          h.classList.add('arrive-heading-right');
        });

        // 2. Main images coming softly from left side
        const images = sec.querySelectorAll(
          'img.object-cover, img.rounded-2xl, img.rounded-xl, .image-column img, iframe'
        );
        images.forEach((img) => {
          // Avoid touching small icons
          if (
            img.classList.contains('w-4') ||
            img.classList.contains('w-5') ||
            img.classList.contains('w-6') ||
            img.classList.contains('w-7') ||
            img.classList.contains('w-8') ||
            img.classList.contains('w-9') ||
            img.classList.contains('w-10') ||
            img.classList.contains('w-12')
          ) {
            return;
          }
          img.classList.add('arrive-image-left');
        });

        // 3. Grid cards, forms, and descriptive blocks coming softly from bottom
        const bottomItems = sec.querySelectorAll(
          '.grid > div, .grid > article, form'
        );
        bottomItems.forEach((item, idx) => {
          item.classList.add('arrive-content-bottom');
          const delayClass = `arrive-delay-${Math.min(((idx % 4) + 1) * 100, 400)}`;
          item.classList.add(delayClass);
        });

        const rect = sec.getBoundingClientRect();
        // If already in or near viewport upon page load (e.g. hero banner), arrive smoothly
        if (rect.top < window.innerHeight * 0.75) {
          sec.classList.add('is-arrived', 'section-arrived');
          sec
            .querySelectorAll(
              '.arrive-heading-right, .arrive-image-left, .arrive-content-bottom'
            )
            .forEach((el) => el.classList.add('is-arrived'));
        } else {
          observer.observe(sec);
        }
      });
    }, 60);

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
