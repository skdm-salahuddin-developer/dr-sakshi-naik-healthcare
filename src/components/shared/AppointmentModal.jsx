import React, { useState } from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';

/**
 * Quick Consultation Booking Modal Dialog
 */
export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Maternity Care',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: 'Maternity Care',
        preferredDate: '',
      });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-3 rounded-full bg-[#E94E9A]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#E94E9A]">
            Quick Consultation
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-[#222B40] mb-2 tracking-tight">
          Book an Appointment
        </h3>
        <p className="text-sm text-gray-500 mb-6 font-normal">
          Consult with {clinicInfo.doctorName} for personalized women's healthcare and advanced fertility care.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-pink-50 text-[#E94E9A] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#222B40]">Appointment Requested!</h4>
            <p className="text-xs text-gray-500">Our clinic coordinator will call you to confirm your slot.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter patient name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B5DA7] focus:ring-1 focus:ring-[#0B5DA7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B5DA7] focus:ring-1 focus:ring-[#0B5DA7]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Service / Department
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B5DA7] focus:ring-1 focus:ring-[#0B5DA7] bg-white"
                >
                  <option value="Maternity Care">Maternity Care</option>
                  <option value="High-Risk Pregnancy">High-Risk Pregnancy</option>
                  <option value="Fertility & IVF">Fertility &amp; IVF</option>
                  <option value="Laparoscopy">3D Laparoscopy</option>
                  <option value="Gynaecology">Gynaecology</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B5DA7] focus:ring-1 focus:ring-[#0B5DA7]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Confirm Consultation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
