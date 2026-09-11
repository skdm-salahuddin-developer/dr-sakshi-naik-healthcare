# Dr. Sakshi Naik - Women's Healthcare & Fertility

A modern, high-performance, and visually captivating web application for **Dr. Sakshi Naik's Women's Healthcare & Advanced Fertility Clinic**. Built with React 19, Vite, Tailwind CSS, and custom editorial design components tailored for obstetrics, gynaecology, and reproductive healthcare.

---

## 🌟 Key Features & Pages

- **Homepage (`/`)**:
  - High-impact hero section with candid Indian healthcare photography and interactive virtual video consultation modal.
  - 2x2 Core Healthcare Services Grid.
  - Tabbed Clinical Treatments Showcase.
  - Interactive "Why Choose Us" feature section.
  - Patient Testimonials carousel and recent Health Articles feed.

- **11 Dedicated Treatment Detail Pages (`/treatments/:slug`)**:
  - Full breadcrumbs banner and 55/45 editorial content-to-image layout.
  - Comprehensive clinical overview, key highlight checklists, quick booking trigger, and instant treatment switcher.
  - **Covered Treatments**:
    1. Maternity Care (`maternity-care`)
    2. Labour and Delivery (`labour-and-delivery`)
    3. High-Risk Pregnancy Care (`high-risk-pregnancy-care`)
    4. Preconception Counselling (`preconception-counselling`)
    5. Adolescence and Menopause Care (`adolescence-and-menopause-care`)
    6. Fertility Care and Counselling (`fertility-care-and-counselling`)
    7. IUI (`iui`)
    8. IVF / ICSI (`ivf-icsi`)
    9. TESA (`tesa`)
    10. Advanced Laparoscopy & Hysteroscopy (`advanced-laparoscopy-and-hysteroscopy`)
    11. Gynaecological Care, Urogynaecology & Gynae-Oncology (`gynaecological-care`)

- **About Clinic Page (`/about`)**:
  - High-definition crisp breadcrumb banner.
  - 4-Card Healthcare Excellence feature grid.
  - 55/45 alternating doctor & patient care section and qualifications/expertise showcase.
  - Vision, Mission & Values 3-card grid.

- **Doctors & Team Showcase**:
  - Interactive team section displaying 2 primary doctors by default with expandable *"VIEW ALL DOCTORS »"* toggle.

- **Consultation & Booking Modal**:
  - Fast, accessible modal for instant appointment scheduling.

---

## 🎨 Design System & Theme Tokens

- **Medical Royal Blue (`#0B5DA7`)**: Primary brand accent used for primary CTAs, active states, search actions, and trust cards.
- **Maternity Pink (`#E94E9A`)**: Secondary signature accent for appointment booking CTAs, headline gradient highlights, and left border accents.
- **Dark Neutral (`#222B40`)**: Solid, authoritative typography for headings and doctor titles.
- **Soft Background Tones (`#F9FAFC` & `#EBF1EF`)**: Soft ash and mist background gradients for optimal text contrast and reading comfort.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & Vanilla CSS custom tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Compositing**: [Sharp](https://sharp.pixelplumbing.com/)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── about/          # About page components (Banner, CareGrid, DoctorPatientCare, etc.)
│   ├── home/           # Homepage components (HeroBanner, ServicesGrid, TreatmentsShowcase, etc.)
│   ├── layout/         # Header, Footer & QuickContactBar
│   └── shared/         # Reusable components (DoctorsTeamSection, AppointmentModal, etc.)
├── data/               # Structured data (clinicInfo, treatmentsData, servicesData, doctorsData)
├── pages/              # Page view components (HomePage, AboutPage, TreatmentDetailPage)
├── App.jsx             # Router & main application shell
└── index.css           # Global typography & design system tokens
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/skdm-salahuddin-developer/dr-sakshi-naik-healthcare.git
   cd dr-sakshi-naik-healthcare
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📄 License

This project is proprietary and maintained for **Dr. Sakshi Naik's Women's Healthcare & Fertility Clinic**.
