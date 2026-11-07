import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, MapPin, Phone, Clock } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const WHATSAPP_URL =
  'https://wa.me/18496539421?text=Hola%2C%20vi%20el%20sitio%20web%20de%20OralMed%20y%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20diagn%C3%B3stica%20para%20mi%20sonrisa.';
const INSTAGRAM_URL = 'https://www.instagram.com/oralmedrd/';

const STATS = [
  { num: '#1', label: 'Centro de referencia Invisalign® en RD' },
  { num: '25.4K', label: 'Pacientes y seguidores en comunidad' },
  { num: '+1,800', label: 'Casos y contenido clínico documentados' }
];

const MATERIALS_SPECS = [
  { code: '01', name: 'Alineadores removibles Invisalign®' },
  { code: '02', name: 'Escáner intraoral 3D iTero 5D' },
  { code: '03', name: 'Sistema de profilaxis AquaCare' },
  { code: '04', name: 'Carillas y rehabilitación estética' }
];

const SPECIALTIES = [
  {
    number: '01',
    title: 'Ortodoncia Invisible Invisalign®',
    kicker: 'Tecnología de alineación transparente',
    description:
      'Como clínica #1 en Invisalign® en la República Dominicana, utilizamos alineadores transparentes removibles diseñados a la medida de tu boca mediante planificación virtual en 3D.',
    challenge:
      'Los brackets tradicionales pueden resultar incómodos y estéticamente restrictivos. Con Invisalign® logramos movimientos dentales graduales mediante alineadores prácticamente invisibles.',
    photo: './media/post_15.jpg',
    photoAlt: 'Doctora conversando con paciente en consultorio dental moderno de OralMed',
    features: [
      {
        title: 'Planificación 3D iTero 5D',
        desc: 'Visualiza cómo quedará tu sonrisa en 3D desde la primera consulta sin moldes de pasta incómodos.'
      },
      {
        title: 'Removibles y Transparentes',
        desc: 'Remuévelos para comer, cepillarte y en eventos especiales sin interrumpir tu rutina diaria.'
      },
      {
        title: 'Certificación Provider Diamond Elite',
        desc: 'Tratamiento guiado por especialistas de amplia trayectoria reconocidos a nivel nacional e internacional.'
      }
    ]
  },
  {
    number: '02',
    title: 'Limpieza Dental AquaCare (Sin Ansiedad)',
    kicker: 'Tecnología de aire y fluidos',
    description:
      'AquaCare revolucionó el cuidado profiláctico dental. Elimina manchas, placa y sarro mediante una fina brisa de aire y partículas sin contacto directo ni ruidos molestos.',
    challenge:
      'Muchas personas posponen su salud bucal por la incomodidad de los raspados tradicionales. AquaCare elimina las molestias físicas garantizando máxima limpieza superficial y profunda.',
    photo: './media/post_26.jpg',
    photoAlt: 'Equipo de doctoras en el área clínica de OralMed',
    features: [
      {
        title: 'Tecnología Sin Contacto Directo',
        desc: 'Limpia y pule las superficies dentales suavemente sin instrumentos punzantes.'
      },
      {
        title: 'Cero Vibraciones Incómodas',
        desc: 'Elimina el ruido y la fricción que suelen generar ansiedad clínica.'
      },
      {
        title: 'Remoción Eficaz de Manchas',
        desc: 'Ideal para restaurar el tono natural del esmalte de forma rápida y segura.'
      }
    ]
  },
  {
    number: '03',
    title: 'Estética Dental & Carillas',
    kicker: 'Diseño armónico de sonrisas',
    description:
      'Evaluamos minuciosamente cada detalle facial y dental para ofrecer soluciones personalizadas en carillas y diseño estético orientadas a realzar la confianza del paciente.',
    challenge:
      'El diseño de sonrisa en OralMed prioriza la conservación de la estructura biológica del diente y la armonía con los rasgos faciales de cada persona.',
    photo: './media/post_23.jpg',
    photoAlt: 'Especialista de OralMed mostrando modelo anatómico dental en consultorio',
    features: [
      {
        title: 'Evaluación Estética Personalizada',
        desc: 'Análisis minucioso de forma, proporciones y tono natural.'
      },
      {
        title: 'Materialización de Alta Calidad',
        desc: 'Uso de cerámicas de alta durabilidad y apariencia auténtica.'
      },
      {
        title: 'Enfoque Conservador',
        desc: 'Técnicas mínimamente invasivas enfocadas en mantener la salud dental natural.'
      }
    ]
  },
  {
    number: '04',
    title: 'Odontopediatría & Salud Infantil',
    kicker: 'Cuidado dental libre de miedos',
    description:
      'Cuidar los dientes de leche es el cimiento de la dentición definitiva. Nuestra área de odontopediatría brinda atención preventiva y cercana a los más pequeños.',
    challenge:
      'Creamos experiencias amigables y educativas que transforman la consulta dental en una visita positiva e instructiva para niños y padres.',
    photo: './media/post_16.jpg',
    photoAlt: 'Doctora y paciente sonriendo durante una consulta en OralMed',
    features: [
      {
        title: 'Espacio Adaptado y Cálido',
        desc: 'Ambiente acogedor pensado para transmitir seguridad y tranquilidad a los niños.'
      },
      {
        title: 'Odontología Preventiva Infantil',
        desc: 'Protección de piezas temporales para asegurar una alineación saludable en la etapa adulta.'
      },
      {
        title: 'Guía Directa para Padres',
        desc: 'Asesoramiento profesional sobre higiene, cepillado y nutrición para la salud oral infantil.'
      }
    ]
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico & Escaneo 3D iTero 5D',
    desc: 'Realizamos una evaluación digital precisa de tu boca en minutos sin necesidad de pastas ni moldes molestos.'
  },
  {
    step: '02',
    title: 'Planificación Digital Personalizada',
    desc: 'Visualizamos previamente el plan de tratamiento o el movimiento exacto de tus dientes paso a paso.'
  },
  {
    step: '03',
    title: 'Inicio de Tratamiento & Entrega',
    desc: 'Colocación de alineadores Invisalign®, inicio de profilaxis AquaCare o procedimiento estético bajo la guía de nuestros doctores.'
  },
  {
    step: '04',
    title: 'Seguimiento & Mantenimiento de por Vida',
    desc: 'Monitoreamos la evolución de tu dentición para asegurar la durabilidad y la estética de tu nueva sonrisa.'
  }
];

const CLINICAL_CASES = [
  {
    code: 'PROYECTO 01',
    title: 'Mi Invisalign Journey: Transformación de Sonrisa Invisible',
    category: 'Ortodoncia Invisible',
    location: 'OralMed, Santo Domingo',
    challenge:
      'Alineación de piezas dentales en un paciente adulto que buscaba comodidad, discreción estética total y cero alteración en sus presentaciones públicas.',
    solution:
      'Planificación digital completa con el escáner iTero 5D y secuencias de alineadores Invisalign®, logrando resultados evidentes y simetría en tiempo récord.',
    photo: './media/post_21.jpg',
    photoAlt: 'Especialista de OralMed sosteniendo estuche de alineadores Invisalign'
  },
  {
    code: 'PROYECTO 02',
    title: 'Diagnóstico Intraoral Digital iTero 5D & Experiencia AquaCare',
    category: 'Diagnóstico y Profilaxis',
    location: 'OralMed, Santo Domingo',
    challenge:
      'Paciente con sensibilidad dental que manifestaba alta ansiedad hacia la profilaxis ultrasónica tradicional con raspado e instrumentos ruidosos.',
    solution:
      'Implementación de profilaxis con tecnología AquaCare para remover manchas e impurezas sin contacto físico violento, combinado con escaneo digital 3D iTero 5D.',
    photo: './media/post_27.jpg',
    photoAlt: 'Espacio interior cálido con acabados de madera en OralMed'
  },
  {
    code: 'PROYECTO 03',
    title: 'Evaluación Estética y Planificación de Carillas',
    category: 'Diseño de Sonrisa',
    location: 'OralMed, Santo Domingo',
    challenge:
      'Requerimiento de corrección anatómica de bordes dentales y mejora del tono del esmalte con preservación de la estructura natural.',
    solution:
      'Estudio fotográfico y clínico liderado por el equipo médico para definir el volumen exacto y la tonalidad armónica antes de la confección de piezas estéticas.',
    photo: './media/post_1.jpg',
    photoAlt: 'Detalle de textura y armonía estética en OralMed'
  }
];

const FAQS = [
  {
    q: '¿Dónde está ubicada exactamente la clínica dental OralMed?',
    a: 'Nos encontramos ubicados en la Av. Tiradentes #29, en el sector de Naco, Santo Domingo, República Dominicana.'
  },
  {
    q: '¿Cuáles son los horarios de atención de OralMed?',
    a: 'Atendemos de Lunes a Viernes de 9:00 AM a 7:00 PM y los Sábados de 9:00 AM a 2:00 PM.'
  },
  {
    q: '¿Por qué elegir Invisalign® frente a los brackets tradicionales?',
    a: 'Invisalign® utiliza alineadores transparentes, estéticos y totalmente removibles que te permiten comer lo que desees y cepillarte sin trabas, enderezando tus dientes con máxima discreción y comodidad.'
  },
  {
    q: '¿En qué consiste el sistema de limpieza AquaCare?',
    a: 'AquaCare es una tecnología avanzada que realiza la limpieza profiláctica mediante una brisa de aire y fluidos sin necesidad de raspados metálicos ni vibraciones molestas, ideal para pacientes con sensibilidad o ansiedad al dentista.'
  },
  {
    q: '¿Cómo puedo agendar una cita o consulta en la clínica?',
    a: 'Puedes reservar tu cupo escribiéndonos a nuestro número de WhatsApp +1 (849) 653-9421 o llamando directamente al +1 (809) 475-7585.'
  }
];

export default function App() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="site-wrapper">
      {/* STICKY HEADER */}
      <header className="site-header">
        <div className="nav-inner">
          <a href="#portada" className="brand-link">
            <img
              src="./media/logo_web.png"
              alt="OralMed Logo"
              className="brand-logo-img"
            />
            <div>
              <span className="brand-name">OralMed</span>
              <span className="brand-sub">Clínica Dental · Naco, SD</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#especialidades">Especialidades</a>
            <a href="#tecnologia">Tecnología 3D</a>
            <a href="#casos">Casos Clínicos</a>
            <a href="#equipo">Dirección Clínica</a>
            <a href="#contacto">Ubicación & Citas</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Agendar Evaluación</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      <main>
        {/* SECTION 1: HERO TECHNICAL DOSSIER GRID */}
        <section id="portada" className="hero-dossier-section">
          <div className="dossier-container">
            {/* Top Technical Coordinates & Specs Bar */}
            <div className="dossier-top-bar">
              <div className="dossier-meta-cell">
                <span className="mono-label">Ubicación Verificada</span>
                <span className="mono-value">Av. Tiradentes #29, Naco · Santo Domingo</span>
              </div>
              <div className="dossier-meta-cell">
                <span className="mono-label">Disciplinas Clínicas</span>
                <span className="mono-value">Invisalign® · Escáner 3D iTero 5D · Profilaxis AquaCare · Estética</span>
              </div>
              <div className="dossier-meta-cell">
                <span className="mono-label">Dirección Médica</span>
                <span className="mono-value">Dra. Sylvia Paulino & Equipo Especializado</span>
              </div>
            </div>

            {/* Central Asymmetric Grid */}
            <div className="dossier-main-grid">
              <motion.div
                className="dossier-narrative-col"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div>
                  <h1 className="hero-headline">
                    Transformamos tu sonrisa con{' '}
                    <span className="hero-headline-accent">tecnología 3D</span> y calidez humana.
                  </h1>
                  <p className="hero-subheadline">
                    Centro odontológico #1 en Invisalign® en República Dominicana. Diagnóstico digital con escáner intraoral iTero 5D, profilaxis sin ansiedad AquaCare y estética dental conservadora en Naco, Santo Domingo.
                  </p>

                  <div className="hero-actions">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Agendar por WhatsApp</span>
                      <ArrowUpRight size={18} />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <span>@oralmedrd</span>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>

                {/* Verified Metrics Matrix */}
                <div className="dossier-stats-row">
                  {STATS.map((stat, idx) => (
                    <div key={idx}>
                      <div className="stat-item-num">{stat.num}</div>
                      <p className="stat-item-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Architectural & Clinical Frame + Materials Drawer */}
              <div className="dossier-visual-col">
                <div className="dossier-hero-figure">
                  <img
                    src="./media/post_2.jpg"
                    alt="Sede institucional de OralMed en Av. Tiradentes #29, Naco"
                  />
                  <div className="dossier-figure-caption">
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--lilac-accent)' }}>
                        SEDE PRINCIPAL · NACO
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem' }}>
                        OralMed Clínica Dental & Centro Especializado Invisalign®
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.85 }}>
                      ¡Sonríe más!
                    </span>
                  </div>
                </div>

                <div className="dossier-spec-drawer">
                  {MATERIALS_SPECS.map((item) => (
                    <div key={item.code} className="spec-line">
                      <span className="spec-index">[{item.code}]</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ESPECIALIDADES ORTODÓNTICAS & CLÍNICAS */}
        <section id="especialidades" className="specialties-section">
          <div className="section-container">
            <div className="section-header-split">
              <h2 className="section-title">
                Especialidades diseñadas para una odontología precisa y sin ansiedad.
              </h2>
              <p className="section-lead">
                Cada tratamiento en OralMed integra diagnóstico digital y protocolos mínimamente invasivos para cuidar tanto la estética como la estructura biológica de tu sonrisa.
              </p>
            </div>

            <div className="specialty-editorial-list">
              {SPECIALTIES.map((service, idx) => (
                <motion.article
                  key={service.number}
                  className="specialty-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <div className="specialty-identity">
                    <BespokeServiceIcon index={idx} size={46} />
                    <div>
                      <span className="specialty-num">{service.number}</span>
                      <h3 className="specialty-title">{service.title}</h3>
                      <p className="specialty-kicker">{service.kicker}</p>
                    </div>
                  </div>

                  <div className="specialty-body">
                    <p className="specialty-desc">{service.description}</p>
                    <p className="specialty-challenge">{service.challenge}</p>

                    <div className="specialty-features-grid">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="feature-item">
                          <h4 className="feature-item-title">{feat.title}</h4>
                          <p className="feature-item-desc">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="specialty-photo-wrap">
                    <img
                      src={service.photo}
                      alt={service.photoAlt}
                      loading="lazy"
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: VISUALIZADOR DE TECNOLOGÍA 3D & PROCESO CLÍNICO (#181127) */}
        <section id="tecnologia" className="tech-blueprint-section">
          <div className="section-container">
            <div className="section-header-split">
              <h2 className="section-title" style={{ color: 'var(--text-light)' }}>
                Ingeniería intraoral 3D: planificación milimétrica con iTero 5D.
              </h2>
              <p className="section-lead" style={{ color: 'var(--text-light-muted)' }}>
                A través del escáner intraoral 3D iTero 5D y el sistema AquaCare, proyectamos cada movimiento dental en tiempo real antes de colocar el primer alineador.
              </p>
            </div>

            <div className="tech-grid-layout">
              {/* Interactive Custom CAD / 3D Dental Anatomy Blueprint */}
              <TechnicalSchematic darkOverride={true} />

              {/* Real iTero 5D Scanner Station Photo & Direct Consultation Card */}
              <div className="tech-scanner-card">
                <div className="tech-scanner-photo">
                  <img
                    src="./media/post_11.jpg"
                    alt="Especialista de OralMed utilizando escáner dental digital iTero 5D frente a pantalla con modelos 3D"
                    loading="lazy"
                  />
                </div>
                <div className="tech-scanner-info">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--lilac-accent)' }}>
                    ESCÁNER INTRAORAL 3D ITERO 5D
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-light)' }}>
                    Simulación digital inmediata sin moldes de pasta
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.6 }}>
                    Capturamos miles de fotogramas por segundo para construir un modelo 3D de alta definición de tu dentición y simular el resultado de tu tratamiento Invisalign®.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light"
                    style={{ marginTop: '0.5rem', width: '100%' }}
                  >
                    <span>Solicitar Escaneo 3D</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* 4-Step Verified Clinical Process */}
            <div className="process-strip">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step}>
                  <div className="process-step-num">PASO {item.step}</div>
                  <h3 className="process-step-title">{item.title}</h3>
                  <p className="process-step-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CASOS CLÍNICOS DOCUMENTADOS & RESOLUCIÓN BIOMECÁNICA */}
        <section id="casos" className="cases-section">
          <div className="section-container">
            <div className="section-header-split">
              <div>
                <h2 className="section-title">
                  Casos clínicos y protocolos aplicados en Santo Domingo.
                </h2>
              </div>
              <p className="section-lead">
                Documentación real de tratamientos de ortodoncia invisible, profilaxis sin contacto AquaCare y diseño de sonrisa conservador realizados en nuestra sede de Naco.
              </p>
            </div>

            <div className="cases-interactive-bar" role="tablist" aria-label="Selección de casos clínicos">
              {CLINICAL_CASES.map((c, idx) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`case-filter-btn ${selectedCaseIndex === idx ? 'active' : ''}`}
                >
                  {c.code} · {c.category}
                </button>
              ))}
            </div>

            <div className="cases-asymmetric-grid">
              {CLINICAL_CASES.map((project, idx) => (
                <article
                  key={project.code}
                  className={`case-dossier-item ${selectedCaseIndex === idx ? 'highlighted' : ''}`}
                  onClick={() => setSelectedCaseIndex(idx)}
                >
                  <div className="case-figure">
                    <img
                      src={project.photo}
                      alt={project.photoAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="case-content">
                    <div className="case-meta-line">
                      <span>{project.code}</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="case-title">{project.title}</h3>

                    <div className="case-comparison-box">
                      <div>
                        <span className="comparison-label">Diagnóstico / Reto Clínico</span>
                        <p style={{ color: 'var(--text-muted)' }}>{project.challenge}</p>
                      </div>
                      <div>
                        <span className="comparison-label" style={{ color: 'var(--accent)' }}>
                          Solución Digital OralMed
                        </span>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{project.solution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: DIRECCIÓN CLÍNICA & EQUIPO MULTIDISCIPLINARIO */}
        <section id="equipo" className="team-philosophy-section">
          <div className="section-container">
            <div className="team-editorial-grid">
              <div>
                <div className="mono-label" style={{ color: 'var(--accent)' }}>
                  Dirección Clínica & Ortodoncia Especializada
                </div>
                <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                  Dra. Sylvia Paulino & Equipo OralMed
                </h2>

                <blockquote className="editorial-quote">
                  “Detrás de cada sonrisa hay una historia, detrás de cada tratamiento un propósito y detrás de cada resultado personas que aman lo que hacen.”
                </blockquote>

                <p className="section-lead" style={{ marginBottom: '1rem' }}>
                  OralMed es una clínica dental de vanguardia ubicada en el sector de Naco, Santo Domingo, reconocida como el centro #1 en tratamientos Invisalign® en República Dominicana. Liderada por la Dra. Sylvia Paulino y un equipo multidisciplinario de especialistas, la clínica combina la máxima precisión clínica con una filosofía profundamente humana orientada a la confianza del paciente.
                </p>

                <p className="section-lead">
                  A través de tecnología de última generación como el escáner intraoral iTero 5D y el sistema de profilaxis avanzada AquaCare, OralMed transforma la experiencia odontológica tradicional en un proceso digital, cómodo y libre de ansiedad.
                </p>

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Conversar con Recepción</span>
                    <ArrowUpRight size={17} />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <span>Ver Comunidad en Instagram</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <div className="team-dual-gallery">
                <div className="team-photo-primary">
                  <img
                    src="./media/post_24.jpg"
                    alt="Profesionales de la clínica OralMed en recepción"
                    loading="lazy"
                  />
                </div>
                <div className="team-photo-secondary">
                  <img
                    src="./media/post_18.jpg"
                    alt="Equipo médico odontológico de OralMed"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PREGUNTAS FRECUENTES & AGENDAMIENTO DIRECTO EN NACO */}
        <section id="contacto" className="contact-faq-section">
          <div className="section-container">
            <div className="contact-faq-grid">
              {/* Left: FAQ Accordion */}
              <div>
                <h2 className="section-title">
                  Información clave antes de tu visita.
                </h2>
                <p className="section-lead" style={{ marginTop: '0.75rem' }}>
                  Respuestas claras sobre nuestra ubicación en Naco, horarios de consulta y tecnologías clínicas.
                </p>

                <div className="faq-list">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="faq-item">
                        <button
                          type="button"
                          className="faq-trigger"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </button>
                        {isOpen && <p className="faq-answer">{faq.a}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: High-Contrast Direct Booking Monolith */}
              <div className="booking-monolith">
                <div className="booking-monolith-photo">
                  <img
                    src="./media/post_19.jpg"
                    alt="Integrantes del equipo dental de OralMed"
                    loading="lazy"
                  />
                </div>
                <div className="booking-monolith-body">
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 700, lineHeight: 1.15 }}>
                      Agenda tu evaluación diagnóstica en OralMed
                    </h3>
                    <p style={{ color: 'var(--text-light-muted)', marginTop: '0.65rem', fontSize: '0.96rem' }}>
                      Escríbenos directamente por WhatsApp o llámanos para coordinar tu cita de Invisalign®, profilaxis AquaCare, estética dental u odontopediatría.
                    </p>
                  </div>

                  <div className="booking-detail-grid">
                    <div>
                      <div className="booking-detail-label">Dirección Clínica</div>
                      <div className="booking-detail-val" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <MapPin size={16} color="#C084FC" />
                        <span>Av. Tiradentes #29, Naco, Santo Domingo</span>
                      </div>
                    </div>

                    <div>
                      <div className="booking-detail-label">Teléfono Directo</div>
                      <a
                        href="tel:+18094757585"
                        className="booking-detail-val"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                      >
                        <Phone size={16} color="#C084FC" />
                        <span>+1 (809) 475-7585</span>
                      </a>
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                      <div className="booking-detail-label">Horario de Atención</div>
                      <div className="booking-detail-val" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <Clock size={16} color="#C084FC" />
                        <span>Lunes a Viernes 9:00 AM – 7:00 PM · Sábados 9:00 AM – 2:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ flex: 1, minWidth: '220px' }}
                    >
                      <span>Agendar Cita por WhatsApp</span>
                      <ArrowUpRight size={18} />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-light"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <img
              src="./media/logo_web.png"
              alt="OralMed"
              className="brand-logo-img"
            />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                OralMed · Clínica Dental & Centro Especializado Invisalign®
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light-muted)' }}>
                Av. Tiradentes #29, Naco · Santo Domingo, República Dominicana
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.88rem' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp Directo
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              @oralmedrd
            </a>
            <a href="tel:+18094757585">+1 (809) 475-7585</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
