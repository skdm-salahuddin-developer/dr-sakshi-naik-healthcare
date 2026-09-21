# Dr. Sakshi Naik - Women's Healthcare & Fertility
## Design System, Theme Tokens & Guidelines for All Pages & Sections

---

### 1. Brand Identity & Signature Color Tokens
- **Medical Royal Blue (Primary Brand Accent)**: `#0B5DA7`
  - Hover: `#094b87` | Active: `#073d6e` | Light Tint / Highlight: `#eaf5fc` / `rgba(11, 93, 167, 0.1)`
  - Usage: Primary CTAs (`GET APPOINTMENTS »`, `VIEW ALL DOCTORS »`, search button), navigation active states, category eyebrows ("Who We Are", "Why Choose Dr. Sakshi Naik", "Surgical & Academic Excellence"), doctor designations, service badges.
- **Maternity Pink (Secondary Signature Accent)**: `#E94E9A`
  - Hover: `#d43f88` | Active: `#be3177` | Light Tint: `#fdf2f7` / `rgba(233, 78, 154, 0.12)`
  - Usage: Header "BOOK APPOINTMENT" CTA button, dual-tone headline highlights ("Women’s & Maternal Care", "Decades of Trust", "Our Practice", "Professional Doctors", "We Offer?"), breadcrumb active highlights, checklist heart markers, left accent borders on floating cards (`border-l-4 border-[#E94E9A]`).
- **Dual-Tone Gradient Bar (Brand Divider)**:
  - `bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A]`
  - Used for decorative dividers underneath headings and above breadcrumbs (`w-12 h-1` or `w-16 h-1 rounded-full`).
- **Dark Title Neutral**: `#222B40` (Secondary: `#1e293b`)
  - Usage: All main headings (`h1` to `h6`), doctor names, strong typography.
- **Body & Content Text**: `#555555` / `rgb(100 116 139)` (`text-slate-600`)
  - Usage: Descriptive paragraphs, overview copy, key-value items, subtitles.
- **Background Tones**:
  - Pure White: `#FFFFFF` (Main cards, doctor cards, hero, modals)
  - Soft Ash / Slate Tint: `#F9FAFC` (Alternating section backgrounds, why-choose-us, vision/mission)
  - Breadcrumb Mist Soft Gray: `#EBF1EF` (Page breadcrumb banners with gradient overlay)
- **Footer Exception**:
  - The Footer (`Footer.jsx`) must remain completely untouched with its original styling, green badges, and Google Map. Do not alter footer colors or components unless explicitly asked.

---

### 2. Typography & Font Family Standards
- **Global Font Stack**: `Arial, Helvetica, sans-serif`
  - Applied consistently across all headings, badges, labels, and text copy.
  - **Headings Weight**: `font-bold` (700) with `tracking-tight` and `text-[#222B40]`.
  - **Body Weight**: `font-normal` (400) or `font-medium` (500) with `leading-relaxed` and `text-slate-600`.
  - **Buttons & Action Labels**: `font-bold uppercase tracking-wider` or `tracking-widest`.

---

### 3. Layout, Padding, Sizing & Alignment Standards

#### A. Section Container Sizing & Vertical Padding
- **Standard Full Section**: `py-16 lg:py-24`
- **Compact Section / Banner**: `py-12 sm:py-16 lg:py-20`
- **Hero Section**: `pt-12 sm:pt-16 pb-28 sm:pb-32 lg:pb-36`
- **Max Width & Horizontal Container**:
  - Standard Section: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Focused Grid / Reading Container: `max-w-6xl mx-auto px-4 sm:px-6`
  - Form / Narrow Container: `max-w-3xl mx-auto px-4 sm:px-6`

#### B. 55% / 45% Content-to-Image Ratio & Alternating Editorial Layout
When presenting split doctor/clinic features, use the established 55/45 ratio:
- **Responsive Flex Container**:
  ```jsx
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
  ```
- **Content Column (~55% Width)**:
  - Width: `w-full lg:w-[55%] text-left`
  - Category Eyebrow: `block text-[#0B5DA7] font-bold text-lg md:text-xl mb-1.5 tracking-tight`
  - Dual-Tone Heading: `text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#222B40] leading-tight mb-6 tracking-tight` with `<span className="text-[#E94E9A]">Highlight</span>`
  - Description: `text-sm md:text-base text-slate-600 leading-relaxed mb-8 font-normal`
  - 2-Column Feature Checklist: `grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9` with pink heart/check markers
  - Action Button: `bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-sm shadow-sm transition-all duration-200 hover:shadow hover:scale-[1.02] active:scale-98 flex items-center gap-2 cursor-pointer`
- **Image Column (~45% Width)**:
  - Width: `w-full lg:w-[45%] relative max-w-lg mx-auto lg:max-w-none`
  - Dot Pattern Accent: `<div className="absolute -top-6 -left-6 (or -right-6) w-48 h-48 pointer-events-none opacity-25 bg-repeat -z-10" style={{ backgroundImage: "url('/images/about/pattan.png')" }} />`
  - Image Wrapper: `relative rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50`
  - Image Dimensions: `w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover select-none`
  - Floating Trust/Experience Card:
    ```jsx
    <div className="absolute -bottom-6 sm:bottom-6 -right-3 (or -left-3) bg-white p-4 sm:p-5 rounded-xl shadow-xl flex items-center gap-4 border-l-4 border-[#0B5DA7] (or #E94E9A) border border-slate-100 max-w-xs z-10 animate-in fade-in">
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        <img src="/images/care/icon/01.png" alt="Experience Icon" className="w-10 h-10 object-contain" />
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-bold text-[#0B5DA7] tracking-tight leading-none mb-1">
          15+ <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Years of</span>
        </h3>
        <p className="text-xs text-slate-600 font-medium leading-tight">
          Excellence in Surgical Care
        </p>
      </div>
    </div>
    ```
- **Alternating Zigzag Layout**:
  - Section 1 (e.g. `DoctorPatientCareSection`): Content on Left (55%), Image on Right (45%)
  - Section 2 (e.g. `QualificationsExpertiseSection`): Image on Left (45%, `order-2 lg:order-1`), Content on Right (55%, `order-1 lg:order-2`)

---

### 4. Page Breadcrumb Banner Architecture (`AboutBanner` Standard)
For all sub-pages (About, Services, Contact, etc.), use the full-width crisp breadcrumb banner:
```jsx
<section className="relative w-full bg-[#EBF1EF] border-b border-gray-200/60 overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[390px] flex items-center">
  {/* Full-Width Right-Centered Hero Banner Image */}
  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
    <img
      src="/images/about/about-banner-hd.jpg"
      alt="Page Banner"
      className="w-full h-full object-cover object-right sm:object-[85%_center] select-none opacity-100"
      loading="eager"
    />
    {/* Soft edge blend for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#EBF1EF] via-[#EBF1EF]/70 to-transparent w-full sm:w-3/5 md:w-1/2 pointer-events-none" />
  </div>

  {/* Left Content Container */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
    <div className="max-w-md sm:max-w-lg py-9 sm:py-12 lg:py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#222B40] tracking-tight leading-tight mb-2">
        Page <span className="text-[#E94E9A]">Title</span>
      </h1>

      {/* Brand Blue-to-Pink Accent Bar */}
      <div className="w-12 h-1 bg-gradient-to-r from-[#0B5DA7] to-[#E94E9A] rounded-full mb-3" />

      {/* Breadcrumb Links */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-[13.5px] font-normal text-[#666666]">
        <button
          type="button"
          onClick={onNavigateHome}
          className="text-[#666666] hover:text-[#0B5DA7] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span className="text-[#999999] select-none">/</span>
        <span className="text-[#0B5DA7] font-semibold">
          Current Page
        </span>
      </nav>
    </div>
  </div>
</section>
```

---

### 5. Header Navigation & Logo Standards
- **Enlarged Clinic Logo**:
  - Image class: `h-14 sm:h-16 lg:h-[70px] w-auto object-contain`
  - Crisp high-resolution SVG/PNG logo rendering.
- **Header Action Buttons**:
  - Search trigger: `bg-[#0B5DA7] hover:bg-[#094b87] text-white`
  - Appointment CTA: `bg-[#E94E9A] hover:bg-[#d43f88] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-sm`
- **Navigation Links**:
  - Home, About, Treatments ▾, FAQ, Contact
  - Active page highlight: `#0B5DA7` or `#E94E9A` (underlined / colored font).

---

### 6. Team & Doctor Showcase Standards (`DoctorsTeamSection`)
- **Default Display Count**:
  - Always show only **2 primary doctors** initially (`doctorsData.slice(0, 2)`).
- **Interactive Toggle Button**:
  - Bottom CTA button: `VIEW ALL DOCTORS »` toggles `showAll` state.
  - When expanded, shows all team members and changes button to `SHOW LESS DOCTORS «`.
  - Button styling: `bg-[#0B5DA7] hover:bg-[#094b87] text-white font-bold text-xs uppercase px-8 py-3.5 rounded-sm`.

### 7. Treatments Dropdown & Dedicated Treatment Pages (`/treatments/:slug`)
- **2-Column Header Dropdown**:
  - Split evenly across **Left Column** (6 items: Maternity Care, Labour and Delivery, High-Risk Pregnancy Care, Preconception Counselling, Adolescence and Menopause Care, Fertility Care and Counselling) and **Right Column** (5 items: IUI, IVF / ICSI, TESA, Advanced Laparoscopy and Hysteroscopy, Gynaecological Care, Urogynaecology, Gynae-Oncology).
  - Width: `w-[580px] lg:w-[620px]`, centered beneath the Treatments trigger with subtle vertical divider and quick booking footer.
- **Complete 11 Treatments Specification**:
  - All 11 treatments defined in `src/data/treatmentsData.js` with exact user-specified slugs, titles, and highlight checklists.
  - Dedicated dynamic page: `TreatmentDetailPage.jsx` accessible via `#/treatments/:slug` and `/treatments/:slug` with full breadcrumbs, 55/45 ratio clinical overview, highlights list, consultation indicators, and quick-switch pills.

---

### 8. Professional Project Architecture & File Organization
```
src/
├── pages/                          # Page-level Views
│   ├── HomePage.jsx                # Full Homepage view
│   ├── AboutPage.jsx               # About Our Clinic page with banner & sections
│   ├── TreatmentDetailPage.jsx     # Dedicated dynamic treatment page for all 11 treatments
│   └── index.js                    # Barrel export for all pages
│
├── components/                     # Modular Reusable React Components
│   ├── layout/                     # Layout Components (Header, Footer, QuickContact)
│   │   ├── Header.jsx              # Site Header with enlarged logo & brand blue/pink CTAs
│   │   ├── Footer.jsx              # Untouched 3-tier Footer & Google Map
│   │   └── QuickContactBar.jsx     # Floating contact bar
│   ├── home/                       # Homepage Specific Components
│   │   ├── HeroBanner.jsx          # Hero display & video modal
│   │   ├── HealthcareServicesGrid.jsx # 2x2 Services Grid
│   │   ├── BlogNewsSection.jsx     # Clean blog feed without badge overlay
│   │   └── TreatmentsShowcase.jsx  # Tabbed clinical treatments
│   ├── about/                      # About Page Specific Components
│   │   ├── AboutBanner.jsx         # Crisp HD breadcrumb banner with soft gradient
│   │   ├── AboutCareSection.jsx    # 4-card feature care grid
│   │   ├── DoctorPatientCareSection.jsx # Content Left (55%) / Image Right (45%)
│   │   ├── QualificationsExpertiseSection.jsx # Image Left (45%) / Content Right (55%)
│   │   └── VisionMissionSection.jsx # 3-card guiding principles
│   ├── shared/                     # Shared Multi-page Components
│   │   ├── DoctorsTeamSection.jsx  # 2-doctor default showcase with toggle button
│   │   ├── AppointmentBookingSection.jsx # Consultation booking form
│   │   ├── PatientTestimonialsSection.jsx # Testimonials slider
│   │   └── AppointmentModal.jsx    # Consultation modal
│   └── index.js                    # Barrel export for all components
│
├── App.jsx                         # Main Application Shell
├── main.jsx                        # React entrypoint
└── index.css                       # Global design system tokens & base typography rules
```

---

### 8. Qualifications & Training Showcase Standards (`QualificationsSection.jsx`)
- **Alternating Left-Right Connected Vertical Timeline**:
  - **Node 01 (MBBS)**: Title & Subtitle on Left | Central Number Badge `01` | Clinical Description on Right
  - **Node 02 (MS - OB-GYN)**: Clinical Description on Left | Central Number Badge `02` | Title & Subtitle on Right
  - **Node 03 (DNB - OB-GYN)**: Title & Subtitle on Left | Central Number Badge `03` | Clinical Description on Right
  - **Node 04 (FMAS)**: Clinical Description on Left | Central Number Badge `04` | Title & Subtitle on Right
  - **Node 05 (ART Fellowship)**: Title & Subtitle on Left | Central Number Badge `05` | Clinical Description on Right
- **Visual Design & Structure**:
  - Continuous vertical gradient connector line (`bg-gradient-to-b from-[#0B5DA7] via-[#E94E9A] to-[#0B5DA7]`) down the center.
  - Horizontal connector lines with accent dots linking title/description to each circular milestone badge.
  - **Unboxed Presentation**: Clean typography seamlessly integrated into the soft `#F9FAFC` canvas without card boxes or frames.
  - **No Doctor Image**: Pure, structured timeline without doctor portraits or distracting card graphics.
  - **Header**: Centered 2-line layout (`Qualifications & Training` eyebrow + `Expert Care for Women’s & Fertility Health` headline with `#E94E9A` highlight) and brand divider.
  - **Action Button**: Centered bottom CTA `BOOK A CONSULTATION »` (`#0B5DA7` button).

---

### 9. Agency Credit & Footer Standards
- In `Footer.jsx`, always maintain the agency credit: `"Designed & Developed by Shree Krishna Digital Marketing"` linking to `https://shreekrishnadigitalmarketing.com`.
- Maintain the original 3-tier footer structure, emergency numbers, and interactive Google Map.

---

### 10. Operational Behavior Rules
- **Autonomy**: Execute code changes, installations, and verifications directly.
- **Section & Layout Preservation**: Never remove or collapse sections unless requested.
- **Qualifications Timeline Rule**: Always preserve the approved alternating left-right vertical timeline layout for Qualifications & Training.
- **Footer Integrity**: Always maintain the existing `Footer.jsx` design with `"Shree Krishna Digital Marketing"` credit.
- **Theme Integrity**: Use Royal Blue `#0B5DA7` and Maternity Pink `#E94E9A` across headers, buttons, cards, and highlights.

