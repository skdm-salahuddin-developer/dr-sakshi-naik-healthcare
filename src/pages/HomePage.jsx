import React from 'react';
import { QuickContactBar } from '../components/layout/index.js';
import { 
  HeroBanner, 
  WhyChooseDrSakshi, 
  QualificationsSection,
  TreatmentsShowcase, 
  HealthcareServicesGrid 
} from '../components/home/index.js';
import { DoctorPatientCareSection } from '../components/about/index.js';
import { 
  AppointmentBookingSection, 
  PatientTestimonialsSection 
} from '../components/shared/index.js';

export default function HomePage({ onBookAppointment }) {
  return (
    <div className="w-full">
      {/* 1. Main Hero Banner & Floating Contact Ribbon */}
      <div className="relative">
        <HeroBanner onBookAppointment={onBookAppointment} />
        <QuickContactBar />
      </div>

      {/* Spacing beneath floating quick contact bar */}
      <div className="h-6 sm:h-8 bg-white" />

      {/* 2. Doctor & Patient Care Philosophy Section (Welcome To Dr. Sakshi Naik - with reduced top padding) */}
      <DoctorPatientCareSection 
        onBookAppointment={onBookAppointment} 
        className="pt-6 sm:pt-8 lg:pt-10 pb-16 lg:pb-24"
      />

      {/* 3. Academic Qualifications & Clinical Foundation */}
      <QualificationsSection onBookAppointment={onBookAppointment} />

      {/* 4. Why Choose Dr. Sakshi (4-Card Feature Grid) */}
      <WhyChooseDrSakshi />

      {/* 4. Treatments Showcase (Interactive Tabs) */}
      <TreatmentsShowcase onBookAppointment={onBookAppointment} />

      {/* 5. Healthcare Services 2x2 Grid */}
      <HealthcareServicesGrid onBookAppointment={onBookAppointment} />

      {/* 6. Consultation & Appointment Booking Form */}
      <AppointmentBookingSection onBookAppointment={onBookAppointment} />


      {/* 9. Patient Stories & Testimonials Slider */}
      <PatientTestimonialsSection />
    </div>
  );
}
