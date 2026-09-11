/**
 * Master Components Barrel Export
 * Preserves 100% backward compatibility while delegating to domain-specific directories.
 */

// Layout Components (Header, Footer, QuickContactBar)
export * from './layout/index.js';

// Homepage Components (HeroBanner, WhyChooseDrSakshi, TreatmentsShowcase, HealthcareServicesGrid, BlogNewsSection)
export * from './home/index.js';

// About Page Components (AboutBanner, AboutCareSection, DoctorPatientCareSection)
export * from './about/index.js';

// Shared Components (DoctorsTeamSection, AppointmentBookingSection, PatientTestimonialsSection, AppointmentModal)
export * from './shared/index.js';
