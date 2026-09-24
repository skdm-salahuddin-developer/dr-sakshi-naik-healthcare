import React from 'react';
import { 
  AboutBanner, 
  AboutCareSection, 
  DoctorPatientCareSection,
  QualificationsExpertiseSection
} from '../components/about/index.js';
import { QualificationsSection } from '../components/home/index.js';
import { 
  AppointmentBookingSection, 
  PatientTestimonialsSection 
} from '../components/shared/index.js';

export default function AboutPage({ onNavigateHome, onBookAppointment }) {
  return (
    <div className="w-full">
      {/* 1. Top Breadcrumb Hero Banner */}
      <AboutBanner onNavigateHome={onNavigateHome} />

      {/* 2. About Doctor & Patient Care Philosophy Section (Welcome To Dr. Sakshi Naik) */}
      <DoctorPatientCareSection onBookAppointment={onBookAppointment} />

      {/* 3. Qualifications & Training Section (Expert Care for Women’s & Fertility Health) */}
      <QualificationsSection onBookAppointment={onBookAppointment} />

      {/* 4. Qualifications, Expertise & Clinical Experience (Why Choose Our Medical Excellence) */}
      <QualificationsExpertiseSection onBookAppointment={onBookAppointment} />

      {/* 5. "Our Professionals We Care About You" - 4-Card Service Feature Grid */}
      <AboutCareSection onBookAppointment={onBookAppointment} />

      {/* 6. Consultation & Appointment Booking Form (Have A Questions? Consult With Dr. Sakshi Naik) */}
      <AppointmentBookingSection onBookAppointment={onBookAppointment} />


      {/* 8. Patient Stories & Testimonials Slider */}
      <PatientTestimonialsSection />
    </div>
  );
}
