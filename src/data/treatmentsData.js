/**
 * Comprehensive 11 Clinical Treatments Data Specification
 * Consumed by Header dropdown, TreatmentsShowcase, and TreatmentDetailPage (/treatments/:slug)
 * All content crafted in warm, patient-friendly, human language with dedicated icon assets.
 */

export const treatmentsData = [
  {
    id: 1,
    slug: 'maternity-care',
    title: 'Maternity Care',
    tabTitle: 'Maternity Care',
    category: 'Obstetrics & Pregnancy',
    tabIcon: '/images/icons/maternity-care.png',
    badgeIcon: '/images/icons/maternity-care.png',
    image: '/images/service/details/maternity-care-hero.jpg',
    bannerImage: '/images/service/banners/maternity-care-banner.jpg',
    clinicalImage: '/images/care/details/maternity-care-clinical.jpg',
    description:
      'Having a baby is one of life’s most special journeys. We are with you every step of the way—offering caring checkups, baby growth scans, and friendly answers to all your questions from early pregnancy through after your baby arrives.',
    highlights: [
      'Caring support through every month of pregnancy',
      'Regular checkups to keep you and baby healthy',
      'Clear ultrasound scans to watch your baby grow',
      'Helpful advice on healthy food, vitamins, and gentle exercise',
      'Support and comfort after your baby is born',
    ],
    bullets: [
      'Care For Every Trimester',
      'Baby Ultrasound & Scans',
      'Diet & Healthy Living Tips',
      'Support After Baby Arrives',
    ],
    overview:
      'Every pregnancy is different, and you deserve care that feels calm, gentle, and unhurried. Dr. Sakshi Naik takes the time to listen to your feelings, track your baby’s healthy development, and make sure you feel confident and supported from week one to delivery day.',
    situationsRecommended: [
      {
        text: 'You just found out you are pregnant and want to begin your regular checkups',
        icon: '/images/icons/pregnant.png',
      },
      {
        text: 'You want simple, practical advice on healthy foods, vitamins, and safe daily activity',
        icon: '/images/icons/maternity-care.png',
      },
      {
        text: 'You want to check your baby’s heartbeat, scans, and weekly milestones',
        icon: '/images/icons/scan.png',
      },
      {
        text: 'You are a first-time mother looking for friendly guidance and peace of mind',
        icon: '/images/icons/maternity-stroller.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'First Trimester (Weeks 1–12)',
        desc: 'First confirmation scan, basic health blood tests, nutrition tips, and early screening checks for baby’s wellness.',
      },
      {
        step: 'Second Trimester (Weeks 13–28)',
        desc: 'Detailed baby anomaly scan, tracking steady baby growth, checking blood sugar, and keeping blood pressure healthy.',
      },
      {
        step: 'Third Trimester & Delivery Prep (Weeks 29–40)',
        desc: 'Baby position and movement checks, discussing your delivery preferences, and preparing you calmly for labour day.',
      },
    ],
    keyBenefits: [
      'Step-by-step guidance tailored to each stage of your pregnancy',
      'Gentle checkups to keep both you and your baby safe and healthy',
      'Warm, unhurried visits where all your questions are always welcomed',
      'A dependable care team ready whenever you need extra help or reassurance',
    ],
    importantConsiderations:
      'Keeping up with your scheduled checkups, staying well hydrated, taking your prescribed prenatal vitamins, and calling us promptly if you notice any unusual fluid leakage or sudden drops in baby movements.',
    faqs: [
      {
        question: 'How frequently should I schedule my pregnancy checkups?',
        answer:
          'In the early months, visits are usually once a month. As your due date gets closer, we see you every two weeks, and then once a week in the final month to make sure you and baby are doing great.',
      },
      {
        question: 'What dietary changes are most helpful during early pregnancy?',
        answer:
          'Focus on wholesome, balanced meals with fresh green vegetables, lentils, eggs, fruits, and plenty of clean water. Dr. Sakshi will also recommend folic acid to support your baby’s healthy growth.',
      },
      {
        question: 'Can I continue working and staying active while pregnant?',
        answer:
          'Yes, absolutely! Most mothers with smooth pregnancies can comfortably continue working and enjoy light activities like brisk walking or prenatal yoga, as long as they feel comfortable.',
      },
    ],
  },
  {
    id: 2,
    slug: 'labour-and-delivery',
    title: 'Labour and Delivery',
    tabTitle: 'Labour and Delivery',
    category: 'Obstetrics & Pregnancy',
    tabIcon: '/images/icons/maternity (1).png',
    badgeIcon: '/images/icons/maternity (1).png',
    image: '/images/service/details/labour-delivery-hero.jpg',
    bannerImage: '/images/service/banners/labour-delivery-banner.jpg',
    clinicalImage: '/images/care/details/labour-delivery-clinical.jpg',
    description:
      'Bringing your baby into the world should feel calm, safe, and deeply supported. We guide you through gentle birth preparation, encourage natural delivery whenever possible, and stay by your side with 24/7 care.',
    highlights: [
      'Personalized delivery guidance and birth planning',
      'Encouragement for gentle, natural normal birth',
      'Modern pain relief and epidural options for comfort',
      'Continuous heart tracking for baby during labour',
      'Round-the-clock medical care and immediate newborn support',
    ],
    bullets: [
      'Natural Birth Encouraged',
      'Painless Delivery Options',
      'Baby Heartbeat Monitoring',
      '24/7 Delivery Team On Hand',
    ],
    overview:
      'Dr. Sakshi Naik believes every mother deserves a respectful, reassuring birthing experience. Whether you are aiming for a natural vaginal birth, considering painless delivery options, or need a safe planned delivery, we prioritize your comfort, dignity, and baby’s safety at every moment.',
    situationsRecommended: [
      {
        text: 'You are in your third trimester and want to create a calm, personalized birth plan',
        icon: '/images/icons/maternity.png',
      },
      {
        text: 'You want to aim for a natural normal delivery with compassionate support',
        icon: '/images/icons/maternity-feet.png',
      },
      {
        text: 'You are interested in painless delivery options (epidural) to stay relaxed during labour',
        icon: '/images/icons/medical.png',
      },
      {
        text: 'You have had a previous C-section and want to discuss normal delivery (VBAC)',
        icon: '/images/icons/doctor.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Labour Onset & Assessment',
        desc: 'Checking your progress, gently monitoring baby’s heartbeat, and helping you find comfortable breathing and resting positions.',
      },
      {
        step: 'Active Labour & Pain Management',
        desc: 'Guiding you through contractions with soothing techniques, movement, and modern painless epidural options if you choose.',
      },
      {
        step: 'Delivery & Welcoming Your Baby',
        desc: 'Safe delivery of your baby, immediate skin-to-skin cuddles for bonding, and gentle care as you begin nursing.',
      },
    ],
    keyBenefits: [
      'A peaceful, mother-friendly environment where you feel respected and heard',
      'Continuous listening and baby heart monitoring throughout your labour',
      'Safe and modern pain relief options so you stay relaxed and comfortable',
      'An experienced team ready around the clock for any emergency support',
    ],
    importantConsiderations:
      'Every birth unfolds in its own unique way. While natural birth is supported whenever safe, having an open mind and trusting medical guidance ensures that both you and your baby remain completely safe.',
    faqs: [
      {
        question: 'When should I head to the hospital for delivery?',
        answer:
          'Head in when contractions occur regularly every 5 minutes, if your water breaks, or if you notice any bleeding. You can also call our team anytime you feel unsure or need reassurance.',
      },
      {
        question: 'Is painless delivery (epidural analgesia) safe?',
        answer:
          'Yes, it is very safe and widely used. It gently numbs intense labour pain while keeping you awake, alert, and fully able to push when it is time to meet your baby.',
      },
      {
        question: 'Will I be able to hold my baby right after birth?',
        answer:
          'Yes! Whenever both you and baby are doing well, we encourage immediate skin-to-skin cuddles so you can bond and start feeding right away.',
      },
    ],
  },
  {
    id: 3,
    slug: 'high-risk-pregnancy-care',
    title: 'High-Risk Pregnancy Care',
    tabTitle: 'High-Risk Pregnancy Care',
    category: 'Maternal-Fetal Medicine',
    tabIcon: '/images/icons/pregnant.png',
    badgeIcon: '/images/icons/pregnant.png',
    image: '/images/service/details/high-risk-pregnancy-hero.jpg',
    bannerImage: '/images/service/banners/high-risk-pregnancy-banner.jpg',
    clinicalImage: '/images/care/details/high-risk-pregnancy-clinical.jpg',
    description:
      'When a pregnancy needs extra medical attention, we provide close, watchful care and constant reassurance. From blood pressure and blood sugar tracking to multiple babies, we help keep you and your baby safe all the way to delivery.',
    highlights: [
      'Specialized care for complex and high-risk pregnancies',
      'Frequent health checks and growth scans',
      'Blood sugar and blood pressure management',
      'Caring guidance for mothers aged 35 or older',
      'Full hospital and newborn intensive care backup',
    ],
    bullets: [
      'Close Growth & Health Scans',
      'Blood Pressure & Sugar Control',
      'Twin & Multiple Baby Care',
      'Specialist Hospital Backup',
    ],
    overview:
      'Hearing that your pregnancy is high-risk can feel scary, but with the right care and early steps, most mothers go on to have healthy babies. Dr. Sakshi Naik monitors you closely, explains every test in plain words, and stays ahead of potential issues so you can breathe easier.',
    situationsRecommended: [
      {
        text: 'You are expecting a baby at age 35 or older',
        icon: '/images/icons/woman.png',
      },
      {
        text: 'You have high blood pressure, diabetes, thyroid issues, or other existing conditions',
        icon: '/images/icons/stethoscope.png',
      },
      {
        text: 'You develop high blood sugar (gestational diabetes) or high BP during pregnancy',
        icon: '/images/icons/pregnant (1).png',
      },
      {
        text: 'You are carrying twins or have had difficult pregnancies or miscarriages in the past',
        icon: '/images/icons/fetus.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Early Health Review & Planning',
        desc: 'Reviewing your medical background, scheduling targeted scans, and setting up a clear, reassuring roadmap for your pregnancy.',
      },
      {
        step: 'Closer Monitoring & Guidance',
        desc: 'More frequent checkups, simple home charts for blood pressure or sugar, and serial growth scans to watch baby thrive.',
      },
      {
        step: 'Safe Delivery Timing & Newborn Backup',
        desc: 'Choosing the safest gestational week for delivery with trusted newborn intensive care (NICU) backup ready on standby.',
      },
    ],
    keyBenefits: [
      'Catching small changes early before they turn into bigger concerns',
      'Closer checkups and clear guidance to help you carry full term safely',
      'A calm, reassuring doctor who takes the fear out of complicated situations',
      'Full hospital and newborn intensive care (NICU) backup ready if needed',
    ],
    importantConsiderations:
      'Following simple food recommendations, regularly checking your blood pressure or sugar at home if advised, and never skipping scheduled baby ultrasound scans.',
    faqs: [
      {
        question: 'Does a high-risk pregnancy automatically mean I need a C-section?',
        answer:
          'Not at all. Many mothers with high-risk factors have safe normal deliveries. We keep a close eye on you and only suggest a C-section if it is the safest choice for you or your baby.',
      },
      {
        question: 'How do you help manage gestational diabetes?',
        answer:
          'We start with simple food tweaks and gentle daily walks. If your blood sugar still runs high, we guide you through safe, baby-friendly medicines to keep numbers in a healthy range.',
      },
      {
        question: 'What warning signs should I never ignore in pregnancy?',
        answer:
          'Call us right away if you get a bad headache that won’t go away, sudden swelling in your face or hands, blurry vision, severe tummy pain, or notice baby moving less than usual.',
      },
    ],
  },
  {
    id: 4,
    slug: 'preconception-counselling',
    title: 'Preconception Counselling',
    tabTitle: 'Preconception Counselling',
    category: 'Reproductive Health',
    tabIcon: '/images/icons/consultant (1).png',
    badgeIcon: '/images/icons/consultant (1).png',
    image: '/images/service/details/preconception-hero.jpg',
    bannerImage: '/images/service/banners/preconception-banner.jpg',
    clinicalImage: '/images/care/details/preconception-clinical.jpg',
    description:
      'Planning for a baby starts well before you see a positive test. We help you and your partner check your health, correct vitamin levels, balance your hormones, and enter pregnancy feeling ready and confident.',
    highlights: [
      'Pre-pregnancy consultation and health planning',
      'Routine blood and vitamin assessments before conception',
      'Help finding your natural fertile days',
      'Advice on making everyday medicines safe for pregnancy',
      'Warm guidance for couples preparing to start a family',
    ],
    bullets: [
      'Pre-Pregnancy Health Checks',
      'Folic Acid & Vitamin Advice',
      'Finding Your Fertile Days',
      'Friendly Couple Guidance',
    ],
    overview:
      'Preparing your body ahead of time gives your future baby the healthiest possible start. Dr. Sakshi Naik sits down with couples to review everyday habits, track fertile days, adjust any regular medicines, and make sure you feel completely supported on your road to parenthood.',
    situationsRecommended: [
      {
        text: 'You and your partner are planning to start trying for a baby soon',
        icon: '/images/icons/consultant.png',
      },
      {
        text: 'Your periods are irregular and you are not sure when your fertile days are',
        icon: '/images/icons/uterus.png',
      },
      {
        text: 'You are taking daily medicines and want to know if they are safe for pregnancy',
        icon: '/images/icons/medical-symbol.png',
      },
      {
        text: 'You or your family have health conditions you want to discuss before conceiving',
        icon: '/images/icons/staff.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Friendly Couple Health Review',
        desc: 'Reviewing medical backgrounds, family history, vaccine status, and everyday lifestyle habits for both partners.',
      },
      {
        step: 'Simple Health & Hormone Checks',
        desc: 'Routine blood tests for thyroid, hemoglobin, blood sugar, and a quick ultrasound to check your uterus and ovaries.',
      },
      {
        step: 'Personalized Nutrition & Timing Plan',
        desc: 'Starting folic acid, giving simple diet tips, and calculating your most fertile days to make conceiving easier.',
      },
    ],
    keyBenefits: [
      'Starting essential vitamins early to support baby’s healthy brain and spine',
      'Making sure any chronic health issues are well-managed before getting pregnant',
      'Learning your natural fertile window so you can conceive without stress',
      'A shared, comfortable space for both partners to ask questions openly',
    ],
    importantConsiderations:
      'Coming in for a visit about 3 months before you start trying gives your body plenty of time to build up healthy vitamin levels and adjust any medications safely.',
    faqs: [
      {
        question: 'When is the best time to come in for pre-pregnancy advice?',
        answer:
          'About 3 to 6 months before you plan to start trying. This gives your body enough time to build up healthy vitamin levels and review any current medications.',
      },
      {
        question: 'Why is folic acid so important before getting pregnant?',
        answer:
          'Folic acid is a simple vitamin that helps your baby’s spine and brain develop properly in the very first weeks, often before you even realize you are pregnant.',
      },
      {
        question: 'Should my partner come along to the consultation?',
        answer:
          'Yes, please do! Making a healthy baby is a team effort, and lifestyle habits for both partners make a real difference in conceiving easily.',
      },
    ],
  },
  {
    id: 5,
    slug: 'adolescence-and-menopause-care',
    title: 'Adolescence and Menopause Care',
    tabTitle: 'Adolescence & Menopause Care',
    category: 'Lifecycle Wellness',
    tabIcon: '/images/icons/woman (1).png',
    badgeIcon: '/images/icons/woman (1).png',
    image: '/images/service/details/adolescence-menopause-hero.jpg',
    bannerImage: '/images/service/banners/adolescence-menopause-banner.jpg',
    clinicalImage: '/images/care/details/adolescence-menopause-clinical.jpg',
    description:
      'From your very first period to your transition through menopause, a woman’s body goes through major changes. We provide kind, understanding care for teens dealing with period problems, as well as comforting solutions for women navigating menopause.',
    highlights: [
      'Gentle care for teenage period cramps and irregular cycles',
      'Help with teenage hormonal concerns and PCOS',
      'Practical relief for hot flashes, night sweats, and mood changes',
      'Long-term bone strength and heart wellness after menopause',
      'A safe, private space to talk through intimate health concerns',
    ],
    bullets: [
      'PCOS & Teen Period Care',
      'Period Pain Relief',
      'Hot Flashes & Sleep Help',
      'Bone & Hormone Wellness',
    ],
    overview:
      'Hormonal shifts can affect your mood, sleep, energy, and self-confidence. Dr. Sakshi Naik provides a warm, private space where young girls and mature women alike can speak openly without feeling judged, finding gentle, lasting relief that fits their daily lives.',
    situationsRecommended: [
      {
        text: 'Young girls suffering from severe period pain, heavy bleeding, or missed cycles',
        icon: '/images/icons/woman (1).png',
      },
      {
        text: 'Teenagers dealing with acne, sudden weight changes, or signs of PCOS',
        icon: '/images/icons/uterus.png',
      },
      {
        text: 'Women in their 40s or 50s troubled by hot flashes, night sweats, or mood swings',
        icon: '/images/icons/woman.png',
      },
      {
        text: 'Women after menopause wanting to protect their bones, heart, and general vitality',
        icon: '/images/icons/medical.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Caring, Private Conversation',
        desc: 'A relaxed, non-invasive discussion about your symptoms, everyday routines, sleep quality, and cycle patterns.',
      },
      {
        step: 'Simple Hormone & Health Tests',
        desc: 'Checking basic hormone levels, thyroid function, vitamin D levels, and performing a gentle ultrasound if needed.',
      },
      {
        step: 'Tailored Plan For Relief',
        desc: 'Using balanced nutrition, healthy lifestyle changes, or gentle medicines to ease discomfort and restore balance.',
      },
    ],
    keyBenefits: [
      'Brings balance back to your monthly cycles and eases intense period cramps',
      'Helps teens understand their changing bodies with confidence and comfort',
      'Soothes hot flashes, mood changes, and sleep trouble during menopause',
      'Keeps your bones strong and your heart healthy for years to come',
    ],
    importantConsiderations:
      'Hormones naturally change over time. Having a friendly checkup once a year helps us adjust your care so your body stays comfortable through every stage of life.',
    faqs: [
      {
        question: 'Is it normal for a teenager’s periods to be irregular at first?',
        answer:
          'Yes, in the first year or two after periods start, cycles often take time to settle into a rhythm. However, if cycles are absent for months or cramps are very severe, a friendly checkup is a great idea.',
      },
      {
        question: 'How do I know if I am in perimenopause?',
        answer:
          'If you are in your 40s and notice your period dates jumping around, along with sudden hot flashes, trouble sleeping, or mood changes, your body is likely beginning this natural transition.',
      },
      {
        question: 'Can anything help with severe hot flashes and night sweats?',
        answer:
          'Yes! There are many helpful solutions, from simple diet and cooling lifestyle tweaks to gentle hormonal or non-hormonal medicines that Dr. Sakshi can guide you through.',
      },
    ],
  },
  {
    id: 6,
    slug: 'fertility-care-and-counselling',
    title: 'Fertility Care and Counselling',
    tabTitle: 'Fertility Care & Counselling',
    category: 'Fertility & Conception',
    tabIcon: '/images/icons/fertilization.png',
    badgeIcon: '/images/icons/fertilization.png',
    image: '/images/service/details/fertility-care-hero.jpg',
    bannerImage: '/images/service/banners/fertility-care-banner.jpg',
    clinicalImage: '/images/care/details/fertility-care-clinical.jpg',
    description:
      'If conceiving is taking longer than you hoped, know that you are not alone. We offer gentle fertility testing, honest medical advice, and warm emotional encouragement to help you and your partner take clear, confident steps forward.',
    highlights: [
      'Gentle fertility consultation and couple evaluation',
      'Simple, step-by-step testing for both partners',
      'Personalized fertility plans without unnecessary procedures',
      'Empathetic counselling to ease worry and stress',
      'Continuous encouragement throughout your path to pregnancy',
    ],
    bullets: [
      'Ovarian Reserve & Egg Checks',
      'Semen Analysis & Male Check',
      'Gentle Tubal & Pelvic Scans',
      'Caring Couple Counselling',
    ],
    overview:
      'Trying to have a baby can be emotionally exhausting, and it is easy to feel overwhelmed by internet advice. Dr. Sakshi Naik takes a simple, step-by-step approach—identifying the exact cause, avoiding unnecessary tests, and giving you clear, hopeful options that feel right for you.',
    situationsRecommended: [
      {
        text: 'You have been trying to conceive for a year (or 6 months if age 35 or older)',
        icon: '/images/icons/consultant (1).png',
      },
      {
        text: 'You have irregular periods, PCOS, or have been told you might have endometriosis',
        icon: '/images/icons/egg-freezing.png',
      },
      {
        text: 'You are feeling stressed, confused, or exhausted from trying on your own',
        icon: '/images/icons/doctor (1).png',
      },
      {
        text: 'You want an honest, gentle fertility assessment for both you and your partner',
        icon: '/images/icons/fertilization.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Open Consultation For Both Partners',
        desc: 'Reviewing your cycle history, trying frequency, past tests, and addressing your questions in a relaxed setting.',
      },
      {
        step: 'Clear, Basic Investigations',
        desc: 'Checking egg reserve (AMH), watching egg growth on ultrasound, tubal checks, and a simple semen check for your partner.',
      },
      {
        step: 'Gentle, Step-by-Step Treatment Plan',
        desc: 'Starting with simple natural cycle tracking and mild medicines, moving forward only if and when you need it.',
      },
    ],
    keyBenefits: [
      'Honest, step-by-step diagnosis without pushing you into invasive procedures',
      'Equal care and testing for both partners, keeping things simple and clear',
      'Caring emotional support to help ease the stress and anxiety of waiting',
      'A customized plan designed around your biological timeline and comfort level',
    ],
    importantConsiderations:
      'Age plays a natural role in egg numbers and quality. Reaching out early gives you more gentle options and greater peace of mind along the way.',
    faqs: [
      {
        question: 'When should we see a doctor about fertility?',
        answer:
          'If you are under 35 and have been trying for a year, or 35 and older and trying for 6 months, a simple checkup can give you clear answers without delay.',
      },
      {
        question: 'Does having PCOS mean I cannot get pregnant?',
        answer:
          'Not at all! Many women with PCOS have beautiful, healthy babies. In most cases, simple lifestyle tweaks and mild medicines to help you release an egg are all that is needed.',
      },
      {
        question: 'Why is counselling so helpful during fertility care?',
        answer:
          'Waiting for a baby can take an emotional toll. Counselling gives you a safe space to talk through feelings, stay close with your partner, and feel calm and supported throughout the journey.',
      },
    ],
  },
  {
    id: 7,
    slug: 'iui-ivf-icsi-tesa',
    title: 'IUI, IVF / ICSI, TESA',
    tabTitle: 'IUI, IVF / ICSI, TESA',
    category: 'Assisted Reproduction',
    tabIcon: '/images/icons/ivf.png',
    badgeIcon: '/images/icons/ivf.png',
    image: '/images/service/details/ivf-icsi-hero.jpg',
    bannerImage: '/images/service/banners/ivf-icsi-banner.jpg',
    clinicalImage: '/images/care/details/ivf-icsi-clinical.jpg',
    description:
      'Modern reproductive medicine gives couples wonderful options when natural conception needs extra help. We guide you through treatments like IUI, IVF, ICSI, and TESA with gentle care, transparent advice, and genuine hope.',
    highlights: [
      'Gentle Intrauterine Insemination (IUI) guidance',
      'Personalized IVF protocols for optimal embryo growth',
      'ICSI treatment for male fertility concerns',
      'Minor, safe day-care sperm collection (TESA)',
      'Clear, transparent updates at every single stage',
      'Full emotional reassurance and patient counselling',
    ],
    bullets: [
      'Gentle Ovulation & IUI',
      'Personalized IVF Protocols',
      'ICSI For Male Fertility',
      'Safe Day-Care Procedures',
    ],
    overview:
      'Advanced fertility treatments don’t have to feel intimidating. Dr. Sakshi Naik explains every step clearly—from simple IUI to advanced IVF—so you always know what to expect, feel supported by a compassionate team, and have the highest chance of bringing your baby home.',
    situationsRecommended: [
      {
        text: 'Fallopian tubes are blocked or you have severe pelvic scarring',
        icon: '/images/icons/fallopian-tube.png',
      },
      {
        text: 'Low sperm count, low sperm movement, or situations needing specialized sperm collection',
        icon: '/images/icons/in-vitro.png',
      },
      {
        text: 'You have tried simpler fertility treatments or IUI without success',
        icon: '/images/icons/ivf.png',
      },
      {
        text: 'You have unexplained fertility delays and want advanced embryology support',
        icon: '/images/icons/in-vitro (1).png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'IUI (Intrauterine Insemination)',
        desc: 'Washed, healthy sperm are gently placed directly into the uterus right around the time an egg is released.',
      },
      {
        step: 'IVF & ICSI (In Vitro Fertilization)',
        desc: 'Carefully helping eggs mature, gentle egg collection under mild sedation, and pairing healthy sperm with each egg.',
      },
      {
        step: 'TESA (Testicular Sperm Collection)',
        desc: 'A quick, comfortable minor procedure using local numbing to collect healthy sperm when none are present in semen.',
      },
    ],
    keyBenefits: [
      'Helps overcome blocked tubes or severe sperm challenges with modern precision',
      'Uses gentle day-care procedures with quick, comfortable recovery',
      'Advanced lab techniques that give your embryos the strongest chance to grow',
      'Clear, honest updates at every stage so you always feel informed',
    ],
    importantConsiderations:
      'Assisted fertility treatments involve taking daily medications carefully and attending regular ultrasound scans so we can pick the perfect day for each step.',
    faqs: [
      {
        question: 'What is the main difference between IVF and ICSI?',
        answer:
          'In standard IVF, eggs and sperm are placed together in a clean dish to fertilize naturally. In ICSI, our embryologist gently places a single healthy sperm directly inside the egg, which helps greatly when sperm numbers are low.',
      },
      {
        question: 'Is egg collection painful?',
        answer:
          'No. The procedure takes only 15 to 20 minutes and is done while you are resting comfortably under light sedation. You won’t feel pain and can go home the same afternoon.',
      },
      {
        question: 'What is TESA and when is it helpful?',
        answer:
          'TESA is a minor procedure where a tiny needle collects healthy sperm directly from the testicles when none are found in the semen, giving couples a chance to use their own sperm for IVF.',
      },
    ],
  },
  {
    id: 8,
    slug: 'advanced-laparoscopy-and-hysteroscopy',
    title: 'Advanced Laparoscopy and Hysteroscopy',
    tabTitle: 'Laparoscopy & Hysteroscopy',
    category: 'Minimally Invasive Surgery',
    tabIcon: '/images/icons/laparoscopy.png',
    badgeIcon: '/images/icons/laparoscopy.png',
    image: '/images/service/details/laparoscopy-hero.jpg',
    bannerImage: '/images/service/banners/laparoscopy-banner.jpg',
    clinicalImage: '/images/care/details/laparoscopy-clinical.jpg',
    description:
      'When you need gynecological surgery, modern keyhole techniques mean tiny cuts, minimal discomfort, and a quick return home. We treat ovarian cysts, fibroids, and endometriosis with gentle, precise care.',
    highlights: [
      'Keyhole surgery with tiny incisions and minimal marks',
      'Removal of ovarian cysts and uterine fibroids',
      'Gentle care for endometriosis and chronic pelvic pain',
      'Zero-cut hysteroscopy for womb-related concerns',
      'Fast recovery with most patients heading home within 24 hours',
    ],
    bullets: [
      'Cyst & Fibroid Removal',
      'Endometriosis Care',
      'Zero-Cut Hysteroscopy',
      'Home Within 24 Hours',
    ],
    overview:
      'Traditional surgery with large cuts and long hospital stays is rarely needed today. Using high-definition cameras and tiny instruments, Dr. Sakshi Naik treats pelvic problems through miniature keyholes, helping you heal quickly, with very little pain and barely visible marks.',
    situationsRecommended: [
      {
        text: 'Ovarian cysts that are persistent, causing pain, or not shrinking with medicine',
        icon: '/images/icons/laparoscopy.png',
      },
      {
        text: 'Uterine fibroids causing heavy bleeding, pelvic pressure, or pregnancy difficulties',
        icon: '/images/icons/uterus.png',
      },
      {
        text: 'Severe period pain or chronic pelvic pain caused by endometriosis',
        icon: '/images/icons/check.png',
      },
      {
        text: 'Uterine polyps or tissue bands inside the womb that need gentle removal',
        icon: '/images/icons/medical.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Laparoscopy (Keyhole Tummy Surgery)',
        desc: 'Performed through tiny 5mm keyhole marks using micro-cameras to safely remove cysts or fibroids while protecting your organs.',
      },
      {
        step: 'Hysteroscopy (Natural Opening Look)',
        desc: 'A tiny camera passes through the natural opening of the cervix into the womb without any external cuts, removing polyps easily.',
      },
      {
        step: 'Gentle, Speedy Recovery',
        desc: 'You can walk around comfortably the same evening, return home within 24 hours, and get back to normal daily life quickly.',
      },
    ],
    keyBenefits: [
      'Much less pain and soreness compared to traditional open surgery',
      'Tiny keyhole marks that heal cleanly and fade away over time',
      'Short hospital stays—most patients walk comfortably and head home within 24 hours',
      'Protects your delicate reproductive organs and helps preserve your future fertility',
    ],
    importantConsiderations:
      'Avoid heavy lifting or intense workouts for 2 to 3 weeks after surgery. Gentle walking and normal desk work can usually be resumed in just a few days.',
    faqs: [
      {
        question: 'How quickly can I get back to my normal routine after laparoscopy?',
        answer:
          'Most women walk around the hospital the same evening and go home within 24 hours. Light office work and normal daily routines can usually resume in 5 to 7 days.',
      },
      {
        question: 'Does a hysteroscopy leave any cuts on the outside of my tummy?',
        answer:
          'No! A hysteroscopy uses a tiny camera that passes naturally through the cervix into the womb. There are no cuts, no stitches, and no scars on your belly.',
      },
      {
        question: 'Can removing a fibroid help me conceive?',
        answer:
          'Yes, if a fibroid is sitting inside or pushing against the lining of your womb, removing it can make it much easier for an embryo to attach and grow safely.',
      },
    ],
  },
  {
    id: 9,
    slug: 'gynaecological-care',
    title: 'Gynaecological Care',
    tabTitle: 'Gynaecological Care',
    category: 'General Gynaecology',
    tabIcon: '/images/icons/fallopian-tube.png',
    badgeIcon: '/images/icons/fallopian-tube.png',
    image: '/images/service/details/gynaecological-care-hero.jpg',
    bannerImage: '/images/service/banners/gynaecological-care-banner.jpg',
    clinicalImage: '/images/care/details/gynaecological-care-clinical.jpg',
    description:
      'Your everyday reproductive health deserves attentive, respectful care. From irregular periods and pelvic pain to routine Pap smears and birth control advice, we provide a warm, private place to care for your body.',
    highlights: [
      'Friendly consultations for all general gynecological concerns',
      'Effective relief for heavy bleeding and severe period cramps',
      'Gentle routine Pap smears and preventive screenings',
      'Treatment for vaginal infections and pelvic discomfort',
      'Confidential family planning and contraception counsel',
    ],
    bullets: [
      'Period Cramp & Cycle Care',
      'Infection & Discharge Relief',
      'Gentle Pap Smear Checks',
      'Safe Birth Control Advice',
    ],
    overview:
      'Every woman deserves to feel comfortable, healthy, and understood. Whether you are dealing with troublesome period cramps, unusual discharge, or simply need your routine yearly checkup, Dr. Sakshi Naik offers friendly, non-judgmental guidance and gentle solutions.',
    situationsRecommended: [
      {
        text: 'Heavy bleeding, painful cramps, or periods that arrive unpredictably',
        icon: '/images/icons/uterus.png',
      },
      {
        text: 'Frequent vaginal itching, unusual discharge, or nagging pelvic pain',
        icon: '/images/icons/woman (1).png',
      },
      {
        text: 'Your regular annual well-woman checkup and preventive Pap smear test',
        icon: '/images/icons/check.png',
      },
      {
        text: 'Friendly advice on safe and reliable family planning or birth control options',
        icon: '/images/icons/consultant.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Private, Unhurried Consultation',
        desc: 'A relaxed discussion of your symptoms followed by a gentle, private examination with complete care for your comfort.',
      },
      {
        step: 'Simple In-Clinic Screenings',
        desc: 'Quick pelvic ultrasound scans, gentle Pap tests, and infection checks to identify what is causing your symptoms.',
      },
      {
        step: 'Clear, Practical Treatment',
        desc: 'Relieving pain and regulating your cycles with gentle medications and simple lifestyle advice tailored to you.',
      },
    ],
    keyBenefits: [
      'Catching small cervical or uterine changes early through simple screenings',
      'Real relief from exhausting period cramps and heavy monthly bleeding',
      'A safe, confidential space where you can discuss any intimate question openly',
      'Reliable, personalized contraceptive choices that match your lifestyle',
    ],
    importantConsiderations:
      'Having a quick Pap smear and well-woman check every 3 years is one of the easiest, most effective ways to protect your long-term health.',
    faqs: [
      {
        question: 'How often should I come in for a routine checkup?',
        answer:
          'A quick visit once a year is a wonderful way to keep tabs on your pelvic health, talk through any period changes, and stay up to date on preventive screenings.',
      },
      {
        question: 'Why are my periods so heavy and exhausting?',
        answer:
          'Heavy periods can stem from simple hormonal fluctuations, small uterine polyps, fibroids, or thyroid changes. Dr. Sakshi can easily check the cause and help you feel better.',
      },
      {
        question: 'Does a Pap smear hurt?',
        answer:
          'A Pap smear takes just a few seconds and usually feels like a quick, mild pinch or slight pressure. Taking slow, deep breaths helps you stay relaxed and comfortable.',
      },
    ],
  },
  {
    id: 10,
    slug: 'urogynaecology',
    title: 'Urogynaecology',
    tabTitle: 'Urogynaecology',
    category: 'Pelvic Floor Medicine',
    tabIcon: '/images/icons/uterus.png',
    badgeIcon: '/images/icons/uterus.png',
    image: '/images/service/details/urogynaecology-hero.jpg',
    bannerImage: '/images/service/banners/urogynaecology-banner.jpg',
    clinicalImage: '/images/care/details/urogynaecology-clinical.jpg',
    description:
      'Bladder leaks and pelvic heaviness are very common, but you don’t have to suffer in silence. We provide caring, confidential solutions to help strengthen your pelvic floor and restore your daily comfort and confidence.',
    highlights: [
      'Confidential care for bladder leakage when coughing or sneezing',
      'Support for urgent bladder urges and frequent bathroom trips',
      'Gentle treatments for pelvic organ prolapse and heaviness',
      'Pelvic floor muscle strengthening after childbirth',
      'Relief for recurring, painful urine infections',
    ],
    bullets: [
      'Bladder Leak Relief',
      'Pelvic Bulge & Prolapse Care',
      'Post-Baby Pelvic Strength',
      'Quick & Gentle Solutions',
    ],
    overview:
      'Many women feel shy or think that leaking urine when laughing or coughing is just a normal part of having babies or growing older. It is not something you have to live with. Dr. Sakshi Naik offers gentle, private care—starting with simple exercises and modern treatments that truly work.',
    situationsRecommended: [
      {
        text: 'Leaking a little urine when you cough, sneeze, laugh, or go for a run',
        icon: '/images/icons/woman.png',
      },
      {
        text: 'Feeling a sudden, uncontrollable urge to rush to the bathroom',
        icon: '/images/icons/stethoscope.png',
      },
      {
        text: 'A heavy, pulling feeling or noticing a bulge in the vaginal area (prolapse)',
        icon: '/images/icons/uterus.png',
      },
      {
        text: 'Pelvic weakness after having children or frequent, burning urine infections',
        icon: '/images/icons/maternity-care.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Gentle Pelvic Assessment',
        desc: 'A sensitive, private checkup to evaluate your pelvic muscles and understand exactly what is causing the leakage or heaviness.',
      },
      {
        step: 'Simple Non-Surgical Therapy',
        desc: 'Guided pelvic exercises (Kegels), bladder training tips, and comfortable silicone support rings (pessaries) if needed.',
      },
      {
        step: 'Modern Day-Care Solutions',
        desc: 'Quick 30-minute minor procedures that give lasting bladder support if non-surgical steps are not enough.',
      },
    ],
    keyBenefits: [
      'Stops embarrassing accidental leaks so you can laugh and exercise freely',
      'Relieves the dragging, heavy feeling in your pelvis and restores comfort',
      'Starts with simple, non-surgical therapies that fit into your daily life',
      'A warm, respectful environment where you can speak freely without embarrassment',
    ],
    importantConsiderations:
      'Never feel embarrassed to bring this up. Bladder leaks are very common and modern treatments are quick, gentle, and can give you your active life back completely.',
    faqs: [
      {
        question: 'Can simple exercises really stop urine leaks?',
        answer:
          'Yes! Correctly done pelvic floor exercises (Kegels) strengthen the muscles supporting your bladder and often cure or greatly improve mild to moderate leakage without any surgery.',
      },
      {
        question: 'What is a pessary and how does it help?',
        answer:
          'A pessary is a soft, flexible silicone ring placed inside the vagina to hold pelvic organs comfortably in place, offering immediate relief from prolapse without surgery.',
      },
      {
        question: 'Is surgery for bladder leakage complicated?',
        answer:
          'Not at all. Modern sling procedures take around 30 minutes, require only tiny incisions, and allow you to return home the same day and resume normal activities quickly.',
      },
    ],
  },
  {
    id: 11,
    slug: 'gynae-oncology',
    title: 'Gynae-Oncology',
    tabTitle: 'Gynae-Oncology',
    category: 'Preventive & Cancer Care',
    tabIcon: '/images/icons/oncology.png',
    badgeIcon: '/images/icons/oncology.png',
    image: '/images/service/details/gynae-oncology-hero.jpg',
    bannerImage: '/images/service/banners/gynae-oncology-banner.jpg',
    clinicalImage: '/images/care/details/gynae-oncology-clinical.jpg',
    description:
      'When it comes to reproductive wellness, early detection is everything. We provide gentle cancer screenings, HPV vaccines, and prompt evaluations for unusual bleeding or symptoms, walking beside you with clear and caring guidance.',
    highlights: [
      'Routine cancer screening and early wellness checks',
      'Cervical Pap smears and high-risk HPV testing',
      'Safe HPV vaccination for girls and women of all ages',
      'Urgent checks for post-menopausal bleeding or unusual symptoms',
      'Warm emotional guidance and family counselling',
    ],
    bullets: [
      'Routine Pap & HPV Tests',
      'Quick In-Clinic Checks',
      'HPV Vaccine For All Ages',
      'Caring Family Guidance',
    ],
    overview:
      'Hearing about cancer screenings can cause anxiety, but finding small changes early is the best way to stay healthy and safe. Dr. Sakshi Naik explains findings in simple, everyday language, conducts gentle in-clinic tests, and coordinates comprehensive care with warmth and deep empathy.',
    situationsRecommended: [
      {
        text: 'Any vaginal bleeding or spotting that happens after you have gone through menopause',
        icon: '/images/icons/ribbon.png',
      },
      {
        text: 'An abnormal Pap smear report or positive test for high-risk HPV',
        icon: '/images/icons/oncology.png',
      },
      {
        text: 'Ongoing tummy bloating, feelings of pelvic fullness, or unexpected weight loss',
        icon: '/images/icons/scan.png',
      },
      {
        text: 'A strong family history of breast, ovarian, or uterine health conditions',
        icon: '/images/icons/medical-symbol.png',
      },
    ],
    procedureCareDetails: [
      {
        step: 'Gentle Preventive Screening',
        desc: 'Routine Pap smears, HPV testing, and clear advice on the HPV vaccine to protect against cervical cancer.',
      },
      {
        step: 'Quick, In-Clinic Investigations',
        desc: 'Gentle magnified checks (colposcopy) and quick tissue samples when needed to give you answers without long waits.',
      },
      {
        step: 'Coordinated Expert Care & Support',
        desc: 'Working closely with trusted specialists if further treatment is needed, always keeping you and your family supported and informed.',
      },
    ],
    keyBenefits: [
      'Finds pre-cancerous cell changes years before they could ever turn into cancer',
      'Gentle in-clinic checks that give you fast answers without stressful waiting',
      'Clear, honest explanations that keep you and your family calm and well-informed',
      'Careful focus on protecting your fertility whenever safe and possible',
    ],
    importantConsiderations:
      'Cervical cancer is almost completely preventable with regular screening and the HPV vaccine. Never ignore any bleeding after menopause or persistent tummy bloating.',
    faqs: [
      {
        question: 'What is a colposcopy and does it hurt?',
        answer:
          'A colposcopy is simply a closer look at the cervix using a special magnifying lens and light, just like a standard checkup. It is quick, gentle, and causes very little discomfort.',
      },
      {
        question: 'Who should get the HPV vaccine?',
        answer:
          'The vaccine is recommended for girls and women from age 9 up to 45. It is a safe and highly effective way to protect against the viral strains that cause cervical cancer.',
      },
      {
        question: 'Is any bleeding after menopause considered abnormal?',
        answer:
          'Yes. Even slight spotting after menopause should always be checked by a doctor right away so we can easily find the cause and ensure you are completely safe.',
      },
    ],
  },
];

export const dropdownLeftTreatments = treatmentsData.slice(0, 6);
export const dropdownRightTreatments = treatmentsData.slice(6, 11);

export default treatmentsData;
