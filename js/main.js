/* ============================================================
   Scuola Di Danza Gabriella Thrull — Main Script
   ============================================================ */

/* --- Language switcher --- */
const translations = {
  it: {
    // Nav
    'nav-home':        'Home',
    'nav-school':      'La Scuola',
    'nav-directions':  'Direzioni',
    'nav-why':         'Perché Noi',
    'nav-teachers':    'Insegnanti',
    'nav-gallery':     'Galleria',
    'nav-schedule':    'Orario',
    'nav-prices':      'Prezzi',
    'nav-contact':     'Contatti',
    'nav-cta':         'Prenota una lezione',

    // Hero
    'hero-disciplines': 'Balletto · Body Ballet · Stretching · Lezioni Online',
    'hero-title-1': 'Scuola Di Danza',
    'hero-title-2': 'Gabriella Thrull',
    'hero-tagline': 'Postura elegante, forza, flessibilità e il piacere del movimento.',
    'hero-cta-1':   'Prova una lezione',
    'hero-cta-2':   'Le nostre direzioni',
    'hero-scroll':  'Scopri',

    // About
    'about-eyebrow':   'La Nostra Scuola',
    'about-title':     'Un luogo dove il balletto classico diventa accessibile a tutti.',
    'about-text-1':    "Uniamo l'estetica del balletto, un lavoro efficace sul corpo e un approccio rispettoso verso ogni allieva, indipendentemente dall'età e dal livello di preparazione.",
    'about-text-2':    'Che tu abbia 4 anni o 50, sia principiante o abbia già esperienza — la nostra scuola è il posto giusto per te.',
    'about-tag-1': 'Bambini', 'about-tag-2': 'Adolescenti', 'about-tag-3': 'Adulti',
    'about-tag-4': 'Principianti', 'about-tag-5': 'Avanzati',
    'about-cta': 'Scopri di più',
    'about-img': 'Foto della scuola',

    // Directions
    'dir-eyebrow': 'Le Nostre Discipline',
    'dir-title':   'Scegli la tua direzione',
    'dir-subtitle': 'Cinque percorsi pensati per età, obiettivi e livelli di preparazione diversi.',

    'dir1-age':  'Da 3 anni',
    'dir1-title': 'Balletto per Bambini',
    'dir1-text': 'Un percorso giocoso che introduce i più piccoli al mondo del balletto attraverso musica, movimento e immaginazione.',
    'dir1-f1': 'Coordinazione e ritmo',
    'dir1-f2': 'Postura corretta',
    'dir1-f3': 'Musicalità',
    'dir1-f4': 'Creatività e gioco',
    'dir1-cta': 'Scopri',

    'dir2-age':  'Adolescenti e Adulti',
    'dir2-title': 'Gruppo Professionisti',
    'dir2-text': 'Preparazione classica seria per chi vuole padroneggiare la tecnica del balletto ad alto livello.',
    'dir2-f1': 'Tecnica classica avanzata',
    'dir2-f2': 'Barre e centro',
    'dir2-f3': 'Repertorio',
    'dir2-f4': 'Preparazione a saggi e spettacoli',
    'dir2-cta': 'Scopri',

    'dir3-age':  'Adulti — Tutti i livelli',
    'dir3-title': 'Body Ballet',
    'dir3-text': 'Fitness ispirato al balletto classico. Il metodo perfetto per tonificare il corpo, migliorare la postura e acquisire grazia.',
    'dir3-f1': 'Tonificazione muscolare',
    'dir3-f2': 'Postura e portamento',
    'dir3-f3': 'Grazia e coordinazione',
    'dir3-f4': 'Senza esperienza richiesta',
    'dir3-cta': 'Scopri',

    'dir4-age':  'Tutti i livelli',
    'dir4-title': 'Stretching',
    'dir4-text': 'Sviluppo della flessibilità e della mobilità articolare. Ideale come complemento a qualsiasi disciplina sportiva.',
    'dir4-f1': 'Flessibilità e mobilità',
    'dir4-f2': 'Prevenzione degli infortuni',
    'dir4-f3': 'Recupero muscolare',
    'dir4-f4': 'Rilassamento profondo',
    'dir4-cta': 'Scopri',

    'dir5-age':  'Online · Tutti i livelli',
    'dir5-title': 'Lezioni Online',
    'dir5-text': 'Stretching e mantenimento del tono muscolare direttamente da casa tua. Lezioni in live e registrate.',
    'dir5-f1': 'Accesso da ovunque',
    'dir5-f2': 'Lezioni live e on-demand',
    'dir5-f3': 'Piano personalizzato',
    'dir5-f4': "Chat con l'insegnante",
    'dir5-cta': 'Scopri',

    // Why
    'why-eyebrow': 'I Nostri Punti di Forza',
    'why-title':   'Perché scegliere noi',
    'why-subtitle': 'Un ambiente professionale, accogliente e sicuro per la tua crescita.',
    'why1-title': 'Insegnanti Professioniste',
    'why1-text':  'Artiste e pedagogue con esperienza internazionale nel mondo del balletto.',
    'why2-title': 'Approccio Individuale',
    'why2-text':  'Ogni allieva è unica. Adattiamo il percorso alle tue esigenze e ai tuoi obiettivi.',
    'why3-title': 'Metodologia Sicura',
    'why3-text':  'Tecnica rigorosa e rispettosa del corpo, per progredire senza rischi di infortuni.',
    'why4-title': 'Atmosfera Accogliente',
    'why4-text':  'Una community di persone che condividono la passione per il movimento e la bellezza.',
    'why5-title': 'Gruppi Piccoli',
    'why5-text':  'Max 10–12 allieve per classe: più attenzione, più progressi, più divertimento.',
    'why6-title': 'Saggi e Master Class',
    'why6-text':  'Opportunità di esibirsi e partecipare a workshop con artisti ospiti.',

    // Teachers
    'teachers-eyebrow': 'Chi Insegna',
    'teachers-title':   'Le Nostre Insegnanti',
    'teachers-subtitle': 'Professioniste del balletto con esperienza internazionale.',
    'teacher1-role': 'Fondatrice · Prima Ballerina',
    'teacher1-bio': "Artista professionista del balletto con esperienza in Russia e in Europa. Laureata in Arte Coreografica. Specializzata nell'insegnamento a bambini e adulti con metodologie riconosciute a livello internazionale.",
    'teacher-placeholder': 'Foto',

    // Testimonials
    'test-eyebrow': 'Cosa Dicono di Noi',
    'test-title':   'Le voci delle nostre allieve',
    't1-text': '"Ho portato mia figlia a 4 anni e dopo un mese non vuole più smettere. La maestra è straordinaria, paziente e professionale."',
    't1-name': 'Sofia M.', 't1-role': 'Mamma di Elena, 4 anni',
    't2-text': '"Ho iniziato il Body Ballet a 42 anni senza nessuna esperienza. Ora mi sento più leggera, più sicura di me e adoro ogni lezione."',
    't2-name': 'Francesca B.', 't2-role': 'Body Ballet',
    't3-text': '"Lo stretching ha completamente cambiato il mio modo di muovermi. Dopo 3 mesi ho recuperato flessibilità che pensavo di aver perso per sempre."',
    't3-name': 'Marco R.', 't3-role': 'Stretching',

    // Gallery
    'gallery-eyebrow': 'Galleria',
    'gallery-title':   'Momenti della nostra scuola',
    'gallery-ph': 'Foto',

    // Schedule
    'sched-eyebrow': 'Orario',
    'sched-title':   'Calendario delle lezioni',
    'sched-subtitle': 'Orario corrente. Per variazioni stagionali scrivici.',
    'sched-tab-week': 'Settimana',
    'sched-tab-online': 'Online',
    'sched-th-day': 'Giorno',
    'sched-th-time': 'Orario',
    'sched-th-class': 'Lezione',
    'sched-th-level': 'Livello',
    'sched-th-spots': 'Posti',
    'sched-spots-ok': 'Disponibili',
    'sched-spots-few': 'Ultimi posti',
    'sched-cta': 'Prenota una lezione di prova',

    // Prices
    'prices-eyebrow': 'Prezzi',
    'prices-title':   'Tariffe semplici e trasparenti',
    'prices-subtitle': 'Prima lezione di prova gratuita per nuovi allievi.',
    'p1-label': 'Lezione di prova', 'p1-amount': 'Gratis', 'p1-period': 'prima volta',
    'p1-f1': '1 lezione singola', 'p1-f2': 'Scelta del corso', 'p1-f3': 'Nessun impegno',
    'p2-label': 'Mini abbonamento', 'p2-amount': '€ 60', 'p2-period': '4 lezioni / mese',
    'p2-f1': '4 lezioni al mese', 'p2-f2': 'Validità 5 settimane', 'p2-f3': 'Ideale per iniziare',
    'p2-badge': 'Più popolare',
    'p3-label': 'Abbonamento', 'p3-amount': '€ 110', 'p3-period': '8 lezioni / mese',
    'p3-f1': '8 lezioni al mese', 'p3-f2': 'Validità 10 settimane', 'p3-f3': 'Risparmio del 10%',
    'p4-label': 'Lezione individuale', 'p4-amount': '€ 50', 'p4-period': '60 minuti',
    'p4-f1': 'Attenzione esclusiva', 'p4-f2': 'Piano personalizzato', 'p4-f3': 'Orario flessibile',
    'prices-note': '* I prezzi sono indicativi. Contattaci per informazioni aggiornate e pacchetti personalizzati.',

    // FAQ
    'faq-eyebrow': 'Domande Frequenti',
    'faq-title':   'Hai domande? Ecco le risposte.',
    'faq-q1': "È necessaria un'esperienza pregressa?",
    'faq-a1': 'Assolutamente no. La maggior parte dei nostri corsi — Body Ballet, Stretching e Online — è pensata per chi parte da zero. Anche per il balletto classico accogliamo principianti di tutte le età.',
    'faq-q2': 'Da che età si può iniziare?',
    'faq-a2': 'Il corso per bambini inizia dai 3 anni. Gli adulti possono iniziare a qualsiasi età — la nostra allieva più "coraggiosa" ha iniziato a 65 anni!',
    'faq-q3': 'Cosa portare alla prima lezione?',
    'faq-a3': 'Per il balletto: calze a rete, body o leggings attillati e scarpette da balletto (rosa per le bambine). Per Body Ballet e Stretching: abbigliamento sportivo comodo e calze antiscivolo o calzini.',
    'faq-q4': "Si può iniziare in qualsiasi momento dell'anno?",
    'faq-a4': 'Sì. Puoi iscriverti in qualsiasi momento. Ti consigliamo di contattarci prima per valutare insieme il corso più adatto a te.',
    'faq-q5': 'Come funzionano le lezioni online?',
    'faq-a5': "Le lezioni online si svolgono via Zoom. Ricevi il link dopo l'iscrizione. Sono previste sia sessioni live che lezioni registrate da fruire quando vuoi.",
    'faq-q6': 'Ci sono spettacoli o saggi?',
    'faq-a6': "Sì! Ogni anno organizziamo un saggio di fine anno e partecipiamo a eventi e master class con insegnanti ospiti. È un'esperienza bellissima anche per le principianti.",

    // Contact
    'contact-eyebrow': 'Contatti',
    'contact-title':   'Vieni a trovarci',
    'contact-subtitle': 'Scrivici, chiamaci o compila il modulo — risponderemo entro 24 ore.',
    'contact-addr-label': 'Indirizzo',
    'contact-addr-val': 'Via [Nome Via], [Numero] · [Città], Italia',
    'contact-phone-label': 'Telefono / WhatsApp',
    'contact-phone-val': '+39 000 000 0000',
    'contact-email-label': 'Email',
    'contact-email-val': 'info@gabriellathrull.it',
    'contact-hours-label': 'Orari di risposta',
    'contact-hours-val': 'Lun – Sab, 9:00 – 20:00',
    'form-name': 'Nome e cognome',
    'form-email': 'Email',
    'form-phone': 'Telefono (opzionale)',
    'form-course': 'Corso di interesse',
    'form-course-opt0': 'Seleziona un corso...',
    'form-course-opt1': 'Balletto per Bambini',
    'form-course-opt2': 'Gruppo Professionisti',
    'form-course-opt3': 'Body Ballet',
    'form-course-opt4': 'Stretching',
    'form-course-opt5': 'Lezioni Online',
    'form-message': 'Messaggio (opzionale)',
    'form-message-ph': 'Raccontaci di te, della tua esperienza, delle tue domande...',
    'form-consent': 'Acconsento al trattamento dei dati personali per ricevere informazioni sui corsi.',
    'form-submit': 'Invia richiesta',
    'form-success': '✓ Grazie! Ti risponderemo entro 24 ore.',
    'map-ph': 'Mappa · inserisci indirizzo reale per Google Maps',

    // Footer
    'footer-tagline': 'Dove il balletto classico diventa accessibile a tutti, con eleganza e passione.',
    'footer-links': 'Link Utili',
    'footer-courses': 'Corsi',
    'footer-info': 'Informazioni',
    'footer-copyright': '© 2025 Scuola Di Danza Gabriella Thrull. Tutti i diritti riservati.',
    'footer-privacy': 'Privacy Policy',

    // Sticky CTA
    'sticky-cta': 'Prenota una lezione',
  },

  en: {
    // Nav
    'nav-home':        'Home',
    'nav-school':      'School',
    'nav-directions':  'Directions',
    'nav-why':         'Why Us',
    'nav-teachers':    'Teachers',
    'nav-gallery':     'Gallery',
    'nav-schedule':    'Schedule',
    'nav-prices':      'Prices',
    'nav-contact':     'Contacts',
    'nav-cta':         'Book a lesson',

    // Hero
    'hero-disciplines': 'Ballet · Body Ballet · Stretching · Online Lessons',
    'hero-title-1': 'Scuola Di Danza',
    'hero-title-2': 'Gabriella Thrull',
    'hero-tagline': 'Elegant posture, strength, flexibility and the joy of movement.',
    'hero-cta-1':   'Try a lesson',
    'hero-cta-2':   'Our directions',
    'hero-scroll':  'Discover',

    // About
    'about-eyebrow':   'Our School',
    'about-title':     'A place where classical ballet becomes accessible to everyone.',
    'about-text-1':    'We combine the aesthetics of ballet, effective body work and a respectful approach to every student, regardless of age and level.',
    'about-text-2':    'Whether you are 4 or 50, a beginner or experienced — our school is the right place for you.',
    'about-tag-1': 'Children', 'about-tag-2': 'Teenagers', 'about-tag-3': 'Adults',
    'about-tag-4': 'Beginners', 'about-tag-5': 'Advanced',
    'about-cta': 'Learn more',
    'about-img': 'Studio photo',

    // Directions
    'dir-eyebrow': 'Our Disciplines',
    'dir-title':   'Choose your direction',
    'dir-subtitle': 'Five paths designed for different ages, goals and levels.',

    'dir1-age':  'From 3 years',
    'dir1-title': 'Ballet for Children',
    'dir1-text': 'A playful journey that introduces the little ones to the world of ballet through music, movement and imagination.',
    'dir1-f1': 'Coordination and rhythm',
    'dir1-f2': 'Correct posture',
    'dir1-f3': 'Musicality',
    'dir1-f4': 'Creativity and play',
    'dir1-cta': 'Learn more',

    'dir2-age':  'Teens and Adults',
    'dir2-title': 'Professional Group',
    'dir2-text': 'Serious classical training for those who want to master ballet technique at a high level.',
    'dir2-f1': 'Advanced classical technique',
    'dir2-f2': 'Barre and centre',
    'dir2-f3': 'Repertoire',
    'dir2-f4': 'Performances and recitals',
    'dir2-cta': 'Learn more',

    'dir3-age':  'Adults — All levels',
    'dir3-title': 'Body Ballet',
    'dir3-text': 'Fitness inspired by classical ballet. The perfect method to tone the body, improve posture and acquire grace.',
    'dir3-f1': 'Muscle toning',
    'dir3-f2': 'Posture and carriage',
    'dir3-f3': 'Grace and coordination',
    'dir3-f4': 'No experience needed',
    'dir3-cta': 'Learn more',

    'dir4-age':  'All levels',
    'dir4-title': 'Stretching',
    'dir4-text': 'Flexibility and joint mobility development. Ideal as a complement to any sport or dance discipline.',
    'dir4-f1': 'Flexibility and mobility',
    'dir4-f2': 'Injury prevention',
    'dir4-f3': 'Muscle recovery',
    'dir4-f4': 'Deep relaxation',
    'dir4-cta': 'Learn more',

    'dir5-age':  'Online · All levels',
    'dir5-title': 'Online Lessons',
    'dir5-text': 'Stretching and body toning from the comfort of your home. Live and recorded classes available.',
    'dir5-f1': 'Access from anywhere',
    'dir5-f2': 'Live and on-demand',
    'dir5-f3': 'Personalised plan',
    'dir5-f4': 'Chat with teacher',
    'dir5-cta': 'Learn more',

    // Why
    'why-eyebrow': 'Our Strengths',
    'why-title':   'Why choose us',
    'why-subtitle': 'A professional, welcoming and safe environment for your growth.',
    'why1-title': 'Professional Teachers',
    'why1-text':  'Artists and educators with international experience in the ballet world.',
    'why2-title': 'Individual Approach',
    'why2-text':  'Every student is unique. We tailor the path to your needs and goals.',
    'why3-title': 'Safe Methodology',
    'why3-text':  'Rigorous technique that respects your body, so you progress without injury risk.',
    'why4-title': 'Welcoming Atmosphere',
    'why4-text':  'A community of people sharing a passion for movement and beauty.',
    'why5-title': 'Small Groups',
    'why5-text':  'Max 10–12 students per class: more attention, more progress, more fun.',
    'why6-title': 'Recitals & Master Classes',
    'why6-text':  'Opportunities to perform and attend workshops with guest artists.',

    // Teachers
    'teachers-eyebrow': 'Who Teaches',
    'teachers-title':   'Our Teachers',
    'teachers-subtitle': 'Ballet professionals with international experience.',
    'teacher1-role': 'Founder · Prima Ballerina',
    'teacher1-bio': 'Professional ballet artist with experience in Russia and Europe. Graduated in Choreographic Art. Specialised in teaching children and adults using internationally recognised methodologies.',
    'teacher-placeholder': 'Photo',

    // Testimonials
    'test-eyebrow': 'What They Say',
    'test-title':   'Voices of our students',
    't1-text': '"I brought my daughter at age 4 and after a month she never wants to stop. The teacher is extraordinary, patient and professional."',
    't1-name': 'Sofia M.', 't1-role': 'Mother of Elena, 4 years old',
    't2-text': '"I started Body Ballet at 42 with no experience. Now I feel lighter, more confident and I love every class."',
    't2-name': 'Francesca B.', 't2-role': 'Body Ballet',
    't3-text': '"Stretching has completely changed the way I move. After 3 months I recovered flexibility I thought I had lost forever."',
    't3-name': 'Marco R.', 't3-role': 'Stretching',

    // Gallery
    'gallery-eyebrow': 'Gallery',
    'gallery-title':   'Moments from our school',
    'gallery-ph': 'Photo',

    // Schedule
    'sched-eyebrow': 'Schedule',
    'sched-title':   'Class timetable',
    'sched-subtitle': 'Current schedule. Contact us for seasonal updates.',
    'sched-tab-week': 'Weekly',
    'sched-tab-online': 'Online',
    'sched-th-day': 'Day',
    'sched-th-time': 'Time',
    'sched-th-class': 'Class',
    'sched-th-level': 'Level',
    'sched-th-spots': 'Spots',
    'sched-spots-ok': 'Available',
    'sched-spots-few': 'Last spots',
    'sched-cta': 'Book a trial lesson',

    // Prices
    'prices-eyebrow': 'Prices',
    'prices-title':   'Simple, transparent pricing',
    'prices-subtitle': 'First trial lesson is free for new students.',
    'p1-label': 'Trial lesson', 'p1-amount': 'Free', 'p1-period': 'first time',
    'p1-f1': '1 single lesson', 'p1-f2': 'Course selection', 'p1-f3': 'No commitment',
    'p2-label': 'Mini pass', 'p2-amount': '€ 60', 'p2-period': '4 lessons / month',
    'p2-f1': '4 lessons per month', 'p2-f2': 'Valid 5 weeks', 'p2-f3': 'Perfect for beginners',
    'p2-badge': 'Most popular',
    'p3-label': 'Monthly pass', 'p3-amount': '€ 110', 'p3-period': '8 lessons / month',
    'p3-f1': '8 lessons per month', 'p3-f2': 'Valid 10 weeks', 'p3-f3': '10% saving',
    'p4-label': 'Private lesson', 'p4-amount': '€ 50', 'p4-period': '60 minutes',
    'p4-f1': 'Exclusive attention', 'p4-f2': 'Personalised plan', 'p4-f3': 'Flexible schedule',
    'prices-note': '* Prices are indicative. Contact us for up-to-date info and custom packages.',

    // FAQ
    'faq-eyebrow': 'FAQ',
    'faq-title':   'Got questions? Here are the answers.',
    'faq-q1': 'Is prior experience required?',
    'faq-a1': 'Absolutely not. Most of our courses — Body Ballet, Stretching and Online — are designed for beginners. We also welcome ballet beginners of all ages.',
    'faq-q2': 'From what age can one start?',
    'faq-a2': 'The children\'s course starts from age 3. Adults can start at any age — our "bravest" student started at 65!',
    'faq-q3': 'What to bring to the first lesson?',
    'faq-a3': 'For ballet: fishnet tights, a leotard or fitted leggings and ballet shoes (pink for girls). For Body Ballet and Stretching: comfortable sportswear and non-slip socks.',
    'faq-q4': 'Can I join at any time of year?',
    'faq-a4': 'Yes. You can enroll at any time. We recommend contacting us first to find the right course together.',
    'faq-q5': 'How do online lessons work?',
    'faq-a5': 'Online classes take place via Zoom. You receive the link after registration. Both live sessions and recorded classes are available on demand.',
    'faq-q6': 'Are there performances or recitals?',
    'faq-a6': 'Yes! Every year we organise an end-of-year recital and participate in events and master classes with guest teachers. It\'s a wonderful experience even for beginners.',

    // Contact
    'contact-eyebrow': 'Contacts',
    'contact-title':   'Come visit us',
    'contact-subtitle': 'Write, call us or fill the form — we reply within 24 hours.',
    'contact-addr-label': 'Address',
    'contact-addr-val': 'Via [Street Name], [Number] · [City], Italy',
    'contact-phone-label': 'Phone / WhatsApp',
    'contact-phone-val': '+39 000 000 0000',
    'contact-email-label': 'Email',
    'contact-email-val': 'info@gabriellathrull.it',
    'contact-hours-label': 'Response hours',
    'contact-hours-val': 'Mon – Sat, 9:00 – 20:00',
    'form-name': 'Full name',
    'form-email': 'Email',
    'form-phone': 'Phone (optional)',
    'form-course': 'Course of interest',
    'form-course-opt0': 'Select a course...',
    'form-course-opt1': 'Ballet for Children',
    'form-course-opt2': 'Professional Group',
    'form-course-opt3': 'Body Ballet',
    'form-course-opt4': 'Stretching',
    'form-course-opt5': 'Online Lessons',
    'form-message': 'Message (optional)',
    'form-message-ph': 'Tell us about yourself, your experience, your questions...',
    'form-consent': 'I consent to the processing of personal data to receive information about courses.',
    'form-submit': 'Send request',
    'form-success': '✓ Thank you! We will reply within 24 hours.',
    'map-ph': 'Map · add real address for Google Maps embed',

    // Footer
    'footer-tagline': 'Where classical ballet becomes accessible to everyone, with elegance and passion.',
    'footer-links': 'Quick Links',
    'footer-courses': 'Courses',
    'footer-info': 'Information',
    'footer-copyright': '© 2025 Scuola Di Danza Gabriella Thrull. All rights reserved.',
    'footer-privacy': 'Privacy Policy',

    // Sticky CTA
    'sticky-cta': 'Book a lesson',
  }
};

let currentLang = 'it';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val = translations[lang][key];
    if (!val) return;
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  window.dispatchEvent(new Event('langchange'));

  // Update placeholder text for textarea
  const msgArea = document.querySelector('[data-i18n="form-message-ph"]');
  if (msgArea) {
    const phVal = translations[lang]['form-message-ph'];
    if (phVal) msgArea.setAttribute('placeholder', phVal);
  }
}

/* --- Navbar scroll --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* --- Mobile menu --- */
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  burger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* --- FAQ accordion --- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   РАСПИСАНИЕ — редактируй здесь
   Формат слота: { day: 'Название дня', time: 'ЧЧ:ММ – ЧЧ:ММ', note: 'доп. текст (необязательно)' }
   ============================================================ */
const SCHEDULE = {
  bambini: [
    { day: 'Lunedì / Monday',  time: '17:30 – 18:30' },
    { day: 'Venerdì / Friday', time: '17:30 – 18:30' },
  ],
  pro: [
    { day: 'Lunedì / Monday',       time: '18:30 – 19:30' },
    { day: 'Mercoledì / Wednesday', time: '18:30 – 19:30' },
    { day: 'Venerdì / Friday',      time: '18:30 – 19:30' },
  ],
  body: [
    { day: 'Lunedì / Monday',  time: '19:30 – 20:30' },
    { day: 'Venerdì / Friday', time: '19:30 – 20:30' },
  ],
  stretch: [
    { day: 'Mercoledì / Wednesday', time: '19:30 – 20:30' },
    { day: 'Sabato / Saturday',     time: '18:00 – 19:00' },
  ],
  online: [
    { day: 'Martedì / Tuesday', time: '19:00 – 20:00', note: 'Zoom live' },
    { day: 'Sabato / Saturday', time: '09:00 – 10:00', note: 'Zoom live' },
  ],
};
/* ============================================================ */

/* --- Direction modal content --- */
const directionData = {
  it: {
    bambini: {
      age: 'Da 3 anni',
      title: 'Balletto per Bambini',
      desc: 'Un percorso giocoso che introduce i più piccoli al mondo del balletto attraverso musica, movimento e immaginazione. Le lezioni combinano esercizi tecnici con giochi creativi.',
      features: ['Coordinazione e ritmo', 'Postura corretta', 'Musicalità', 'Creatività e gioco', 'Fiducia in sé stessi', 'Prima tecnica classica'],
    },
    pro: {
      age: 'Adolescenti e Adulti',
      title: 'Gruppo Professionisti',
      desc: 'Preparazione classica seria per chi vuole padroneggiare la tecnica del balletto ad alto livello. Barre completa, lavoro al centro, repertorio e preparazione a saggi e spettacoli.',
      features: ['Tecnica classica avanzata', 'Barre e centro', 'Repertorio classico', 'Lavoro sulle punte', 'Preparazione a spettacoli', 'Pas de deux (su richiesta)'],
    },
    body: {
      age: 'Adulti — Tutti i livelli',
      title: 'Body Ballet',
      desc: 'Fitness ispirato al balletto classico. Il metodo perfetto per tonificare il corpo, migliorare la postura e acquisire grazia senza alcuna esperienza precedente.',
      features: ['Tonificazione muscolare', 'Postura e portamento', 'Grazia e coordinazione', 'Nessuna esperienza richiesta', 'Adatto a tutti i livelli', 'Musica classica e contemporanea'],
    },
    stretch: {
      age: 'Tutti i livelli',
      title: 'Stretching',
      desc: 'Sviluppo della flessibilità e della mobilità articolare. Ideale come complemento a qualsiasi disciplina sportiva o come pratica autonoma.',
      features: ['Flessibilità e mobilità', 'Prevenzione degli infortuni', 'Recupero muscolare', 'Rilassamento profondo', 'Adatto a qualsiasi età', 'Ideale dopo sport o danza'],
    },
    online: {
      age: 'Online · Tutti i livelli',
      title: 'Lezioni Online',
      desc: 'Stretching e mantenimento del tono muscolare da casa tua. Lezioni via Zoom — live e registrate, disponibili on-demand quando vuoi.',
      features: ['Accesso da ovunque', 'Lezioni live e on-demand', 'Piano personalizzato', 'Chat con l\'insegnante', 'Registrazioni incluse', 'Nessuna attrezzatura necessaria'],
    },
  },
  en: {
    bambini: {
      age: 'From 3 years',
      title: 'Ballet for Children',
      desc: 'A playful journey introducing little ones to ballet through music, movement and imagination. Classes blend technical exercises with creative games.',
      features: ['Coordination and rhythm', 'Correct posture', 'Musicality', 'Creativity and play', 'Self-confidence', 'First classical technique'],
    },
    pro: {
      age: 'Teens and Adults',
      title: 'Professional Group',
      desc: 'Serious classical training for those who want to master ballet technique at a high level. Full barre, centre work, repertoire and performance preparation.',
      features: ['Advanced classical technique', 'Barre and centre', 'Classical repertoire', 'Pointe work', 'Performance preparation', 'Pas de deux (on request)'],
    },
    body: {
      age: 'Adults — All levels',
      title: 'Body Ballet',
      desc: 'Fitness inspired by classical ballet — the perfect method to tone the body, improve posture and acquire grace with no prior experience needed.',
      features: ['Muscle toning', 'Posture and carriage', 'Grace and coordination', 'No experience needed', 'All levels welcome', 'Classical and contemporary music'],
    },
    stretch: {
      age: 'All levels',
      title: 'Stretching',
      desc: 'Flexibility and joint mobility development. Ideal as a complement to any sport or as an independent practice to feel better in your body.',
      features: ['Flexibility and mobility', 'Injury prevention', 'Muscle recovery', 'Deep relaxation', 'Suitable for any age', 'Ideal after sport or dance'],
    },
    online: {
      age: 'Online · All levels',
      title: 'Online Lessons',
      desc: 'Stretching and body toning from home. Classes via Zoom — live and recorded, available on-demand whenever you want.',
      features: ['Access from anywhere', 'Live and on-demand', 'Personalised plan', 'Chat with teacher', 'Recordings included', 'No equipment needed'],
    },
  },
};

/* --- Direction modal --- */
function initDirectionModal() {
  const overlay  = document.getElementById('dir-modal-overlay');
  const closeBtn = document.getElementById('dir-modal-close');
  if (!overlay || !closeBtn) return;

  function openModal(dir) {
    const data  = directionData[currentLang]?.[dir];
    const slots = SCHEDULE[dir] || [];
    if (!data) return;

    document.getElementById('modal-age').textContent   = data.age;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').textContent  = data.desc;
    document.getElementById('modal-features').innerHTML =
      data.features.map(f => `<li>${f}</li>`).join('');

    const bookBtn = document.getElementById('modal-cta-book');
    const hint    = document.getElementById('modal-slot-hint');
    const isIt    = currentLang === 'it';

    // Reset booking state
    bookBtn.disabled = true;
    bookBtn.textContent = isIt ? 'Scegli un giorno ↑' : 'Choose a day ↑';
    hint.textContent = isIt ? 'Seleziona un giorno per prenotare' : 'Select a day to book';

    // Render slots
    const slotsEl = document.getElementById('modal-slots');
    slotsEl.innerHTML = slots.map((s, i) => `
      <div class="schedule-slot" data-index="${i}" data-day="${s.day}" data-time="${s.time}">
        <span class="slot-day">${s.day}</span>
        <span class="slot-time">${s.time}</span>
        ${s.note ? `<span class="slot-note">${s.note}</span>` : ''}
        <span class="slot-check">✓</span>
      </div>
    `).join('');

    // Slot click — event delegation on container
    slotsEl.addEventListener('click', e => {
      const slot = e.target.closest('.schedule-slot');
      if (!slot) return;

      slotsEl.querySelectorAll('.schedule-slot').forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');

      const selectedDay  = slot.dataset.day;
      const selectedTime = slot.dataset.time;
      const dayLabel     = isIt ? selectedDay.split('/')[0].trim() : (selectedDay.split('/')[1]?.trim() || selectedDay);

      bookBtn.disabled    = false;
      bookBtn.textContent = isIt
        ? `Prenota — ${dayLabel}, ${selectedTime}`
        : `Book — ${dayLabel}, ${selectedTime}`;

      bookBtn.onclick = () => {
        closeModal();

        const courseSelect = document.getElementById('course');
        if (courseSelect) {
          courseSelect.selectedIndex = { bambini:1, pro:2, body:3, stretch:4, online:5 }[dir] || 0;
        }

        const msgField = document.getElementById('message');
        if (msgField) {
          msgField.value = isIt
            ? `Vorrei prenotare una lezione di prova di ${data.title} — ${dayLabel}, ore ${selectedTime}.`
            : `I'd like to book a trial ${data.title} lesson — ${dayLabel}, ${selectedTime}.`;
        }

        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

        const form = document.getElementById('contact-form');
        if (form) {
          form.style.transition = 'box-shadow 0.4s';
          form.style.boxShadow  = '0 0 0 2px var(--gold)';
          setTimeout(() => { form.style.boxShadow = ''; }, 1800);
        }
      };
    });

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.dataset.currentDir = dir;
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Expose globally so onclick="openDirModal('...')" in HTML works
  window.openDirModal = openModal;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Re-render modal content when language changes
  window.addEventListener('langchange', () => {
    const dir = overlay.dataset.currentDir;
    if (overlay.classList.contains('open') && dir) openModal(dir);
  });
}

/* --- Schedule tabs (removed, kept for compat) --- */
function initScheduleTabs() {}

/* --- Animations: CSS-driven, no JS needed --- */
function initAnimations() { /* noop — handled by CSS @keyframes */ }

/* --- Sticky CTA --- */
function initStickyCta() {
  const cta = document.querySelector('.sticky-cta');
  if (!cta) return;
  window.addEventListener('scroll', () => {
    cta.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
}

/* --- Contact form → Supabase --- */
const SUPABASE_URL = 'https://xfvzdnkqltmjnrbltjiw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OKzIEDhjDudS15hXaqBMRw_D5HkyNRh';

function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  // Load supabase-js once
  if (!window.__sbLoaded) {
    window.__sbLoaded = true;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    document.head.appendChild(s);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = '...';

    const data = {
      name:    form.querySelector('[name="name"]')?.value?.trim()    || '',
      email:   form.querySelector('[name="email"]')?.value?.trim()   || '',
      phone:   form.querySelector('[name="phone"]')?.value?.trim()   || '',
      course:  form.querySelector('[name="course"]')?.value          || '',
      message: form.querySelector('[name="message"]')?.value?.trim() || '',
      status:  'new',
    };

    try {
      // Wait for supabase to load if needed
      let attempts = 0;
      while (!window.supabase && attempts++ < 20) {
        await new Promise(r => setTimeout(r, 150));
      }
      const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      const { error } = await db.from('applications').insert(data);

      if (!error) {
        form.style.display = 'none';
        if (success) {
          success.style.display = 'block';
          success.textContent = translations[currentLang]['form-success'];
        }
      } else {
        throw error;
      }
    } catch {
      btn.disabled = false;
      btn.textContent = translations[currentLang]['form-submit'];
      alert("Errore nell'invio. Riprova o contattaci via WhatsApp.");
    }
  });
}

/* --- Page navigation (SPA) --- */
function initPageNav() {
  const hero = document.getElementById('hero');
  const sections = document.querySelectorAll('section:not(#hero)');

  function showPage(pageId) {
    // Hide hero
    hero.classList.add('page-hidden');
    // Hide all sections
    sections.forEach(s => s.classList.remove('page-active'));

    if (!pageId || pageId === 'hero') {
      // Show home
      hero.classList.remove('page-hidden');
      document.querySelectorAll('[data-page]').forEach(a => a.classList.remove('nav-active'));
    } else {
      const target = document.getElementById(pageId);
      if (target) {
        target.classList.add('page-active');
        window.scrollTo(0, 0);
      }
      // Mark active nav link
      document.querySelectorAll('[data-page]').forEach(a => {
        a.classList.toggle('nav-active', a.dataset.page === pageId);
      });
    }
    // Store current page
    history.replaceState({ page: pageId || 'hero' }, '', pageId ? '#' + pageId : '#');
  }

  // Nav & hero button clicks
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    e.preventDefault();
    showPage(link.dataset.page);
    // Close mobile menu if open
    document.querySelector('.mobile-menu')?.classList.remove('open');
  });

  // Logo click = home
  document.querySelector('.nav-logo').addEventListener('click', e => {
    e.preventDefault();
    showPage('hero');
  });

  // Back/forward browser buttons
  window.addEventListener('popstate', e => {
    showPage(e.state?.page === 'hero' ? null : e.state?.page);
  });

  // On load: check hash
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) showPage(hash);
}

/* --- Load live settings from Supabase (contacts, prices) --- */
async function loadLiveSettings() {
  try {
    // Load supabase-js if not yet present
    if (!window.supabase) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data } = await db.from('settings').select('key,value');
    if (!data) return;

    const map = {};
    data.forEach(row => { map[row.key] = row.value; });

    // Map DB keys → translation keys (same for both languages)
    const fieldMap = {
      contact_address: 'contact-addr-val',
      contact_phone:   'contact-phone-val',
      contact_email:   'contact-email-val',
      price_trial:     'p1-amount',
      price_mini:      'p2-amount',
      price_full:      'p3-amount',
      price_private:   'p4-amount',
    };

    Object.entries(fieldMap).forEach(([dbKey, i18nKey]) => {
      if (map[dbKey] === undefined) return;
      // Update translations object for both languages
      ['it', 'en'].forEach(lang => {
        if (translations[lang]) translations[lang][i18nKey] = map[dbKey];
      });
    });

    // Re-apply current language so DOM updates
    applyLanguage(currentLang);
  } catch (e) {
    // Silently fall back to hardcoded values if offline
  }
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage('it');
  initNavbar();
  initMobileMenu();
  initPageNav();
  initDirectionModal();
  initFaq();
  initAnimations();
  initStickyCta();
  initForm();
  loadLiveSettings();
});
