/**
 * Selected Essential FAQ Data for Dr. Sakshi Naik Clinic
 * Curated to 6 high-value questions covering pregnancy, fertility, gynecology, and surgical care.
 */

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'pregnancy', label: 'Pregnancy & Maternity' },
  { id: 'fertility', label: 'Fertility & Conception' },
  { id: 'gynecology', label: 'Period & Hormones' },
  { id: 'surgery', label: 'Surgeries & Keyhole' },
];

export const faqsData = [
  // 1. Pregnancy & Maternity
  {
    id: 'faq-preg-1',
    category: 'pregnancy',
    question: 'How often do I need to visit for pregnancy checkups?',
    answer:
      'In the first few months, visits are usually once every 4 weeks. As your due date gets closer (around week 28 to 36), we see you every two weeks. In the final month, we meet every week to monitor your baby’s position, heartbeat, and ensure you feel calm and ready for delivery.',
  },
  {
    id: 'faq-preg-2',
    category: 'pregnancy',
    question: 'When should I have my ultrasound scans done?',
    answer:
      'Most pregnancies include four key scans: a dating and viability scan at 6–8 weeks to confirm the heartbeat, a combined screening scan at 11–13 weeks, a detailed anomaly scan at 18–20 weeks to check baby’s organs, and growth/Doppler scans in the third trimester to track baby’s weight and fluid levels.',
  },

  // 2. Fertility & Conception
  {
    id: 'faq-fert-1',
    category: 'fertility',
    question: 'When should a couple seek help for getting pregnant?',
    answer:
      'If you are under 35 and have been having regular unprotected intercourse for 12 months without conceiving, it is a good time to consult. If you are 35 or older, or have very irregular periods or a history of pelvic surgery, we recommend coming in after 6 months of trying.',
  },
  {
    id: 'faq-fert-2',
    category: 'fertility',
    question: 'Does having PCOS mean I cannot get pregnant naturally?',
    answer:
      'Not at all! Many women with PCOS conceive naturally. PCOS often means an egg is not released regularly every month. With simple dietary tweaks, light regular exercise, and mild oral medicines that help release an egg, most couples achieve pregnancy smoothly.',
  },

  // 3. Period & Hormones (General Gynecology)
  {
    id: 'faq-gyn-1',
    category: 'gynecology',
    question: 'Are very painful period cramps normal?',
    answer:
      'Mild cramping is common, but severe pain that stops you from going to work, school, or daily activities is not something you should just tolerate. It could be a sign of endometriosis, adenomyosis, or fibroids, all of which can be treated effectively.',
  },

  // 4. Surgeries & Keyhole (Laparoscopy & Hysteroscopy)
  {
    id: 'faq-surg-1',
    category: 'surgery',
    question: 'What is the recovery time after laparoscopic (keyhole) surgery?',
    answer:
      'Because laparoscopic surgery uses tiny 5–10mm keyhole incisions rather than a large cut, recovery is remarkably quick. Most patients are walking comfortably within hours and go home the same day or next morning. Light daily activities and desk work can usually resume within 5 to 7 days.',
  },
];

export default faqsData;
