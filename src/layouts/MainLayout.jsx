import React from 'react';
import { Header, Footer } from '../components/layout/index.js';
import { AppointmentModal } from '../components/shared/index.js';

/**
 * Main Layout Shell
 * Wraps global header navigation, dynamic child views, footer, and consultation modal.
 */
export default function MainLayout({
  children,
  currentPage,
  onNavigate,
  isAppointmentModalOpen,
  onOpenAppointmentModal,
  onCloseAppointmentModal,
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-700 selection:bg-[#0B5DA7] selection:text-white flex flex-col">
      {/* 1. Global Header Navigation */}
      <Header
        onBookAppointment={onOpenAppointmentModal}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 3. Global Footer with Contact & Map */}
      <Footer />

      {/* 4. Global Consultation Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={onCloseAppointmentModal}
      />
    </div>
  );
}
