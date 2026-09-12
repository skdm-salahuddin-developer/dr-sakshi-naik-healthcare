import React, { useState } from 'react';
import { clinicInfo } from '../../data/clinicInfo.js';
import { validatePhone } from '../../utils/validation.js';

/**
 * Consultation & Appointment Booking Form Section
 * "Have A Questions? Consult With Dr. Sakshi Naik"
 */
export default function AppointmentBookingSection({ onBookAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: clinicInfo.locations[0].name,
    service: '',
    date: '',
    fromTime: '',
    toTime: '',
    doctor: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit contact number.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        fromTime: '',
        toTime: '',
        doctor: '',
      });
    }, 4000);
  };

  return (
    <section 
      id="appointment" 
      className="relative py-12 sm:py-16 lg:py-24 bg-cover bg-no-repeat bg-[78%_center] sm:bg-right overflow-hidden"
      style={{
        backgroundImage: "url('/images/request/g2.png')",
      }}
    >
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute bottom-0 left-0 w-72 h-36 pointer-events-none opacity-25 bg-repeat z-0"
        style={{ backgroundImage: "url('/images/about/pattan.png')" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="w-full max-w-[290px] xs:max-w-[320px] sm:max-w-2xl lg:max-w-xl">
          
          {/* Section Header */}
          <div className="mb-5 sm:mb-10">
            <span className="block text-[#0B5DA7] text-lg sm:text-2xl font-bold tracking-tight">
              Have A Questions?
            </span>
            <h2 
              className="text-2xl sm:text-4xl font-bold text-[#222B40] mt-0.5 sm:mt-1 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Consult With <span className="text-[#E94E9A]">{clinicInfo.doctorName}</span>
            </h2>
          </div>

          {/* Success Toast Banner */}
          {submitted && (
            <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 rounded-md bg-[#eef8e5] border border-[#73B737]/30 text-[#222B40] animate-in fade-in flex items-center gap-3">
              <svg className="w-5 h-5 text-[#73B737] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-xs sm:text-sm font-medium">
                Appointment request sent successfully! Our clinical care team will call you shortly.
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 sm:mb-6 p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-medium animate-in fade-in">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Row 1: Name & Phone */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-[#222B40] placeholder-slate-600 sm:placeholder-slate-400 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-[#222B40] placeholder-slate-600 sm:placeholder-slate-400 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all"
              />
            </div>

            {/* Row 2: Location & Service */}
            <div>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-slate-800 sm:text-slate-600 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all cursor-pointer font-medium"
              >
                {clinicInfo.locations.map((loc) => (
                  <option key={loc.id} value={loc.title}>
                    {loc.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-slate-800 sm:text-slate-600 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Type of Service</option>
                <option value="Maternity & Delivery Care">Maternity & Delivery Care</option>
                <option value="High-Risk Pregnancy">High-Risk Pregnancy</option>
                <option value="Preconception Counselling">Preconception Counselling</option>
                <option value="Fertility Care & IVF / IUI">Fertility Care & IVF / IUI</option>
                <option value="Laparoscopy & Hysteroscopy">Laparoscopy & Hysteroscopy</option>
                <option value="Comprehensive Gynaecology">Comprehensive Gynaecology</option>
                <option value="Adolescence & Menopause">Adolescence & Menopause</option>
                <option value="Urogynaecology & Pelvic Floor">Urogynaecology & Pelvic Floor</option>
              </select>
            </div>

            {/* Row 3: Date & Preferred Time Slot */}
            <div>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                placeholder="dd/mm/yyyy"
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-slate-800 sm:text-slate-600 placeholder-slate-600 sm:placeholder-slate-400 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <select
                name="timeSlot"
                value={formData.timeSlot || ''}
                onChange={handleChange}
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-slate-800 sm:text-slate-600 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Preferred Time Slot</option>
                <option value="10:00 AM - 11:30 AM">10:00 AM – 11:30 AM (Morning)</option>
                <option value="11:30 AM - 01:00 PM">11:30 AM – 01:00 PM (Noon)</option>
                <option value="02:00 PM - 03:30 PM">02:00 PM – 03:30 PM (Afternoon)</option>
                <option value="05:00 PM - 06:30 PM">05:00 PM – 06:30 PM (Evening)</option>
                <option value="06:30 PM - 08:00 PM">06:30 PM – 08:00 PM (Late Evening)</option>
              </select>
            </div>

            {/* Row 4: Staff/Doctor & Submit Button */}
            <div>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full bg-white/60 sm:bg-white backdrop-blur-xs px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-sm text-sm text-slate-800 sm:text-slate-600 shadow-xs sm:shadow-sm border border-white/70 sm:border-slate-100 hover:border-white/90 sm:hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#73B737]/60 focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Staff</option>
                <option value={`${clinicInfo.doctorName} (Lead Consultant)`}>{clinicInfo.doctorName} (Lead Consultant)</option>
                <option value="Dr. Ananya Deshmukh (Fetal Medicine)">Dr. Ananya Deshmukh (Fetal Medicine)</option>
                <option value="Dr. Meera Iyer (Senior Embryologist)">Dr. Meera Iyer (Senior Embryologist)</option>
                <option value="Dr. Rajesh Sharma (Urogynaecologist)">Dr. Rajesh Sharma (Urogynaecologist)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-full min-h-[44px] sm:min-h-[46px] inline-flex items-center justify-center gap-1.5 bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] uppercase tracking-wider px-5 py-3 sm:py-3.5 rounded-sm shadow-sm hover:shadow-md active:scale-98 transition-all duration-200 cursor-pointer"
              >
                <span>CHECK AVAILABILITY</span>
                <span className="text-sm font-black leading-none">&raquo;</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
